import { Leadqueryresponse } from '../../services/SalesSvcCloudV2_lead';
export declare class LeadService {
    getLeads(): Promise<Leadqueryresponse>;
    getLeadById(id: string): Promise<Leadqueryresponse>;
    createLeadCopy(lead: any): Promise<import("../../services/SalesSvcCloudV2_lead").Leadfile>;
}
