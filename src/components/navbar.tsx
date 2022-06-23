import React from 'react';
import { createStyles, Header, Autocomplete, Group, Burger } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import  WardenLogo  from '../assets/images/Warden.png'
const useStyles = createStyles((theme) => ({
    header: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },

    inner: {
        height: 56,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    search: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },
}));

interface HeaderSearchProps {
    links: { link: string; label: string }[];
}

export function HeaderSearch() {
    const [opened, toggleOpened] = useBooleanToggle(false);
    const { classes } = useStyles();


    return (
        <Header height={56} className={classes.header} mb={120}>
            <div className={classes.inner}>
                    <Group spacing={5} className={classes.links}>
                        <a href='/' className={classes.link}>Home</a>
                        <a href='/rooms' className={classes.link}>Rooms</a>
                        <a href='/stats' className={classes.link}>Live Stats</a>

                    </Group>
            </div>
        </Header>
    );
}

export default HeaderSearch;