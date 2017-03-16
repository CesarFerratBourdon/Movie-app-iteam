# Movie-app-iteam

App to interact with MovieDB API made as a code assignment for iteam, Stockholm.
Please see PDF for requirements
Please visit: http://movie-app-iteam.herokuapp.com/

## Tech stack

* Bootstrapped with Create-React-App
* React.js
* Redux
* ES6
* Yarn
* Material-ui
* Jest

## Installation

At project root folder run

### `yarn install`

Be sure to have yarn installed globally

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the build folder.


## Test

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

## Improvements to work on (random order)

## 1
Finish working on Promise for image preloader. When opening Modal, the spinner should be spinning until all pictures have triggered their onload event to have a clean display effect.

## 2
Open an alert when no results returned by API call

## 3
Add a fadeIn effect on movie detail toggle

## 4
fix component alignment bug => movie blocks are not perfectly aligned and when a movie from last column is toggled a gap is created between rows

## 5
if a search for an empty string is triggered API is sending a 422 error. Make sure to deal with wrong inputs

## 6
Pagination: receive more results and order them per pages of 20 or so movies

## 7
When user toggle movie details, they should not have to scroll down to see all details. Movie description and cast should appear on left or right of movie poster

## 8
ratings should also appear as a classic 5 start system inside the collapsed view

## 9
Increase font size and avatar size in collapsed view

## 10
add a link to the full movie page on MovieDB website

## 11
if the API is returning 0 actors, just don't display "Main actors"

## 12
When the user toggle a movie, if one is already open it should be closed automatically

## 13
Have Memoization to avoid API calls is same research is made multiple times

## 14
Take care of language choice with API according to where the user is located
