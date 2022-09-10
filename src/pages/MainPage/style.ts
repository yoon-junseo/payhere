import styled from 'styled-components';

import { boxDesign } from '@/styles/common';
import Theme from '@/styles/Theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  width: inherit;
  height: 90vh;
`;

export const StoredRepositoryListContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

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

export const SearchContainer = styled.section`
  max-width: 630px;

  width: 100%;
  height: 90vh;

  margin: 0 auto;

  padding: 10px 0;

  ${boxDesign(15)}

  & > :first-child {
    margin: 0 auto;
  }
`;

export const GridContainer = styled.ol<{ height: number }>`
  list-style: none;

  overflow-y: auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 123px;

  gap: 15px;

  padding: 10px;

  height: ${({ height }) => (height ? `${height}px` : 'auto')};

  ${Theme.tabletM} {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > :not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const List = styled.li``;
