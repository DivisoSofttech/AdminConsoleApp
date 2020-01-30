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
   * @param params The `CommandResourceService.CreateAboutUsUsingPOSTParams` containing the following parameters:
   *
   * - `supportPhone`:
   *
   * - `supportMail`:
   *
   * - `id`:
   *
   * - `description`:
   *
   * - `addOn3`:
   *
   * - `addOn2`:
   *
   * - `addOn1`:
   *
   * @return OK
   */
  createAboutUsUsingPOSTResponse(params: CommandResourceService.CreateAboutUsUsingPOSTParams): __Observable<__StrictHttpResponse<AboutDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.supportPhone != null) __params = __params.set('supportPhone', params.supportPhone.toString());
    if (params.supportMail != null) __params = __params.set('supportMail', params.supportMail.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.description != null) __params = __params.set('description', params.description.toString());
    if (params.addOn3 != null) __params = __params.set('addOn3', params.addOn3.toString());
    if (params.addOn2 != null) __params = __params.set('addOn2', params.addOn2.toString());
    if (params.addOn1 != null) __params = __params.set('addOn1', params.addOn1.toString());
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
   * @param params The `CommandResourceService.CreateAboutUsUsingPOSTParams` containing the following parameters:
   *
   * - `supportPhone`:
   *
   * - `supportMail`:
   *
   * - `id`:
   *
   * - `description`:
   *
   * - `addOn3`:
   *
   * - `addOn2`:
   *
   * - `addOn1`:
   *
   * @return OK
   */
  createAboutUsUsingPOST(params: CommandResourceService.CreateAboutUsUsingPOSTParams): __Observable<AboutDTO> {
    return this.createAboutUsUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as AboutDTO)
    );
  }

  /**
   * @param params The `CommandResourceService.UpdateAboutUsUsingPUTParams` containing the following parameters:
   *
   * - `supportPhone`:
   *
   * - `supportMail`:
   *
   * - `id`:
   *
   * - `description`:
   *
   * - `addOn3`:
   *
   * - `addOn2`:
   *
   * - `addOn1`:
   *
   * @return OK
   */
  updateAboutUsUsingPUTResponse(params: CommandResourceService.UpdateAboutUsUsingPUTParams): __Observable<__StrictHttpResponse<AboutDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.supportPhone != null) __params = __params.set('supportPhone', params.supportPhone.toString());
    if (params.supportMail != null) __params = __params.set('supportMail', params.supportMail.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.description != null) __params = __params.set('description', params.description.toString());
    if (params.addOn3 != null) __params = __params.set('addOn3', params.addOn3.toString());
    if (params.addOn2 != null) __params = __params.set('addOn2', params.addOn2.toString());
    if (params.addOn1 != null) __params = __params.set('addOn1', params.addOn1.toString());
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
   * @param params The `CommandResourceService.UpdateAboutUsUsingPUTParams` containing the following parameters:
   *
   * - `supportPhone`:
   *
   * - `supportMail`:
   *
   * - `id`:
   *
   * - `description`:
   *
   * - `addOn3`:
   *
   * - `addOn2`:
   *
   * - `addOn1`:
   *
   * @return OK
   */
  updateAboutUsUsingPUT(params: CommandResourceService.UpdateAboutUsUsingPUTParams): __Observable<AboutDTO> {
    return this.updateAboutUsUsingPUTResponse(params).pipe(
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
   * @param params The `CommandResourceService.CreateSubTermUsingPOSTParams` containing the following parameters:
   *
   * - `termId`:
   *
   * - `termDescription`:
   *
   * - `id`:
   *
   * @return OK
   */
  createSubTermUsingPOSTResponse(params: CommandResourceService.CreateSubTermUsingPOSTParams): __Observable<__StrictHttpResponse<SubTermDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.termId != null) __params = __params.set('termId', params.termId.toString());
    if (params.termDescription != null) __params = __params.set('termDescription', params.termDescription.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
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
   * @param params The `CommandResourceService.CreateSubTermUsingPOSTParams` containing the following parameters:
   *
   * - `termId`:
   *
   * - `termDescription`:
   *
   * - `id`:
   *
   * @return OK
   */
  createSubTermUsingPOST(params: CommandResourceService.CreateSubTermUsingPOSTParams): __Observable<SubTermDTO> {
    return this.createSubTermUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as SubTermDTO)
    );
  }

  /**
   * @param params The `CommandResourceService.UpdateSubTermUsingPUTParams` containing the following parameters:
   *
   * - `termId`:
   *
   * - `termDescription`:
   *
   * - `id`:
   *
   * @return OK
   */
  updateSubTermUsingPUTResponse(params: CommandResourceService.UpdateSubTermUsingPUTParams): __Observable<__StrictHttpResponse<SubTermDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.termId != null) __params = __params.set('termId', params.termId.toString());
    if (params.termDescription != null) __params = __params.set('termDescription', params.termDescription.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
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
   * @param params The `CommandResourceService.UpdateSubTermUsingPUTParams` containing the following parameters:
   *
   * - `termId`:
   *
   * - `termDescription`:
   *
   * - `id`:
   *
   * @return OK
   */
  updateSubTermUsingPUT(params: CommandResourceService.UpdateSubTermUsingPUTParams): __Observable<SubTermDTO> {
    return this.updateSubTermUsingPUTResponse(params).pipe(
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
   * @param params The `CommandResourceService.CreateTermUsingPOSTParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `subTerms[0].termDescription`:
   *
   * - `subTerms[0].term.title`:
   *
   * - `subTerms[0].term.id`:
   *
   * - `subTerms[0].id`:
   *
   * - `id`:
   *
   * @return OK
   */
  createTermUsingPOSTResponse(params: CommandResourceService.CreateTermUsingPOSTParams): __Observable<__StrictHttpResponse<Term>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.title != null) __params = __params.set('title', params.title.toString());
    if (params.subTerms0TermDescription != null) __params = __params.set('subTerms[0].termDescription', params.subTerms0TermDescription.toString());
    if (params.subTerms0TermTitle != null) __params = __params.set('subTerms[0].term.title', params.subTerms0TermTitle.toString());
    if (params.subTerms0TermId != null) __params = __params.set('subTerms[0].term.id', params.subTerms0TermId.toString());
    if (params.subTerms0Id != null) __params = __params.set('subTerms[0].id', params.subTerms0Id.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
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
   * @param params The `CommandResourceService.CreateTermUsingPOSTParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `subTerms[0].termDescription`:
   *
   * - `subTerms[0].term.title`:
   *
   * - `subTerms[0].term.id`:
   *
   * - `subTerms[0].id`:
   *
   * - `id`:
   *
   * @return OK
   */
  createTermUsingPOST(params: CommandResourceService.CreateTermUsingPOSTParams): __Observable<Term> {
    return this.createTermUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Term)
    );
  }

  /**
   * @param params The `CommandResourceService.UpdateTermUsingPUTParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `id`:
   *
   * @return OK
   */
  updateTermUsingPUTResponse(params: CommandResourceService.UpdateTermUsingPUTParams): __Observable<__StrictHttpResponse<TermDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.title != null) __params = __params.set('title', params.title.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
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
   * @param params The `CommandResourceService.UpdateTermUsingPUTParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `id`:
   *
   * @return OK
   */
  updateTermUsingPUT(params: CommandResourceService.UpdateTermUsingPUTParams): __Observable<TermDTO> {
    return this.updateTermUsingPUTResponse(params).pipe(
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
   * Parameters for createAboutUsUsingPOST
   */
  export interface CreateAboutUsUsingPOSTParams {
    supportPhone?: number;
    supportMail?: string;
    id?: number;
    description?: string;
    addOn3?: string;
    addOn2?: string;
    addOn1?: string;
  }

  /**
   * Parameters for updateAboutUsUsingPUT
   */
  export interface UpdateAboutUsUsingPUTParams {
    supportPhone?: number;
    supportMail?: string;
    id?: number;
    description?: string;
    addOn3?: string;
    addOn2?: string;
    addOn1?: string;
  }

  /**
   * Parameters for createRefundUsingPOST
   */
  export interface CreateRefundUsingPOSTParams {

    /**
     * refundDetailsDTO
     */
    refundDetailsDTO: RefundDetailsDTO;

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

  /**
   * Parameters for createSubTermUsingPOST
   */
  export interface CreateSubTermUsingPOSTParams {
    termId?: number;
    termDescription?: string;
    id?: number;
  }

  /**
   * Parameters for updateSubTermUsingPUT
   */
  export interface UpdateSubTermUsingPUTParams {
    termId?: number;
    termDescription?: string;
    id?: number;
  }

  /**
   * Parameters for createTermUsingPOST
   */
  export interface CreateTermUsingPOSTParams {
    title?: string;
    subTerms0TermDescription?: string;
    subTerms0TermTitle?: string;
    subTerms0TermId?: number;
    subTerms0Id?: number;
    id?: number;
  }

  /**
   * Parameters for updateTermUsingPUT
   */
  export interface UpdateTermUsingPUTParams {
    title?: string;
    id?: number;
  }
}

export { CommandResourceService }
