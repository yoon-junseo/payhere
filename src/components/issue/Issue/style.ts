import styled from 'styled-components';

import { boxDesign } from '@/styles/common';
import Theme from '@/styles/Theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  max-width: 600px;

  padding: 5px 0 5px 10px;

  ${boxDesign(6)};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
`;

export const MainInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const SubInfo = styled.p`
  font-size: 12px;
  color: ${Theme.F_2};

  word-break: break-all;
`;

export const LabelContainer = styled.div`
  & > span {
    display: inline-block;
  }

  & > :not(:last-child) {
    margin-right: 5px;
  }
`;

export const AvatarContainer = styled.div`
  min-width: 80px;
`;
