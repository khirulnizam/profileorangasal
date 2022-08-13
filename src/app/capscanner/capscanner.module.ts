import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,    ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapscannerPageRoutingModule } from './capscanner-routing.module';


import { CapscannerPage } from './capscanner.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CapscannerPageRoutingModule
  ],
  declarations: [CapscannerPage]
})
export class CapscannerPageModule {}
