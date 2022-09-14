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

  & > :nth-child(2) {
    margin: 0 auto;
  }

  ${Theme.desktop} {
    & > :nth-child(2) {
      margin-top: 30px;
    }
  }
`;

export const Section = styled.section`
  max-width: 630px;

  padding: 10px;

  width: 100%;

  ${boxDesign(15)}

  & > :first-child {
    display: flex;
    justify-content: center;
  }

  & > :nth-child(2) {
    float: right;
  }
`;

export const IssueListContainer = styled.ol<{ height: number }>`
  list-style: none;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: ${({ height }) => height}px;

  padding: 10px 0;

  margin: 0;

  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const InfiniteScrollChecker = styled.div``;
