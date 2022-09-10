import styled from 'styled-components';

import { boxDesign } from '@/styles/common';
import Theme from '@/styles/Theme';

export const Container = styled.div`
  max-width: 450px;
  min-height: 107px;

  width: 100%;

  padding: 10px 15px;

  ${boxDesign(6)};
`;

export const DescriptionWrapper = styled.p`
  font-size: 12px;
  color: ${Theme.F_3};

  word-break: break-all;
`;

export const OtherInfoContainer = styled.div`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 10px;
  }
`;
