/**
 * Renders Image for Each Gallery Image Component
 * 
 * Uses imageToggle and image as props from GalleryList
 */
function GalleryItemImage({imageToggle, image}) {
  // render
  return(
    <img 
      onClick={imageToggle} 
      className="GalleryItem-image" 
      src={image.path}
    />
  ); // end return
} // end GalleryItemImage

export default GalleryItemImage;