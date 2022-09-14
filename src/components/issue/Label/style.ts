import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.span<{ color: string }>`
  height: 20px;

  padding: 2px 10px;

  background-color: ${({ color }) => color};
  border-radius: 12px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  font-size: 12px;
  color: ${({ color }) => (color === '#ffffff' ? Theme.F_1 : Theme.M_1)};
`;
