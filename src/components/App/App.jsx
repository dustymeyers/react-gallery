import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {
  // Set a state to contain GalleryListData
  const [galleryList, setGalleryList] = useState([]);

  // On page load
  useEffect(() => {
    // call GET function
    fetchGallery();
  }, [])// end useEffect

  // Axios /GET call
  const fetchGallery = () => {
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
  } // end fetchGallery

    // render
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Goat Gallery</h1>
        </header>
        {/* Renders Image Gallery */}
        <GalleryList
          galleryList={galleryList}
        />
      </div>
    ); // end return
} // end App

export default App;
