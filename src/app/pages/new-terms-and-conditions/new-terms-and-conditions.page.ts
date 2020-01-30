import { TermsService } from './../../services/terms.service';
import { Util } from './../../services/util';
import { AboutDTO } from './../../api/models/about-dto';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { TermDTO, SubTermDTO, Term } from 'src/app/api/models';

@Component({
  selector: 'app-new-terms-and-conditions',
  templateUrl: './new-terms-and-conditions.page.html',
  styleUrls: ['./new-terms-and-conditions.page.scss'],
})
export class NewTermsAndConditionsPage implements OnInit {

  constructor(private navController: NavController,
              private commandResourceService: CommandResourceService,
              private util: Util,
              private formBuilder: FormBuilder,
              private termService:TermsService) {

}

 term: Term = {};
 subTermDTOs: SubTermDTO[] = [];
 i = 0;



termForm = this.formBuilder.group({

  title: ['', [Validators.required, ]]
});


ngOnInit() {
  this.addSubterm();
}


close() {
this.navController.navigateForward('/terms-and-conditions');
}

save() {
  this.term.title = this.termForm.get('title').value;
  this.subTermDTOs = [];
  for (let x = 0; x < this.i; x++) {

    this.subTermDTOs.push(this.termForm.get('subterm' + x).value);


  }

  console.log('About >>>>', this.subTermDTOs);

  if (this.termForm.valid) {
    this.term.subTerms = this.subTermDTOs;


    this.util.createLoader().then(loader => {
loader.present();
this.commandResourceService.createTermUsingPOST(this.term).subscribe(
res => {

console.log('created term ', res);
this.termService.terms=[res].concat(this.termService.terms);

this.navController.navigateForward('/terms-and-conditions');
loader.dismiss();
this.termForm.reset();
},
err => {
console.log('error creating about ', err);
loader.dismiss();

this.util.createToast('Ops an error occuerd try again later');

}
);
});
} else {
this.util.createToast(' Invalid data');
}
}

addSubterm() {
  this.termForm.addControl('subterm' + this.i , new FormControl('', [Validators.required]) );
  console.error(this.termForm);
  this.subTermDTOs.push({});
  this.i++;
}



}
