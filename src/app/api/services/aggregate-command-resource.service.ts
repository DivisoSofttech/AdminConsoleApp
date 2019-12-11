/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BannerDTO } from '../models/banner-dto';
import { CancellationRequestDTO } from '../models/cancellation-request-dto';
import { RefoundDetailsDTO } from '../models/refound-details-dto';
import { OfferModel } from '../models/offer-model';

/**
 * Aggregate Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class AggregateCommandResourceService extends __BaseService {
  static readonly createBannerUsingPOSTPath = '/api/command/banner/create-banner';
  static readonly updateBannerUsingPUTPath = '/api/command/banner/update-banner';
  static readonly deleteBannerUsingDELETEPath = '/api/command/banner/update-banner/id';
  static readonly createCancellationRequestUsingPOSTPath = '/api/command/create/cancellationRequest';
  static readonly createRefundDetailsUsingPOSTPath = '/api/command/create/refundDetails/{orderId}/{paymentId}';
  static readonly createOfferUsingPOSTPath = '/api/command/offers/create-offer';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param bannerDto bannerDto
   * @return OK
   */
  createBannerUsingPOSTResponse(bannerDto: BannerDTO): __Observable<__StrictHttpResponse<BannerDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = bannerDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/banner/create-banner`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BannerDTO>;
      })
    );
  }
  /**
   * @param bannerDto bannerDto
   * @return OK
   */
  createBannerUsingPOST(bannerDto: BannerDTO): __Observable<BannerDTO> {
    return this.createBannerUsingPOSTResponse(bannerDto).pipe(
      __map(_r => _r.body as BannerDTO)
    );
  }

  /**
   * @param bannerDTO bannerDTO
   * @return OK
   */
  updateBannerUsingPUTResponse(bannerDTO: BannerDTO): __Observable<__StrictHttpResponse<BannerDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = bannerDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/banner/update-banner`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BannerDTO>;
      })
    );
  }
  /**
   * @param bannerDTO bannerDTO
   * @return OK
   */
  updateBannerUsingPUT(bannerDTO: BannerDTO): __Observable<BannerDTO> {
    return this.updateBannerUsingPUTResponse(bannerDTO).pipe(
      __map(_r => _r.body as BannerDTO)
    );
  }

  /**
   * @param id id
   */
  deleteBannerUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = id;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/banner/update-banner/id`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteBannerUsingDELETE(id: number): __Observable<null> {
    return this.deleteBannerUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param cancellationRequestDTO cancellationRequestDTO
   * @return OK
   */
  createCancellationRequestUsingPOSTResponse(cancellationRequestDTO: CancellationRequestDTO): __Observable<__StrictHttpResponse<CancellationRequestDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = cancellationRequestDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create/cancellationRequest`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CancellationRequestDTO>;
      })
    );
  }
  /**
   * @param cancellationRequestDTO cancellationRequestDTO
   * @return OK
   */
  createCancellationRequestUsingPOST(cancellationRequestDTO: CancellationRequestDTO): __Observable<CancellationRequestDTO> {
    return this.createCancellationRequestUsingPOSTResponse(cancellationRequestDTO).pipe(
      __map(_r => _r.body as CancellationRequestDTO)
    );
  }

  /**
   * @param params The `AggregateCommandResourceService.CreateRefundDetailsUsingPOSTParams` containing the following parameters:
   *
   * - `refundDetailsDTO`: refundDetailsDTO
   *
   * - `paymentId`: paymentId
   *
   * - `orderId`: orderId
   *
   * @return OK
   */
  createRefundDetailsUsingPOSTResponse(params: AggregateCommandResourceService.CreateRefundDetailsUsingPOSTParams): __Observable<__StrictHttpResponse<RefoundDetailsDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.refundDetailsDTO;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/create/refundDetails/${params.orderId}/${params.paymentId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RefoundDetailsDTO>;
      })
    );
  }
  /**
   * @param params The `AggregateCommandResourceService.CreateRefundDetailsUsingPOSTParams` containing the following parameters:
   *
   * - `refundDetailsDTO`: refundDetailsDTO
   *
   * - `paymentId`: paymentId
   *
   * - `orderId`: orderId
   *
   * @return OK
   */
  createRefundDetailsUsingPOST(params: AggregateCommandResourceService.CreateRefundDetailsUsingPOSTParams): __Observable<RefoundDetailsDTO> {
    return this.createRefundDetailsUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as RefoundDetailsDTO)
    );
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

  /**
   * Parameters for createRefundDetailsUsingPOST
   */
  export interface CreateRefundDetailsUsingPOSTParams {

    /**
     * refundDetailsDTO
     */
    refundDetailsDTO: RefoundDetailsDTO;

    /**
     * paymentId
     */
    paymentId: string;

    /**
     * orderId
     */
    orderId: string;
  }
}

export { AggregateCommandResourceService }
