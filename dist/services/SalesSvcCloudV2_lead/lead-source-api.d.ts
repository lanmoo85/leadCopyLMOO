import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { LeadSourcequeryresponse, LeadSourcecreaterequest, LeadSourcefile, LeadSourceupdaterequest } from './schema';
export declare const LeadSourceApi: {
    _defaultBasePath: any;
    queryleadserviceLeadSource: (queryParameters?: {
        isActive?: boolean;
    }) => OpenApiRequestBuilder<LeadSourcequeryresponse>;
    createleadserviceLeadSource: (body: LeadSourcecreaterequest | undefined) => OpenApiRequestBuilder<LeadSourcefile>;
    readleadserviceLeadSourceCode: (code: string) => OpenApiRequestBuilder<LeadSourcefile>;
    putleadserviceLeadSourceCode: (code: string, body: LeadSourceupdaterequest | undefined) => OpenApiRequestBuilder<LeadSourcefile>;
    deleteleadserviceLeadSourceCode: (code: string) => OpenApiRequestBuilder<any>;
};
