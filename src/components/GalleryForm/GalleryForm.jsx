import './GalleryForm.css';

function GalleryForm ({imagePath, imageDescription, postToGallery, setImagePath, setImageDescription}) {

  // Handle submit event
  const handleSubmit = (evt) => {
    console.log('in handleSubmit');
    
    // prevent load on form submission
    evt.preventDefault();

    // add im
    postToGallery(imagePath, imageDescription);

    // Clear Inputs
    setImageDescription('');

    setImagePath('');
  } // end handleSubmit

  return (
    <div className="GalleryForm">
      <h3>Add an Image to the Gallery</h3>
      {/* Renders Form for Image Submission */}
      <form className="GalleryForm-form" onSubmit={handleSubmit}>
        {/* Image path input */}
        <input 
          className="GalleryForm-path-input"
          value={imagePath}
          onChange={evt => setImagePath(evt.target.value)}
          type="text" 
          placeholder="Image Address" 
          max="255"
          required 
        />
        {/* Image description input */}
        <textarea 
          className="GalleryForm-description-input"
          value={imageDescription}
          onChange={evt => setImageDescription(evt.target.value)}
          rows="3" 
          placeholder="Write a brief description of the image..."
          max="255"
        ></textarea>
        {/* Submit Form Button */}
        <input 
          className="GalleryForm-submit-button" 
          type="submit" 
          value="Add Image" 
        />
      </form>
    </div>
  ); // end return
} // end GalleryForm

export default GalleryForm;