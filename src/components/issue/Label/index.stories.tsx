import React from 'react';
import { Story } from '@storybook/react';

import Label, { LabelProps } from '@/components/issue/Label';

export default {
  component: Label,
  title: 'issue/Label',
};

const Template: Story<LabelProps> = (args: LabelProps) => <Label {...args} />;

export const Feat = Template.bind({});
Feat.args = {
  name: 'feat',
  color: 'ffffff',
};

export const Documentation = Template.bind({});
Documentation.args = {
  name: 'documentation',
  color: '52D8F0',
};
