import NextLink from 'next/link';
import React from 'react';
import CSS from '../public/css/Banner.module.css';

export default function Banner() {
    return (
        <div className={CSS.banner}>
            📢 This Website Is Under Maintenance! Please Come Back Later. 📢
        </div>
    );
}
