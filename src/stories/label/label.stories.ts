import type {Meta, StoryObj} from '@storybook/react';
import {Label} from './label';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Design System/PandaUI/Label',
    component: Label,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallLabel: Story = {
    args: {
        size: 'small',
        labelText: 'Default Label',
        hover: true,
    },
};

export const MediumLabel: Story = {
    args: {
        size: 'medium',
        labelText: 'Default Label',
        hover: true,
    }
}

export const LargeLabel: Story = {
    args: {
        size: 'large',
        labelText: 'Default Label',
        hover: true,
    },
};

export const ExtraLargeLabel: Story = {
    args: {
        size: 'extraLarge',
        labelText: 'Default Label',
        hover: true,
    },
}