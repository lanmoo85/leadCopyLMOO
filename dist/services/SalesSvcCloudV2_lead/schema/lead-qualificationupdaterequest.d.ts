export type LeadQualificationupdaterequest = {
    code?: string | null;
    description?: string | null;
    isActive?: boolean | null;
    sequence?: number | null;
    color?: 'PRIMARY' | 'AQUA' | 'TEAL' | 'GREEN' | 'YELLOW' | 'ORANGE' | 'RED' | 'PINK' | 'PURPLE' | 'VIOLET' | 'ULTRAMARINE' | 'BLUE' | null;
    descriptions?: ({
        content?: string | null;
        languageCode?: string | null;
    } & Record<string, any>)[];
} & Record<string, any>;
