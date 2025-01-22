"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadApi = void 0;
const openapi_1 = require("@sap-cloud-sdk/openapi");
exports.LeadApi = {
    _defaultBasePath: undefined,
    queryleadserviceLead: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/leads', {
        queryParameters
    }, exports.LeadApi._defaultBasePath),
    createleadserviceLead: (body) => new openapi_1.OpenApiRequestBuilder('post', '/sap/c4c/api/v1/lead-service/leads', {
        body
    }, exports.LeadApi._defaultBasePath),
    readleadserviceLead: (id) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/leads/{id}', {
        pathParameters: { id }
    }, exports.LeadApi._defaultBasePath),
    updateleadserviceLead: (id, body) => new openapi_1.OpenApiRequestBuilder('put', '/sap/c4c/api/v1/lead-service/leads/{id}', {
        pathParameters: { id },
        body
    }, exports.LeadApi._defaultBasePath),
    modifyleadserviceLead: (id, body, headerParameters) => new openapi_1.OpenApiRequestBuilder('patch', '/sap/c4c/api/v1/lead-service/leads/{id}', {
        pathParameters: { id },
        body,
        headerParameters
    }, exports.LeadApi._defaultBasePath),
    deleteleadserviceLead: (id) => new openapi_1.OpenApiRequestBuilder('delete', '/sap/c4c/api/v1/lead-service/leads/{id}', {
        pathParameters: { id }
    }, exports.LeadApi._defaultBasePath)
};
//# sourceMappingURL=lead-api.js.map