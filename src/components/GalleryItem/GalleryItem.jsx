import './GalleryItem.css';

function GalleryItem({image}) {
  return(
    <div className="GalleryItem">
      {/* Img src pulled from gallery.data - axios: /GET */}
      <img className="GalleryItem-image" src={image.path}/>
      {/* Description pulled from gallery.data - axios: /GET */}
      <p className="GalleryItem-description">{image.description}</p>
      {/* Like button send to gallery.data - axios: /PUT */}
      <button>Love it!</button>
      {/* Number of likes pulled from gallery.data - axios: /GET */}
      <p className="GalleryItem-likes">{image.likes}</p>
    </div>
  ); // end return
} // end GalleryItem

export default GalleryItem;