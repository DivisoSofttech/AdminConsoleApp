import { QueryResourceService, CommandResourceService } from 'src/app/api/services';
import { Component, OnInit, Input } from '@angular/core';
import { Term } from 'src/app/api/models';

@Component({
  selector: 'app-term-card',
  templateUrl: './term-card.component.html',
  styleUrls: ['./term-card.component.scss'],
})
export class TermCardComponent implements OnInit {

@Input()term:Term={};
  constructor(private commandResource:CommandResourceService) { }

  ngOnInit() {}

  deleteTerm(){
this.commandResource.deleteTermUsingDELETE(this.term.id).subscribe(
  res=>{
    console.log(" deleted term ",res);
    this.term=null;
  },
  err=>{
    console.log("error deleted term error",err);
  }
);

  }

}
