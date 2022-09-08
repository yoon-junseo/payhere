import React from 'react';
import { Story } from '@storybook/react';

import Input, { InputProps } from '.';

export default {
  component: Input,
  title: 'common/Input',
};

const Template: Story<InputProps> = (args: InputProps) => <Input {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  width: 300,
  height: 40,
  borderRadius: 8,
  backgroundColor: 'white',
};
