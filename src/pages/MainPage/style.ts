import styled from 'styled-components';

import { boxDesign } from '@/styles/common';

export const Container = styled.div`
  display: flex;

  background-color: green;
`;

export const StoredRepositoryListContainer = styled.aside`
  width: 500px;
  height: 700px;

  ${boxDesign(15)};
`;

export const SearchContainer = styled.section`
  width: 700px;
  height: 1000px;

  background-color: blue;
`;
