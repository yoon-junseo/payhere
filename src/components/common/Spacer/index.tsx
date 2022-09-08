import React, { VFC } from 'react';

import * as S from './style';

export interface SpacerProps {
  x: number;
  y: number;
}

const Spacer: VFC<Partial<SpacerProps>> = ({ x = 1, y = 1 }: Partial<SpacerProps>) => {
  return <S.Wrapper x={x} y={y} aria-hidden />;
};

export default Spacer;
