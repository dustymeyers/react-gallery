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