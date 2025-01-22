"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadQualificationApi = void 0;
const openapi_1 = require("@sap-cloud-sdk/openapi");
exports.LeadQualificationApi = {
    _defaultBasePath: undefined,
    queryleadserviceLeadQualification: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/qualifications', {
        queryParameters
    }, exports.LeadQualificationApi._defaultBasePath),
    createleadserviceLeadQualification: (body) => new openapi_1.OpenApiRequestBuilder('post', '/sap/c4c/api/v1/lead-service/qualifications', {
        body
    }, exports.LeadQualificationApi._defaultBasePath),
    readleadserviceLeadQualificationCode: (code) => new openapi_1.OpenApiRequestBuilder('get', '/sap/c4c/api/v1/lead-service/qualifications/{code}', {
        pathParameters: { code }
    }, exports.LeadQualificationApi._defaultBasePath),
    putleadserviceLeadQualificationCode: (code, body) => new openapi_1.OpenApiRequestBuilder('put', '/sap/c4c/api/v1/lead-service/qualifications/{code}', {
        pathParameters: { code },
        body
    }, exports.LeadQualificationApi._defaultBasePath),
    deleteleadserviceLeadQualificationCode: (code) => new openapi_1.OpenApiRequestBuilder('delete', '/sap/c4c/api/v1/lead-service/qualifications/{code}', {
        pathParameters: { code }
    }, exports.LeadQualificationApi._defaultBasePath)
};
//# sourceMappingURL=lead-qualification-api.js.map