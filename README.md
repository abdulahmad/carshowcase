## Description

This project is an Car Showcase website created in React.

## Development Notes

I chose to build it as I would if this were a real piece of code I was building for a production system. I intentionally broke down the Article Reader into as small components as I could.

I did not use any existing package to bootstrap this project-- at this point I have enough experience with webpack that I am comfortable building out the project scaffolding on my own as I need it.

I added ESLint just to help keep the code looking clean as I built it. I also added SCSS support with sass-loader.

I didn't include a CSS framework because in the modern era of flexbox and CSS Grid it's not really necessary. There are some compromises that have to be made due to CSS Grid still being fairly new and a few browsers that are still in use don't fully support it, but in that case the goal would be to serve up the mobile version of the website. Also, this site was very simple and didn't require any changing of the way the page displayed between mobile and desktop.

If I were to spend more time on this I'd abstract importing the Article data into an API Mock service, rather than importing the JSON directly. And add CSS BEM Linting to enforce CSS being styled per component with consistent naming conventions. I'd also create some sort of global SCSS structure for common variables (breakpoints, etc) and theming.

I took the balance of Saturday to build this project out. If I had more time (and I don't-- busy on Sunday) I would make sure the test cases were working and do clean up and ensure the bundle is as small as possible.

Commenting in the code is light-- partially because of time constraints, but also because many of the components are pretty light and simple to look at and understand how they work.

I will also note that I'm not usually doing design like I did for this project-- it's something I might have had to do in a pinch here and there in some previous roles, but I'm usually basing my work on mocks from actual designers and making sure I nail the design to a T. Or even if there aren't mocks for a specific feature, there's enough of a look & feel to the site that I can extrapolate. But I do feel that technically, the structure of the code is very sound, and it would be pretty easy for someone who hasn't looked at this code base to understand and make their own changes to it.

## Note about yarn

You should be able to use ```yarn``` interchangeably with ```npm``` to follow the instructions in the rest of this document.

## Installation Instructions

1. Install Node from http://nodejs.org. This project was tested with Node version 8.9.4. It may be incompatible with earlier versions of node.
2. Clone this repository
2. Run ```npm i``` in the cloned repository folder

## Running Development Server

Run ```npm start``` to run the development server and see the code running in your browser.

You can access the Car Showcase site at http://localhost:8080

## Installing & Running Storybook

Storybook is an environment that allows you to develop UI components in isolation from the rest of the application.

To Install: ```npm i -g @storybook/cli```

To Run: ```npm run storybook```

You can access storybook at http://localhost:6006

## IDE Setup

I used Atom (http://atom.io) to build this. You can use whatever IDE you'd like, but there are a few packages you need to install into Atom to get it to behave correctly with ESLint:

1. language-javascript-jsx
2. linter-estlint. In the settings enable 'Fix Errors on Save'

You also need to run ```npm i``` on the repository for linting to work correctly if you haven't yet.

## Building Code

Run ```npm run build``` to build the JS and CSS bundles into the build folder.

## Testing

Run ```npm test``` to run test cases and show test coverage.

NOTE: Test Cases have not been worked on and the default one fails because there are some UI specific packages that have to be conditionally disabled if running in test mode. I can do this, but it would take more than I have this weekend :)

## Code Structure

### Important Files & folders:

```build``` - where the production build gets outputted

```config``` - webpack, jest and env config

```src``` - code for article reader lives here

```src\components``` - code for every component within article reader

```src\data``` - mock data from API calls

```src\App.jsx``` - top level component

```stories``` - where storybook stories are defined

### Component Descriptions:

```Author``` - Displays author name

```CaptionedImage``` - Displays a captioned image

```Content``` - Takes in a content slot from the page and then renders the appropriate content component

```ContntAd``` - Content slot for Ad Placeholder

```ContentImage``` - Content slot for Image

```ContentTextBlock``` - Content slot for Text Block

```ContntVideoEmbed``` - Content slot for Video Embed

```HtmlHead``` - Sets the headers for the page. This is where the meta tags for social media sharing are set

```NextArticle``` - Displays information for the Next Article

```Page``` - Main Layout and Global state for the article reader

```Pagination``` - Displays and can change current page

```ProgressBar``` - Progress Bar (unused in article but can be seen in storybook)

```Title``` - H1 Title for article
