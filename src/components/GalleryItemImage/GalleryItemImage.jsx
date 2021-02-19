/**
 * Renders Image for Each Gallery Image Component
 * 
 * Uses handleClick and image as props from GalleryList
 */
function GalleryItemImage({handleClick, image}) {
  // render
  return(
    <img 
      onClick={handleClick} 
      className="GalleryItem-image" 
      src={image.path}
    />
  ); // end return
} // end GalleryItemImage

export default GalleryItemImage;