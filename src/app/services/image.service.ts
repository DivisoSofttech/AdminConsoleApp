import { Injectable } from '@angular/core';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  readonly options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera) { }

  //method to take picture with the phone camera
  public takePicture(): void {
    console.log("taking picture");
    this.camera.getPicture().then(data => {
      console.log("got image", data);
    }, error => {
      console.error("error while taking image", error);
    });
  }

  //uploads image from the gallery
  public uploadImage(event: any): void {
    console.log("uploading image",event);

  }
}