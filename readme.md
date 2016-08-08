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

## API

#### `imageUrl(input)` -> `imageUrl`

##### input

*Required*
Type: `string`

An image url.

Returns that given string wrapped in `url("")`

## License

MIT © [Andrew Joslin](http://ajoslin.com)
