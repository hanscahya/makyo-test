import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from '@/components/Dropdown';

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {},
  args: {
    label: 'Select One',
    type: 'primary',
    size: 'md',
    value: 'asd',
    options: [
      {
        id: 1,
        postId: 1,
        name: 'asd',
        body: 'asd',
        email: 'asd',
      },
      {
        id: 2,
        postId: 2,
        name: 'qwe',
        body: 'qwe',
        email: 'qwe',
      },
    ],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
``;
type Story = StoryObj<typeof meta>;

export const SingleSelection: Story = {
  args: {
    label: 'Select One',
    type: 'primary',
    size: 'md',
  },
};

export const LargeSingleSelection: Story = {
  args: {
    label: 'Select One',
    type: 'primary',
    size: 'lg',
  },
};
