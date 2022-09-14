import React from 'react';
import { Story } from '@storybook/react';

import SearchInput, { SearchInputProps } from '@/components/search/SearchInput';

export default {
  component: SearchInput,
  title: 'search/SearchInput',
};

const Template: Story<SearchInputProps> = (args: SearchInputProps) => <SearchInput {...args} />;

export const Default = Template.bind({});
