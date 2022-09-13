import styled from 'styled-components';

import { boxDesign } from '@/styles/common';
import Theme from '@/styles/Theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  width: inherit;
  height: 90vh;

  & > :first-child {
    margin: 0 auto;
  }

  ${Theme.desktop} {
    & > :nth-child(2) {
      margin-top: 30px;
    }
  }
`;

export const SearchContainer = styled.section`
  position: relative;

  max-width: 640px;

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

export const InfiniteScrollChecker = styled.div``;

export const SpinnerWrapper = styled.div<{ top: string }>`
  position: absolute;
  top: ${({ top }) => top};
  z-index: 9999;

  width: 100%;
`;
