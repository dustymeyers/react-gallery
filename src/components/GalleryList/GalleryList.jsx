import './GalleryList.css'

function GalleryList({galleryList}) {
  return(
    <main className="GalleryList">
      {galleryList.map(image => {
        return(
          <div className="GalleryList-image-container" key={image.id}>
            {/* Img src pulled from gallery.data - axios: /GET */}
            <img className="GalleryList-image" src={image.path}/>
            {/* Description pulled from gallery.data - axios: /GET */}
            <p className="GalleryList-description">{image.description}</p>
            {/* Like button send to gallery.data - axios: /PUT */}
            <button>Love it!</button>
            {/* Number of likes pulled from gallery.data - axios: /GET */}
            <p className="GalleryList-likes">{image.likes}</p>
          </div>
        ); // end return
      })}
    </main>
  ); // end return

} // end GalleryList

export default GalleryList;