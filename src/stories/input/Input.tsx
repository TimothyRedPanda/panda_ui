'use client'
import React from 'react';
import './input.scss';

interface InputProps {
    /**
     * Input box size.
     */
    size?: 'small' | 'medium' | 'large' | 'extraLarge';
    /**
     * Optional on change handler.
     */
    onChange?: () => void;

    /**
     * Font Color
     */
    color?: string;

    /**
     * Border color
     */
    borderColor?: string;

    /**
     * Input Type
     */
    type?: 'text' | 'number' | 'date';
}

/**
 * A simple box to take user input.
 *
 * npm i panda_red_ui
 *
 * import {Input} from 'panda_red_ui/src'
 *
 */
export const Input = ({
                          size = 'medium',
                          color,
                          borderColor,
                          type,
                          ...props
                      }: InputProps) => {
    return (
        <>
        <input
            type = {type || 'text'}
            className = {['panda-input', `panda-input--${size}`].join(' ')}
            {...props}
        />
            <style jsx>{`
                input {
                    color  : ${color};
                    border : ${borderColor} 2px solid;
                }
            `}</style >
            </>
    );
};
