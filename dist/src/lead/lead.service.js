"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadService = void 0;
const common_1 = require("@nestjs/common");
const SalesSvcCloudV2_lead_1 = require("../../services/SalesSvcCloudV2_lead");
let LeadService = class LeadService {
    async getLeads() {
        return await SalesSvcCloudV2_lead_1.LeadApi.queryleadserviceLead().execute({
            destinationName: process.env.DESTINATION_NAME,
        });
    }
    async getLeadById(id) {
        const filterParamId = 'displayId eq ' + id;
        const queryParams = {
            $filter: filterParamId,
        };
        return await SalesSvcCloudV2_lead_1.LeadApi.queryleadserviceLead(queryParams).execute({
            destinationName: process.env.DESTINATION_NAME,
        });
    }
    async createLeadCopy(lead) {
        console.log(JSON.stringify(lead));
        const id = lead.displayId;
        console.log(id);
        const leadDetails = SalesSvcCloudV2_lead_1.LeadApi.readleadserviceLead(lead.id).execute({
            destinationName: process.env.DESTINATION_NAME,
        });
        if (leadDetails) {
            const nameLead = (await leadDetails).value.name + '_copyLMOO';
            return await SalesSvcCloudV2_lead_1.LeadApi.createleadserviceLead({
                name: nameLead,
                account: (await leadDetails).value.account,
            }).execute({
                destinationName: process.env.DESTINATION_NAME,
            });
        }
    }
};
exports.LeadService = LeadService;
exports.LeadService = LeadService = __decorate([
    (0, common_1.Injectable)()
], LeadService);
//# sourceMappingURL=lead.service.js.map