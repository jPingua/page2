import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@mui/styles';
import clsx from 'clsx';
import {Checkbox as MaterialCheckBox} from "@mui/material";

const useStyles = makeStyles(theme => ({
    checkbox: {},
}));
const CheckBox = ({color, className, children, ...rest}) => {
    const classes = useStyles();
    return (
        <MaterialCheckBox
            className={clsx(classes.checkbox, className)}
            style={{color: color}}
            {...rest}
        >
            {children}
        </MaterialCheckBox>
    );
};
CheckBox.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
};
CheckBox.defaultProps = {
    color: '#366EF1',
};
export default CheckBox;