import Link from 'next/link'
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { server } from '../../../config'
import Meta from '../../../components/Meta'
import { Photo } from '../../index'

interface PhotoProps {
    photo: Photo
}

const PhotoPage: NextPage<PhotoProps> = ({ photo }) => {
    return (<>
        <Meta title={photo?.title} />
        <img src={photo.url} alt="Autumn" width="600" />
        <h1>{photo.title}</h1>
        <br />
        <Link href='/'>Go Back</Link>
    </>)
}

export default PhotoPage

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context?.params?.id
    const res = await fetch(`${server}/api/photos/${id}`)
    const photo = await res.json()
    return {
        props: {
            photo
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${server}/api/photos`)
    const photos = await res.json()
    const ids = photos.map((photo: Photo) => photo.id)
    const paths = ids.map((id: string) => ({
        params: {
            id: id.toString()
        }
    }))
    return {
        paths,
        fallback: false
    }
}
