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
              private termService: TermsService) {

}

 term: Term = {};
 subTermDTOs: SubTermDTO[] = [];
 i = 0;



termForm = this.formBuilder.group({

  title: ['', [Validators.required, ]]
});


ngOnInit() {

  this.term = this.termService.term;
  this.setDataInForm();
  this.addSubterm();
  console.log('hii');


}



close() {
this.navController.navigateForward('/terms-and-conditions');
}

save() {
  console.log(' term is ...', this.term);
  if (this.term.title !== this.termForm.get('title').value) {

    this.updateTerm(this.termForm.get('title').value);
  }
  this.term.title = this.termForm.get('title').value;
  this.subTermDTOs = [];
  for (let x = 0; x < this.i; x++) {



    if (this.termForm.get('subterm' + x).value !== '') {this.subTermDTOs.push({termDescription: this.termForm.get('subterm' + x).value}); }


  }

  console.log('subterms >>>>', this.subTermDTOs);

  if (this.termForm.valid) {
    this.term.subTerms = this.term.subTerms.concat(this.subTermDTOs);


    this.util.createLoader().then(loader => {
loader.present();

if (this.term.id === null) {

this.commandResourceService.createTermUsingPOST(this.term).subscribe(
res => {

console.log('created term ', res);
this.termService.term = res;

loader.dismiss();
this.termForm.reset();
},
err => {
console.log('error creating about ', err);
loader.dismiss();

this.util.createToast('Ops an error occuerd try again later');

}
);
} else {
  loader.dismiss();
  this.termForm.reset();
  this.navController.navigateForward('/terms-and-conditions');

}
});
} else {
this.util.createToast(' Invalid data');
}
}

addSubterm() {
  this.termForm.addControl('subterm' + this.i , new FormControl('', []) );
  console.error(this.termForm);
  this.subTermDTOs.push({});
  this.i++;
}

setDataInForm() {

  this.termForm.value.title = this.term.title;
  this.termForm.setValue(this.termForm.value);


}

updateTerm(title:string) {

  this.term.title=title;
  console.log(' updated term ');
  this.commandResourceService.updateTermUsingPUT(this.term).subscribe(res => {

    console.log('updated term  ', res);


  },
  err => {
    console.log('error updating term ', err);

  });

}



}
