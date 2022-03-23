import Link from 'next/link'
import { Photo } from '../pages/index'
import photosStyle from '../styles/PhotoList.module.css'

type PhotoItemProps = {
  photo: Photo
}
export default function PhotosItem({photo}: PhotoItemProps) {
  return (
    <Link href="/photo/[id]" as={`/photo/${photo.id}`}>
        <a className={photosStyle.card}>
            <img src={photo.thumbnailUrl} alt="Autumn" width="150" />
            <h3>{photo.title} &rarr;</h3>
        </a>
    </Link>
  );
}
