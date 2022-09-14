import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

export const Container = styled.div`
  position: relative;

  max-width: 450px;

  width: 100%;
  padding: 10px 10px;

  ${boxDesign(6)};
`;

export const IconWrapper = styled.div`
  position: absolute;

  top: 5px;
  right: 5px;
`;
