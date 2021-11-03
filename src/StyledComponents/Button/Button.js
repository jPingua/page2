import React from "react";
import PropTypes from 'prop-types';
import {makeStyles} from '@mui/styles';
import clsx from "clsx";
import {Button as MaterialButton} from '@mui/material';

const btnColor = '#366EF1';
const styles = makeStyles({
    core: {
        whiteSpace: 'nowrap',
        fontFamily: 'DM Sans',
    },
    contained: {
        backgroundColor: btnColor,
        color: "#FFFFFF",
        '&:hover': {
            backgroundColor: '#FFFFFF',
            color: btnColor,
        }
    },
    outlined: {
        color: btnColor,
        borderColor: btnColor,
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: btnColor,
            color: "white",
        }
    },
});
const Button = ({
                    size,
                    backgroundColor,
                    boxShadow,
                    borderRadius,
                    textColor,
                    borderColor,
                    withShadow,
                    fullwidth,
                    className,
                    variant,
                    fontSize,
                    children,
                    width,
                    height,
                    ...rest
                }) => {
    const classes = styles();
    const getFontSize = (size) => {
        switch (size) {
            case 'small':
                return 10;
            case 'medium':
                return 12;
            case 'large':
                return 14;
            default:
                return 10
        }
    }
    const variantClass = variant === 'outlined' ? classes.outlined : classes.contained;
    return (
        <MaterialButton
            style={{
                backgroundColor: (variant === 'contained') ? backgroundColor : 'inherit',
                borderRadius: borderRadius,
                borderColor: (variant === 'contained') ? 'none' : borderColor,
                color: (variant === 'contained') ? textColor : borderColor,
                boxShadow: withShadow ? '0px 0px 16px ' + '#c2c2c2' : 'none',
                fontSize: getFontSize(size),
                width: fullwidth ? '100%' : width,
                height: height
            }}
            size={size}
            className={clsx(variantClass, classes.core, className)}
            variant={variant}
            fullWidth={fullwidth}
            {...rest}
        >
            {children}
        </MaterialButton>
    );
};
Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
    textColor: PropTypes.string,
    borderColor: PropTypes.string,
    variant: PropTypes.oneOf(['contained', 'outlined']),
    fullwidth: PropTypes.bool,
    withShadow: PropTypes.bool,
    borderRadius: PropTypes.number,
    fontSize: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};
Button.defaultProps = {
    textColor: '#FFFFFF',
    borderColor: btnColor,
    backgroundColor: btnColor,
    variant: 'contained',
    fullwidth: false,
    withShadow: false,
    borderRadius: 0,
    size: 'medium',
    fontSize: 12,
    width: 'auto',
    height: 'auto'
};
export default Button;