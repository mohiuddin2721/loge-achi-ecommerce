import React, { useContext } from 'react';
import Head from 'next/head';
import { Container } from '@mui/system';
import { AppBar, Avatar, Badge, Box, Button, createTheme, CssBaseline, IconButton, Menu, MenuItem, ThemeProvider, Toolbar, Tooltip, Typography } from '@mui/material';
import useStyles from '../utils/styles';
import Link from 'next/link';
import { Store } from '../utils/Store';

const pages = [
    { name: "Pricing", href: "/pricing", id: 1 },
    { name: "Blog", href: "/blog", id: 2 },
];
const settings = [
    { name: "Profile", href: "/profile", id: 1 },
    { name: "Account", href: "/account", id: 2 },
    { name: "Dashboard", href: "/dashboard", id: 3 }
];

export default function Layout({ title, children, description }) {
    const { state, dispatch } = useContext(Store);
    const { darkMode, cart } = state;

    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
        },
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                main: '#203040',
                //   main: '#f0c000',
            },
            secondary: {
                main: '#208080',
            },
        }
    })
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const classes = useStyles();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div>
            <Head>
                <title>{title ? `${title} - Loge Achi` : 'Loge Achi'}</title>
                {description && <meta name='description' content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position='static' className={classes.navbar}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Loge Achi
                            </Typography>


                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    {/* <MenuIcon /> */}
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages?.map(page => {
                                        (<MenuItem key={page?.id} onClick={handleCloseNavMenu}>
                                            <Typography
                                                textAlign="center"
                                                href={page?.href}
                                            >
                                                {page?.name}
                                            </Typography>
                                        </MenuItem>)
                                    })}
                                </Menu>
                            </Box>
                            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Loge Achi
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages?.map((page) => (
                                    <Button
                                        key={page.id}
                                        href={page.href}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page?.name}
                                    </Button>
                                ))}
                            </Box>

                            <Link href='/cart' className='mr-2'>
                                {cart.cartItems.length > 0 ? (
                                    <Badge badgeContent={cart.cartItems.length}>Cart</Badge>
                                ) : (
                                    'Cart'
                                )}
                            </Link>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings?.map((setting) => (
                                        <MenuItem key={setting?.id} onClick={handleCloseUserMenu}>
                                            <Link href={`${setting?.href}`}>{setting?.name}</Link>
                                        </MenuItem>
                                    ))}
                                    <Button>Log out</Button>
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Container className={classes.main}>
                    {children}
                </Container>
                <footer className='text-center my-4'>
                    <p className=''>All rights reserved. Loge Achi</p>
                </footer>
            </ThemeProvider>
        </div>
    );
};