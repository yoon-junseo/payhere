import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Theme from '@/styles/Theme';

export const Wrapper = styled(Link)`
  text-decoration: none;
  color: ${Theme.F_1};
`;
