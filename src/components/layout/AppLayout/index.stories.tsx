import React from 'react';
import { Story } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import AppLayout, { AppLayoutProps } from '@/components/layout/AppLayout';

export default {
  component: AppLayout,
  title: 'layout/AppLayout',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/repository',
    },
  },
};

const Template: Story<AppLayoutProps> = (args: AppLayoutProps) => <AppLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div>children</div>,
};
