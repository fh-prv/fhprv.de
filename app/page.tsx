import DoubleArrow from '@mui/icons-material/DoubleArrow';
import NextImage from 'next/image';
import CSS from '../public/css/Page.module.css';

export default function Home() {
    return (
        <div className={CSS.homepage}>
            <div className={CSS.content}>
                <NextImage alt="fh.prv - Logo" className={CSS.logo} height={512} src="/img/fh.prv.png" width={512}/>
                <div className={CSS.headline}>
                    fh.prv
                </div>
                <div className={CSS.subline}>
                    <a className={CSS.link} href="/about-me">About Me</a> <DoubleArrow/>
                </div>
            </div>
        </div>
    );
}

