* TASK: 
Provide a user an opportunity to view a News channel of a concrete category using https://newsapi.org/

* REQUIREMENTS:
- Use no framework;
- Use Babel as a loader;
- Use style and url loaders;
- Use ES6 modules;
- Use plugins;
- Configure the bundler for DEV and PROD modes;
- Configure Webpack-dev-derver;

* FILE STRUCTURE:
- src/
---- pages/	- html pages
---- scripts/	- js files
-------- classes/ 	- js classes
-------- modules/ 	- js 'back' logic modules
-------- ux-handlers/ 	- jQuery ux-events handlers
-------- ux-modules/ 	- modules for ux-events handling
---- sources/	- fonts and images
---- styles/	- sass files


src/scripts/app.js 	- entry point for js
scr/styles/app.scss 	- entry point for sass

* CONFIGURE APP:
appconfig.json - set News API Key here
{
    "ApiKey": <your api key>
}

* RUN PROD APP VERSION:
run 'run.app.bat'