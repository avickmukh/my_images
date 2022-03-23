import { Photos } from '../pages/index'
import photosStyle from '../styles/PhotoList.module.css'
import PhotosItem from './PhotosItem';

const PhotoList = ({photos}: Photos) => {
  return (
    <div className={photosStyle.grid}>      
      { photos.map((photo) => <PhotosItem photo={photo} />)}
    </div>
  );
}

export default PhotoList;
