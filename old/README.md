# The Pudding Website

## Publishing a new story
* Always pull the repo first to make sure you are up to date
* Fill out the new story in the [stories doc](https://docs.google.com/spreadsheets/d/1hIIwnbmcIpRlygNZNY6SAnKFzAI79QROcrCglQhoZyQ/edit#gid=0)
* Make sure the author is in the [authors doc](https://docs.google.com/spreadsheets/d/1jFlS8Ghkat-h2W27Q2YfoXRV5RuNFY_ML6hiirMa6HM/edit#gid=0)
* Add the thumbnail image (1920x1080) to the `thumbnails/stories` directory
* Run `npm run update`
* Commit new changes to repo
* Run `make pudding`
* `git push`

## Content
#### Copy + Data
Each page has a copy doc in our [website folder]() on Google Drive.
* [Home]()
* [About]()
* [Pitch]()
* [Resources]()
* [Privacy]()

Additionally, there is a misc copy doc for a few items that can appear in multiple places.

Stories
* There is a [Google Sheet]() for all story data.
* Fill out `home_text` to populate the intro letter copy (keep it to a few words). Fill out `home_pick` with a staff's slug (each staff should have six selections).

Authors
There is a [Google Sheet]() for all author data.

#### Tasks
* Generating thumbnail images
	* Resize and optimize
	* Extracting color palette
* Fetching copy
* Generating project footer stories data 

### Feature and Design Development
#### Routes
* Endpoints
* Metadata
* Components
* Dynamic pages (authors)


## Development

This [starter template](https://github.com/the-pudding/svelte-starter) aims for fast and easy web development speficially for data-driven and visual stories. It is an opinionated template built on top of [SvelteKit](https://kit.svelte.dev/).

_Please Note: do not use or reproduce The Pudding logos or fonts without written permission._

_Prettier Formatting: Disable any text editor Prettier extensions to take advantage of the built-in rules._

#### Features

- [Feather Icons](https://github.com/feathericons/feather) for simple/easy svg icons
- [ArchieML](http://archieml.org/) for micro-CMS powered by Google Docs and Sheets
- [LayerCake](https://layercake.graphics/) enabled by default for chart making
- [Style Dictionary](https://amzn.github.io/style-dictionary/) for CSS/JS style parity
- Includes csv, json, and svg imports by default
- Static-hosted builds by default

## Quickstart

New school: just click the `Use this template` button above.

Old school:

```bash
npx degit the-pudding/svelte-starter my-project
```

Then in your local repo:

```bash
npm install
```

## Development

To start the dev server:

```bash
npm run dev
```

Modify content in `src` and `static/assets`.

## Deploy

```bash
npm run build
```

This generates a directory called `build` with the server-side rendered static-hostable app.

If deploying to github pages:

```bash
make github
```

## Style

There are a few stylesheets included by default in `src/styles`. Put anything global in `app.css`. For variable parity in both CSS and JS, modify files in the `properties` folder using the [Style Dictionary](https://amzn.github.io/style-dictionary/) API.

You can use SCSS or another CSS preprocessor by installing the module (eg. `node-sass`) and including the property in the svelte-preprocess in `svelte.config.js`.

## Google Docs and Sheets

- Create a Google Doc or Sheet
- Click `Share` button -> advanced -> Change... -> to "Anyone with this link"
- In the address bar, grab the ID - eg. ...com/document/d/**1IiA5a5iCjbjOYvZVgPcjGzMy5PyfCzpPF-LnQdCdFI0**/edit
- paste in the ID above into `google.config.js`, and set the filepath to where you want the file saved
- If you want to do a Google Sheet, be sure to include the `gid` value in the url as well

Running `npm run gdoc` at any point (even in new tab while server is running) will fetch the latest from all Docs and Sheets.

## Pre-loaded helpers

### Components

Located in `src/lib/components`.

- `Footer.svelte`: Pudding recirculation and social links.
- `Header.svelte`: Pudding logo.

### Helper Components

Located in `src/lib/components/helpers`.

- `Icon.svelte`: Simple integration with Feather Icons.
- `Slider.svelte (and Slider.Slide.svelte)`: A slider widget, especially useful for swipe/slide stories.
- `Scrolly.svelte`: Scrollytelling
- `Tap.svelte`: Edge-of-screen tapping library, designed to integrate with slider.
- `ButtonSet.svelte`: Accessible button group inputs
- `Toggle.svelte`: Accessible toggle inputs
- `Range.svelte`: Customizable range slider

### Actions

Located in `src/lib/actions`.

- `inView.js`: detect when an element enters or exits the viewport.
- `css.js`: dynmically change the value of a CSS variable.

### Utils

Located in `src/lib/utils/`.

- `mapToArray.js`: Convenience function to convert maps (generated from d3 group and rollup) to iterable array of objects.
- `move.js`: transform translate function shorthand.

### Stores

These are located in `src/lib/stores`. You can put custom ones in `src/lib/stores/misc.js` or create unique files for more complex ones. To include them do this (replacing `name`):

```js
import name from "$stores/name.js";
```

- `mq`: returns an object of media queries booleans if they are enabled or not. You can modify them in the js file.

- `viewport`: returns an object `{ width, height }` of the viewport dimensions. It is debounced for performance.

- `scrollY`: returns an number window vertical scroll position. It is throttled using rAF for performance.

- `timer`: returns an object { timer, elapsed }. `timer` has 5 methods (start, stop, toggle, set, reset) and `elapsed` is a store that is the number of ms.

### Utils

`checkOverlap.js`: Label overlapping detection. Loops through selection of nodes and adds a class to the ones that are overlapping. Once one is hidden it ignores it.

`csvDownload.js`: Converts a flat array of data to CSV content ready to be used as an `href` value for download.

`loadImage.js`: Loads an image.

`loadPixels.js`: Loads the pixel data of an image via an offscreen canvas.

`mapToArray.js`: Convenience function to convert a map to an array.

`translate.js`: Convenience function for transform translate css.

`transformSvg.js`: Custom transition lets you apply an svg transform property with the in/out svelte transition. Parameters (with defaults):

`urlParams.js`: Get and set url parameters.

**Usage**

```svelte
<g out:transformSvg={{ target: "translate(50, 50)" }}>
```

## Notes

Any @html tags, e.g., `{@html user}` must be the child of a dom element so they can be properly hydrated.
