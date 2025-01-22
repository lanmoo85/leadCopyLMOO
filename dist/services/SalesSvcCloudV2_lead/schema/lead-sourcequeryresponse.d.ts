export type LeadSourcequeryresponse = {
    count?: number;
    value?: ({
        code?: string | null;
        description?: string | null;
        isActive?: boolean | null;
        sequence?: number | null;
        descriptions?: ({
            content?: string | null;
            languageCode?: string | null;
        } & Record<string, any>)[];
    } & Record<string, any>)[];
} & Record<string, any>;
