import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { LeadReasonforStatusqueryresponse, LeadReasonforStatuscreaterequest, LeadReasonforStatusfile, LeadReasonforStatusupdaterequest } from './schema';
export declare const LeadReasonForStatusApi: {
    _defaultBasePath: any;
    queryleadserviceLeadReasonForStatus: (queryParameters?: {
        isActive?: boolean;
    }) => OpenApiRequestBuilder<LeadReasonforStatusqueryresponse>;
    createleadserviceLeadReasonForStatus: (body: LeadReasonforStatuscreaterequest | undefined) => OpenApiRequestBuilder<LeadReasonforStatusfile>;
    readleadserviceLeadReasonForStatusCode: (code: string) => OpenApiRequestBuilder<LeadReasonforStatusfile>;
    putleadserviceLeadReasonForStatusCode: (code: string, body: LeadReasonforStatusupdaterequest | undefined) => OpenApiRequestBuilder<LeadReasonforStatusfile>;
    deleteleadserviceLeadReasonForStatusCode: (code: string) => OpenApiRequestBuilder<any>;
};
