function GalleryForm ({imagePath, imageDescription, postToGallery, setImagePath, setImageDescription}) {

  // Handle submit event
  const handleSubmit = (evt) => {
    console.log('in handleSubmit');
    
    // prevent load on form submission
    evt.preventDefault();

    // add im
    postToGallery(imagePath, imageDescription);
  } // end handleSubmit

  return (
    <>
      <h3>Add an Image to the Gallery</h3>
      {/* Renders Form for Image Submission */}
      <form onSubmit={handleSubmit}>
        {/* Image path input */}
        <input 
          onChange={evt => setImagePath(evt.target.value)}
          type="text" 
          placeholder="Image Address" 
          required 
        />
        {/* Image description input */}
        <textarea 
          onChange={evt => setImageDescription(evt.target.value)}
          rows="3" 
          placeholder="Write a brief description of the image..."
        ></textarea>
        {/* Submit Form Button */}
        <input type="submit" value="Add Image" />
      </form>
    </>
  ); // end return
} // end GalleryForm

export default GalleryForm;