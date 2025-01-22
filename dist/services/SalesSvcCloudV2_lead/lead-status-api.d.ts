import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { LeadStatusqueryresponse, LeadStatuscreaterequest, LeadStatusfile, LeadStatusupdaterequest } from './schema';
export declare const LeadStatusApi: {
    _defaultBasePath: any;
    queryleadserviceLeadStatus: (queryParameters?: {
        isActive?: boolean;
        $orderby?: string;
    }) => OpenApiRequestBuilder<LeadStatusqueryresponse>;
    createleadserviceLeadStatus: (body: LeadStatuscreaterequest | undefined) => OpenApiRequestBuilder<LeadStatusfile>;
    readleadserviceLeadStatusCode: (code: string) => OpenApiRequestBuilder<LeadStatusfile>;
    putleadserviceLeadStatusCode: (code: string, body: LeadStatusupdaterequest | undefined) => OpenApiRequestBuilder<LeadStatusfile>;
    deleteleadserviceLeadStatusCode: (code: string) => OpenApiRequestBuilder<any>;
};
