import { Component } from '@angular/core';
//additional sqlite
import { FormGroup, FormBuilder } from "@angular/forms";
import { DbService } from './../services/db.service';
import { ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) {
    
  }
  mainForm: FormGroup;
  Data:any[] = []

  ngOnInit(){
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchOrangs().subscribe(item => {
          this.Data = item
        })
      }
    });
    this.mainForm = this.formBuilder.group({
      nokp: [''],
      nama: [''],
      pendapatan: [''],
    })
  }//end ngOnInit

  tambahOrang(){
    if(this.mainForm.value.nokp!=null || this.mainForm.value.nokp!=""){
      this.db.addOrang(
        this.mainForm.value.nokp,
        this.mainForm.value.nama,
        this.mainForm.value.pendapatan
      ).then((res) => {
        this.mainForm.reset();
      })
    }else{
      alert("NoKP tak boleh kosong");
    }
  }//end tambahOrang

  padamOrang(){
    
  }//end padamOrang

}
