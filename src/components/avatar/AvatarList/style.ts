import styled from 'styled-components';

export const Container = styled.div`
  & > img:not(:first-child) {
    margin-left: -10px;
  }
`;
