import NextLink from 'next/link';
import CSS from '../public/css/Not-Found.module.css';

export default function NotFound() {
    return (
        <div className={CSS.error}>
            <div className={CSS.code}>
                [<a>404</a>]
            </div>
        </div>
    );
}
