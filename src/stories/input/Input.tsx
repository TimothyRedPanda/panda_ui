'use client'
import React from 'react';
import './input.css';
import {motion} from 'framer-motion';

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
    /**
     * animate on Hover
     */
    hover?: boolean,
    /**
     * Color on hover
     */
    hoverColor?: string
}

/**
 * A simple box to take user input.
 *
 * npm i panda_red_ui framer-motion
 *
 * import {Input} from 'panda_red_ui/src'
 *
 */
export const Input = ({
                          size = 'medium',
                          color,
                          borderColor,
                          type,
                          hover = true,
                          hoverColor = '#31A3D4',
                          ...props
                      }: InputProps) => {
    return (
        <>
        <motion.input
            whileHover = {hover ? {color: hoverColor} : {color: color}}
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
