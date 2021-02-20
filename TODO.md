# React Goat Gallery App To-Do

## Tasks

[x] - Gather Goat Photos
[x] - Write them into Server

### App.jsx

[x] - axios `GET` request - `/gallery`

### GalleryList.jsx

[x] - Create **component** for the `GalleryList`
[x] - Pass it data from App.jsx
[x] - Iterate through the list of gallery data
[x] - Render `GalleryItem`s

### GalleryItem.jsx
[x] - Create a new **component** called `GalleryItem.jsx`
[x] - Send GalleryItems to `GalleryList` via props
[x] - Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
[x] - Display the number of likes per item
[ ] - Button to add a like.
  [ ] - use `Axios` to update (`PUT`) the like count `/gallery/like/:id`
  [ ] - Update the gallery on click.