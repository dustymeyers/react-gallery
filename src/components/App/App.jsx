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
      //send back error if problem
      .catch(err => console.log('There was an error making GET', err))
  }; // end fetchGallery


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Goat Gallery</h1>
        </header>
        {/* Example of a List Item */}
        {}
        <main>
          {galleryList.map(image => {
            return(
              <div key={image.id}>
                {/* Img src pulled from gallery.data - axios: /GET */}
                <img src={image.path}/>
                {/* Description pulled from gallery.data - axios: /GET */}
                <p>{image.description}</p>
                {/* Like button send to gallery.data - axios: /PUT */}
                <button>Love it!</button>
                {/* Number of likes pulled from gallery.data - axios: /GET */}
                <p>image.likes</p>
              </div>
            );
          })}
        </main>
      </div>
    ); // end return
} // end App

export default App;
