'use client'
import React from 'react';
import './button.css';

interface ButtonProps {
    /**
     * Primary design or secondary design.
     */
    primary?: boolean;
    /**
     * primary - background color, secondary - font color.
     */
    backgroundColor?: string;
    /**
     * The button size.
     */
    size?: 'small' | 'medium' | 'large' | 'extraLarge';
    /**
     * Your choice of button text content.
     */
    label: string;
    /**
     * optional on click - allows you to add your own onClick handler.
     */
    onClick?: () => void;

    /**
     * Primary - font color, secondary - background-color.
     */
    color?: string;
}

/**
 * A simple button for user interaction - with a variety of customizable options.
 *
 * npm i panda_red_ui framer-motion
 *
 * import {Input} from 'panda_red_ui/src'
 *
 */
export const Button = ({
                           primary = false,
                           size = 'medium',
                           backgroundColor = '#D46231',
                           label,
                           color = '#FFF',
                           ...props
                       }: ButtonProps) => {
    const BGColor = primary ? backgroundColor : color;
    const TextColor = primary ? color : backgroundColor;
    return (
        <button
            type = 'button'
            className = {['panda-button', `panda-button--${size}`].join(' ')}
            {...props}
        >
      {label}
            <style jsx>{`
                button {
                    background : ${BGColor};
                    color      : ${TextColor};
                    border     : ${backgroundColor} 2px solid;
                }
            `}</style >
    </button >
    );
};
