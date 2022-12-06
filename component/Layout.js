import React from 'react';
import Head from 'next/head';
import { Container } from '@mui/system';
import { AppBar, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles';

export default function Layout({Children}) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>Loge Achi</title>
            </Head>
            <AppBar position='static' className={classes.navbar}>
                <Toolbar>
                    <Typography>Loge Achi</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>{Children}</Container>
            <footer className={classes.footer}>
                <Typography>All rights reserved. Loge Achi</Typography>
            </footer>
        </div>
    );
};