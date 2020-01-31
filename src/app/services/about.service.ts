import { NavController } from '@ionic/angular';
import { QueryResourceService } from 'src/app/api/services';
import { Injectable } from '@angular/core';
import { About } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  about: About = {};

  constructor(private queryResourceService: QueryResourceService,
    private navController:NavController) {
    this.queryResourceService.findallaboutUsingGET({}).subscribe(
      res => {
        if(res.numberOfElements>0){
        console.log('got about ', res.content[0]);
        this.about = res.content[0];
        }
        else{
          console.log('first empty ');
          this.about={id:null};
          this.navController.navigateForward("/new-about");
        }
      },
      err =>{
        console.log('err=>> getting about>>>>>', err);
  
       }
    );
   }
}
