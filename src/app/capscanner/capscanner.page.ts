import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-capscanner',
  templateUrl: './capscanner.page.html',
  styleUrls: ['./capscanner.page.scss'],
})

const prepare = () => {
  BarcodeScanner.prepare();
};

const startScan = async () => {
  BarcodeScanner.hideBackground();
  const result = await BarcodeScanner.startScan();
  if (result.hasContent) {
    console.log(result.content);
  }
};

const stopScan = () => {
  BarcodeScanner.showBackground();
  BarcodeScanner.stopScan();
};

const askUser = () => {
  prepare();

  const c = confirm('Do you want to scan a barcode?');

  if (c) {
    startScan();
  } else {
    stopScan();
  }
};

export class CapscannerPage implements OnInit {

  constructor() { }
  

  ngOnInit() {
  }

  capscanqrcode(){
    askUser();
  }

}
