# Installation

## Bootstrap

First of all, you **need** to have Bootstrap installed and working on your site. Please refer to the [Bootstrap documentation](https://getbootstrap.com/docs/5.2/getting-started/download/) for how to install Bootstrap. Beets CSS 2.0 is developed using Bootstrap version 5.2.2 so make sure you have at least that version installed.

## Font Awesome

This step is optional but you will probably need to have some sort of icon library on your site. There are many good libraries and although Beets CSS should work well with most of them, it was developed with Font Awesome in mind. That means that if you would like the most seamless experience and don't have any personal preference on icon libraries, you should start by looking at Font Awesome.

Please go to the [Font Awesome website](https://fontawesome.com/) for installation documentation.

## Beets CSS

If you want to make tweeks or changes to Beets CSS and mabye add a custom color scheme, you can use the uncompiled .scss-files and compile yourself. There is not much "magic" going on so any sass compiler should do the trick, although Beets CSS is developed using Webpack, Autoprefixer and PostCSS. Then add the compiled `beets-css.css` file to your site like you normally would.

If you just want the out-of-the-box Beets CSS you can just download the css file and add `beets-css.css` to your site like you normally would.

For the latest version of Beets CSS, plese see the [GitHub Releases](https://github.com/jonasbirkelof/beets-css/releases) page.

Beets CSS does not need any additional JavaScript to work, the files that comes with Bootstrap will do just fine!