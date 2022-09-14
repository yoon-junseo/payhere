import CryptoJS from 'crypto-js';

import { env } from '@/lib/constants';

export const constants = {
  REPOSITORY: 'repository',
};

export const getItem = (key: string, defaultValue: any) => {
  if (!env.CRYPTO_SECRET_KEY) {
    alert('key 값을 설정해주세요!');
    return;
  }

  const encryptKey = String(CryptoJS.MD5(key));
  const cipherText = window.localStorage.getItem(encryptKey);

  let decryptedData = defaultValue;

  if (cipherText !== null) {
    try {
      const bytesValue = CryptoJS.AES.decrypt(cipherText, env.CRYPTO_SECRET_KEY);

      decryptedData = JSON.parse(bytesValue.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      window.localStorage.setItem(encryptKey, defaultValue);
    }
  }

  return decryptedData;
};

export const setItem = (key: string, value: any) => {
  if (!env.CRYPTO_SECRET_KEY) {
    alert('key 값을 설정해주세요!');
    return;
  }

  const encryptKey = String(CryptoJS.MD5(key));
  const encryptedValue = String(CryptoJS.AES.encrypt(JSON.stringify(value), env.CRYPTO_SECRET_KEY));

  window.localStorage.setItem(encryptKey, encryptedValue);
};
