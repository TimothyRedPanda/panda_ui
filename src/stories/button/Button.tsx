'use client'
import React from 'react';
import './button.scss';

interface ButtonProps {
  /**
   * Whether the button is primary or not.
   */
  primary?: boolean;
  /**
   * Button background color.
   */
  backgroundColor?: string;
  /**
   * The button size.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Your choice of button text content.
   */
  label: string;
  /**
   * optional on click - allows you to add your own onClick handler.
   */
  onClick?: () => void;
}

/**
 * A simple button for user interaction - with a variety of customizable options.
 *
 * npm i panda_red_ui
 *
 * import {Button} from 'panda_red_ui/src'
 *
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'panda-button--primary' : 'panda-button--secondary';
  return (
    <button
      type="button"
      className={['panda-button', `panda-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
