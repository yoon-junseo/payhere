import { useState, useEffect } from 'react';

import { RepositoryState } from '@/lib/api/types';
import { constants, getItem, setItem } from '@/lib/utils/localStorage';

const useStoreRepository = () => {
  const [repositoryList, setRepositoryList] = useState<RepositoryState[]>([]);

  const onClickStore = (key: string, value: RepositoryState) => {
    const storedRepositoryList: RepositoryState[] = getItem(constants.REPOSITORY, []);

    let isAlreadyStored = storedRepositoryList.some((storedRepository) => storedRepository.id === value.id);

    if (isAlreadyStored) {
      alert('이미 저장한 repository입니다!');
      return;
    }

    if (storedRepositoryList.length >= 4) {
      alert('등록 가능한 Repository는 최대 4개입니다!');
      return;
    }

    const tempRepositoryList = [...storedRepositoryList, value];

    setItem(key, tempRepositoryList);
    setRepositoryList(tempRepositoryList);
  };

  const onClickDelete = (repo: RepositoryState) => {
    const tempRepositoryList = [...repositoryList];

    const filteredRepositoryList = tempRepositoryList.filter((storedRepository) => storedRepository.id !== repo.id);

    setRepositoryList(filteredRepositoryList);
    setItem(constants.REPOSITORY, filteredRepositoryList);
  };

  useEffect(() => {
    const storedRepositoryList: RepositoryState[] = getItem('repository', []);
    setRepositoryList(storedRepositoryList);
  }, []);

  return {
    repositoryList,
    onClickStore,
    onClickDelete,
  };
};

export default useStoreRepository;
