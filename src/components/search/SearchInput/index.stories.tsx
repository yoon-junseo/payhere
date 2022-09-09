import React from 'react';
import { Story } from '@storybook/react';

import SearchInput from '@/components/search/SearchInput';

export default {
  component: SearchInput,
  title: 'search/SearchInput',
};

const Template: Story = () => <SearchInput />;

export const Default = Template.bind({});
