/**
 * Renders a Like Button and the Total Number of Likes 
 * for each Gallery Image Component
 * 
 * Uses image and likeImage as props
 * 
 * likeImage sends an axios PUT request from App.jsx
 */

function GalleryItemLike({image, likeImage}) {
  //render
  return(
    <>
      {/* Like button send to gallery.data - axios: /PUT */}
      <button onClick={() => likeImage(image.id)}>Love it!</button>
      {/* Number of likes pulled from gallery.data - axios: /GET */}
      <p className="GalleryItem-likes">{image.likes}</p>
    </>
  );// end return
} // end GalleryItemLike

export default GalleryItemLike;