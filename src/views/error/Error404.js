import Typography from "@mui/material/Typography";
import React from "react";
import {makeStyles} from "@mui/styles";
import {Page} from "../../components/Page/Page";

const styles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        color: '#ea4b4b'
    },
    message: {
        color: '#bdbdbd'
    }
});
export const Error404 = () => {
    const classes = styles();
    return (
        <Page>
            <div className={classes.root}>
                <Typography className={classes.heading} variant={'h4'}>Error : 404</Typography>
                <Typography className={classes.message}>Resource Not Found</Typography>
            </div>
        </Page>
    );
}