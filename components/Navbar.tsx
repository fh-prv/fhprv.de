import NextLink from 'next/link';
import React from 'react';
import CSS from '../public/css/Navbar.module.css';

export default function Navbar() {
    return (
        <div className={CSS.navbar}>
            <ul className={CSS.elements}>
                <li className={CSS.link}>
                    <a className={CSS.number}>00. </a>
                    <NextLink href='/' legacyBehavior>
                        <a className={CSS.text}>Home</a>
                    </NextLink>
                </li>
                <li className={CSS.link}>
                    <a className={CSS.number}>01. </a>
                    <NextLink href='/about-me' legacyBehavior>
                        <a className={CSS.text}>About Me</a>
                    </NextLink>
                </li>
                <li className={CSS.link}>
                    <a className={CSS.number}>02. </a>
                    <NextLink href='/projects' legacyBehavior>
                        <a className={CSS.text}>Projects</a>
                    </NextLink>
                </li>
                <li className={CSS.link}>
                    <a className={CSS.number}>03. </a>
                    <NextLink href='/news' legacyBehavior>
                        <a className={CSS.text}>News</a>
                    </NextLink>
                </li>
                <li className={CSS.link}>
                <a className={CSS.number}>04. </a>
                    <NextLink href='/contact' legacyBehavior>
                        <a className={CSS.text}>Contact</a>
                    </NextLink>
                </li>
            </ul>
        </div>
    );
}
