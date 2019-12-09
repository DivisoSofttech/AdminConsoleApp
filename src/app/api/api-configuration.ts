/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//35.238.35.19:9081';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
