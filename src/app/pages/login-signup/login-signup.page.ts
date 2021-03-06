import { QueryResourceService } from 'src/app/api/services';
import { Util } from './../../services/util';
import { KeycloakService } from './../../services/security/keycloak.service';
import { IonSlides } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.page.html',
  styleUrls: ['./login-signup.page.scss']
})
export class LoginSignupPage implements OnInit {
  username = '';
  password = '';
  email = '';
  loginTab = true;
  value = 'login';
  phone: number;
  @ViewChild('slides', { static: false }) slides: IonSlides;

  constructor(
    private keycloakService: KeycloakService,
    private util: Util,
    private queryResourceService:QueryResourceService
  ) {}

  ngOnInit() {
    this.isLoggedIn();
  }

  // Login and Register Methods

  login() {
    this.util.createLoader().then(loader => {
      loader.present();
      this.keycloakService.authenticate(
        { username: this.username, password: this.password },
        () => {
          loader.dismiss();
          this.util.navigateRoot();
          console.log('haiiii ');
          this.util.createToast('Logged in successfully' , 'checkmark-circle-outline');
        },
        () => {
          loader.dismiss();
          this.util.createToast('Invalid user credentials' , 'close-circle-outline');
        }
      );
    });
  }

  signup() {
    this.util.createLoader().then(loader => {
      loader.present();
      const user = { username: this.username, email: this.email };
      this.keycloakService.createAccount(
        user,
        this.password,
        res => {
          // this.createStore(res.preferred_username);
          this.login();
          loader.dismiss();
          console.log('account created');
        },
        err => {
          loader.dismiss();
          if (err.response.status === 409) {
            this.util.createToast('User Already Exists');
            this.slideChange();
          } else {
            this.util.createToast('Cannot Register User. Please Try Later');
          }
        }
        );
      });
    }

    isLoggedIn() {
      this.keycloakService
      .isAuthenticated()
      .then(() => {
        this.util.navigateRoot();
      })
      .catch(() => {
        console.log('Not Logged In');
      });
    }

      // View Related Methods

      loginDisabled(): boolean {
        if (this.username === '' || this.password === '') {
      return true;
    } else {
      return false;
    }
  }

  registerDisabled(): boolean {
    if (this.username === '' || this.password === '' || this.email === '') {
      return true;
    } else {
      return false;
    }
  }

  slide(value) {
    this.value = value.detail.value;
    if (this.value === 'login') {
      this.slides.slideTo(0);
    } else {
      this.slides.slideTo(1);
    }
  }

  slideChange() {
    let currentSlide;
    this.slides.getActiveIndex().then(num => {
      currentSlide = num;
      if (this.value === 'login' && currentSlide !== 0) {
        this.value = 'signup';
      } else if (this.value === 'signup' && currentSlide !== 1) {
        this.value = 'login';
      }
    });
  }

  setSlideValue(): number {
    this.slideChange();
    return 1;
  }
}
