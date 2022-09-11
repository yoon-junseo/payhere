import React from 'react';

import Icon from '@/components/common/Icon';
import { IconOption } from '@/components/common/Icon/type';
import Text from '@/components/common/Text';
import Spacer from '@/components/common/Spacer';

import * as S from './style';

export interface IconWithCountProps {
  icon: IconOption;
  count: number;
}

const IconWithCount = ({ icon, count }: IconWithCountProps) => {
  return (
    <S.Container>
      <Icon icon={icon} width={24} height={24} />
      <Spacer x={5} />
      <Text fontSize={12}>{count >= 1000 ? `${Math.floor(count / 1000)}k` : count}</Text>
    </S.Container>
  );
};

export default IconWithCount;
