# \<blox-paper\>

Generates a Paper Wallet from a key pair

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Install blox-paper

```
$ npm install blox-paper
```

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Import

```
$ import 'blox-paper';
```

## Basic Use

```html
<blox-paper
    public-key="EOS8VWYBpVzYYGM7uCMLzKx5WHeMNogFD3Wj4ozCtujinH4c7wDTH"
    private-key="5KSN3j1db45aoA5QjjYhAmbp5AsAM99QM5Dd2xBxjgTRvYH1ivX"
    error="{{error}}">
</blox-paper>
```