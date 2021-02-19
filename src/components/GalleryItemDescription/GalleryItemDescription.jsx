/**
 * Renders Description for Each Gallery Image Component
 * 
 * Uses handleClick and image as props from GalleryList
 */
function GalleryItemDescription({handleClick, image}) {
  return(
    <p onClick={handleClick} className="GalleryItem-description">
      {image.description}
    </p>
  ); // end return
} // end GalleryItemDescription

export default GalleryItemDescription;