import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    className: { control: 'text', description: 'Additional CSS classes' },
  },
};

const Template = (args) => (
  <Card {...args}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card description goes here.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>
        This is the content of the card. You can add anything you like here.
      </p>
    </CardContent>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  className: 'w-full max-w-md bg-white text-black shadow-md rounded-lg',
};

export const CustomCard = Template.bind({});
CustomCard.args = {
  className:
    'w-full max-w-sm bg-gray-200 text-gray-800 border border-gray-400 rounded-lg',
};
