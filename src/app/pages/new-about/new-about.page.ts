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
              private formBuilder: FormBuilder) {

}

private aboutDTO: AboutDTO = {};



aboutForm = this.formBuilder.group({
description: ['', [Validators.required, ]],
supportMail: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
supportPhone: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
});


ngOnInit() {
}


close() {
this.navController.navigateForward('/terms-and-conditions');
}

save() {

if (this.aboutForm.valid) {
this.aboutDTO.description = this.aboutForm.get('description').value;
this.aboutDTO.supportMail = this.aboutForm.get('supportMail').value;
this.aboutDTO.supportPhone = this.aboutForm.get('supportPhone').value;
console.log('About ', this.aboutDTO);

this.util.createLoader().then(loader => {
loader.present();
this.commandResourceService.createAboutUsUsingPOST(this.aboutDTO).subscribe(
res => {

console.log('created about ', res);

this.navController.navigateForward('/terms-and-conditions');
loader.dismiss();
this.aboutForm.reset();
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




}
