import React from "react";
import {makeStyles} from "@mui/styles";
import {routes} from "../../routes";
import {Link} from "react-router-dom";

const styles = makeStyles({
    navbar: {
        flexGrow: 1,
        height: 50,
        // border: '1px solid blue',
        backgroundColor: '#e8e8e8',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: '5px 15px'
    },
    link: {
        paddingRight: 15,
        color: '#585858',
        cursor: 'pointer',
        textTransform: 'uppercase'
    }
});
export const Navbar = () => {
    const classes = styles();
    let links = routes.map((route) => ({
        name: route.name,
        to: route.path,
    }));
    const demoLinks = [
        'demo-1',
        'demo-2',
        'demo-3',
        'demo-4',
        'demo-5',
        'demo-6',
        'demo-7',
        'demo-8',
    ];
    demoLinks.map((label) => {
        links.push({
            name: label,
            to: '/error-404',
        });
    });
    return (
        <div className={classes.navbar}>
            {links.map((link, index) => (
                <Link to={link.to} className={classes.link} key={index}>
                    {link.name}
                </Link>
            ))}
        </div>
    );
}