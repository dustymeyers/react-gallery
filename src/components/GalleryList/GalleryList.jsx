function GalleryList({galleryList}) {
  return(
    <main>
      {galleryList.map(image => {
        return(
          <div key={image.id}>
            {/* Img src pulled from gallery.data - axios: /GET */}
            <img src={image.path}/>
            {/* Description pulled from gallery.data - axios: /GET */}
            <p>{image.description}</p>
            {/* Like button send to gallery.data - axios: /PUT */}
            <button>Love it!</button>
            {/* Number of likes pulled from gallery.data - axios: /GET */}
            <p>{image.likes}</p>
          </div>
        ); // end return
      })}
    </main>
  ); // end return

} // end GalleryList

export default GalleryList;