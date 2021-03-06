import { BannerDTO } from './../api/models/banner-dto';
import { Injectable } from '@angular/core';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  processing: boolean;
  public uploadedImage: any;
  public croppedImage: any;
  public isImageCropped: boolean;

  banner = new BehaviorSubject(null);

  readonly options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  };

  constructor(private camera: Camera) { }

  // method to take picture with the phone camera
  public takePicture(): void {
    console.log('taking picture');
    this.camera.getPicture().then(data => {
      console.log('got image', data);
    }, error => {
      console.error('error while taking image', error);
    });
  }

  updateBannerPage( banner) {
    this.banner.next(banner);
  }

  // uploads image from the gallery
  public uploadImage(selectedFile: any): void {
    console.log('uploading image', event);
    selectedFile.click();
    this.isImageCropped = false;
    this.croppedImage = null;
    const that = this;
    selectedFile.onchange = () => {
      const file = selectedFile.files[0];
      const reader = new FileReader();

      reader.onload = () => {
// tslint:disable-next-line: indent
	    console.log('in event listener');
     that.processing = true;
     that.getOrientation(selectedFile.files[0], (orientation) => {
        console.log('orientation', orientation);
        if (orientation > 1) {
            that.resetOrientation(reader.result, orientation, (resetBase64Image) => {
              that.uploadedImage = resetBase64Image;
            });
          } else {
            that.uploadedImage = reader.result;
          }
        });
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    };
  }

  imageLoaded() {
    console.log('image is loaded');

    this.processing = false;
  }

  getOrientation(file, callback) {
    const reader = new FileReader();
    reader.onload = function(e: any) {

      const view = new DataView(e.target.result);
      if (view.getUint16(0, false) != 0xFFD8) { return callback(-2); }
      let length = view.byteLength, offset = 2;
      while (offset < length) {
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
          if (view.getUint32(offset += 2, false) != 0x45786966) { return callback(-1); }
          const little = view.getUint16(offset += 6, false) == 0x4949;
          offset += view.getUint32(offset + 4, little);
          const tags = view.getUint16(offset, little);
          offset += 2;
          for (let i = 0; i < tags; i++) {
            if (view.getUint16(offset + (i * 12), little) == 0x0112) {
              return callback(view.getUint16(offset + (i * 12) + 8, little));
            }
          }
        } else if ((marker & 0xFF00) != 0xFF00) { break; } else { offset += view.getUint16(offset, false); }
      }
      return callback(-1);
    };
    reader.readAsArrayBuffer(file);
  }

  resetOrientation(srcBase64, srcOrientation, callback) {
    const img = new Image();

    img.onload = function() {
      const width = img.width,
        height = img.height,
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

      // set proper canvas dimensions before transform & export
      if (4 < srcOrientation && srcOrientation < 9) {
        canvas.width = height;
        canvas.height = width;
      } else {
        canvas.width = width;
        canvas.height = height;
      }

      // transform context before drawing image
      switch (srcOrientation) {
        case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
        case 3: ctx.transform(-1, 0, 0, -1, width, height); break;
        case 4: ctx.transform(1, 0, 0, -1, 0, height); break;
        case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
        case 6: ctx.transform(0, 1, -1, 0, height, 0); break;
        case 7: ctx.transform(0, -1, -1, 0, height, width); break;
        case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
        default: break;
      }

      // draw image
      ctx.drawImage(img, 0, 0);

      // export base64
      callback(canvas.toDataURL());
    };

    img.src = srcBase64;
  }

  public removeImage(): void {
    this.uploadedImage = null;
    this.croppedImage = null;
  }

  public cropImage(event: ImageCroppedEvent) {
    console.log('image cropped', event);
    this.croppedImage = event.base64;
  }

  public finishCropping() {
    this.isImageCropped = true;
    console.log('image is cropped', this.isImageCropped);

  }
}
