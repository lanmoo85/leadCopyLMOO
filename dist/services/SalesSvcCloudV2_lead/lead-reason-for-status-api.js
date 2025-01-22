"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadReasonForStatusApi = void 0;
const openapi_1 = require("@sap-cloud-sdk/openapi");
exports.LeadReasonForStatusApi = {
    _defaultBasePath: undefined,
    queryleadserviceLeadReasonForStatus: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/reasonForStatus', {
        queryParameters
    }, exports.LeadReasonForStatusApi._defaultBasePath),
    createleadserviceLeadReasonForStatus: (body) => new openapi_1.OpenApiRequestBuilder('post', '/sap/c4c/api/v1/lead-service/reasonForStatus', {
        body
    }, exports.LeadReasonForStatusApi._defaultBasePath),
    readleadserviceLeadReasonForStatusCode: (code) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/reasonForStatus/{code}', {
        pathParameters: { code }
    }, exports.LeadReasonForStatusApi._defaultBasePath),
    putleadserviceLeadReasonForStatusCode: (code, body) => new openapi_1.OpenApiRequestBuilder('put', '/sap/c4c/api/v1/lead-service/reasonForStatus/{code}', {
        pathParameters: { code },
        body
    }, exports.LeadReasonForStatusApi._defaultBasePath),
    deleteleadserviceLeadReasonForStatusCode: (code) => new openapi_1.OpenApiRequestBuilder('delete', '/sap/c4c/api/v1/lead-service/reasonForStatus/{code}', {
        pathParameters: { code }
    }, exports.LeadReasonForStatusApi._defaultBasePath)
};
//# sourceMappingURL=lead-reason-for-status-api.js.map