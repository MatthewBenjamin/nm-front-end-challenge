# Youtube Search
Responsive web app that displays Youtube search results.

View at: [matthewbenjamin.github.io/nm-front-end-challenge](https://matthewbenjamin.github.io/nm-front-end-challenge/)

## Build Steps
1. Install the [RequireJS optimizer](http://requirejs.org/docs/optimization.html)
2. From the application directory, run the command:
   ```
   r.js -o scripts/require-build.js
   ```

## Deployment
Note, be sure to deploy to localhost when accessing a local copy. Otherwise certain application components will not load. See [here](https://docs.python.org/2/library/simplehttpserver.html) for info on setting up a local server.

## Tests
To run tests, simply open tests/SpecRunner.html in a browser

## Directories

| Directory            | Contents                                  |
|----------------------|-------------------------------------------|
| kotemplates          | HTML templates for Knockout.js components |
| scripts              | Javascript                                |
| scripts/kocomponents | Knockout.js components                    |
| scripts/api          | JS for requesting Youtube search results  |
| styles               | CSS                                       |
| tests                | Jasmine.js tests                          |
