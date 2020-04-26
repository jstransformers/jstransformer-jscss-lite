# jstransformer-jscss-lite

[JSCSS-Lite](https://github.com/tunnckoCore/jscss-lite) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jscss-lite/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jscss-lite)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-jscss-lite/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-jscss-lite)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-jscss-lite/master.svg)](http://david-dm.org/jstransformers/jstransformer-jscss-lite)
[![NPM version](https://img.shields.io/npm/v/jstransformer-jscss-lite.svg)](https://www.npmjs.org/package/jstransformer-jscss-lite)

## Installation

```
npm install jstransformer-jscss-lite
```

## API
> See full example in [test fixture](./test/input.css) or visit [jscss-lite readme](https://github.com/tunnckocore/jscss-lite)

```js
var jscssLite = require('jstransformer')(require('jstransformer-jscss-lite'))

jscssLite.render('var color = "#d02783"; div { background: |color|; }').body
//=> 'div { background: #d02783; }'
```

## License

MIT
