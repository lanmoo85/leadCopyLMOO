import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { LeadQualificationqueryresponse, LeadQualificationcreaterequest, LeadQualificationfile, LeadQualificationupdaterequest } from './schema';
export declare const LeadQualificationApi: {
    _defaultBasePath: any;
    queryleadserviceLeadQualification: (queryParameters?: {
        isActive?: boolean;
    }) => OpenApiRequestBuilder<LeadQualificationqueryresponse>;
    createleadserviceLeadQualification: (body: LeadQualificationcreaterequest | undefined) => OpenApiRequestBuilder<LeadQualificationfile>;
    readleadserviceLeadQualificationCode: (code: string) => OpenApiRequestBuilder<LeadQualificationfile>;
    putleadserviceLeadQualificationCode: (code: string, body: LeadQualificationupdaterequest | undefined) => OpenApiRequestBuilder<LeadQualificationfile>;
    deleteleadserviceLeadQualificationCode: (code: string) => OpenApiRequestBuilder<any>;
};
