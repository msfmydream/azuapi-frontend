declare namespace API {
  type BaseResponseboolean = {
    code?: StatusCode;
    data?: boolean;
    message?: string;
  };

  type BaseResponseInterfaceInfo = {
    code?: StatusCode;
    data?: InterfaceInfo;
    message?: string;
  };

  type BaseResponseListInterfaceInfo = {
    code?: StatusCode;
    data?: InterfaceInfo[];
    message?: string;
  };

  type BaseResponselong = {
    code?: StatusCode;
    data?: string;
    message?: string;
  };

  type BaseResponsePageInterfaceInfo = {
    code?: StatusCode;
    data?: PageInterfaceInfo;
    message?: string;
  };

  type DeleteRequest = {
    id?: string;
  };

  type getPostByIdUsingGETParams = {
    /** id */
    id?: string;
  };

  type InterfaceInfo = {
    createTime?: string;
    description?: string;
    id?: string;
    isDeleted?: number;
    method?: string;
    name?: string;
    reponseheader?: string;
    requestheader?: string;
    status?: number;
    updateTime?: string;
    url?: string;
    userid?: string;
  };

  type InterfaceInfoAddRequest = {
    description?: string;
    method?: string;
    name?: string;
    reponseheader?: string;
    requestheader?: string;
    url?: string;
  };

  type InterfaceInfoUpdateRequest = {
    description?: string;
    id?: string;
    method?: string;
    name?: string;
    reponseheader?: string;
    requestheader?: string;
    status?: number;
    url?: string;
    userid?: string;
  };

  type listPostByPageUsingGETParams = {
    current?: string;
    description?: string;
    id?: string;
    method?: string;
    name?: string;
    pageSize?: string;
    reponseheader?: string;
    requestheader?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userid?: string;
  };

  type listPostUsingGETParams = {
    current?: string;
    description?: string;
    id?: string;
    method?: string;
    name?: string;
    pageSize?: string;
    reponseheader?: string;
    requestheader?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userid?: string;
  };

  type ModelAndView = {
    empty?: boolean;
    model?: Record<string, any>;
    modelMap?: Record<string, any>;
    reference?: boolean;
    status?:
      | 'ACCEPTED'
      | 'ALREADY_REPORTED'
      | 'BAD_GATEWAY'
      | 'BAD_REQUEST'
      | 'BANDWIDTH_LIMIT_EXCEEDED'
      | 'CHECKPOINT'
      | 'CONFLICT'
      | 'CONTINUE'
      | 'CREATED'
      | 'DESTINATION_LOCKED'
      | 'EXPECTATION_FAILED'
      | 'FAILED_DEPENDENCY'
      | 'FORBIDDEN'
      | 'FOUND'
      | 'GATEWAY_TIMEOUT'
      | 'GONE'
      | 'HTTP_VERSION_NOT_SUPPORTED'
      | 'IM_USED'
      | 'INSUFFICIENT_SPACE_ON_RESOURCE'
      | 'INSUFFICIENT_STORAGE'
      | 'INTERNAL_SERVER_ERROR'
      | 'I_AM_A_TEAPOT'
      | 'LENGTH_REQUIRED'
      | 'LOCKED'
      | 'LOOP_DETECTED'
      | 'METHOD_FAILURE'
      | 'METHOD_NOT_ALLOWED'
      | 'MOVED_PERMANENTLY'
      | 'MOVED_TEMPORARILY'
      | 'MULTIPLE_CHOICES'
      | 'MULTI_STATUS'
      | 'NETWORK_AUTHENTICATION_REQUIRED'
      | 'NON_AUTHORITATIVE_INFORMATION'
      | 'NOT_ACCEPTABLE'
      | 'NOT_EXTENDED'
      | 'NOT_FOUND'
      | 'NOT_IMPLEMENTED'
      | 'NOT_MODIFIED'
      | 'NO_CONTENT'
      | 'OK'
      | 'PARTIAL_CONTENT'
      | 'PAYLOAD_TOO_LARGE'
      | 'PAYMENT_REQUIRED'
      | 'PERMANENT_REDIRECT'
      | 'PRECONDITION_FAILED'
      | 'PRECONDITION_REQUIRED'
      | 'PROCESSING'
      | 'PROXY_AUTHENTICATION_REQUIRED'
      | 'REQUESTED_RANGE_NOT_SATISFIABLE'
      | 'REQUEST_ENTITY_TOO_LARGE'
      | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
      | 'REQUEST_TIMEOUT'
      | 'REQUEST_URI_TOO_LONG'
      | 'RESET_CONTENT'
      | 'SEE_OTHER'
      | 'SERVICE_UNAVAILABLE'
      | 'SWITCHING_PROTOCOLS'
      | 'TEMPORARY_REDIRECT'
      | 'TOO_EARLY'
      | 'TOO_MANY_REQUESTS'
      | 'UNAUTHORIZED'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'UNPROCESSABLE_ENTITY'
      | 'UNSUPPORTED_MEDIA_TYPE'
      | 'UPGRADE_REQUIRED'
      | 'URI_TOO_LONG'
      | 'USE_PROXY'
      | 'VARIANT_ALSO_NEGOTIATES';
    view?: View;
    viewName?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageInterfaceInfo = {
    countId?: string;
    current?: string;
    maxLimit?: string;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: string;
    records?: InterfaceInfo[];
    searchCount?: boolean;
    size?: string;
    total?: string;
  };

  type StatusCode = true;

  type View = {
    contentType?: string;
  };
}
