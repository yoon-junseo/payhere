import styled from 'styled-components';

import Theme from '@/styles/Theme';

const Anchor = styled.a`
  color: ${Theme.F_1};

  &:hover {
    color: blue;
    & > span {
      color: blue;
    }
  }
`;

export default Anchor;
