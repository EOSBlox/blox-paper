import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'blox-print';
import 'blox-qrcode';
/**
 * `blox-paper`
 * Generates a Paper Wallet from a key pair
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BloxPaper extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <blox-print id="print"></blox-print>
      <blox-qrcode id="qrcode"></blox-qrcode>
    `;
  }
  static get properties() {
    return {
      publicKey1: {
        type: String,
      },
      privateKey1: {
        type: String,
        observer: '_makeOne'
      },
      publicKey2: {
        type: String,
      },
      privateKey2: {
        type: String,
        observer: '_makeTwo'
      },
      error: {
        type: String,
        notify: true,
        reflectToAttribute: true,
      },
    };
  }

  _makeOne() {
    this.make(this.publicKey1, this.privateKey1)
  }

  _makeTwo() {
    this.make(this.publicKey1, this.privateKey1, this.publicKey2, this.privateKey2)
  }

  makeOne(publicKey1, privateKey1) {
    return new Promise((resolve, reject) => {
      return Promise.all([this.$.qrcode.make(publicKey1), this.$.qrcode.make(privateKey1)])
      .then((qr) => {
      this._print1(qr[0], qr[1], publicKey1, privateKey1)
      })
    })
  }

  makeTwo(publicKey1, privateKey1, publicKey2, privateKey2) {
    return Promise.all([this.$.qrcode.make(publicKey1), this.$.qrcode.make(privateKey1), this.$.qrcode.make(publicKey2), this.$.qrcode.make(privateKey2)])
    .then((qr) => {
      this._print2(qr[0], qr[1], qr[2], qr[3], publicKey1, privateKey1, publicKey2, privateKey2)
    })
  }

_print1(publicQr1, privateQr1, publicKey1, privateKey1){
  const htmlToPrint = `
  <html>
    <head>
    <title>EOS Paper Wallet</title>
      <style>
      :host {
        display: block;
      }
      .container {
        width: 100%; 
        height: 200px;
        display: flex; 
        flex-wrap: nowrap;
        padding: 20px;
      }
      .qrcode {
        width: 250px%; 
        height: 250px;
        padding: 20px;
      }
      .text-container{
        padding-left: 50px;
      }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="qrcode"><img src="${publicQr1}"></div>
        <div class="qrcode""><img src="${privateQr1}"></div>
      </div>
      <div class="text-container">
        <div>Public Key: ${publicKey1}</br></br> Private Key: ${privateKey1}</div>
      </div>
    </body>
  </html>
  `;
  this.$.print.print(htmlToPrint)
}

_print2(publicQr1, privateQr1, publicQr2, privateQr2, publicKey1, privateKey1, publicKey2, privateKey2){
  const htmlToPrint = `
  <html>
    <head>
    <title>EOS Paper Wallet</title>
      <style>
      :host {
        display: block;
      }
      .container {
        width: 100%; 
        height: 200px;
        display: flex; 
        flex-wrap: nowrap;
        padding: 20px;
      }
      .qrcode {
        width: 250px%; 
        height: 250px;
        padding: 20px;
      }
      .text-container{
        padding-left: 50px;
      }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="qrcode"><img src="${publicQr1}"></div>
        <div class="qrcode""><img src="${privateQr1}"></div>
      </div>
      <div class="text-container">
        <div>Public Key: ${publicKey1}</br></br> Private Key: ${privateKey1}</div>
      </div>

    <div class="container">
      <div class="qrcode"><img src="${publicQr2}"></div>
      <div class="qrcode""><img src="${privateQr2}"></div>
    </div>
    <div class="text-container">
      <div>Public Key: ${publicKey2}</br></br> Private Key: ${privateKey2}</div>
    </div>

    </body>
  </html>
  `;
  this.$.print.print(htmlToPrint)
}



} window.customElements.define('blox-paper', BloxPaper);
