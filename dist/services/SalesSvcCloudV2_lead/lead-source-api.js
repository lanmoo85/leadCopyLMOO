"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadSourceApi = void 0;
const openapi_1 = require("@sap-cloud-sdk/openapi");
exports.LeadSourceApi = {
    _defaultBasePath: undefined,
    queryleadserviceLeadSource: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/sources', {
        queryParameters
    }, exports.LeadSourceApi._defaultBasePath),
    createleadserviceLeadSource: (body) => new openapi_1.OpenApiRequestBuilder('post', '/sap/c4c/api/v1/lead-service/sources', {
        body
    }, exports.LeadSourceApi._defaultBasePath),
    readleadserviceLeadSourceCode: (code) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/sources/{code}', {
        pathParameters: { code }
    }, exports.LeadSourceApi._defaultBasePath),
    putleadserviceLeadSourceCode: (code, body) => new openapi_1.OpenApiRequestBuilder('put', '/sap/c4c/api/v1/lead-service/sources/{code}', {
        pathParameters: { code },
        body
    }, exports.LeadSourceApi._defaultBasePath),
    deleteleadserviceLeadSourceCode: (code) => new openapi_1.OpenApiRequestBuilder('delete', '/sap/c4c/api/v1/lead-service/sources/{code}', {
        pathParameters: { code }
    }, exports.LeadSourceApi._defaultBasePath)
};
//# sourceMappingURL=lead-source-api.js.map