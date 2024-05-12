import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Input} from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Design System/PandaUI/Input',
    component: Input,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {onChange: fn()},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const SmallInput: Story = {
    args: {
        size: 'small',
    },
};

export const LargeInput: Story = {
    args: {
        size: 'large',
    },
};

export const ExtraLargeInput: Story = {
    args: {
        size: 'extraLarge',
    },
}
