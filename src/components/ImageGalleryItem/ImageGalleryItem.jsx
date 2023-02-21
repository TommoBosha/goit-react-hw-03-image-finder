
import { ImgGalleryItem, ImgGalleryItemImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({webformatURL, largeImageURL, tags, onClick,}) => (
  <ImgGalleryItem
        onClick={() => { onClick(largeImageURL);}} >
    <ImgGalleryItemImage src={webformatURL} alt={tags} />
  </ImgGalleryItem>
);





export default ImageGalleryItem;
