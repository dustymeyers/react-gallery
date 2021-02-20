import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css';

/**
 * Renders the Entire Image Gallery
 * 
 * Uses galleryList and likeImage as props
 * 
 * galleryList is a state set in App.jsx to store gallery data
 *  - Loops through each object in array, image
 *    - image object values: id, path, description, likes
 * 
 * likeImage sends an axios PUT from GalleryItemLike.jsx
 * 
 * Renders GalleryItem component for each image in galleryList
 */

function GalleryList({galleryList, likeImage}) {
  return(
    <main className="GalleryList">
      {galleryList.map(image => {
        return(
          <GalleryItem 
            key={image.id}
            image={image}
            likeImage={likeImage}
          />
        ); // end return
      })}
    </main>
  ); // end return

} // end GalleryList

export default GalleryList;