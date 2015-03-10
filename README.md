# Simply Social

### Instructions

#### View Site
- Cone down the repo and open up the index.html

#### Make modifications
- In terminal navigate to the folder in which you cloned the repo to locally
- Run an "npm install" on the following modules in order to install them
	- gulp
	- gulp-watch
	- gulp-rename
	- gulp-compass
	- gulp-minify-css
	- gulp-uglify
	- gulp-imagemin
	- imagemin-pngquant
- Run "gulp watch" in order to track file changes and update
- Files located under the "temp" directory have not been run through gulp
- Files located under the "architecture" directory have been run through gulp
- Images in the "assets" directory have also been run through gulp and minified

#### SASS Structure
- animations (folder)
	- Contains SASS animations
- components (folder)
	- Contains components throughout the site
- structure (folder)
	- Contains structurals classes for the site
- tools (folder)
	- Useful SASS mixins
- defaults (file)
	- Contains variables for site stucture
- screen (file)
	- Import of all sass files being used