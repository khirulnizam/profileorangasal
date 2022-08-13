import { Component, OnInit } from '@angular/core';
//barcode
import { BarcodeScanner,BarcodeScannerOptions  } from '@ionic-native/barcode-scanner/ngx';
//ZBar code scanner
//import { ZBarOptions, ZBar } from '@ionic-native/zbar/ngx';

@Component({
  selector: 'app-scanpage',
  templateUrl: './scanpage.page.html',
  styleUrls: ['./scanpage.page.scss'],
})
export class ScanpagePage implements OnInit {

  ngOnInit() {
  }

  optionZbar:any;
  scannedOutput:any;
  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;
  constructor(private barcodeScanner: BarcodeScanner, ) {

  }//end constructor

  scancode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;

    }).catch(err => {
      console.log('Error', err);
    });
  }

  createBarcode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.inputData).then((encodedData) => {
      console.log(encodedData);
      this.encodedData = encodedData;
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }

}

/*
Barcode / QR code scanning supports several options as well

preferFrontCamera : false, // iOS and Android
showFlipCameraButton : true, // iOS and Android
showTorchButton : true, // iOS and Android
torchOn: false, // Android, launch with the torch switched on (if available)
saveHistory: true, // Android, save scan history (default false)
prompt : “Place a code inside the scan area”, // Android
resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
formats : “EAN_13,EAN_8,QR_CODE,PDF_417”, // default: all but PDF_417 and RSS_EXPANDED
orientation : “portrait”, // Android only (portrait|landscape), default unset so it rotates with the device
Ref: https://enappd.com/blog/ionic-complete-guide-barcode-qrcode-scan/140/
*/
