/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DeductionValueTypeDTO } from '../models/deduction-value-type-dto';

/**
 * Aggregate Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class AggregateQueryResourceService extends __BaseService {
  static readonly getAllDeductionValueTypesUsingGETPath = '/api/query/offers/get-all-deduction-value-types';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
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
}

module AggregateQueryResourceService {

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
}

export { AggregateQueryResourceService }
