import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryForm from '../GalleryForm/GalleryForm';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {
  // Set a state to contain GalleryListData
  const [galleryList, setGalleryList] = useState([]);

  const [imagePath, setImagePath] = useState('');

  const [imageDescription, setImageDescription] = useState('');

  // On page load
  useEffect(() => {
    // call GET function
    fetchGallery();
  }, []); // end useEffect

  // Axios /DELETE call
  const deleteGalleryItem = (itemId) => {
    console.log('In deleteGalleryItem');

    // DELETE from servuer using /gallery/delete/${itemId}
    axios.delete(`/gallery/delete/${itemId}`)
      // send id endpoint parameter
      .then(response => {
        console.log('DELETE request sent targeting: ', itemId);

        // render gallery data after delete complete
        fetchGallery();
      })
      // send back error if problem
      .catch(err => console.log('There was an error making DELETE', err)); 
  }; // end DeleteGalleryItem

  // Axios /GET call
  const fetchGallery = () => {
    console.log('In fetchGallery');

    // GET from server using /gallery
    axios.get('/gallery')
      // send back data
      .then(gallery => { 
        console.log('GET gallery data', gallery.data);
        
        //Set galleryList state to hold gallery data
        setGalleryList(gallery.data);
      })
      //send back error if problem
      .catch(err => console.log('There was an error making GET', err))
  }; // end fetchGallery

  // Axios /PUT call
  const likeImage = (imageId) => {
    console.log('In likeImage. Clicked id: ', imageId);

    // PUT (update) to server using /gallery/:id
    axios.put(`/gallery/like/${imageId}`)
      // send id endpoint parameter
      .then(response => {
        console.log('PUT sent', response);

        // render gallery after update complete
        fetchGallery();
      })
      .catch(err => console.log('There was an error making PUT', err));
  }; // end likeImage

  // AXIOS /POST call
  const postToGallery = (path, description) => {
    console.log(`Adding ${description} from ${path}`);

    // POST {path, description} to server using  /gallery/addImage
    axios.post('/gallery/addImage', {path, description})
      // send json object to server wait for response
      .then(response => {
        console.log('POST sent', response);

        //render gallery after post complete
        fetchGallery();
      })
      // or notify of error
      .catch(err => console.log('There was an error making POST', err));
  }; // end postToGallery

    // render
    return ( 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Goat Gallery</h1>
        </header>
        <GalleryForm      
          imagePath={imagePath}
          imageDescription={imageDescription}
          postToGallery={postToGallery}
          setImagePath={setImagePath}
          setImageDescription={setImageDescription}
        />
        {/* Renders Image Gallery */}
        <GalleryList
          onChange={evt => setImageDescription(evt.target.value)}
          galleryList={galleryList}
          likeImage={likeImage}
          deleteGalleryItem={deleteGalleryItem}
        />
      </div>
    ); // end return
} // end App

export default App;
