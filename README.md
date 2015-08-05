# jstransformer-jscss-lite

[JSCSS-Lite](https://github.com/tunnckoCore/jscss-lite) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jscss-lite/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jscss-lite)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-jscss-lite/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-jscss-lite?branch=master)
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

## Related
- [dush](https://github.com/tunnckocore/dush): Minimalist 1.5kb event delegation for the browser (IE8+) and nodejs.
- [octet](https://github.com/tunnckocore/octet): 1kb template engine for the browser and nodejs. Support helpers, partials and more.
- [j140](https://github.com/tunnckoCore/j140): Javascript template engine in just 140 bytes, for browser and node - by Jed Schmidt
- [jscss-lite](https://github.com/tunnckocore/jscss-lite): Write Javascript-ish things in your CSS. Or call it `Embedded CSS`.
- [jscss](https://github.com/AlexanderSelzer/jscss): CSS embedded in JavaScript
- [jstransformer-jscss](https://github.com/jstransformers/jstransformer-jscss): JSCSS support for JSTransformers.

## License

MIT
