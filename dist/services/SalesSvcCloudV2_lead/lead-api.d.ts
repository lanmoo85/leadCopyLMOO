import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { Leadqueryresponse, Leadcreaterequest, Leadfile, Leadupdaterequest, Leadpatchupdaterequest } from './schema';
export declare const LeadApi: {
    _defaultBasePath: any;
    queryleadserviceLead: (queryParameters?: {
        $top?: number;
        $skip?: number;
        $search?: string;
        $orderby?: string;
        $filter?: string;
        $select?: string;
        $count?: boolean;
        $query?: string;
    }) => OpenApiRequestBuilder<Leadqueryresponse>;
    createleadserviceLead: (body: Leadcreaterequest | undefined) => OpenApiRequestBuilder<Leadfile>;
    readleadserviceLead: (id: string) => OpenApiRequestBuilder<Leadfile>;
    updateleadserviceLead: (id: string, body: Leadupdaterequest | undefined) => OpenApiRequestBuilder<Leadfile>;
    modifyleadserviceLead: (id: string, body: Leadpatchupdaterequest | undefined, headerParameters: {
        "If-Match": string;
    }) => OpenApiRequestBuilder<Leadfile>;
    deleteleadserviceLead: (id: string) => OpenApiRequestBuilder<any>;
};
