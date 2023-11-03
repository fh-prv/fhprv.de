import DoubleArrow from '@mui/icons-material/DoubleArrow';
import CSS from '../../public/css/Contact.module.css';

export default function Contact() {
    return (
        <div className={CSS.contact}>
            <div className={CSS.content}>
                <div className={CSS.headline}>
                    <a className={CSS.code}>04</a>. Contact
                </div>
                <div className={CSS.text}>
                    If you have any questions, feel free to contact me. &lt;<a className={CSS.code}>br/</a>&gt;<br/>
                    <a className={CSS.link} href="mailto:info@fhprv.de">info@fhprv.de</a> <DoubleArrow/>
                </div>
            </div>
        </div>
    );
}
