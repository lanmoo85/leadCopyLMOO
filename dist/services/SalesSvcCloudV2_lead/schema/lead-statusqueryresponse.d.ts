export type LeadStatusqueryresponse = {
    count?: number;
    value?: ({
        code?: string | null;
        description?: string | null;
        internalStatus?: 'OPEN' | 'CONVERTED' | 'ACCEPTED' | 'DECLINED' | null;
        isActive?: boolean | null;
        sequence?: number | null;
        descriptions?: ({
            content?: string | null;
            languageCode?: string | null;
        } & Record<string, any>)[];
    } & Record<string, any>)[];
} & Record<string, any>;
