import { TermsService } from './../../services/terms.service';
import { QueryResourceService } from 'src/app/api/services';
import { Term } from './../../api/models/term';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.page.html',
  styleUrls: ['./terms-and-conditions.page.scss'],
})
export class TermsAndConditionsPage implements OnInit {

  constructor(private queryResource: QueryResourceService,
              private termsService: TermsService) { }



  ngOnInit() {
   
  }


}
