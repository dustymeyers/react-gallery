/**
 * Renders Description for Each Gallery Image Component
 * 
 * Uses imageToggle and image as props from GalleryList
 * 
 * imageToggle changes the boolean state in GalleryItem.jsx
 */

function GalleryItemDescription({imageToggle, image}) {
  // render
  return(
    <p onClick={imageToggle} className="GalleryItem-description">
      {image.description}
    </p>
  ); // end return
} // end GalleryItemDescription

export default GalleryItemDescription;