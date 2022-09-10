import React from 'react';
import { Story } from '@storybook/react';

import IconWithCount, { IconWithCountProps } from '@/components/repository/IconWithCount';

export default {
  component: IconWithCount,
  title: 'repository/IconWithCount',
};

const Template: Story<IconWithCountProps> = (args: IconWithCountProps) => <IconWithCount {...args} />;

export const Bookmark = Template.bind({});
Bookmark.args = {
  icon: 'Bookmark',
  count: 7,
};
