Biolabs-ng
==========

### Requirements

- npm (version > 1.2.10) : package manager to get `bower` and `gulp` Node.js scripts
- bower (`npm install -g bower`) : package manager to manage project js dependencies
- gulp (`npm install -g gulp`)

    - `$ npm install`
    - `$ bower install`
    - `$ gulp connect`
    - look your browser

### Adding leaflet dependency

**WARNING: these following lines are deprecated since leaflet v0.7.3, which has now a correct bower installation**

Leaflet support for bower is not correct actually (https://github.com/Leaflet/Leaflet/issues/1903)
To make it work properly in this project, waiting bug fix, steps are :

- Install leaflet from bower :

	- `$ bower install leaflet --save`

- But bower_components/leaflet/dist does not contain JS leaflet build, so we build it:

	- `$ cd bower_components/leaflet`
	- `$ npm install`
	- `$ jake build`

- Last, add this attribute to bower generated ".bower.json" file in bower_components/leaflet directory:

	- `"main": "dist/leaflet-src.js"`


### Local development, to simplify the deployment workflow with GitHub pages

- Deploy a new version of the project on GitHub Pages :

    - `$ make github`
