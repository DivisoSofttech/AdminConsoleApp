/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//34.66.8.163:8074';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
