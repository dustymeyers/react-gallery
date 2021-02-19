import {useState} from 'react';
import GalleryItemDescription from '../GalleryItemDescription/GalleryItemDescription'
import GalleryItemImage from '../GalleryItemImage/GalleryItemImage'
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
function GalleryItem({image}) {
  //
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // on click change the boolean state of isClick 
    setIsClicked(!isClicked);
  };

  return(
    <div className="GalleryItem">
      {isClicked
        // isClicked = true: show image description
        ? <GalleryItemDescription
            handleClick={handleClick}
            image={image}
          />
        // isClicked = false: show image (default)
        : <GalleryItemImage 
            handleClick={handleClick}
            image={image}
          />
        }
      {/* Like button send to gallery.data - axios: /PUT */}
      <button>Love it!</button>
      {/* Number of likes pulled from gallery.data - axios: /GET */}
      <p className="GalleryItem-likes">{image.likes}</p>
    </div>
  ); // end return
} // end GalleryItem

export default GalleryItem;