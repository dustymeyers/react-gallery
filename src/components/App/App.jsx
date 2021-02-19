import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Set a state to contain GalleryListData
  const [galleryList, setGalleryList] = useState([]);

  // On page load
  useEffect(() => {
    // call GET function
    fetchGallery();
  });// end useEffect

  // Axios /GET call
  const fetchGallery = () => {
    // Point server at /gallery using GET
    axios.get('/gallery')
      // send back data
      .then(gallery => { 
        console.log('GET gallery data', gallery.data);
        
        //Set galleryList state to hold gallery data
        setGalleryList(gallery.data);
      })
  }; // end fetchGallery


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Goat Gallery</h1>
        </header>
        {/* Example of a List Item */}
        <main>
          <div>
            {/* Img src pulled from gallery.data - axios: /GET */}
            <img src="images/goat_small.jpg"/>
            {/* Description pulled from gallery.data - axios: /GET */}
            <p>Photo of a goat taken at Glacier National Park.</p>
            {/* Like button send to gallery.data - axios: /PUT */}
            <button>Love it!</button>
            {/* Number of likes pulled from gallery.data - axios: /GET */}
            <p>4 people love this!</p>
          </div>
        </main>
      </div>
    ); // end return
} // end App

export default App;
