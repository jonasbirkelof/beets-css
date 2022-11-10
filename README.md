<img src="assets/images/beets_css_col_100x478.png" width="400">

# About
Beets CSS is a CSS addon-library that is dependent on the [Bootstrap](https://getbootstrap.com/) framework. You will have to install Bootstrap for this library to work.

The porpose of Beets CSS is to tweek Bootstrap and give it a somewhat newer feel and some new functions. Beside a number of subtle design changes there are new button types, callouts, cursor classes and dropdown functions. Please refer to the [documentation](https://jonasbirkelof.github.io/beets-css/latest) to learn more about what is different from the default Bootstrap experience.

Bootstrap is open source and because of that Beets CSS is also open source. On the projects [GitHub page](https://github.com/jonasbirkelof/beets-css) you can access all of the source files and tweek it yourself as you wish.

# Installation

1. Download and install [Bootstrap](https://getbootstrap.com/) version 5.2.2 or newer.
2. Pre-compiled CSS file (recommended)
	1. Go to the [Releases page](https://github.com/jonasbirkelof/beets-css/releases) and download the file `beets-css-vx.x.x-dist.zip` for the version you want to use (latest version is recommended).
	2. Include the CSS file in your project as usual.
	```html
	<head>	
		<link rel="stylesheet" href="./css/beets.css">
	</head>
	```
3. Sass-files
	1. Clone the master branch:
	```bash
	git clone https://github.com/jonasbirkelof/beets-css.git
	```
	2. Install the dependencies:
	```bash
	npm install
	```
	3. Rename the file `webpack.mix.js.example` to `webpack.mix.js` and update the BrowserSync proxy address to your localhost directody for the project.
	4. You can change the `mix.setPublicPath()` property in `webpack.mix.js` to the target directory for the compiled .css file.
	5. You find the sass files in the `./src/` directory.
	6. To build the file, run:
	```bash
	npm run build
	```
	7. To watch the changes and use BrowserSync for instant reload, run:
	```bash
	npm run watch
	```
	8. Tip! There is also build in Tailwind CSS support if you want to incorporate those classes. Just make sure there is no comflict with Bootstrap!

# Documentation

Please visit the documentations site for instruction on how to customize and use Beets CSS.

[Beets CSS Documentation](https://jonasbirkelof.github.io/beets-css/latest)