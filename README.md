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
    public-key="EOS998f7n98f7gh8n9f7n987cvb8n"
    private-key="9v2c987D9cv78cxvb798x789Wx98897Ccv8bvioaW"
    error="{{error}}">
</blox-paper>
```