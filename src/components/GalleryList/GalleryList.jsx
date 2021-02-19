import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css';


function GalleryList({galleryList}) {
  return(
    <main className="GalleryList">
      {galleryList.map(image => {
        return(
          <GalleryItem 
            key={image.id}
            image={image}
          />
        ); // end return
      })}
    </main>
  ); // end return

} // end GalleryList

export default GalleryList;