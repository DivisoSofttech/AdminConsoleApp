/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OfferModel } from '../models/offer-model';

/**
 * Aggregate Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class AggregateCommandResourceService extends __BaseService {
  static readonly createOfferUsingPOSTPath = '/api/command/offers/create-offer';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param offerModel offerModel
   * @return OK
   */
  createOfferUsingPOSTResponse(offerModel: OfferModel): __Observable<__StrictHttpResponse<OfferModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = offerModel;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/offers/create-offer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OfferModel>;
      })
    );
  }
  /**
   * @param offerModel offerModel
   * @return OK
   */
  createOfferUsingPOST(offerModel: OfferModel): __Observable<OfferModel> {
    return this.createOfferUsingPOSTResponse(offerModel).pipe(
      __map(_r => _r.body as OfferModel)
    );
  }
}

module AggregateCommandResourceService {
}

export { AggregateCommandResourceService }
