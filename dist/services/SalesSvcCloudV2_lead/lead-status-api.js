"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadStatusApi = void 0;
const openapi_1 = require("@sap-cloud-sdk/openapi");
exports.LeadStatusApi = {
    _defaultBasePath: undefined,
    queryleadserviceLeadStatus: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/statuses', {
        queryParameters
    }, exports.LeadStatusApi._defaultBasePath),
    createleadserviceLeadStatus: (body) => new openapi_1.OpenApiRequestBuilder('post', '/sap/c4c/api/v1/lead-service/statuses', {
        body
    }, exports.LeadStatusApi._defaultBasePath),
    readleadserviceLeadStatusCode: (code) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/statuses/{code}', {
        pathParameters: { code }
    }, exports.LeadStatusApi._defaultBasePath),
    putleadserviceLeadStatusCode: (code, body) => new openapi_1.OpenApiRequestBuilder('put', '/sap/c4c/api/v1/lead-service/statuses/{code}', {
        pathParameters: { code },
        body
    }, exports.LeadStatusApi._defaultBasePath),
    deleteleadserviceLeadStatusCode: (code) => new openapi_1.OpenApiRequestBuilder('delete', '/sap/c4c/api/v1/lead-service/statuses/{code}', {
        pathParameters: { code }
    }, exports.LeadStatusApi._defaultBasePath)
};
//# sourceMappingURL=lead-status-api.js.map