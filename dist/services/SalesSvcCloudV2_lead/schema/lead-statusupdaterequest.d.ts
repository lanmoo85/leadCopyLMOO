export type LeadStatusupdaterequest = {
    code?: string | null;
    description?: string | null;
    internalStatus?: 'OPEN' | 'CONVERTED' | 'ACCEPTED' | 'DECLINED' | null;
    isActive?: boolean | null;
    sequence?: number | null;
    descriptions?: ({
        content?: string | null;
        languageCode?: string | null;
    } & Record<string, any>)[];
} & Record<string, any>;
