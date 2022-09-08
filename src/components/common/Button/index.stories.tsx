import React from 'react';
import { Story } from '@storybook/react';

import Button, { ButtonProps } from '.';

export default {
  component: Button,
  title: 'common/Button',
};

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  width: 200,
  height: 50,
  borderRadius: 8,
  backgroundColor: 'black',
  fontColor: 'white',
  children: 'Sample Button',
};
