import GitHubIcon from '@mui/icons-material/GitHub';
import NextLink from 'next/link';
import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import CSS from '../public/css/Header.module.css';

export default function Header() {
    return (
        <header className={CSS.header}>
            <Banner/>
            <Navbar/>
        </header>
    );
}
