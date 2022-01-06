# Contributing
GeoTIFF.io wouldn't be what it is without its contributors.  There's many different ways to contribute!

## Write Code
### Find an Issue
GeoTIFF.io uses GitHub for issue tracking.  If you're interested in contributing, but don't know where to start, look at the issues labeled `good first issue` that haven't been assigned to anyone [here](https://github.com/GeoTIFF/geotiff.io/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+no%3Aassignee).  Assign the issue to yourself or comment that you are starting to work on the issue.

### Author a New Tool
Geotiff.io consists of different tools, which appear as cards underneath the search bar.  Some examples, include "Load GeoTIFF" and "Identify Pixel".  It'd be a great help if you add to this growing list of tools!  Here's the steps:
 1) Author backend code or an algorithm for the tool and place it under the `src` folder of geotiff-io, found [here](https://github.com/GeoTIFF/geotiff.io/tree/master/src).
 2) Submit a pull request to the dev branch of geotiff-io.  Your code should exist on a separate branch you created specifically for this pull request.  You can create a new branch with the following `git checkout -b name_of_new_branch`
 3) Create a frontend interface for your tool.  You can find the GUIs under `components` [here](https://github.com/GeoTIFF/geotiff.io/tree/master/src/components).
 4) Submit a pull request to the dev branch of geotiff.io for the GUI
 
### Write Tests
GeoTIFF.io has a lot of tests for testing both the GUI frontend and backend algorithms.  You can write tests for either.  The front-end GUI tests are actually written in Python with [Behave](http://pythonhosted.org/behave/), [Selenium](https://github.com/SeleniumHQ/selenium), and [Beryl](https://github.com/danieljdufour/beryl) and can be found under the tests folder [here](https://github.com/GeoTIFF/geotiff.io/tree/master/test).  Backend tests are written in JavaScript and a test is included for each tool.

### Submit User Stories
Hearing about our users challenges and learning how we can help is a great benefit.  Tell us you users stories by submitting issues [here](https://github.com/GeoTIFF/geotiff.io/issues) or emailing one of the code contributors.  Daniel's email address is daniel.j.dufour@gmail.com

### Finding Bugs
If you find any bugs, please don't hesitate to submit issues [here](https://github.com/GeoTIFF/geotiff.io/issues) or emailing one of the code contributors.  Daniel's email address is daniel.j.dufour@gmail.com

### Teach GeoTIFF.io
Last but certainly not least, teach students and professionals how to use the website.  It's very simple, so watch your students fly!

### Resources
Here's some resources and links that are helpful for better understanding the project:
 - [Medium Article](https://medium.com/@DanielJDufour/calculating-intersection-of-polygon-with-a-raster-89c2624d78a2) that describes Intersection Algorithm that we use
 - [geoblaze.io](https://geoblaze.io), the community website for geoblaze, the processing engine that powers geotiff.io
 - [GeoTIFF](http://github.com/GeoTIFF) is the name of the GitHub org built around geotiff.io and geoblaze
 - [geotiff.io](http://geotiff.io/]) has examples on the bottom of the page
