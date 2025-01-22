import { LeadService } from './lead.service';
import { Leadqueryresponse } from 'services/SalesSvcCloudV2_lead';
export declare class LeadController {
    private readonly leadService;
    constructor(leadService: LeadService);
    getLeads(): Promise<Leadqueryresponse>;
    getLeadById(id: string): Promise<Leadqueryresponse>;
    createLeadCopy(body: any): Promise<void>;
}
