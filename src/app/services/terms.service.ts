import { Injectable } from '@angular/core';
import { Term } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class TermsService {

  terms:Term[]=[];
  constructor() { }
}
