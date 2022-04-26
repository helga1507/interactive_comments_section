import React from 'react';
import { ButtonPrimary, ButtonSecondary } from './styled';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    children: any;
    iconAlt?: string;
    iconSrc?: string;
    variant?: 'primary' | 'secondary';
    actionType?: 'normal' | 'destructive';
}

export const Button = ({ children, iconSrc, variant, actionType = 'normal', iconAlt = '', ...props }: ButtonProps) => {
    const ButtonTag = variant === 'primary' ? ButtonPrimary : ButtonSecondary;

    return (
        <ButtonTag color={actionType === 'destructive' ? 'softRed' : 'moderateBlue'} {...props}>
            {iconSrc && <img src={iconSrc} alt={iconAlt} />}
            <span> {children} </span>
        </ButtonTag>
    );
};
