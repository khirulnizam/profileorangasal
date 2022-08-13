import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapscannerPage } from './capscanner.page';

const routes: Routes = [
  {
    path: '',
    component: CapscannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapscannerPageRoutingModule {}
