import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout'
import { server } from '../config'
import PhotoList from '../components/PhotoList'

export type Photo = {
  albumId: number
  id: number
  title:string
  url: string
  thumbnailUrl: string
}

export type Photos = {
  photos: Photo[]
}

interface HomeProps {
  photos: Photo[]
}

const Home: NextPage<HomeProps> = ({photos}) => {
  return (
    <div>
      <Layout>
        <PhotoList photos={photos} />
      </Layout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${server}/api/photos`)
  const photos = await res.json() as Photos
  return {
    props:{
      photos
    }
  }
}

export default Home
