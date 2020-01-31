import { CommandResourceService } from 'src/app/api/services';
import { ModalController } from '@ionic/angular';
import { SubTerm } from './../../api/models/sub-term';
import { Component, OnInit } from '@angular/core';
import { Util } from 'src/app/services/util';

@Component({
  selector: 'app-subtermcard',
  templateUrl: './subtermcard.component.html',
  styleUrls: ['./subtermcard.component.scss'],
})
export class SubtermcardComponent implements OnInit {

  subterm: SubTerm = {};
  subTermDescription = '';
  constructor(private modalController: ModalController,
              private commandResourceService: CommandResourceService,
              private util:Util) { }

  ngOnInit() {

    console.log('dsknedio subterm ', this.subterm);
    this.subTermDescription = this.subterm.termDescription;

    console.log('dsknedio subterm description ', this.subTermDescription);

  }

  dismiss() {

    console.log('dissmissing');
    this.subTermDescription='';
    this.modalController.dismiss();

  }

  update() {

    this.util.createLoader().then(loader=>{

    if(this.subterm.termDescription !==  this.subTermDescription){
    this.subterm.termDescription = this.subTermDescription;
    this.commandResourceService.updateSubTermUsingPUT(this.subterm).subscribe(

      res => {
console.log('updated sub term ', res);
loader.dismiss();
this.dismiss();

      },
      err => {
        console.log('error updating sub term ', err);
        loader.dismiss();
        this.util.createToast('An error occured try again later');

      }

    );

  }
  
  else{
    loader.dismiss();
    this.dismiss();

  }
});
  }

}
