import styled from 'styled-components';

import { boxDesign } from '@/styles/common';
import Theme from '@/styles/Theme';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;

  max-width: 350px;
  width: 100%;

  ${boxDesign(15)}

  ${Theme.desktop} {
    height: 500px;

    overflow-y: auto;

    margin-bottom: 30px;
  }

  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;
