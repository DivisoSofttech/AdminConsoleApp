import { Injectable } from '@angular/core';
import { CancellationRequestDTO } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class CancellationRequestService {

  cancellationRequestDTOs: CancellationRequestDTO[] = [];
  completedRequestDTOs: CancellationRequestDTO[] = [];
  constructor() { }
}
