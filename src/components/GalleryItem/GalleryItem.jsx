import {useState} from 'react';
import GalleryItemDescription from '../GalleryItemDescription/GalleryItemDescription';
import GalleryItemImage from '../GalleryItemImage/GalleryItemImage';
import GalleryItemLike from '../GalleryItemLike/GalleryItemLike'
import './GalleryItem.css';

/**
 * Renders Each Gallery Item
 * 
 * Uses image as prop from Gallery
 * 
 * Uses state to track if an image or description has been clicked on.
 *  - Default set to false.
 *  - Event handler for click event changes state to true
 * 
 * Renders GalleryItemDescription and GalleryItemImage components conditionally.
 */
function GalleryItem({image, likeImage}) {
  // Set a state to track if image or description have been clicked
  // for conditional rendering purposes.
  const [isClicked, setIsClicked] = useState(false);

  // Event handler for image/description click event
  const imageToggle = () => {
    // on click change the boolean state of isClick 
    setIsClicked(!isClicked);
  }; // end handleClick

  // render
  return(
    <div className="GalleryItem">
      {isClicked
        // isClicked = true: show image description
        ? <GalleryItemDescription
            imageToggle={imageToggle}
            image={image}
          />
        // isClicked = false: show image (default)
        : <GalleryItemImage 
            imageToggle={imageToggle}
            image={image}
          />
        }
      <GalleryItemLike 
        image={image}
        likeImage={likeImage}
      />
    </div>
  ); // end return
} // end GalleryItem

export default GalleryItem;