import React from 'react';
import { Story } from '@storybook/react';

import Avatar, { AvatarProps } from '@/components/avatar/Avatar';

export default {
  component: Avatar,
  title: 'avatar/Avatar',
};

const Template: Story<AvatarProps> = (args: AvatarProps) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://avatars.githubusercontent.com/u/28842641?v=4',
};

export const Size40 = Template.bind({});
Size40.args = {
  width: 40,
  height: 40,
  src: 'https://avatars.githubusercontent.com/u/28842641?v=4',
};
