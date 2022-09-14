import styled from 'styled-components';

import { boxDesign } from '@/styles/common';
import Theme from '@/styles/Theme';

export const Container = styled.div`
  position: relative;

  max-width: 450px;

  width: 100%;
  padding: 10px 10px;

  ${boxDesign(6)};

  & > :last-child {
  }
`;

export const DescriptionWrapper = styled.p`
  font-size: 12px;
  color: ${Theme.F_3};

  word-break: break-all;
`;

export const IconWrapper = styled.div`
  position: absolute;

  top: 5px;
  right: 5px;
`;
