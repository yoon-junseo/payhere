import React from 'react';
import { Story } from '@storybook/react';

import Text, { TextProps } from '.';

export default {
  component: Text,
  title: 'common/Text',
};

const Template: Story<TextProps> = (args: TextProps) => <Text {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  children: 'Sample Text',
};
