import { AboutService } from './../../services/about.service';
import { SubTermDTO } from './../../api/models/sub-term-dto';
import { TermDTO } from './../../api/models/term-dto';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CommandResourceService } from 'src/app/api/services';
import { Util } from 'src/app/services/util';
import { AboutDTO } from 'src/app/api/models';

@Component({
  selector: 'app-new-about',
  templateUrl: './new-about.page.html',
  styleUrls: ['./new-about.page.scss'],
})
export class NewAboutPage implements OnInit {

  constructor(private navController: NavController,
              private commandResourceService: CommandResourceService,
              private util: Util,
              private formBuilder: FormBuilder,
              private aboutService: AboutService) {

}

private aboutDTO: AboutDTO = {};



aboutForm = this.formBuilder.group({
description: ['', [Validators.required, ]],
supportMail: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
supportPhone: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
});


ngOnInit() {
  this.aboutDTO=this.aboutService.about;
  this.aboutForm.get('description').setValue(this.aboutDTO.description);
  this.aboutForm.get('supportMail').setValue(this.aboutDTO.supportMail);
  this.aboutForm.get('supportPhone').setValue(this.aboutDTO.supportPhone);


}


close() {
this.navController.navigateForward('/about');
}

save() {

if (this.aboutForm.valid) {
this.aboutDTO.description = this.aboutForm.get('description').value;
this.aboutDTO.supportMail = this.aboutForm.get('supportMail').value;
this.aboutDTO.supportPhone = this.aboutForm.get('supportPhone').value;
console.log('About ', this.aboutDTO);

this.util.createLoader().then(loader => {
loader.present();
console.log(' about id ', this.aboutService.about);

if(this.aboutService.about.id===null){
this.commandResourceService.createAboutUsUsingPOST(this.aboutDTO).subscribe(
res => {

console.log('created about ', res);

this.navController.navigateForward('/about');
this.aboutService.about=res;
loader.dismiss();
this.aboutForm.reset();
},
err => {
console.log('error creating about ', err);
loader.dismiss();

this.util.createToast('Ops an error occuerd try again later');

}
);
}else{

  this.commandResourceService.updateAboutUsUsingPUT(this.aboutDTO).subscribe(
    res => {
    
    console.log('updated about ', res);
    
    this.navController.navigateForward('/about');
    loader.dismiss();
    this.aboutForm.reset();
    },
    err => {
    console.log('error updating about ', err);
    loader.dismiss();
    
    this.util.createToast('Ops an error occuerd try again later');
    
    }
    );

}
}
);
} else {
this.util.createToast(' Invalid data');
}
}




}
