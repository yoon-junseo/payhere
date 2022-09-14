import styled from 'styled-components';

import { textEllipsis } from '@/styles/common';

export const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    ${textEllipsis};
  }

  & > :not(:last-child) {
    margin-right: 10px;
  }
`;
