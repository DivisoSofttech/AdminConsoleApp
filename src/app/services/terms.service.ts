import { Term } from 'src/app/api/models';
import { NavController } from '@ionic/angular';
import { QueryResourceService } from 'src/app/api/services';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class TermsService {

  terms: Term[] = [];
  constructor(private queryResourceService: QueryResourceService,
              private navController: NavController) {
                this.load().then(res => {
                  console.log('resolved', res);
                  // this.term = res;
                  // this.getSubterms();

                  console.log('terms is', this.terms);

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
  return new Promise((resolve, reject) => { this.queryResourceService.findalltermsUsingGET({size:10}).subscribe(
      res => {

        console.log('load term', res);

        if (res != null) {

        console.log('got term', res);
        this.terms = res.content;
        resolve( res);
        this.terms.forEach(ele=>{

          this.getSubterms(ele);

        });
        

        } else {

          console.log('first empty ');
          this.terms = [];
          this.navController.navigateForward('/new-terms-and-conditions');

        }
      },
      err => {
        console.log('err=>> getting terms >>>>>', err);

       }
    );
  });
}



getSubterms(term:Term) {
  this.queryResourceService.getSubTermsByTermIdUsingGETResponse(term.id).subscribe( res => {
    term.subTerms = res.body;
    console.log('got subterms ', res.body);
  }, err => {

    console.log(' error getting subterms ', err);

  }

);


}

}
