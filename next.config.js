/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
        return [
            {
                source: '/github',
                destination: 'https://github.com/fh-prv',
                permanent: true,
            },
            {
                source: '/instagram',
                destination: 'https://www.instagram.com/fh.prv',
                permanent: true,
            },
            {
                source: '/mastodon',
                destination: 'https://mastodon.social/@fhprv',
                permanent: true,
            },
            {
                source: '/spotify',
                destination: 'https://open.spotify.com/user/4r8jkpance3eh6a7infsyy2jr',
                permanent: true,
            },
            {
                source: '/twitch',
                destination: 'https://www.twitch.tv/fh_prv',
                permanent: true,
            },
            {
                source: '/twitter-x',
                destination: 'https://twitter.com/fh_prv',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
