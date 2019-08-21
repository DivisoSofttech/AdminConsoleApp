/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageOfStore } from '../models/page-of-store';
import { DeductionValueTypeDTO } from '../models/deduction-value-type-dto';
import { OfferDTO } from '../models/offer-dto';
import { PageOfOrder } from '../models/page-of-order';

/**
 * Aggregate Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class AggregateQueryResourceService extends __BaseService {
  static readonly findStoreBySearchTermUsingGETPath = '/api/query/findStore/{searchTerm}';
  static readonly getOrderCountByDateAndStatusNameUsingGETPath = '/api/query/getorderby-date-status-name/{statusName}/{date}';
  static readonly getAllDeductionValueTypesUsingGETPath = '/api/query/offers/get-all-deduction-value-types';
  static readonly getAllOffersUsingGETPath = '/api/query/offers/get-all-offers';
  static readonly findOrderByDatebetweenUsingGETPath = '/api/query/order/{from}/{to}';
  static readonly findOrderByDatebetweenAndStoreIdUsingGETPath = '/api/query/order/{from}/{to}/{storeId}';
  static readonly findOrderCountByDateAndStatusNameUsingGETPath = '/api/query/orderby-date-status-name/{statusName}/{date}';
  static readonly findOrderCountByStatusNameUsingGETPath = '/api/query/orderby-status/{statusName}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `AggregateQueryResourceService.FindStoreBySearchTermUsingGETParams` containing the following parameters:
   *
   * - `searchTerm`: searchTerm
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findStoreBySearchTermUsingGETResponse(params: AggregateQueryResourceService.FindStoreBySearchTermUsingGETParams): __Observable<__StrictHttpResponse<PageOfStore>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findStore/${params.searchTerm}`,
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
   * @param params The `AggregateQueryResourceService.FindStoreBySearchTermUsingGETParams` containing the following parameters:
   *
   * - `searchTerm`: searchTerm
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findStoreBySearchTermUsingGET(params: AggregateQueryResourceService.FindStoreBySearchTermUsingGETParams): __Observable<PageOfStore> {
    return this.findStoreBySearchTermUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfStore)
    );
  }

  /**
   * @param params The `AggregateQueryResourceService.GetOrderCountByDateAndStatusNameUsingGETParams` containing the following parameters:
   *
   * - `statusName`: statusName
   *
   * - `date`: date
   *
   * @return OK
   */
  getOrderCountByDateAndStatusNameUsingGETResponse(params: AggregateQueryResourceService.GetOrderCountByDateAndStatusNameUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/getorderby-date-status-name/${params.statusName}/${params.date}`,
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
   * @param params The `AggregateQueryResourceService.GetOrderCountByDateAndStatusNameUsingGETParams` containing the following parameters:
   *
   * - `statusName`: statusName
   *
   * - `date`: date
   *
   * @return OK
   */
  getOrderCountByDateAndStatusNameUsingGET(params: AggregateQueryResourceService.GetOrderCountByDateAndStatusNameUsingGETParams): __Observable<number> {
    return this.getOrderCountByDateAndStatusNameUsingGETResponse(params).pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @param params The `AggregateQueryResourceService.GetAllDeductionValueTypesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllDeductionValueTypesUsingGETResponse(params: AggregateQueryResourceService.GetAllDeductionValueTypesUsingGETParams): __Observable<__StrictHttpResponse<Array<DeductionValueTypeDTO>>> {
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
   * @param params The `AggregateQueryResourceService.GetAllDeductionValueTypesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllDeductionValueTypesUsingGET(params: AggregateQueryResourceService.GetAllDeductionValueTypesUsingGETParams): __Observable<Array<DeductionValueTypeDTO>> {
    return this.getAllDeductionValueTypesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<DeductionValueTypeDTO>)
    );
  }

  /**
   * @param params The `AggregateQueryResourceService.GetAllOffersUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllOffersUsingGETResponse(params: AggregateQueryResourceService.GetAllOffersUsingGETParams): __Observable<__StrictHttpResponse<Array<OfferDTO>>> {
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
   * @param params The `AggregateQueryResourceService.GetAllOffersUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  getAllOffersUsingGET(params: AggregateQueryResourceService.GetAllOffersUsingGETParams): __Observable<Array<OfferDTO>> {
    return this.getAllOffersUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<OfferDTO>)
    );
  }

  /**
   * @param params The `AggregateQueryResourceService.FindOrderByDatebetweenUsingGETParams` containing the following parameters:
   *
   * - `to`: to
   *
   * - `from`: from
   *
   * @return OK
   */
  findOrderByDatebetweenUsingGETResponse(params: AggregateQueryResourceService.FindOrderByDatebetweenUsingGETParams): __Observable<__StrictHttpResponse<PageOfOrder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/order/${params.from}/${params.to}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfOrder>;
      })
    );
  }
  /**
   * @param params The `AggregateQueryResourceService.FindOrderByDatebetweenUsingGETParams` containing the following parameters:
   *
   * - `to`: to
   *
   * - `from`: from
   *
   * @return OK
   */
  findOrderByDatebetweenUsingGET(params: AggregateQueryResourceService.FindOrderByDatebetweenUsingGETParams): __Observable<PageOfOrder> {
    return this.findOrderByDatebetweenUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfOrder)
    );
  }

  /**
   * @param params The `AggregateQueryResourceService.FindOrderByDatebetweenAndStoreIdUsingGETParams` containing the following parameters:
   *
   * - `to`: to
   *
   * - `storeId`: storeId
   *
   * - `from`: from
   *
   * @return OK
   */
  findOrderByDatebetweenAndStoreIdUsingGETResponse(params: AggregateQueryResourceService.FindOrderByDatebetweenAndStoreIdUsingGETParams): __Observable<__StrictHttpResponse<PageOfOrder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/order/${params.from}/${params.to}/${params.storeId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfOrder>;
      })
    );
  }
  /**
   * @param params The `AggregateQueryResourceService.FindOrderByDatebetweenAndStoreIdUsingGETParams` containing the following parameters:
   *
   * - `to`: to
   *
   * - `storeId`: storeId
   *
   * - `from`: from
   *
   * @return OK
   */
  findOrderByDatebetweenAndStoreIdUsingGET(params: AggregateQueryResourceService.FindOrderByDatebetweenAndStoreIdUsingGETParams): __Observable<PageOfOrder> {
    return this.findOrderByDatebetweenAndStoreIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfOrder)
    );
  }

  /**
   * @param params The `AggregateQueryResourceService.FindOrderCountByDateAndStatusNameUsingGETParams` containing the following parameters:
   *
   * - `statusName`: statusName
   *
   * - `date`: date
   *
   * @return OK
   */
  findOrderCountByDateAndStatusNameUsingGETResponse(params: AggregateQueryResourceService.FindOrderCountByDateAndStatusNameUsingGETParams): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/orderby-date-status-name/${params.statusName}/${params.date}`,
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
   * @param params The `AggregateQueryResourceService.FindOrderCountByDateAndStatusNameUsingGETParams` containing the following parameters:
   *
   * - `statusName`: statusName
   *
   * - `date`: date
   *
   * @return OK
   */
  findOrderCountByDateAndStatusNameUsingGET(params: AggregateQueryResourceService.FindOrderCountByDateAndStatusNameUsingGETParams): __Observable<number> {
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
      this.rootUrl + `/api/query/orderby-status/${statusName}`,
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
}

module AggregateQueryResourceService {

  /**
   * Parameters for findStoreBySearchTermUsingGET
   */
  export interface FindStoreBySearchTermUsingGETParams {

    /**
     * searchTerm
     */
    searchTerm: string;

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
   * Parameters for getOrderCountByDateAndStatusNameUsingGET
   */
  export interface GetOrderCountByDateAndStatusNameUsingGETParams {

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
   * Parameters for findOrderByDatebetweenUsingGET
   */
  export interface FindOrderByDatebetweenUsingGETParams {

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
}

export { AggregateQueryResourceService }
