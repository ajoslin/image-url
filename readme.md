# image-url [![Build Status](https://travis-ci.org/ajoslin/image-url.svg?branch=master)](https://travis-ci.org/ajoslin/image-url)

> Generate a css image url

## Install

```
$ npm install --save image-url
```

## Usage

```js
var imageUrl = require('image-url')

imageUrl('http://website.com/image.jpg')
//=> url("http://website.com/image.jpg")
```

## Rationale

You should always wrap your css urls in quotes, because parentheses in a url are valid.

This makes it easier to do that.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
