import styled from 'styled-components';

import { boxDesign, textEllipsis } from '@/styles/common';
import Theme from '@/styles/Theme';

export const Container = styled.div`
  position: relative;

  max-width: 450px;

  width: 100%;
  padding: 10px 10px;

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

  span {
    ${textEllipsis};
  }

  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;

  top: 5px;
  right: 5px;
`;
