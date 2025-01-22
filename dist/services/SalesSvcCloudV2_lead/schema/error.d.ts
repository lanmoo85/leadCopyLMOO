export type Error = {
    error?: {
        code?: string;
        details?: ({
            message?: string;
            code?: string;
            target?: string;
        } & Record<string, any>)[];
        message?: string;
        target?: string;
    } & Record<string, any>;
} & Record<string, any>;
