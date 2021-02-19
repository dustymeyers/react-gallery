import './GalleryList.css'

function GalleryList({galleryList}) {
  return(
    <main class="GalleryList-main">
      {galleryList.map(image => {
        return(
          <div class="GalleryList-container" key={image.id}>
            {/* Img src pulled from gallery.data - axios: /GET */}
            <img class="GalleryList-image" src={image.path}/>
            {/* Description pulled from gallery.data - axios: /GET */}
            <p class="GalleryList-description">{image.description}</p>
            {/* Like button send to gallery.data - axios: /PUT */}
            <button>Love it!</button>
            {/* Number of likes pulled from gallery.data - axios: /GET */}
            <p class="GalleryList-likes">{image.likes}</p>
          </div>
        ); // end return
      })}
    </main>
  ); // end return

} // end GalleryList

export default GalleryList;