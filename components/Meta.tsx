import Head from 'next/head'

type metaType = {
    title: string
    keywords: string
    description: string
}

const Meta = ({title, keywords, description}: metaType) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <link rel='icon' href='/favicon.ico' />
        </Head>
    );
}

Meta.defaultProps = {
    title: 'Birds World',
    keywords:'birds, beautiful,awsome',
    description: 'birds are beautiful creature in thr world'
}
export default Meta;
