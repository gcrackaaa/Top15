# Top15

Top15 is an application that loads the top 15 movies, cover images, and a description matching search criteria provided by the user. 

## Initial State

* The application should initially appear search bar over an image.
* The search bar should have a dropdown (select) menu for selecting a *Genre*.
* There should also be a text input box for entering a *Year*.
* It should also have a button labeled "Search"

## Results State

* After a user enters search criteria and clicks the "Search" button, the application should query [https://api.themoviedb.org](https://api.themoviedb.org) for movies that match the criteria.
* If the user fails to select a genre, an alert will display prompting to do so prior to executing the search.
* The movies should be returned in order of decreasing popularity, with the most popular movies returned first.
* The 15 images in the grid should display the cover images of the top 15 movies matching the provided criteria.
* Upon hovering over the images, an info bar should display the title, year, and a summary/overview of the motion picture.
