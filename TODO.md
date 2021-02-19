# React Goat Gallery App To-Do

## Tasks

[x] - Gather Goat Photos
[x] - Write them into Server

### App.jsx

[ ] - axios `GET` request - `/gallery`

### GalleryList.jsx

[ ] - Create **component** for the `GalleryList`
[ ] - Pass it data from App.jsx
[ ] - Iterate through the list of gallery data
[ ] - Render `GalleryItem`s

### GalleryItem.jsx
[ ] - Create a new **component** called `GalleryItem.jsx`
[ ] - Send GalleryItems to `GalleryList` via props
[ ] - Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
[ ] - Display the number of likes per item
[ ] - Button to add a like.
  [ ] - use `Axios` to update (`PUT`) the like count `/gallery/like/:id`
  [ ] - Update the gallery on click.