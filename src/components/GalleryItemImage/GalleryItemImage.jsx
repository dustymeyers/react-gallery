function GalleryItemImage({handleClick, image}) {
  return(
    <img 
      onClick={handleClick} 
      className="GalleryItem-image" 
      src={image.path}
    />
  ); // end return
} // end GalleryItemImage

export default GalleryItemImage;