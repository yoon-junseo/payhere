import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 60px;

  background-color: ${Theme.M_1};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
`;

export const InnerContainer = styled.ul`
  display: grid;
  align-items: center;
  grid-template-rows: 60px;
  grid-template-columns: 55px 30px 1fr 50px;

  margin: 0 auto;

  max-width: 1200px;

  height: inherit;

  list-style-type: none;

  padding: 0px;
`;

export const List = styled.li``;
