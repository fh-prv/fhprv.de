import NextLink from 'next/link';
import CSS from '../public/css/Footer.module.css';

export default function Footer() {
    return (
        <footer className={CSS.footer}>
            <div className={CSS.elements}>
                <div className={CSS.copyright}>
                    <a>© 2022-{new Date(Date.now()).getFullYear()} fh.prv</a>
                </div>
                <div className={CSS.legal}>
                    [ <NextLink href='/imprint' legacyBehavior>
                        <a className={CSS.text}>Imprint</a>
                    </NextLink> ]
                    [ <NextLink href='/privacy-policy' legacyBehavior>
                        <a className={CSS.text}>Privacy Policy</a>
                    </NextLink> ]
                </div>
            </div>
        </footer>
    );
}
