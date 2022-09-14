const size = {
  mobile: '480px',
  tabletM: '600px',
  tablet: '768px',
  desktop: '1024px',
};

export default {
  M_1: '#FFFFFF',
  M_2: '#388E3C',

  F_1: '#000000',
  F_2: '#57606a',
  F_3: '#62727b',

  mobile: `@media (max-width: ${size.mobile})`,
  tabletM: `@media (max-width: ${size.tabletM})`,
  tablet: `@media (max-width: ${size.tablet})`,
  desktop: `@media (max-width: ${size.desktop})`,
};
