import React from "react";
import {makeStyles} from "@mui/styles";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Typography from "@mui/material/Typography";
import {Navbar} from "../Navbar/Navbar";
import clsx from "clsx";

const styles = makeStyles({
    container: {
        // border: '1px solid grey',
        width: '100vw',
    },
    copyRights: {
        position: "absolute",
        bottom: 5,
        width: '100vw',
        // border: '1px solid ' + '#05f8a6',
    },
    copyRightText: {
        fontSize: 10,
        color: '#a5a5a5',
    }
});
export const Page = (props) => {
    const classes = styles();
    const {title, children, withCopyRight, className, ...rest} = props;
    return (
        <div className={clsx(classes.container, className)}>
            <Helmet>{title}</Helmet>
            <Navbar/>
            {children}
            {
                withCopyRight &&
                <div className={classes.copyRights}>
                    <Typography className={classes.copyRightText}>
                        Copy rights
                    </Typography>
                </div>
            }
        </div>
    )
}
Page.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    withCopyRight: PropTypes.bool,
    className: PropTypes.object,
};
Page.defaultProps = {
    title: '',
    withCopyRight: false,
    className: {}
};