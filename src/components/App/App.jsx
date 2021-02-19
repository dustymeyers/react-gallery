import React from 'react';
import './App.css';

function App() {
  // Set a state to contain GalleryListData
  // const [galleryList, setGalleryList] = useState([]);

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
            {/* Like button */}
            <button>Love it!</button>
            {/* Number of likes pulled from gallery.data - axios: /GET */}
            <p>4 people love this!</p>
          </div>
        </main>
      </div>
    );
}

export default App;
