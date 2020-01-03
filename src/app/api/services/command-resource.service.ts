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
import { CancelledOrderLineDTO } from '../models/cancelled-order-line-dto';
import { RefoundDetailsDTO } from '../models/refound-details-dto';
import { DeductionValueTypeDTO } from '../models/deduction-value-type-dto';
import { NotificationDTO } from '../models/notification-dto';
import { OrderModel } from '../models/order-model';
import { OfferModel } from '../models/offer-model';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly createBannerUsingPOSTPath = '/api/command/banners';
  static readonly updateBannerUsingPUTPath = '/api/command/banners';
  static readonly deleteBannerUsingDELETEPath = '/api/command/banners/{id}';
  static readonly createCancellationRequestUsingPOSTPath = '/api/command/cancellation-requests';
  static readonly updateCancellationRequestUsingPUTPath = '/api/command/cancellation-requests';
  static readonly deleteCancellationRequestUsingDELETEPath = '/api/command/cancellation-requests/{id}';
  static readonly createCancelledOrderLineUsingPOSTPath = '/api/command/cancelled-order-lines';
  static readonly updateCancelledOrderLineUsingPUTPath = '/api/command/cancelled-order-lines';
  static readonly deleteCancelledOrderLineUsingDELETEPath = '/api/command/cancelled-order-lines/{id}';
  static readonly createRefundUsingPOSTPath = '/api/command/create/refundDetails/{orderId}/{paymentId}';
  static readonly createDeductionValueTypeUsingPOSTPath = '/api/command/deduction-value-types';
  static readonly createNotificationUsingPOSTPath = '/api/command/notifications';
  static readonly updateNotificationUsingPUTPath = '/api/command/notifications';
  static readonly deleteNotificationUsingDELETEPath = '/api/command/notifications/{id}';
  static readonly claimOfferUsingPOSTPath = '/api/command/offers/claim-offer';
  static readonly createOfferUsingPOSTPath = '/api/command/offers/create-offer';
  static readonly updateRefundDetailsUsingPUTPath = '/api/command/refund-details';
  static readonly deleteRefundDetailsUsingDELETEPath = '/api/command/refund-details/{id}';
  static readonly createRefundDetailsUsingPOSTPath = '/api/command/refund-details/{orderId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param bannerDTO bannerDTO
   * @return OK
   */
  createBannerUsingPOSTResponse(bannerDTO: BannerDTO): __Observable<__StrictHttpResponse<BannerDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = bannerDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/banners`,
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
  createBannerUsingPOST(bannerDTO: BannerDTO): __Observable<BannerDTO> {
    return this.createBannerUsingPOSTResponse(bannerDTO).pipe(
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
      this.rootUrl + `/api/command/banners`,
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

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/banners/${id}`,
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
      this.rootUrl + `/api/command/cancellation-requests`,
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
   * @param cancellationRequestDTO cancellationRequestDTO
   * @return OK
   */
  updateCancellationRequestUsingPUTResponse(cancellationRequestDTO: CancellationRequestDTO): __Observable<__StrictHttpResponse<CancellationRequestDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = cancellationRequestDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/cancellation-requests`,
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
  updateCancellationRequestUsingPUT(cancellationRequestDTO: CancellationRequestDTO): __Observable<CancellationRequestDTO> {
    return this.updateCancellationRequestUsingPUTResponse(cancellationRequestDTO).pipe(
      __map(_r => _r.body as CancellationRequestDTO)
    );
  }

  /**
   * @param id id
   */
  deleteCancellationRequestUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/cancellation-requests/${id}`,
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
  deleteCancellationRequestUsingDELETE(id: number): __Observable<null> {
    return this.deleteCancellationRequestUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param cancelledOrderLineDTO cancelledOrderLineDTO
   * @return OK
   */
  createCancelledOrderLineUsingPOSTResponse(cancelledOrderLineDTO: CancelledOrderLineDTO): __Observable<__StrictHttpResponse<CancelledOrderLineDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = cancelledOrderLineDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/cancelled-order-lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CancelledOrderLineDTO>;
      })
    );
  }
  /**
   * @param cancelledOrderLineDTO cancelledOrderLineDTO
   * @return OK
   */
  createCancelledOrderLineUsingPOST(cancelledOrderLineDTO: CancelledOrderLineDTO): __Observable<CancelledOrderLineDTO> {
    return this.createCancelledOrderLineUsingPOSTResponse(cancelledOrderLineDTO).pipe(
      __map(_r => _r.body as CancelledOrderLineDTO)
    );
  }

  /**
   * @param cancelledOrderLineDTO cancelledOrderLineDTO
   * @return OK
   */
  updateCancelledOrderLineUsingPUTResponse(cancelledOrderLineDTO: CancelledOrderLineDTO): __Observable<__StrictHttpResponse<CancelledOrderLineDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = cancelledOrderLineDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/cancelled-order-lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CancelledOrderLineDTO>;
      })
    );
  }
  /**
   * @param cancelledOrderLineDTO cancelledOrderLineDTO
   * @return OK
   */
  updateCancelledOrderLineUsingPUT(cancelledOrderLineDTO: CancelledOrderLineDTO): __Observable<CancelledOrderLineDTO> {
    return this.updateCancelledOrderLineUsingPUTResponse(cancelledOrderLineDTO).pipe(
      __map(_r => _r.body as CancelledOrderLineDTO)
    );
  }

  /**
   * @param id id
   */
  deleteCancelledOrderLineUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/cancelled-order-lines/${id}`,
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
  deleteCancelledOrderLineUsingDELETE(id: number): __Observable<null> {
    return this.deleteCancelledOrderLineUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CommandResourceService.CreateRefundUsingPOSTParams` containing the following parameters:
   *
   * - `refundDetailsDTO`: refundDetailsDTO
   *
   * - `paymentId`: paymentId
   *
   * - `orderId`: orderId
   *
   * @return OK
   */
  createRefundUsingPOSTResponse(params: CommandResourceService.CreateRefundUsingPOSTParams): __Observable<__StrictHttpResponse<RefoundDetailsDTO>> {
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
   * @param params The `CommandResourceService.CreateRefundUsingPOSTParams` containing the following parameters:
   *
   * - `refundDetailsDTO`: refundDetailsDTO
   *
   * - `paymentId`: paymentId
   *
   * - `orderId`: orderId
   *
   * @return OK
   */
  createRefundUsingPOST(params: CommandResourceService.CreateRefundUsingPOSTParams): __Observable<RefoundDetailsDTO> {
    return this.createRefundUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as RefoundDetailsDTO)
    );
  }

  /**
   * @param deductionValueTypeDTO deductionValueTypeDTO
   * @return OK
   */
  createDeductionValueTypeUsingPOSTResponse(deductionValueTypeDTO: DeductionValueTypeDTO): __Observable<__StrictHttpResponse<DeductionValueTypeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = deductionValueTypeDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/deduction-value-types`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeductionValueTypeDTO>;
      })
    );
  }
  /**
   * @param deductionValueTypeDTO deductionValueTypeDTO
   * @return OK
   */
  createDeductionValueTypeUsingPOST(deductionValueTypeDTO: DeductionValueTypeDTO): __Observable<DeductionValueTypeDTO> {
    return this.createDeductionValueTypeUsingPOSTResponse(deductionValueTypeDTO).pipe(
      __map(_r => _r.body as DeductionValueTypeDTO)
    );
  }

  /**
   * @param notificationDTO notificationDTO
   * @return OK
   */
  createNotificationUsingPOSTResponse(notificationDTO: NotificationDTO): __Observable<__StrictHttpResponse<NotificationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = notificationDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/notifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotificationDTO>;
      })
    );
  }
  /**
   * @param notificationDTO notificationDTO
   * @return OK
   */
  createNotificationUsingPOST(notificationDTO: NotificationDTO): __Observable<NotificationDTO> {
    return this.createNotificationUsingPOSTResponse(notificationDTO).pipe(
      __map(_r => _r.body as NotificationDTO)
    );
  }

  /**
   * @param notificationDTO notificationDTO
   * @return OK
   */
  updateNotificationUsingPUTResponse(notificationDTO: NotificationDTO): __Observable<__StrictHttpResponse<NotificationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = notificationDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/notifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotificationDTO>;
      })
    );
  }
  /**
   * @param notificationDTO notificationDTO
   * @return OK
   */
  updateNotificationUsingPUT(notificationDTO: NotificationDTO): __Observable<NotificationDTO> {
    return this.updateNotificationUsingPUTResponse(notificationDTO).pipe(
      __map(_r => _r.body as NotificationDTO)
    );
  }

  /**
   * @param id id
   */
  deleteNotificationUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/notifications/${id}`,
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
  deleteNotificationUsingDELETE(id: number): __Observable<null> {
    return this.deleteNotificationUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param orderModel orderModel
   * @return OK
   */
  claimOfferUsingPOSTResponse(orderModel: OrderModel): __Observable<__StrictHttpResponse<OrderModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = orderModel;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/offers/claim-offer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OrderModel>;
      })
    );
  }
  /**
   * @param orderModel orderModel
   * @return OK
   */
  claimOfferUsingPOST(orderModel: OrderModel): __Observable<OrderModel> {
    return this.claimOfferUsingPOSTResponse(orderModel).pipe(
      __map(_r => _r.body as OrderModel)
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

  /**
   * @param refundDetailsDTO refundDetailsDTO
   * @return OK
   */
  updateRefundDetailsUsingPUTResponse(refundDetailsDTO: RefoundDetailsDTO): __Observable<__StrictHttpResponse<RefoundDetailsDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = refundDetailsDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/refund-details`,
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
   * @param refundDetailsDTO refundDetailsDTO
   * @return OK
   */
  updateRefundDetailsUsingPUT(refundDetailsDTO: RefoundDetailsDTO): __Observable<RefoundDetailsDTO> {
    return this.updateRefundDetailsUsingPUTResponse(refundDetailsDTO).pipe(
      __map(_r => _r.body as RefoundDetailsDTO)
    );
  }

  /**
   * @param id id
   */
  deleteRefundDetailsUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/refund-details/${id}`,
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
  deleteRefundDetailsUsingDELETE(id: number): __Observable<null> {
    return this.deleteRefundDetailsUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `CommandResourceService.CreateRefundDetailsUsingPOSTParams` containing the following parameters:
   *
   * - `refoundDetailsDTO`: refoundDetailsDTO
   *
   * - `orderId`: orderId
   *
   * @return OK
   */
  createRefundDetailsUsingPOSTResponse(params: CommandResourceService.CreateRefundDetailsUsingPOSTParams): __Observable<__StrictHttpResponse<RefoundDetailsDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.refoundDetailsDTO;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/refund-details/${params.orderId}`,
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
   * @param params The `CommandResourceService.CreateRefundDetailsUsingPOSTParams` containing the following parameters:
   *
   * - `refoundDetailsDTO`: refoundDetailsDTO
   *
   * - `orderId`: orderId
   *
   * @return OK
   */
  createRefundDetailsUsingPOST(params: CommandResourceService.CreateRefundDetailsUsingPOSTParams): __Observable<RefoundDetailsDTO> {
    return this.createRefundDetailsUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as RefoundDetailsDTO)
    );
  }
}

module CommandResourceService {

  /**
   * Parameters for createRefundUsingPOST
   */
  export interface CreateRefundUsingPOSTParams {

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

  /**
   * Parameters for createRefundDetailsUsingPOST
   */
  export interface CreateRefundDetailsUsingPOSTParams {

    /**
     * refoundDetailsDTO
     */
    refoundDetailsDTO: RefoundDetailsDTO;

    /**
     * orderId
     */
    orderId: string;
  }
}

export { CommandResourceService }
