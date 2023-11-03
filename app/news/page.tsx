import DoubleArrow from '@mui/icons-material/DoubleArrow';
import CSS from '../../public/css/News.module.css';

export default function News() {
    return (
        <div className={CSS.news}>
            <div className={CSS.content}>
                <div className={CSS.headline}>
                    <a className={CSS.code}>404</a>. News
                </div>
                <div className={CSS.text}>
                    This page is still in work. Have a look here: &lt;<a className={CSS.code}>br/</a>&gt;<br/>
                    <a className={CSS.link} href="/about-me">About Me</a> <DoubleArrow/>
                </div>
            </div>
        </div>
    );
}
