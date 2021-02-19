import {useState} from 'react';
import './GalleryItem.css';

function GalleryItem({image}) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    // on click change the boolean state of isClick 
    setIsClicked(!isClicked);
  };

  return(
    <div className="GalleryItem">
      {isClicked 
      // isClicked = true: show image description 
      ? <p onClick={handleClick} className="GalleryItem-description">{image.description}</p>
      // isClicked = false: show image (default)
      : <img onClick={handleClick} className="GalleryItem-image" src={image.path}/>
      }
      {/* Like button send to gallery.data - axios: /PUT */}
      <button>Love it!</button>
      {/* Number of likes pulled from gallery.data - axios: /GET */}
      <p className="GalleryItem-likes">{image.likes}</p>
    </div>
  ); // end return
} // end GalleryItem

export default GalleryItem;