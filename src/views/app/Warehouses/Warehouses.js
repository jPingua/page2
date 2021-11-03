import React from "react";
import {makeStyles} from "@mui/styles";
import {Page} from "../../../components/Page/Page";

const styles = makeStyles({
    demo: {}
});
export const Warehouses = (props) => {
    const classes = styles();
    return (
        <Page title={'Warehouses'}>
            <div className={classes.demo}>Warehouses UI Goes here</div>
        </Page>
    );
}