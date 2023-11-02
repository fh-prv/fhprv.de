import CSS from '../../public/css/About-Me.module.css';

export default function AboutMe() {
    return (
        <div className={CSS.aboutMe}>
            <div className={CSS.content}>
                <div className={CSS.headline}>
                    <a className={CSS.code}>01</a>. About Me
                </div>
                <div className={CSS.text}>
                    Hello, my name is fh.prv and I am a student developer. &lt;<a className={CSS.code}>br/</a>&gt;<br/>
                    I started developing in 2018 and I am still learning new things every day. &lt;<a className={CSS.code}>br/</a>&gt;<br/>
                    I&apos;m mostly programming Discord Bots and Websites, but I also try new things. &lt;<a className={CSS.code}>br/</a>&gt;<br/>
                    If you like my work, you can support me by following me on social media or leaving me a star ⭐ on <a className={CSS.link} href="/github">GitHub</a>. &lt;<a className={CSS.code}>br/</a>&gt;<br/>
                    <div className={CSS.skills}>
                        My Skills:&nbsp;
                            <a style={{ color: '#1572B6' }}>CSS</a>,&nbsp;
                            <a style={{ color: '#e34f26' }}>HTML</a>,&nbsp;
                            <a style={{ color: '#f89820' }}>Java</a>,&nbsp;
                            <a style={{ color: '#f7df1e' }}>JavaScript</a>,&nbsp;
                            <a style={{ color: '#3178c6' }}>TypeScript</a> and&nbsp;
                            <a style={{ color: '#777bb4' }}>PHP</a>&nbsp;
                            &lt;<a className={CSS.code}>br/</a>&gt;<br/>
                    </div>
                    <div className={CSS.socialMedia}>
                        My Social-Media:&nbsp;
                            <a className={CSS.link} href="/github">GitHub</a>,&nbsp;
                            <a className={CSS.link} href="/instagram">Instagram</a>,&nbsp;
                            <a className={CSS.link} href="/mastodon">Mastodon</a>,&nbsp;
                            <a className={CSS.link} href="/spotify">Spotify</a>,&nbsp;
                            <a className={CSS.link} href="/twitch">Twitch</a> and&nbsp;
                            <a className={CSS.link} href="/twitter-x">Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
