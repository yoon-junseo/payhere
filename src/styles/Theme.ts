const size = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export default {
  M_1: '#FFFFFF',

  F_1: '#000000',
  F_2: '#A5A5A5',
  F_3: '#ADADAD',

  mobile: `@media (max-width: ${size.mobile})`,
  tablet: `@media (max-width: ${size.tablet})`,
  desktop: `@media (max-width: ${size.desktop})`,
};
