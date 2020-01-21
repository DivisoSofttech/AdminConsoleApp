import { Injectable } from '@angular/core';
import { CancellationRequestDTO, CancellationRequest } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class CancellationRequestService {

  cancellationRequestDTOs: CancellationRequest[] = [];
  completedRequestDTOs: CancellationRequest[] = [];
  constructor() { }
}
