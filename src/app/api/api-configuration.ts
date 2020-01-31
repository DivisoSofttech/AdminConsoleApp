/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'https://dev.ci3.divisosofttech.com:8074';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
