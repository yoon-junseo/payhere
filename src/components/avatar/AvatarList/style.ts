import styled from 'styled-components';

export const Container = styled.div`
  & > :not(:first-child) {
    margin-left: -10px;
  }
`;
