import { TermsService } from './../../services/terms.service';
import { Util } from './../../services/util';
import { AboutDTO } from './../../api/models/about-dto';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { TermDTO, SubTermDTO, Term, SubTerm } from 'src/app/api/models';

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

  this.term ={title:'',subTerms:[]};
  this.setDataInForm();
  this.addSubterm();
  console.log('hii');


}



close() {
this.navController.navigateForward('/terms-and-conditions');
}

save() {
  console.log(' term is ...', this.term);
  if (this.termForm.valid) {

      // if (this.term.id === null) {
        this.saveTerm();


      // } else {

      //this.updateTerm(this.termForm.get('title').value);

      // }

} else {
  this.util.createToast(' Invalid data');
}

}


saveTerm() {
  // this.subTermDTOs = [];
  // for (let x = 0; x < this.i; x++) {



  //   if (this.termForm.get('subterm' + x).value !== '') {
  //     this.subTermDTOs.push({termDescription: this.termForm.get('subterm' + x).value});
  //    }


  // }

 

  this.term.title = this.termForm.get('title').value;

  console.log('subterms >>>>', this.subTermDTOs);


            //  this.term.subTerms = this.term.subTerms.concat(this.subTermDTOs);


  this.term.subTerms[0] = {termDescription: this.termForm.get('subterm0').value};

  this.util.createLoader().then(loader => {
          loader.present();


          console.log('term to be created', this.term);
          this.commandResourceService.createTermUsingPOST(this.term).subscribe(
                  res => {

                        console.log('created term ', res);
                        this.termService.terms= this.termService.terms.concat(res);

                        loader.dismiss();
                        this.termForm.reset();
                  },
                  err => {
                    console.log('error creating about ', err);
                    loader.dismiss();

                    this.util.createToast('Ops an error occuerd try again later');

                  });

          loader.dismiss();
          this.termForm.reset();
          this.navController.navigateForward('/terms-and-conditions');


          });

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

updateTerm(title: string) {

  this.term.title = title;
  this.term.subTerms[0] = this.termForm.get('subterm0').value;
  console.log(' update term ');
  this.commandResourceService.updateTermUsingPUT(this.term).subscribe(res => {

    console.log('updated term  ', res);
    this.saveTerm();

  },
  err => {
    console.log('error updating term ', err);

  });

}

// saveTerm(title: string) {

//   this.term.title = title;
//   console.log(' create term ');
//   this.commandResourceService.createTermUsingPOST(this.term).subscribe(res => {

//     console.log('created term  ', res);
//     this.term = res;
//     this.saveSubTerms();


//   },
//   err => {
//     console.log('error creating term ', err);

//   });

// }



}
