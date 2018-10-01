# Gentle path truncate

This robust library is built to gently cut (truncate) path strings.

The function `truncatePath(path, maxlen, [ellipsis])` accepts three arguments:

* `path` - a string which is a path itself
* `maxlen` - a maximum length of resulting string
* `ellipsis` - an ellipsis which has a default value of `...`

This function is removing parts of a path one at a time putting the `ellipsis` in instead.
In case if even showing a single path item is over the `maxlen` it just results in something like this `.../filename.js`. In case a file name is too long to be shown it gets truncated too.
In that case this: `plugin/connect/modules/beans/filenameWhichIsSuperLongAndWayLongerThanItShouldBe.json` will result into this `.../filenameWhichI...ThanItShouldBe.json`.
This library also handles files without extention, files with multiple edxtentions (e.g. `*.min.js` and hidden files `.gitignore`).

## Installation

```bash
npm i gentle-path-truncate
```

## Usage

``` javascript
import truncatePath from 'gentle-path-truncate'
```

or in Common.js

``` javascript
const truncatePath = require('gentle-path-truncate')
```

### Running tests

```bash
npm test
```

### Publish

```bash
npm run build
npm version
npm publish
```
