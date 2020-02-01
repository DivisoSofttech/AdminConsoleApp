import { Term } from 'src/app/api/models';
import { NavController } from '@ionic/angular';
import { QueryResourceService } from 'src/app/api/services';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class TermsService {

  term: Term = {};
  constructor(private queryResourceService: QueryResourceService,
              private navController: NavController) {
                this.load().then(res => {
                  console.log('resolved',res);
                  this.term=res;
                  this.getSubterms();

                  console.log('term id is', this.term);
            
                },
                err => {
                  console.log('rejected');
            
                });
            


  }

//   load() {
//   return new Promise((resolve,reject)=>{ this.queryResourceService.findalltermsUsingGETResponse({}).subscribe(
//       res => {
//         if (res.body.numberOfElements > 0) {
//         console.log('got terms ', res.body.content[0]);
//         this.term = res.body.content[0];
//         resolve( res.body.content[0]);
//         } else {
//           console.log('first empty ');
//           this.term = {id:null};
//           this.navController.navigateForward('/new-terms-and-conditions');
//         }
//       },
//       err => {
//         console.log('err=>> getting terms >>>>>', err);

//        }
//     );
//   });
// }


load() {
  return new Promise((resolve,reject)=>{ this.queryResourceService.findTermByIdUsingGET(14).subscribe(
      res => {
        if(res!==null){
        console.log('got terms', res);
        this.term = res;
        resolve( res);
        } else {
          console.log('first empty ');
          this.term = {id:null,title:''};
          this.navController.navigateForward('/new-terms-and-conditions');
        }
      },
      err => {
        console.log('err=>> getting terms >>>>>', err);

       }
    );
  });
}


getSubterms() {
  this.queryResourceService.getSubTermsByTermIdUsingGETResponse(this.term.id).subscribe( res => {
    this.term.subTerms = res.body;
    console.log('got subterms ', res.body);
  }, err => {

    console.log(' error getting subterms ', err);

  }

);


}

}
