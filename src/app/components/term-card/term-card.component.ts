import { SubtermcardComponent } from './../subtermcard/subtermcard.component';
import { ModalController } from '@ionic/angular';
import { TermsService } from './../../services/terms.service';
import { TermsAndConditionsPageModule } from './../../pages/terms-and-conditions/terms-and-conditions.module';
import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { Component, OnInit, Input } from '@angular/core';
import { Term, SubTerm } from 'src/app/api/models';

@Component({
  selector: 'app-term-card',
  templateUrl: './term-card.component.html',
  styleUrls: ['./term-card.component.scss'],
})
export class TermCardComponent implements OnInit {

@Input()term: Term = {};

  constructor(private commandResource: CommandResourceService,
              private queryResourceService: QueryResourceService,
              private termService: TermsService,
              private modalController : ModalController) { }

  ngOnInit() {
    console.log('term id is ', this.term.id);

  }

  deleteTerm() {
this.commandResource.deleteTermUsingDELETE(this.term.id).subscribe(
  res => {
    console.log(' deleted term ', res);
    this.term = null;
  },
  err => {
    console.log('error deleted term error', err);
  }
);
  }

deleteSubterm(subterm: SubTerm) {
        console.log(' deleted term ', subterm.id);

        this.commandResource.deleteSubTermUsingDELETE(subterm.id).subscribe(
    res => {
      console.log(' deleted term ', res);
      subterm.termDescription = null;
      console.log(' subterms ', this.term.subTerms);
},
    err => {
      console.log('error deleted term error', err);
    }
  );

}

  async editSubterm(subterm: SubTerm) {

console.log('edit this subterm ', subterm);
const modal =  await this.modalController.create({

  component: SubtermcardComponent,
  componentProps: {'subterm':subterm
    }
  });
    return await modal.present();


}


}
