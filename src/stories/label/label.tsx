'use client'
import React from 'react';
import './label.css'
import {motion} from 'framer-motion';

interface LabelProps {
    /**
     * Label Font Size
     */
    size?: 'small' | 'medium' | 'large' | 'extraLarge'
    /**
     * Font Color
     */
    color?: string,
    /**
     * Which HTML element is the label for?
     */
    htmlLabel?: string,
    /**
     * Label text
     */
    labelText: string,
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
 * A label to use with your HTML elements.
 *
 * npm i panda_red_ui framer-motion
 *
 * import {Label} from 'panda_red_ui/src'
 *
 */

export const Label = ({
                          size = 'medium',
                          color,
                          htmlLabel,
                          labelText = 'Default Label',
                          hover = true,
                          hoverColor = '#31A3D4',
                          ...props
                      }: LabelProps) => {
    return (
        <>
        <motion.label
            whileHover = {hover ? {color: hoverColor} : {color: color}}
            htmlFor = {htmlLabel}
            className = {['panda-label', `panda-label--${size}`].join(' ')}
            {...props}
        >{labelText}</motion.label >
            <style jsx>{
                `
                    label {
                        color     : ${color};
                        font-size : ${size};
                    }
                `
            }</style >
        </>
    )
}

