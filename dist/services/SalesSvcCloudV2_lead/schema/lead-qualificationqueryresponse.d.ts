export type LeadQualificationqueryresponse = {
    count?: number;
    value?: ({
        code?: string | null;
        description?: string | null;
        isActive?: boolean | null;
        sequence?: number | null;
        color?: 'PRIMARY' | 'AQUA' | 'TEAL' | 'GREEN' | 'YELLOW' | 'ORANGE' | 'RED' | 'PINK' | 'PURPLE' | 'VIOLET' | 'ULTRAMARINE' | 'BLUE' | null;
        descriptions?: ({
            content?: string | null;
            languageCode?: string | null;
        } & Record<string, any>)[];
    } & Record<string, any>)[];
} & Record<string, any>;
