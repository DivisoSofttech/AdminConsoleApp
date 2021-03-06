import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { CropperSettings, ImageCropperComponent } from 'ngx-img-cropper';
@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.scss']
})
export class ImageSelectorComponent implements OnInit {
  public data: any = {};
  @ViewChild('cropper', { static: false })
  cropper: ImageCropperComponent;
  cropperSettings: CropperSettings;
  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
  ) {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 400;
    this.cropperSettings.height = 200;
    this.cropperSettings.croppedWidth = 400;
    this.cropperSettings.croppedHeight = 200;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 200;
    this.cropperSettings.noFileInput = true;
    this.cropperSettings.compressRatio = 1.6;
  }

  ngOnInit() {
    this.loadingController.create({
      spinner: 'bubbles',
      duration: 2000
    }).then(loader => {
      loader.present();
    });
   }

  onChange($event: any) {
    const image: any = new Image();
    const file: File = $event.target.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (loadEvent: any) => {
      image.src = loadEvent.target.result;
      this.cropper.setImage(image);
    };
    myReader.readAsDataURL(file);
  }

  dismiss() {
    this.modalController.dismiss();
  }
  save() {
    this.modalController.dismiss(this.data);
  }
}
