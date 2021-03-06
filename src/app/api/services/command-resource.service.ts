/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AboutDTO } from '../models/about-dto';
import { BannerDTO } from '../models/banner-dto';
import { CancellationRequestDTO } from '../models/cancellation-request-dto';
import { CancelledOrderLineDTO } from '../models/cancelled-order-line-dto';
import { RefundDetailsDTO } from '../models/refund-details-dto';
import { RefundDTO } from '../models/refund-dto';
import { CancelledAuxilaryOrderLineDTO } from '../models/cancelled-auxilary-order-line-dto';
import { DeductionValueTypeDTO } from '../models/deduction-value-type-dto';
import { NotificationDTO } from '../models/notification-dto';
import { OrderModel } from '../models/order-model';
import { OfferModel } from '../models/offer-model';
import { SubTermDTO } from '../models/sub-term-dto';
import { Term } from '../models/term';
import { TermDTO } from '../models/term-dto';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly createAboutUsUsingPOSTPath = '/api/command/about';
  static readonly updateAboutUsUsingPUTPath = '/api/command/about';
  static readonly deleteAboutUsUsingDELETEPath = '/api/command/about/{id}';
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
  static readonly createCancelledAuxilaryOrderLineByListUsingPOSTPath = '/api/command/createCancelledAuxilaryOrderLineByList';
  static readonly createCancelledOrderLineByListUsingPOSTPath = '/api/command/createCancelledOrderLineByList';
  static readonly createDeductionValueTypeUsingPOSTPath = '/api/command/deduction-value-types';
  static readonly createNotificationUsingPOSTPath = '/api/command/notifications';
  static readonly updateNotificationUsingPUTPath = '/api/command/notifications';
  static readonly deleteNotificationUsingDELETEPath = '/api/command/notifications/{id}';
  static readonly claimOfferUsingPOSTPath = '/api/command/offers/claim-offer';
  static readonly createOfferUsingPOSTPath = '/api/command/offers/create-offer';
  static readonly updateRefundDetailsUsingPUTPath = '/api/command/refund-details';
  static readonly deleteRefundDetailsUsingDELETEPath = '/api/command/refund-details/{id}';
  static readonly createRefundDetailsUsingPOSTPath = '/api/command/refund-details/{orderId}';
  static readonly createSubTermUsingPOSTPath = '/api/command/sub-term';
  static readonly updateSubTermUsingPUTPath = '/api/command/sub-term';
  static readonly deleteSubTermUsingDELETEPath = '/api/command/sub-term/{id}';
  static readonly createTermUsingPOSTPath = '/api/command/term';
  static readonly updateTermUsingPUTPath = '/api/command/term';
  static readonly deleteTermUsingDELETEPath = '/api/command/term/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param aboutDTO aboutDTO
   * @return OK
   */
  createAboutUsUsingPOSTResponse(aboutDTO: AboutDTO): __Observable<__StrictHttpResponse<AboutDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = aboutDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/about`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AboutDTO>;
      })
    );
  }
  /**
   * @param aboutDTO aboutDTO
   * @return OK
   */
  createAboutUsUsingPOST(aboutDTO: AboutDTO): __Observable<AboutDTO> {
    return this.createAboutUsUsingPOSTResponse(aboutDTO).pipe(
      __map(_r => _r.body as AboutDTO)
    );
  }

  /**
   * @param aboutDTO aboutDTO
   * @return OK
   */
  updateAboutUsUsingPUTResponse(aboutDTO: AboutDTO): __Observable<__StrictHttpResponse<AboutDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = aboutDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/about`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AboutDTO>;
      })
    );
  }
  /**
   * @param aboutDTO aboutDTO
   * @return OK
   */
  updateAboutUsUsingPUT(aboutDTO: AboutDTO): __Observable<AboutDTO> {
    return this.updateAboutUsUsingPUTResponse(aboutDTO).pipe(
      __map(_r => _r.body as AboutDTO)
    );
  }

  /**
   * @param id id
   */
  deleteAboutUsUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/about/${id}`,
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
  deleteAboutUsUsingDELETE(id: number): __Observable<null> {
    return this.deleteAboutUsUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
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
  createRefundUsingPOSTResponse(params: CommandResourceService.CreateRefundUsingPOSTParams): __Observable<__StrictHttpResponse<RefundDetailsDTO>> {
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
        return _r as __StrictHttpResponse<RefundDetailsDTO>;
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
  createRefundUsingPOST(params: CommandResourceService.CreateRefundUsingPOSTParams): __Observable<RefundDetailsDTO> {
    return this.createRefundUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as RefundDetailsDTO)
    );
  }

  /**
   * @param cancelledAuxilaryOrderLineDTOList cancelledAuxilaryOrderLineDTOList
   */
  createCancelledAuxilaryOrderLineByListUsingPOSTResponse(cancelledAuxilaryOrderLineDTOList: Array<CancelledAuxilaryOrderLineDTO>): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = cancelledAuxilaryOrderLineDTOList;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/createCancelledAuxilaryOrderLineByList`,
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
   * @param cancelledAuxilaryOrderLineDTOList cancelledAuxilaryOrderLineDTOList
   */
  createCancelledAuxilaryOrderLineByListUsingPOST(cancelledAuxilaryOrderLineDTOList: Array<CancelledAuxilaryOrderLineDTO>): __Observable<null> {
    return this.createCancelledAuxilaryOrderLineByListUsingPOSTResponse(cancelledAuxilaryOrderLineDTOList).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param cancelledOrderLineDTOList cancelledOrderLineDTOList
   */
  createCancelledOrderLineByListUsingPOSTResponse(cancelledOrderLineDTOList: Array<CancelledOrderLineDTO>): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = cancelledOrderLineDTOList;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/createCancelledOrderLineByList`,
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
   * @param cancelledOrderLineDTOList cancelledOrderLineDTOList
   */
  createCancelledOrderLineByListUsingPOST(cancelledOrderLineDTOList: Array<CancelledOrderLineDTO>): __Observable<null> {
    return this.createCancelledOrderLineByListUsingPOSTResponse(cancelledOrderLineDTOList).pipe(
      __map(_r => _r.body as null)
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
  updateRefundDetailsUsingPUTResponse(refundDetailsDTO: RefundDetailsDTO): __Observable<__StrictHttpResponse<RefundDetailsDTO>> {
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
        return _r as __StrictHttpResponse<RefundDetailsDTO>;
      })
    );
  }
  /**
   * @param refundDetailsDTO refundDetailsDTO
   * @return OK
   */
  updateRefundDetailsUsingPUT(refundDetailsDTO: RefundDetailsDTO): __Observable<RefundDetailsDTO> {
    return this.updateRefundDetailsUsingPUTResponse(refundDetailsDTO).pipe(
      __map(_r => _r.body as RefundDetailsDTO)
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
   * - `refundDetailsDTO`: refundDetailsDTO
   *
   * - `orderId`: orderId
   *
   * @return OK
   */
  createRefundDetailsUsingPOSTResponse(params: CommandResourceService.CreateRefundDetailsUsingPOSTParams): __Observable<__StrictHttpResponse<RefundDetailsDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.refundDetailsDTO;

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
        return _r as __StrictHttpResponse<RefundDetailsDTO>;
      })
    );
  }
  /**
   * @param params The `CommandResourceService.CreateRefundDetailsUsingPOSTParams` containing the following parameters:
   *
   * - `refundDetailsDTO`: refundDetailsDTO
   *
   * - `orderId`: orderId
   *
   * @return OK
   */
  createRefundDetailsUsingPOST(params: CommandResourceService.CreateRefundDetailsUsingPOSTParams): __Observable<RefundDetailsDTO> {
    return this.createRefundDetailsUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as RefundDetailsDTO)
    );
  }

  /**
   * @param subTermDTO subTermDTO
   * @return OK
   */
  createSubTermUsingPOSTResponse(subTermDTO: SubTermDTO): __Observable<__StrictHttpResponse<SubTermDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = subTermDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/sub-term`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SubTermDTO>;
      })
    );
  }
  /**
   * @param subTermDTO subTermDTO
   * @return OK
   */
  createSubTermUsingPOST(subTermDTO: SubTermDTO): __Observable<SubTermDTO> {
    return this.createSubTermUsingPOSTResponse(subTermDTO).pipe(
      __map(_r => _r.body as SubTermDTO)
    );
  }

  /**
   * @param subTermDTO subTermDTO
   * @return OK
   */
  updateSubTermUsingPUTResponse(subTermDTO: SubTermDTO): __Observable<__StrictHttpResponse<SubTermDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = subTermDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/sub-term`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SubTermDTO>;
      })
    );
  }
  /**
   * @param subTermDTO subTermDTO
   * @return OK
   */
  updateSubTermUsingPUT(subTermDTO: SubTermDTO): __Observable<SubTermDTO> {
    return this.updateSubTermUsingPUTResponse(subTermDTO).pipe(
      __map(_r => _r.body as SubTermDTO)
    );
  }

  /**
   * @param id id
   */
  deleteSubTermUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/sub-term/${id}`,
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
  deleteSubTermUsingDELETE(id: number): __Observable<null> {
    return this.deleteSubTermUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param term term
   * @return OK
   */
  createTermUsingPOSTResponse(term: Term): __Observable<__StrictHttpResponse<Term>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = term;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/term`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Term>;
      })
    );
  }
  /**
   * @param term term
   * @return OK
   */
  createTermUsingPOST(term: Term): __Observable<Term> {
    return this.createTermUsingPOSTResponse(term).pipe(
      __map(_r => _r.body as Term)
    );
  }

  /**
   * @param termDTO termDTO
   * @return OK
   */
  updateTermUsingPUTResponse(termDTO: TermDTO): __Observable<__StrictHttpResponse<TermDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = termDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/term`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TermDTO>;
      })
    );
  }
  /**
   * @param termDTO termDTO
   * @return OK
   */
  updateTermUsingPUT(termDTO: TermDTO): __Observable<TermDTO> {
    return this.updateTermUsingPUTResponse(termDTO).pipe(
      __map(_r => _r.body as TermDTO)
    );
  }

  /**
   * @param id id
   */
  deleteTermUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/term/${id}`,
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
  deleteTermUsingDELETE(id: number): __Observable<null> {
    return this.deleteTermUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
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
    refundDetailsDTO: RefundDTO;

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
     * refundDetailsDTO
     */
    refundDetailsDTO: RefundDetailsDTO;

    /**
     * orderId
     */
    orderId: string;
  }
}

export { CommandResourceService }
