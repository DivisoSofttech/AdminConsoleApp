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
import { NotificationDTO } from '../models/notification-dto';
import { RefundDetailsDTO } from '../models/refund-details-dto';
import { AuxItem } from '../models/aux-item';
import { PageOfBanner } from '../models/page-of-banner';
import { CancellationDetails } from '../models/cancellation-details';
import { PageOfCancellationRequest } from '../models/page-of-cancellation-request';
import { Customer } from '../models/customer';
import { OfferLine } from '../models/offer-line';
import { PageOfOrderMaster } from '../models/page-of-order-master';
import { Order } from '../models/order';
import { OrderLine } from '../models/order-line';
import { PageOfStore } from '../models/page-of-store';
import { CancellationRequest } from '../models/cancellation-request';
import { PdfDTO } from '../models/pdf-dto';
import { RefundDetails } from '../models/refund-details';
import { StoreDTO } from '../models/store-dto';
import { Store } from '../models/store';
import { DeductionValueTypeDTO } from '../models/deduction-value-type-dto';
import { OfferDTO } from '../models/offer-dto';
import { ReportSummary } from '../models/report-summary';
import { DataResponse } from '../models/data-response';

/**
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly searchBannerUsingGETPath = '/api/query/_search/banners/';
  static readonly searchCancellationRequestsUsingGETPath = '/api/query/_search/cancellation-requests';
  static readonly searchCancelledOrderLinesUsingGETPath = '/api/query/_search/cancelled-order-lines';
  static readonly searchNotificationsUsingGETPath = '/api/query/_search/notifications';
  static readonly searchRefundDetailsUsingGETPath = '/api/query/_search/refund-details';
  static readonly getReportWithAuxAndComboAsPdfUsingGETPath = '/api/query/auxcombo/{orderNumber}';
  static readonly getAllBannersUsingGETPath = '/api/query/banners';
  static readonly getBannerUsingGETPath = '/api/query/banners/{id}';
  static readonly getAllCancellationRequestsUsingGETPath = '/api/query/cancellation-requests';
  static readonly getCancellationRequestUsingGETPath = '/api/query/cancellation-requests/{id}';
  static readonly getAllCancelledOrderLinesUsingGETPath = '/api/query/cancelled-order-lines';
  static readonly getCancelledOrderLineUsingGETPath = '/api/query/cancelled-order-lines/{id}';
  static readonly findAllCancellationRequestsUsingGETPath = '/api/query/findAllCancellationRequests';
  static readonly findAuxItemsByIdUsingGETPath = '/api/query/findAuxItemsLinesById/{id}';
  static readonly findBannerByStoreIdUsingGETPath = '/api/query/findBannerByStoreId/{storeId}';
  static readonly findCancellationDetailsByIdUsingGETPath = '/api/query/findCancellationDetailsById/{id}';
  static readonly findCancellationRequestByStatusUsingGETPath = '/api/query/findCancellationRequestByStatus/{statusName}/{date}';
  static readonly findCustomerByIdpCodeUsingGETPath = '/api/query/findCustomerByIdpCode/{idpCode}';
  static readonly findOfferLinesByOrderNumberUsingGETPath = '/api/query/findOfferLinesByOrderNumber/{orderId}';
  static readonly findOrderByDatebetweenAndStoreIdUsingGETPath = '/api/query/findOrderByDatebetweenAndStoreId/{from}/{storeId}/{to}';
  static readonly findOrderByOrderIdUsingGETPath = '/api/query/findOrderByOrderId/{orderId}';
  static readonly findOrderCountByDateAndStatusNameUsingGETPath = '/api/query/findOrderCountByDateAndStatusName/{date}/{statusName}';
  static readonly findOrderCountByStatusNameUsingGETPath = '/api/query/findOrderCountByStatusName/{statusName}';
  static readonly findOrderLinesByOrderNumberUsingGETPath = '/api/query/findOrderLinesByOrderNumber/{orderId}';
  static readonly findOrderMasterByExpectedDeliveryBetweenUsingGETPath = '/api/query/findOrderMasterByExpectedDeliveryBetween/{from}/{to}';
  static readonly findOrderMasterCountByExpectedDeliveryBetweenUsingGETPath = '/api/query/findOrderMasterCountByExpectedDeliveryBetween/{from}/{to}';
  static readonly findOrdersByOrderIdUsingGETPath = '/api/query/findOrdersByOrderId/{orderId}';
  static readonly findStoreBySearchTermUsingGETPath = '/api/query/findStore/{name}';
  static readonly getCancellationRequestByOrderIdUsingGETPath = '/api/query/getCancellationRequest/{orderId}';
  static readonly getOrderSummaryByDateAndStoreNameUsingGETPath = '/api/query/getOrderSummaryByDateAndStoreName/{date}/{storeId}';
  static readonly getOrdersByFilterUsingGETPath = '/api/query/getOrdersByFilter/{fromDate}/{toDate}';
  static readonly getOrdersPdfByFilterUsingGETPath = '/api/query/getOrdersPdfByFilter/{fromDate}/{toDate}';
  static readonly findRefundDetailUsingGETPath = '/api/query/getRefundDetailById/{id}';
  static readonly getStoreUsingGETPath = '/api/query/getStore/{id}';
  static readonly getStoreByRegNoUsingGETPath = '/api/query/getStoreByRegNo/{regNo}';
  static readonly getAllNotificationsUsingGETPath = '/api/query/notifications';
  static readonly getNotificationUsingGETPath = '/api/query/notifications/{id}';
  static readonly getAllDeductionValueTypesUsingGETPath = '/api/query/offers/get-all-deduction-value-types';
  static readonly getAllOffersUsingGETPath = '/api/query/offers/get-all-offers';
  static readonly getOfferByIdUsingGETPath = '/api/query/offers/get-offer-by-id/{id}';
  static readonly getAllRefundDetailsUsingGETPath = '/api/query/refund-details';
  static readonly getRefundDetailsUsingGETPath = '/api/query/refund-details/{id}';
  static readonly getReportSummaryAsPdfUsingGETPath = '/api/query/reportSummary/{date}';
  static readonly createReportSummaryUsingGETPath = '/api/query/reportview/{date}';
  static readonly getSaleReportAsPdfUsingGETPath = '/api/query/salereport/{storeidpcode}';
  static readonly getTasksUsingGETPath = '/api/query/tasks';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `QueryResourceService.SearchBannerUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  searchBannerUsingGETResponse(params: QueryResourceService.SearchBannerUsingGETParams): __Observable<__StrictHttpResponse<Array<BannerDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/_search/banners/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BannerDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.SearchBannerUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  searchBannerUsingGET(params: QueryResourceService.SearchBannerUsingGETParams): __Observable<Array<BannerDTO>> {
    return this.searchBannerUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<BannerDTO>)
    );
  }

  /**
   * @param params The `QueryResourceService.SearchCancellationRequestsUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  searchCancellationRequestsUsingGETResponse(params: QueryResourceService.SearchCancellationRequestsUsingGETParams): __Observable<__StrictHttpResponse<Array<CancellationRequestDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/_search/cancellation-requests`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CancellationRequestDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.SearchCancellationRequestsUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  searchCancellationRequestsUsingGET(params: QueryResourceService.SearchCancellationRequestsUsingGETParams): __Observable<Array<CancellationRequestDTO>> {
    return this.searchCancellationRequestsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CancellationRequestDTO>)
    );
  }

  /**
   * @param params The `QueryResourceService.SearchCancelledOrderLinesUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  searchCancelledOrderLinesUsingGETResponse(params: QueryResourceService.SearchCancelledOrderLinesUsingGETParams): __Observable<__StrictHttpResponse<Array<CancelledOrderLineDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/_search/cancelled-order-lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CancelledOrderLineDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.SearchCancelledOrderLinesUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  searchCancelledOrderLinesUsingGET(params: QueryResourceService.SearchCancelledOrderLinesUsingGETParams): __Observable<Array<CancelledOrderLineDTO>> {
    return this.searchCancelledOrderLinesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CancelledOrderLineDTO>)
    );
  }

  /**
   * @param params The `QueryResourceService.SearchNotificationsUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  searchNotificationsUsingGETResponse(params: QueryResourceService.SearchNotificationsUsingGETParams): __Observable<__StrictHttpResponse<Array<NotificationDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/_search/notifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<NotificationDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.SearchNotificationsUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  searchNotificationsUsingGET(params: QueryResourceService.SearchNotificationsUsingGETParams): __Observable<Array<NotificationDTO>> {
    return this.searchNotificationsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<NotificationDTO>)
    );
  }

  /**
   * @param params The `QueryResourceService.SearchRefundDetailsUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  searchRefundDetailsUsingGETResponse(params: QueryResourceService.SearchRefundDetailsUsingGETParams): __Observable<__StrictHttpResponse<Array<RefundDetailsDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.query != null) __params = __params.set('query', params.query.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/_search/refund-details`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RefundDetailsDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.SearchRefundDetailsUsingGETParams` containing the following parameters:
   *
   * - `query`: query
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  searchRefundDetailsUsingGET(params: QueryResourceService.SearchRefundDetailsUsingGETParams): __Observable<Array<RefundDetailsDTO>> {
    return this.searchRefundDetailsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<RefundDetailsDTO>)
    );
  }

  /**
   * @param orderNumber orderNumber
   * @return OK
   */
  getReportWithAuxAndComboAsPdfUsingGETResponse(orderNumber: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/auxcombo/${orderNumber}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param orderNumber orderNumber
   * @return OK
   */
  getReportWithAuxAndComboAsPdfUsingGET(orderNumber: string): __Observable<string> {
    return this.getReportWithAuxAndComboAsPdfUsingGETResponse(orderNumber).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `QueryResourceService.GetAllBannersUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllBannersUsingGETResponse(params: QueryResourceService.GetAllBannersUsingGETParams): __Observable<__StrictHttpResponse<Array<BannerDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/banners`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BannerDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetAllBannersUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllBannersUsingGET(params: QueryResourceService.GetAllBannersUsingGETParams): __Observable<Array<BannerDTO>> {
    return this.getAllBannersUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<BannerDTO>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getBannerUsingGETResponse(id: number): __Observable<__StrictHttpResponse<BannerDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/banners/${id}`,
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
   * @param id id
   * @return OK
   */
  getBannerUsingGET(id: number): __Observable<BannerDTO> {
    return this.getBannerUsingGETResponse(id).pipe(
      __map(_r => _r.body as BannerDTO)
    );
  }

  /**
   * @param params The `QueryResourceService.GetAllCancellationRequestsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllCancellationRequestsUsingGETResponse(params: QueryResourceService.GetAllCancellationRequestsUsingGETParams): __Observable<__StrictHttpResponse<Array<CancellationRequestDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/cancellation-requests`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CancellationRequestDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetAllCancellationRequestsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllCancellationRequestsUsingGET(params: QueryResourceService.GetAllCancellationRequestsUsingGETParams): __Observable<Array<CancellationRequestDTO>> {
    return this.getAllCancellationRequestsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CancellationRequestDTO>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getCancellationRequestUsingGETResponse(id: number): __Observable<__StrictHttpResponse<CancellationRequestDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/cancellation-requests/${id}`,
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
   * @param id id
   * @return OK
   */
  getCancellationRequestUsingGET(id: number): __Observable<CancellationRequestDTO> {
    return this.getCancellationRequestUsingGETResponse(id).pipe(
      __map(_r => _r.body as CancellationRequestDTO)
    );
  }

  /**
   * @param params The `QueryResourceService.GetAllCancelledOrderLinesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllCancelledOrderLinesUsingGETResponse(params: QueryResourceService.GetAllCancelledOrderLinesUsingGETParams): __Observable<__StrictHttpResponse<Array<CancelledOrderLineDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/cancelled-order-lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CancelledOrderLineDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetAllCancelledOrderLinesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllCancelledOrderLinesUsingGET(params: QueryResourceService.GetAllCancelledOrderLinesUsingGETParams): __Observable<Array<CancelledOrderLineDTO>> {
    return this.getAllCancelledOrderLinesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CancelledOrderLineDTO>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getCancelledOrderLineUsingGETResponse(id: number): __Observable<__StrictHttpResponse<CancelledOrderLineDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/cancelled-order-lines/${id}`,
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
   * @param id id
   * @return OK
   */
  getCancelledOrderLineUsingGET(id: number): __Observable<CancelledOrderLineDTO> {
    return this.getCancelledOrderLineUsingGETResponse(id).pipe(
      __map(_r => _r.body as CancelledOrderLineDTO)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllCancellationRequestsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllCancellationRequestsUsingGETResponse(params: QueryResourceService.FindAllCancellationRequestsUsingGETParams): __Observable<__StrictHttpResponse<Array<CancellationRequestDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAllCancellationRequests`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CancellationRequestDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllCancellationRequestsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllCancellationRequestsUsingGET(params: QueryResourceService.FindAllCancellationRequestsUsingGETParams): __Observable<Array<CancellationRequestDTO>> {
    return this.findAllCancellationRequestsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CancellationRequestDTO>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findAuxItemsByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Array<AuxItem>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAuxItemsLinesById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AuxItem>>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  findAuxItemsByIdUsingGET(id: number): __Observable<Array<AuxItem>> {
    return this.findAuxItemsByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as Array<AuxItem>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindBannerByStoreIdUsingGETParams` containing the following parameters:
   *
   * - `storeId`: storeId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findBannerByStoreIdUsingGETResponse(params: QueryResourceService.FindBannerByStoreIdUsingGETParams): __Observable<__StrictHttpResponse<PageOfBanner>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findBannerByStoreId/${params.storeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfBanner>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindBannerByStoreIdUsingGETParams` containing the following parameters:
   *
   * - `storeId`: storeId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findBannerByStoreIdUsingGET(params: QueryResourceService.FindBannerByStoreIdUsingGETParams): __Observable<PageOfBanner> {
    return this.findBannerByStoreIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfBanner)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findCancellationDetailsByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<CancellationDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findCancellationDetailsById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CancellationDetails>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  findCancellationDetailsByIdUsingGET(id: number): __Observable<CancellationDetails> {
    return this.findCancellationDetailsByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as CancellationDetails)
    );
  }

  /**
   * @param params The `QueryResourceService.FindCancellationRequestByStatusUsingGETParams` containing the following parameters:
   *
   * - `statusName`: statusName
   *
   * - `date`: date
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findCancellationRequestByStatusUsingGETResponse(params: QueryResourceService.FindCancellationRequestByStatusUsingGETParams): __Observable<__StrictHttpResponse<PageOfCancellationRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findCancellationRequestByStatus/${params.statusName}/${params.date}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfCancellationRequest>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindCancellationRequestByStatusUsingGETParams` containing the following parameters:
   *
   * - `statusName`: statusName
   *
   * - `date`: date
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findCancellationRequestByStatusUsingGET(params: QueryResourceService.FindCancellationRequestByStatusUsingGETParams): __Observable<PageOfCancellationRequest> {
    return this.findCancellationRequestByStatusUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfCancellationRequest)
    );
  }

  /**
   * @param idpCode idpCode
   * @return OK
   */
  findCustomerByIdpCodeUsingGETResponse(idpCode: string): __Observable<__StrictHttpResponse<Customer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findCustomerByIdpCode/${idpCode}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Customer>;
      })
    );
  }
  /**
   * @param idpCode idpCode
   * @return OK
   */
  findCustomerByIdpCodeUsingGET(idpCode: string): __Observable<Customer> {
    return this.findCustomerByIdpCodeUsingGETResponse(idpCode).pipe(
      __map(_r => _r.body as Customer)
    );
  }

  /**
   * @param orderId orderId
   * @return OK
   */
  findOfferLinesByOrderNumberUsingGETResponse(orderId: string): __Observable<__StrictHttpResponse<Array<OfferLine>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findOfferLinesByOrderNumber/${orderId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OfferLine>>;
      })
    );
  }
  /**
   * @param orderId orderId
   * @return OK
   */
  findOfferLinesByOrderNumberUsingGET(orderId: string): __Observable<Array<OfferLine>> {
    return this.findOfferLinesByOrderNumberUsingGETResponse(orderId).pipe(
      __map(_r => _r.body as Array<OfferLine>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindOrderByDatebetweenAndStoreIdUsingGETParams` containing the following parameters:
   *
   * - `to`: to
   *
   * - `storeId`: storeId
   *
   * - `from`: from
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findOrderByDatebetweenAndStoreIdUsingGETResponse(params: QueryResourceService.FindOrderByDatebetweenAndStoreIdUsingGETParams): __Observable<__StrictHttpResponse<PageOfOrderMaster>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findOrderByDatebetweenAndStoreId/${params.from}/${params.storeId}/${params.to}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfOrderMaster>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindOrderByDatebetweenAndStoreIdUsingGETParams` containing the following parameters:
   *
   * - `to`: to
   *
   * - `storeId`: storeId
   *
   * - `from`: from
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findOrderByDatebetweenAndStoreIdUsingGET(params: QueryResourceService.FindOrderByDatebetweenAndStoreIdUsingGETParams): __Observable<PageOfOrderMaster> {
    return this.findOrderByDatebetweenAndStoreIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfOrderMaster)
    );
  }

  /**
   * @param orderId orderId
   * @return OK
   */
  findOrderByOrderIdUsingGETResponse(orderId: string): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findOrderByOrderId/${orderId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * @param orderId orderId
   * @return OK
   */
  findOrderByOrderIdUsingGET(orderId: string): __Observable<Order> {
    return this.findOrderByOrderIdUsingGETResponse(orderId).pipe(
      __map(_r => _r.body as Order)
    );
  }

  /**
   * @param params The `QueryResourceService.FindOrderCountByDateAndStatusNameUsingGETParams` containing the following parameters:
   *
   * - `statusName`: statusName
   *
   * - `date`: date
   *
   * @return OK
   */
  findOrderCountByDateAndStatusNameUsingGETResponse(params: QueryResourceService.FindOrderCountByDateAndStatusNameUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findOrderCountByDateAndStatusName/${params.date}/${params.statusName}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindOrderCountByDateAndStatusNameUsingGETParams` containing the following parameters:
   *
   * - `statusName`: statusName
   *
   * - `date`: date
   *
   * @return OK
   */
  findOrderCountByDateAndStatusNameUsingGET(params: QueryResourceService.FindOrderCountByDateAndStatusNameUsingGETParams): __Observable<number> {
    return this.findOrderCountByDateAndStatusNameUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param statusName statusName
   * @return OK
   */
  findOrderCountByStatusNameUsingGETResponse(statusName: string): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findOrderCountByStatusName/${statusName}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param statusName statusName
   * @return OK
   */
  findOrderCountByStatusNameUsingGET(statusName: string): __Observable<number> {
    return this.findOrderCountByStatusNameUsingGETResponse(statusName).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param orderId orderId
   * @return OK
   */
  findOrderLinesByOrderNumberUsingGETResponse(orderId: string): __Observable<__StrictHttpResponse<Array<OrderLine>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findOrderLinesByOrderNumber/${orderId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OrderLine>>;
      })
    );
  }
  /**
   * @param orderId orderId
   * @return OK
   */
  findOrderLinesByOrderNumberUsingGET(orderId: string): __Observable<Array<OrderLine>> {
    return this.findOrderLinesByOrderNumberUsingGETResponse(orderId).pipe(
      __map(_r => _r.body as Array<OrderLine>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindOrderMasterByExpectedDeliveryBetweenUsingGETParams` containing the following parameters:
   *
   * - `to`: to
   *
   * - `from`: from
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findOrderMasterByExpectedDeliveryBetweenUsingGETResponse(params: QueryResourceService.FindOrderMasterByExpectedDeliveryBetweenUsingGETParams): __Observable<__StrictHttpResponse<PageOfOrderMaster>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findOrderMasterByExpectedDeliveryBetween/${params.from}/${params.to}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfOrderMaster>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindOrderMasterByExpectedDeliveryBetweenUsingGETParams` containing the following parameters:
   *
   * - `to`: to
   *
   * - `from`: from
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findOrderMasterByExpectedDeliveryBetweenUsingGET(params: QueryResourceService.FindOrderMasterByExpectedDeliveryBetweenUsingGETParams): __Observable<PageOfOrderMaster> {
    return this.findOrderMasterByExpectedDeliveryBetweenUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfOrderMaster)
    );
  }

  /**
   * @param params The `QueryResourceService.FindOrderMasterCountByExpectedDeliveryBetweenUsingGETParams` containing the following parameters:
   *
   * - `to`: to
   *
   * - `from`: from
   *
   * @return OK
   */
  findOrderMasterCountByExpectedDeliveryBetweenUsingGETResponse(params: QueryResourceService.FindOrderMasterCountByExpectedDeliveryBetweenUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findOrderMasterCountByExpectedDeliveryBetween/${params.from}/${params.to}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindOrderMasterCountByExpectedDeliveryBetweenUsingGETParams` containing the following parameters:
   *
   * - `to`: to
   *
   * - `from`: from
   *
   * @return OK
   */
  findOrderMasterCountByExpectedDeliveryBetweenUsingGET(params: QueryResourceService.FindOrderMasterCountByExpectedDeliveryBetweenUsingGETParams): __Observable<number> {
    return this.findOrderMasterCountByExpectedDeliveryBetweenUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param orderId orderId
   * @return OK
   */
  findOrdersByOrderIdUsingGETResponse(orderId: string): __Observable<__StrictHttpResponse<Array<Order>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findOrdersByOrderId/${orderId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Order>>;
      })
    );
  }
  /**
   * @param orderId orderId
   * @return OK
   */
  findOrdersByOrderIdUsingGET(orderId: string): __Observable<Array<Order>> {
    return this.findOrdersByOrderIdUsingGETResponse(orderId).pipe(
      __map(_r => _r.body as Array<Order>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindStoreBySearchTermUsingGETParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findStoreBySearchTermUsingGETResponse(params: QueryResourceService.FindStoreBySearchTermUsingGETParams): __Observable<__StrictHttpResponse<PageOfStore>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findStore/${params.name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfStore>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindStoreBySearchTermUsingGETParams` containing the following parameters:
   *
   * - `name`: name
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findStoreBySearchTermUsingGET(params: QueryResourceService.FindStoreBySearchTermUsingGETParams): __Observable<PageOfStore> {
    return this.findStoreBySearchTermUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfStore)
    );
  }

  /**
   * @param orderId orderId
   * @return OK
   */
  getCancellationRequestByOrderIdUsingGETResponse(orderId: string): __Observable<__StrictHttpResponse<CancellationRequest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/getCancellationRequest/${orderId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CancellationRequest>;
      })
    );
  }
  /**
   * @param orderId orderId
   * @return OK
   */
  getCancellationRequestByOrderIdUsingGET(orderId: string): __Observable<CancellationRequest> {
    return this.getCancellationRequestByOrderIdUsingGETResponse(orderId).pipe(
      __map(_r => _r.body as CancellationRequest)
    );
  }

  /**
   * @param params The `QueryResourceService.GetOrderSummaryByDateAndStoreNameUsingGETParams` containing the following parameters:
   *
   * - `storeId`: storeId
   *
   * - `date`: date
   *
   * @return OK
   */
  getOrderSummaryByDateAndStoreNameUsingGETResponse(params: QueryResourceService.GetOrderSummaryByDateAndStoreNameUsingGETParams): __Observable<__StrictHttpResponse<PdfDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/getOrderSummaryByDateAndStoreName/${params.date}/${params.storeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PdfDTO>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetOrderSummaryByDateAndStoreNameUsingGETParams` containing the following parameters:
   *
   * - `storeId`: storeId
   *
   * - `date`: date
   *
   * @return OK
   */
  getOrderSummaryByDateAndStoreNameUsingGET(params: QueryResourceService.GetOrderSummaryByDateAndStoreNameUsingGETParams): __Observable<PdfDTO> {
    return this.getOrderSummaryByDateAndStoreNameUsingGETResponse(params).pipe(
      __map(_r => _r.body as PdfDTO)
    );
  }

  /**
   * @param params The `QueryResourceService.GetOrdersByFilterUsingGETParams` containing the following parameters:
   *
   * - `toDate`: toDate
   *
   * - `fromDate`: fromDate
   *
   * - `storeId`: storeId
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `paymentStatus`: paymentStatus
   *
   * - `pageNumber`: pageNumber
   *
   * - `methodOfOrder`: methodOfOrder
   *
   * @return OK
   */
  getOrdersByFilterUsingGETResponse(params: QueryResourceService.GetOrdersByFilterUsingGETParams): __Observable<__StrictHttpResponse<PageOfOrderMaster>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.paymentStatus != null) __params = __params.set('paymentStatus', params.paymentStatus.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    if (params.methodOfOrder != null) __params = __params.set('methodOfOrder', params.methodOfOrder.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/getOrdersByFilter/${params.fromDate}/${params.toDate}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfOrderMaster>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetOrdersByFilterUsingGETParams` containing the following parameters:
   *
   * - `toDate`: toDate
   *
   * - `fromDate`: fromDate
   *
   * - `storeId`: storeId
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `paymentStatus`: paymentStatus
   *
   * - `pageNumber`: pageNumber
   *
   * - `methodOfOrder`: methodOfOrder
   *
   * @return OK
   */
  getOrdersByFilterUsingGET(params: QueryResourceService.GetOrdersByFilterUsingGETParams): __Observable<PageOfOrderMaster> {
    return this.getOrdersByFilterUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfOrderMaster)
    );
  }

  /**
   * @param params The `QueryResourceService.GetOrdersPdfByFilterUsingGETParams` containing the following parameters:
   *
   * - `toDate`: toDate
   *
   * - `fromDate`: fromDate
   *
   * - `storeId`: storeId
   *
   * - `paymentStatus`: paymentStatus
   *
   * - `methodOfOrder`: methodOfOrder
   *
   * @return OK
   */
  getOrdersPdfByFilterUsingGETResponse(params: QueryResourceService.GetOrdersPdfByFilterUsingGETParams): __Observable<__StrictHttpResponse<PdfDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    if (params.paymentStatus != null) __params = __params.set('paymentStatus', params.paymentStatus.toString());
    if (params.methodOfOrder != null) __params = __params.set('methodOfOrder', params.methodOfOrder.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/getOrdersPdfByFilter/${params.fromDate}/${params.toDate}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PdfDTO>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetOrdersPdfByFilterUsingGETParams` containing the following parameters:
   *
   * - `toDate`: toDate
   *
   * - `fromDate`: fromDate
   *
   * - `storeId`: storeId
   *
   * - `paymentStatus`: paymentStatus
   *
   * - `methodOfOrder`: methodOfOrder
   *
   * @return OK
   */
  getOrdersPdfByFilterUsingGET(params: QueryResourceService.GetOrdersPdfByFilterUsingGETParams): __Observable<PdfDTO> {
    return this.getOrdersPdfByFilterUsingGETResponse(params).pipe(
      __map(_r => _r.body as PdfDTO)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findRefundDetailUsingGETResponse(id?: number): __Observable<__StrictHttpResponse<RefundDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/getRefundDetailById/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RefundDetails>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  findRefundDetailUsingGET(id?: number): __Observable<RefundDetails> {
    return this.findRefundDetailUsingGETResponse(id).pipe(
      __map(_r => _r.body as RefundDetails)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getStoreUsingGETResponse(id: number): __Observable<__StrictHttpResponse<StoreDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/getStore/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StoreDTO>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getStoreUsingGET(id: number): __Observable<StoreDTO> {
    return this.getStoreUsingGETResponse(id).pipe(
      __map(_r => _r.body as StoreDTO)
    );
  }

  /**
   * @param regNo regNo
   * @return OK
   */
  getStoreByRegNoUsingGETResponse(regNo: string): __Observable<__StrictHttpResponse<Store>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/getStoreByRegNo/${regNo}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Store>;
      })
    );
  }
  /**
   * @param regNo regNo
   * @return OK
   */
  getStoreByRegNoUsingGET(regNo: string): __Observable<Store> {
    return this.getStoreByRegNoUsingGETResponse(regNo).pipe(
      __map(_r => _r.body as Store)
    );
  }

  /**
   * @param params The `QueryResourceService.GetAllNotificationsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllNotificationsUsingGETResponse(params: QueryResourceService.GetAllNotificationsUsingGETParams): __Observable<__StrictHttpResponse<Array<NotificationDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/notifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<NotificationDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetAllNotificationsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllNotificationsUsingGET(params: QueryResourceService.GetAllNotificationsUsingGETParams): __Observable<Array<NotificationDTO>> {
    return this.getAllNotificationsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<NotificationDTO>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getNotificationUsingGETResponse(id: number): __Observable<__StrictHttpResponse<NotificationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/notifications/${id}`,
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
   * @param id id
   * @return OK
   */
  getNotificationUsingGET(id: number): __Observable<NotificationDTO> {
    return this.getNotificationUsingGETResponse(id).pipe(
      __map(_r => _r.body as NotificationDTO)
    );
  }

  /**
   * @param params The `QueryResourceService.GetAllDeductionValueTypesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllDeductionValueTypesUsingGETResponse(params: QueryResourceService.GetAllDeductionValueTypesUsingGETParams): __Observable<__StrictHttpResponse<Array<DeductionValueTypeDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/offers/get-all-deduction-value-types`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DeductionValueTypeDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetAllDeductionValueTypesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllDeductionValueTypesUsingGET(params: QueryResourceService.GetAllDeductionValueTypesUsingGETParams): __Observable<Array<DeductionValueTypeDTO>> {
    return this.getAllDeductionValueTypesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<DeductionValueTypeDTO>)
    );
  }

  /**
   * @param params The `QueryResourceService.GetAllOffersUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllOffersUsingGETResponse(params: QueryResourceService.GetAllOffersUsingGETParams): __Observable<__StrictHttpResponse<Array<OfferDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/offers/get-all-offers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OfferDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetAllOffersUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllOffersUsingGET(params: QueryResourceService.GetAllOffersUsingGETParams): __Observable<Array<OfferDTO>> {
    return this.getAllOffersUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<OfferDTO>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getOfferByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<OfferDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/offers/get-offer-by-id/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OfferDTO>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getOfferByIdUsingGET(id: number): __Observable<OfferDTO> {
    return this.getOfferByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as OfferDTO)
    );
  }

  /**
   * @param params The `QueryResourceService.GetAllRefundDetailsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllRefundDetailsUsingGETResponse(params: QueryResourceService.GetAllRefundDetailsUsingGETParams): __Observable<__StrictHttpResponse<Array<RefundDetailsDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/refund-details`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RefundDetailsDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetAllRefundDetailsUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllRefundDetailsUsingGET(params: QueryResourceService.GetAllRefundDetailsUsingGETParams): __Observable<Array<RefundDetailsDTO>> {
    return this.getAllRefundDetailsUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<RefundDetailsDTO>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getRefundDetailsUsingGETResponse(id: number): __Observable<__StrictHttpResponse<RefundDetailsDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/refund-details/${id}`,
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
   * @param id id
   * @return OK
   */
  getRefundDetailsUsingGET(id: number): __Observable<RefundDetailsDTO> {
    return this.getRefundDetailsUsingGETResponse(id).pipe(
      __map(_r => _r.body as RefundDetailsDTO)
    );
  }

  /**
   * @param params The `QueryResourceService.GetReportSummaryAsPdfUsingGETParams` containing the following parameters:
   *
   * - `date`: date
   *
   * - `storeId`: storeId
   *
   * @return OK
   */
  getReportSummaryAsPdfUsingGETResponse(params: QueryResourceService.GetReportSummaryAsPdfUsingGETParams): __Observable<__StrictHttpResponse<PdfDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/reportSummary/${params.date}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PdfDTO>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetReportSummaryAsPdfUsingGETParams` containing the following parameters:
   *
   * - `date`: date
   *
   * - `storeId`: storeId
   *
   * @return OK
   */
  getReportSummaryAsPdfUsingGET(params: QueryResourceService.GetReportSummaryAsPdfUsingGETParams): __Observable<PdfDTO> {
    return this.getReportSummaryAsPdfUsingGETResponse(params).pipe(
      __map(_r => _r.body as PdfDTO)
    );
  }

  /**
   * @param params The `QueryResourceService.CreateReportSummaryUsingGETParams` containing the following parameters:
   *
   * - `date`: date
   *
   * - `storeName`: storeName
   *
   * @return OK
   */
  createReportSummaryUsingGETResponse(params: QueryResourceService.CreateReportSummaryUsingGETParams): __Observable<__StrictHttpResponse<ReportSummary>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.storeName != null) __params = __params.set('storeName', params.storeName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/reportview/${params.date}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReportSummary>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.CreateReportSummaryUsingGETParams` containing the following parameters:
   *
   * - `date`: date
   *
   * - `storeName`: storeName
   *
   * @return OK
   */
  createReportSummaryUsingGET(params: QueryResourceService.CreateReportSummaryUsingGETParams): __Observable<ReportSummary> {
    return this.createReportSummaryUsingGETResponse(params).pipe(
      __map(_r => _r.body as ReportSummary)
    );
  }

  /**
   * @param storeidpcode storeidpcode
   * @return OK
   */
  getSaleReportAsPdfUsingGETResponse(storeidpcode: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/salereport/${storeidpcode}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param storeidpcode storeidpcode
   * @return OK
   */
  getSaleReportAsPdfUsingGET(storeidpcode: string): __Observable<string> {
    return this.getSaleReportAsPdfUsingGETResponse(storeidpcode).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `QueryResourceService.GetTasksUsingGETParams` containing the following parameters:
   *
   * - `withoutTenantId`: If true, only returns tasks without a tenantId set. If false, the withoutTenantId parameter is ignored.
   *
   * - `withoutDueDate`: Only return tasks which don�t have a due date. The property is ignored if the value is false.
   *
   * - `unassigned`: unassigned
   *
   * - `tenantIdLike`: Only return tasks with a tenantId like the given value.
   *
   * - `tenantId`: Only return tasks with the given tenantId.
   *
   * - `taskDefinitionKeyLike`: taskDefinitionKeyLike
   *
   * - `taskDefinitionKey`: taskDefinitionKey
   *
   * - `processInstanceId`: processInstanceId
   *
   * - `processInstanceBusinessKeyLike`: processInstanceBusinessKeyLike
   *
   * - `processInstanceBusinessKey`: processInstanceBusinessKey
   *
   * - `processDefinitionNameLike`: Only return tasks which are part of a process instance which has a process definition with a name like the given value.
   *
   * - `processDefinitionName`: Only return tasks which are part of a process instance which has a process definition with the given name.
   *
   * - `processDefinitionKeyLike`: Only return tasks which are part of a process instance which has a process definition with a key like the given value.
   *
   * - `processDefinitionKey`: Only return tasks which are part of a process instance which has a process definition with the given key.
   *
   * - `processDefinitionId`: Only return tasks which are part of a process instance which has a process definition with the given id.
   *
   * - `priority`: priority
   *
   * - `ownerLike`: ownerLike
   *
   * - `owner`: owner
   *
   * - `nameLike`: nameLike
   *
   * - `name`: name
   *
   * - `minimumPriority`: minimumPriority
   *
   * - `maximumPriority`: maximumPriority
   *
   * - `involvedUser`: involvedUser
   *
   * - `includeTaskLocalVariables`: Indication to include task local variables in the result.
   *
   * - `includeProcessVariables`: Indication to include process variables in the result.
   *
   * - `executionId`: Only return tasks which are part of the execution with the given id.
   *
   * - `excludeSubTasks`: Only return tasks that are not a subtask of another task.
   *
   * - `dueOn`: Only return tasks which are due on the given date.
   *
   * - `dueBefore`: Only return tasks which are due before the given date.
   *
   * - `dueAfter`: Only return tasks which are due after the given date.
   *
   * - `description`: description
   *
   * - `delegationState`: delegationState
   *
   * - `createdOn`: Only return tasks which are created on the given date.
   *
   * - `createdBefore`: Only return tasks which are created before the given date.
   *
   * - `createdAfter`: Only return tasks which are created after the given date.
   *
   * - `category`: Select tasks with the given category. Note that this is the task category, not the category of the process definition (namespace within the BPMN Xml).
   *
   * - `candidateUser`: candidateUser
   *
   * - `candidateOrAssigned`: Select tasks that has been claimed or assigned to user or waiting to claim by user (candidate user or groups).
   *
   * - `candidateGroups`: candidateGroups
   *
   * - `candidateGroup`: candidateGroup
   *
   * - `assigneeLike`: assigneeLike
   *
   * - `assignee`: assignee
   *
   * - `active`: If true, only return tasks that are not suspended (either part of a process that is not suspended or not part of a process at all). If false, only tasks that are part of suspended process instances are returned.
   *
   * @return OK
   */
  getTasksUsingGETResponse(params: QueryResourceService.GetTasksUsingGETParams): __Observable<__StrictHttpResponse<DataResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.withoutTenantId != null) __params = __params.set('withoutTenantId', params.withoutTenantId.toString());
    if (params.withoutDueDate != null) __params = __params.set('withoutDueDate', params.withoutDueDate.toString());
    if (params.unassigned != null) __params = __params.set('unassigned', params.unassigned.toString());
    if (params.tenantIdLike != null) __params = __params.set('tenantIdLike', params.tenantIdLike.toString());
    if (params.tenantId != null) __params = __params.set('tenantId', params.tenantId.toString());
    if (params.taskDefinitionKeyLike != null) __params = __params.set('taskDefinitionKeyLike', params.taskDefinitionKeyLike.toString());
    if (params.taskDefinitionKey != null) __params = __params.set('taskDefinitionKey', params.taskDefinitionKey.toString());
    if (params.processInstanceId != null) __params = __params.set('processInstanceId', params.processInstanceId.toString());
    if (params.processInstanceBusinessKeyLike != null) __params = __params.set('processInstanceBusinessKeyLike', params.processInstanceBusinessKeyLike.toString());
    if (params.processInstanceBusinessKey != null) __params = __params.set('processInstanceBusinessKey', params.processInstanceBusinessKey.toString());
    if (params.processDefinitionNameLike != null) __params = __params.set('processDefinitionNameLike', params.processDefinitionNameLike.toString());
    if (params.processDefinitionName != null) __params = __params.set('processDefinitionName', params.processDefinitionName.toString());
    if (params.processDefinitionKeyLike != null) __params = __params.set('processDefinitionKeyLike', params.processDefinitionKeyLike.toString());
    if (params.processDefinitionKey != null) __params = __params.set('processDefinitionKey', params.processDefinitionKey.toString());
    if (params.processDefinitionId != null) __params = __params.set('processDefinitionId', params.processDefinitionId.toString());
    if (params.priority != null) __params = __params.set('priority', params.priority.toString());
    if (params.ownerLike != null) __params = __params.set('ownerLike', params.ownerLike.toString());
    if (params.owner != null) __params = __params.set('owner', params.owner.toString());
    if (params.nameLike != null) __params = __params.set('nameLike', params.nameLike.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.minimumPriority != null) __params = __params.set('minimumPriority', params.minimumPriority.toString());
    if (params.maximumPriority != null) __params = __params.set('maximumPriority', params.maximumPriority.toString());
    if (params.involvedUser != null) __params = __params.set('involvedUser', params.involvedUser.toString());
    if (params.includeTaskLocalVariables != null) __params = __params.set('includeTaskLocalVariables', params.includeTaskLocalVariables.toString());
    if (params.includeProcessVariables != null) __params = __params.set('includeProcessVariables', params.includeProcessVariables.toString());
    if (params.executionId != null) __params = __params.set('executionId', params.executionId.toString());
    if (params.excludeSubTasks != null) __params = __params.set('excludeSubTasks', params.excludeSubTasks.toString());
    if (params.dueOn != null) __params = __params.set('dueOn', params.dueOn.toString());
    if (params.dueBefore != null) __params = __params.set('dueBefore', params.dueBefore.toString());
    if (params.dueAfter != null) __params = __params.set('dueAfter', params.dueAfter.toString());
    if (params.description != null) __params = __params.set('description', params.description.toString());
    if (params.delegationState != null) __params = __params.set('delegationState', params.delegationState.toString());
    if (params.createdOn != null) __params = __params.set('createdOn', params.createdOn.toString());
    if (params.createdBefore != null) __params = __params.set('createdBefore', params.createdBefore.toString());
    if (params.createdAfter != null) __params = __params.set('createdAfter', params.createdAfter.toString());
    if (params.category != null) __params = __params.set('category', params.category.toString());
    if (params.candidateUser != null) __params = __params.set('candidateUser', params.candidateUser.toString());
    if (params.candidateOrAssigned != null) __params = __params.set('candidateOrAssigned', params.candidateOrAssigned.toString());
    if (params.candidateGroups != null) __params = __params.set('candidateGroups', params.candidateGroups.toString());
    if (params.candidateGroup != null) __params = __params.set('candidateGroup', params.candidateGroup.toString());
    if (params.assigneeLike != null) __params = __params.set('assigneeLike', params.assigneeLike.toString());
    if (params.assignee != null) __params = __params.set('assignee', params.assignee.toString());
    if (params.active != null) __params = __params.set('active', params.active.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/tasks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DataResponse>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.GetTasksUsingGETParams` containing the following parameters:
   *
   * - `withoutTenantId`: If true, only returns tasks without a tenantId set. If false, the withoutTenantId parameter is ignored.
   *
   * - `withoutDueDate`: Only return tasks which don�t have a due date. The property is ignored if the value is false.
   *
   * - `unassigned`: unassigned
   *
   * - `tenantIdLike`: Only return tasks with a tenantId like the given value.
   *
   * - `tenantId`: Only return tasks with the given tenantId.
   *
   * - `taskDefinitionKeyLike`: taskDefinitionKeyLike
   *
   * - `taskDefinitionKey`: taskDefinitionKey
   *
   * - `processInstanceId`: processInstanceId
   *
   * - `processInstanceBusinessKeyLike`: processInstanceBusinessKeyLike
   *
   * - `processInstanceBusinessKey`: processInstanceBusinessKey
   *
   * - `processDefinitionNameLike`: Only return tasks which are part of a process instance which has a process definition with a name like the given value.
   *
   * - `processDefinitionName`: Only return tasks which are part of a process instance which has a process definition with the given name.
   *
   * - `processDefinitionKeyLike`: Only return tasks which are part of a process instance which has a process definition with a key like the given value.
   *
   * - `processDefinitionKey`: Only return tasks which are part of a process instance which has a process definition with the given key.
   *
   * - `processDefinitionId`: Only return tasks which are part of a process instance which has a process definition with the given id.
   *
   * - `priority`: priority
   *
   * - `ownerLike`: ownerLike
   *
   * - `owner`: owner
   *
   * - `nameLike`: nameLike
   *
   * - `name`: name
   *
   * - `minimumPriority`: minimumPriority
   *
   * - `maximumPriority`: maximumPriority
   *
   * - `involvedUser`: involvedUser
   *
   * - `includeTaskLocalVariables`: Indication to include task local variables in the result.
   *
   * - `includeProcessVariables`: Indication to include process variables in the result.
   *
   * - `executionId`: Only return tasks which are part of the execution with the given id.
   *
   * - `excludeSubTasks`: Only return tasks that are not a subtask of another task.
   *
   * - `dueOn`: Only return tasks which are due on the given date.
   *
   * - `dueBefore`: Only return tasks which are due before the given date.
   *
   * - `dueAfter`: Only return tasks which are due after the given date.
   *
   * - `description`: description
   *
   * - `delegationState`: delegationState
   *
   * - `createdOn`: Only return tasks which are created on the given date.
   *
   * - `createdBefore`: Only return tasks which are created before the given date.
   *
   * - `createdAfter`: Only return tasks which are created after the given date.
   *
   * - `category`: Select tasks with the given category. Note that this is the task category, not the category of the process definition (namespace within the BPMN Xml).
   *
   * - `candidateUser`: candidateUser
   *
   * - `candidateOrAssigned`: Select tasks that has been claimed or assigned to user or waiting to claim by user (candidate user or groups).
   *
   * - `candidateGroups`: candidateGroups
   *
   * - `candidateGroup`: candidateGroup
   *
   * - `assigneeLike`: assigneeLike
   *
   * - `assignee`: assignee
   *
   * - `active`: If true, only return tasks that are not suspended (either part of a process that is not suspended or not part of a process at all). If false, only tasks that are part of suspended process instances are returned.
   *
   * @return OK
   */
  getTasksUsingGET(params: QueryResourceService.GetTasksUsingGETParams): __Observable<DataResponse> {
    return this.getTasksUsingGETResponse(params).pipe(
      __map(_r => _r.body as DataResponse)
    );
  }
}

module QueryResourceService {

  /**
   * Parameters for searchBannerUsingGET
   */
  export interface SearchBannerUsingGETParams {

    /**
     * query
     */
    query: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for searchCancellationRequestsUsingGET
   */
  export interface SearchCancellationRequestsUsingGETParams {

    /**
     * query
     */
    query: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for searchCancelledOrderLinesUsingGET
   */
  export interface SearchCancelledOrderLinesUsingGETParams {

    /**
     * query
     */
    query: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for searchNotificationsUsingGET
   */
  export interface SearchNotificationsUsingGETParams {

    /**
     * query
     */
    query: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for searchRefundDetailsUsingGET
   */
  export interface SearchRefundDetailsUsingGETParams {

    /**
     * query
     */
    query: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for getAllBannersUsingGET
   */
  export interface GetAllBannersUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for getAllCancellationRequestsUsingGET
   */
  export interface GetAllCancellationRequestsUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for getAllCancelledOrderLinesUsingGET
   */
  export interface GetAllCancelledOrderLinesUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllCancellationRequestsUsingGET
   */
  export interface FindAllCancellationRequestsUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findBannerByStoreIdUsingGET
   */
  export interface FindBannerByStoreIdUsingGETParams {

    /**
     * storeId
     */
    storeId: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findCancellationRequestByStatusUsingGET
   */
  export interface FindCancellationRequestByStatusUsingGETParams {

    /**
     * statusName
     */
    statusName: string;

    /**
     * date
     */
    date: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findOrderByDatebetweenAndStoreIdUsingGET
   */
  export interface FindOrderByDatebetweenAndStoreIdUsingGETParams {

    /**
     * to
     */
    to: string;

    /**
     * storeId
     */
    storeId: string;

    /**
     * from
     */
    from: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findOrderCountByDateAndStatusNameUsingGET
   */
  export interface FindOrderCountByDateAndStatusNameUsingGETParams {

    /**
     * statusName
     */
    statusName: string;

    /**
     * date
     */
    date: string;
  }

  /**
   * Parameters for findOrderMasterByExpectedDeliveryBetweenUsingGET
   */
  export interface FindOrderMasterByExpectedDeliveryBetweenUsingGETParams {

    /**
     * to
     */
    to: string;

    /**
     * from
     */
    from: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findOrderMasterCountByExpectedDeliveryBetweenUsingGET
   */
  export interface FindOrderMasterCountByExpectedDeliveryBetweenUsingGETParams {

    /**
     * to
     */
    to: string;

    /**
     * from
     */
    from: string;
  }

  /**
   * Parameters for findStoreBySearchTermUsingGET
   */
  export interface FindStoreBySearchTermUsingGETParams {

    /**
     * name
     */
    name: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for getOrderSummaryByDateAndStoreNameUsingGET
   */
  export interface GetOrderSummaryByDateAndStoreNameUsingGETParams {

    /**
     * storeId
     */
    storeId: string;

    /**
     * date
     */
    date: string;
  }

  /**
   * Parameters for getOrdersByFilterUsingGET
   */
  export interface GetOrdersByFilterUsingGETParams {

    /**
     * toDate
     */
    toDate: string;

    /**
     * fromDate
     */
    fromDate: string;

    /**
     * storeId
     */
    storeId?: string;

    /**
     * sort
     */
    sort?: Array<string>;

    /**
     * size
     */
    size?: number;

    /**
     * paymentStatus
     */
    paymentStatus?: string;

    /**
     * pageNumber
     */
    pageNumber?: number;

    /**
     * methodOfOrder
     */
    methodOfOrder?: string;
  }

  /**
   * Parameters for getOrdersPdfByFilterUsingGET
   */
  export interface GetOrdersPdfByFilterUsingGETParams {

    /**
     * toDate
     */
    toDate: string;

    /**
     * fromDate
     */
    fromDate: string;

    /**
     * storeId
     */
    storeId?: string;

    /**
     * paymentStatus
     */
    paymentStatus?: string;

    /**
     * methodOfOrder
     */
    methodOfOrder?: string;
  }

  /**
   * Parameters for getAllNotificationsUsingGET
   */
  export interface GetAllNotificationsUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for getAllDeductionValueTypesUsingGET
   */
  export interface GetAllDeductionValueTypesUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for getAllOffersUsingGET
   */
  export interface GetAllOffersUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for getAllRefundDetailsUsingGET
   */
  export interface GetAllRefundDetailsUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for getReportSummaryAsPdfUsingGET
   */
  export interface GetReportSummaryAsPdfUsingGETParams {

    /**
     * date
     */
    date: string;

    /**
     * storeId
     */
    storeId?: string;
  }

  /**
   * Parameters for createReportSummaryUsingGET
   */
  export interface CreateReportSummaryUsingGETParams {

    /**
     * date
     */
    date: string;

    /**
     * storeName
     */
    storeName?: string;
  }

  /**
   * Parameters for getTasksUsingGET
   */
  export interface GetTasksUsingGETParams {

    /**
     * If true, only returns tasks without a tenantId set. If false, the withoutTenantId parameter is ignored.
     */
    withoutTenantId?: boolean;

    /**
     * Only return tasks which don�t have a due date. The property is ignored if the value is false.
     */
    withoutDueDate?: boolean;

    /**
     * unassigned
     */
    unassigned?: string;

    /**
     * Only return tasks with a tenantId like the given value.
     */
    tenantIdLike?: string;

    /**
     * Only return tasks with the given tenantId.
     */
    tenantId?: string;

    /**
     * taskDefinitionKeyLike
     */
    taskDefinitionKeyLike?: string;

    /**
     * taskDefinitionKey
     */
    taskDefinitionKey?: string;

    /**
     * processInstanceId
     */
    processInstanceId?: string;

    /**
     * processInstanceBusinessKeyLike
     */
    processInstanceBusinessKeyLike?: string;

    /**
     * processInstanceBusinessKey
     */
    processInstanceBusinessKey?: string;

    /**
     * Only return tasks which are part of a process instance which has a process definition with a name like the given value.
     */
    processDefinitionNameLike?: string;

    /**
     * Only return tasks which are part of a process instance which has a process definition with the given name.
     */
    processDefinitionName?: string;

    /**
     * Only return tasks which are part of a process instance which has a process definition with a key like the given value.
     */
    processDefinitionKeyLike?: string;

    /**
     * Only return tasks which are part of a process instance which has a process definition with the given key.
     */
    processDefinitionKey?: string;

    /**
     * Only return tasks which are part of a process instance which has a process definition with the given id.
     */
    processDefinitionId?: string;

    /**
     * priority
     */
    priority?: string;

    /**
     * ownerLike
     */
    ownerLike?: string;

    /**
     * owner
     */
    owner?: string;

    /**
     * nameLike
     */
    nameLike?: string;

    /**
     * name
     */
    name?: string;

    /**
     * minimumPriority
     */
    minimumPriority?: string;

    /**
     * maximumPriority
     */
    maximumPriority?: string;

    /**
     * involvedUser
     */
    involvedUser?: string;

    /**
     * Indication to include task local variables in the result.
     */
    includeTaskLocalVariables?: boolean;

    /**
     * Indication to include process variables in the result.
     */
    includeProcessVariables?: boolean;

    /**
     * Only return tasks which are part of the execution with the given id.
     */
    executionId?: string;

    /**
     * Only return tasks that are not a subtask of another task.
     */
    excludeSubTasks?: boolean;

    /**
     * Only return tasks which are due on the given date.
     */
    dueOn?: string;

    /**
     * Only return tasks which are due before the given date.
     */
    dueBefore?: string;

    /**
     * Only return tasks which are due after the given date.
     */
    dueAfter?: string;

    /**
     * description
     */
    description?: string;

    /**
     * delegationState
     */
    delegationState?: string;

    /**
     * Only return tasks which are created on the given date.
     */
    createdOn?: string;

    /**
     * Only return tasks which are created before the given date.
     */
    createdBefore?: string;

    /**
     * Only return tasks which are created after the given date.
     */
    createdAfter?: string;

    /**
     * Select tasks with the given category. Note that this is the task category, not the category of the process definition (namespace within the BPMN Xml).
     */
    category?: string;

    /**
     * candidateUser
     */
    candidateUser?: string;

    /**
     * Select tasks that has been claimed or assigned to user or waiting to claim by user (candidate user or groups).
     */
    candidateOrAssigned?: string;

    /**
     * candidateGroups
     */
    candidateGroups?: string;

    /**
     * candidateGroup
     */
    candidateGroup?: string;

    /**
     * assigneeLike
     */
    assigneeLike?: string;

    /**
     * assignee
     */
    assignee?: string;

    /**
     * If true, only return tasks that are not suspended (either part of a process that is not suspended or not part of a process at all). If false, only tasks that are part of suspended process instances are returned.
     */
    active?: boolean;
  }
}

export { QueryResourceService }
