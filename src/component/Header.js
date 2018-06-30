/**
 * Created by rozer on 6/29/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1
    },
    header:{
        backgroundColor:'#2196F3',
        position: "fixed",
        top: 0,
    },
    titleColor:{
        color:'#fff'
    }
};

function Header(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary" className={classes.header}>
                <Toolbar>
                    <Typography variant="title" className={classes.titleColor}>
                        eatenTree
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
