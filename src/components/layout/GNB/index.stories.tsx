import React from 'react';
import { Story } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import GNB from '@/components/layout/GNB';

export default {
  component: GNB,
  title: 'layout/GNB',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/repository',
    },
  },
};

const Template: Story = () => <GNB />;

export const Default = Template.bind({});
