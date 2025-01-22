export type Leadqueryresponse = {
    count?: number;
    value?: ({
        id?: string | null;
        displayId?: string | null;
        name: string | null;
        internalStatus?: 'OPEN' | 'CONVERTED' | 'ACCEPTED' | 'DECLINED' | null;
        status?: string | null;
        statusDescription?: string | null;
        reasonForStatus?: string | null;
        reasonForStatusDescription?: string | null;
        source?: string | null;
        sourceDescription?: string | null;
        qualification?: string | null;
        qualificationDescription?: string | null;
        score?: number | null;
        accountContactsStatus?: 'ALL_EXIST' | 'ALL_NEW' | 'ACCOUNT_EXIST_CONTACT_NEW' | null;
        isEndOfPurpose?: boolean | null;
        account?: {
            id?: string | null;
            displayId?: string | null;
            formattedName?: string | null;
            firstLineName?: string | null;
            secondLineName?: string | null;
            thirdLineName?: string | null;
            fourthLineName?: string | null;
            address?: {
                streetName?: string | null;
                houseId?: string | null;
                postalCode?: string | null;
                cityName?: string | null;
                country?: string | null;
                countryDescription?: string | null;
                email?: string | null;
                web?: string | null;
                phoneFormattedNumber?: string | null;
                mobileFormattedNumber?: string | null;
                formattedPostalAddressDescription?: string | null;
            } & Record<string, any>;
        } & Record<string, any>;
        businessArea?: {
            salesOrganisationId?: string | null;
            salesOrganisationDisplayId?: string | null;
            salesOrganisationName?: string | null;
            distributionChannel?: string | null;
            distributionChannelName?: string | null;
            division?: string | null;
            divisionName?: string | null;
            salesGroupId?: string | null;
            salesGroupDisplayId?: string | null;
            salesGroupName?: string | null;
            salesOfficeId?: string | null;
            salesOfficeDisplayId?: string | null;
            salesOfficeName?: string | null;
            salesTerritoryId?: string | null;
            salesTerritoryDisplayId?: string | null;
            salesTerritoryName?: string | null;
        } & Record<string, any>;
        salesUnit?: {
            id?: string | null;
            displayId?: string | null;
            formattedName?: string | null;
        } & Record<string, any>;
        owner?: {
            id?: string | null;
            displayId?: string | null;
            formattedName?: string | null;
        } & Record<string, any>;
        salesEmployees?: ({
            id?: string | null;
            salesEmployeeId?: string | null;
            displayId?: string | null;
            role?: string | null;
            formattedName?: string | null;
        } & Record<string, any>)[];
        contacts?: ({
            id?: string | null;
            contactId?: string | null;
            displayId?: string | null;
            isPrimary?: boolean | null;
            formattedName?: string | null;
            givenName?: string | null;
            familyName?: string | null;
            gender?: string | null;
            genderDescription?: string | null;
            address?: {
                email?: string | null;
                phoneFormattedNumber?: string | null;
                mobileFormattedNumber?: string | null;
                departmentName?: string | null;
                functionalTitleName?: string | null;
                buildingId?: string | null;
                floorId?: string | null;
                roomId?: string | null;
                hugRank?: number | null;
            } & Record<string, any>;
        } & Record<string, any>)[];
        products?: ({
            id?: string | null;
            productId?: string | null;
            displayId?: string | null;
            productDescription?: string | null;
            quantity?: {
                content?: number | null;
                unitCode?: string | null;
                unitDescription?: string | null;
            } & Record<string, any>;
        } & Record<string, any>)[];
        notes?: ({
            id?: string | null;
            content: string | null;
            adminData?: {
                createdBy?: string | null;
                createdByName?: string | null;
                createdOn?: string | null;
                updatedBy?: string | null;
                updatedByName?: string | null;
                updatedOn?: string | null;
            } & Record<string, any>;
        } & Record<string, any>)[];
        relatedObjects?: ({
            id?: string | null;
            objectId?: string | null;
            displayId?: string | null;
            type?: string | null;
            typeDescription?: string | null;
            role?: 'PREDECESSOR' | 'SUCCESSOR' | null;
            roleDescription?: string | null;
            status?: 'OPEN' | 'INPROCESS' | 'COMPLETED' | 'CANCELLED' | null;
            startDateTime?: string | null;
            dueDateTime?: string | null;
            executionStatus?: string | null;
        } & Record<string, any>)[];
        worklistItems?: ({
            id?: string | null;
            playBookName?: string | null;
            playBookId?: string | null;
            playBookItemId?: string | null;
            type?: 'ACTION' | 'APPOINTMENT' | 'TASK' | 'PHONE_CALL' | 'SURVEY' | 'EMAIL' | 'MASHUP' | 'SALES_QUOTE' | 'UNKNOWN' | null;
            title?: string | null;
            description?: string | null;
            priority?: string | null;
            priorityDescription?: string | null;
            category?: string | null;
            categoryDescription?: string | null;
            duration?: string | null;
            actionFields?: string[];
            relatedObjectId?: string | null;
            relatedObjectDisplayId?: string | null;
            isRelatedObjectCompleted?: boolean | null;
            isMandatory?: boolean | null;
            status?: 'UNKNOWN' | 'PROPOSED' | 'PLANNED' | 'DISMISSED' | 'COMPLETED' | null;
            leadStatus?: string | null;
            isAutoExecute?: boolean | null;
            endDateTime?: string | null;
            startDateTime?: string | null;
            note?: {
                id?: string | null;
                content: string | null;
                adminData?: {
                    createdBy?: string | null;
                    createdByName?: string | null;
                    createdOn?: string | null;
                    updatedBy?: string | null;
                    updatedByName?: string | null;
                    updatedOn?: string | null;
                } & Record<string, any>;
            } & Record<string, any>;
        } & Record<string, any>)[];
        attachments?: ({
            id?: string | null;
            title?: string | null;
            type?: string | null;
            fileName?: string | null;
            fileSize?: string | null;
            contentType?: string | null;
            category?: string | null;
            status?: string | null;
            uploadUrl?: string | null;
            url?: string | null;
            adminData?: {
                createdBy?: string | null;
                createdByName?: string | null;
                createdOn?: string | null;
                updatedBy?: string | null;
                updatedByName?: string | null;
                updatedOn?: string | null;
            } & Record<string, any>;
        } & Record<string, any>)[];
        adminData?: {
            createdBy?: string | null;
            createdByName?: string | null;
            createdOn?: string | null;
            updatedBy?: string | null;
            updatedByName?: string | null;
            updatedOn?: string | null;
        } & Record<string, any>;
        primaryContact?: {
            id?: string | null;
            contactId?: string | null;
            displayId?: string | null;
            isPrimary?: boolean | null;
            formattedName?: string | null;
            givenName?: string | null;
            familyName?: string | null;
            gender?: string | null;
            genderDescription?: string | null;
            address?: {
                email?: string | null;
                phoneFormattedNumber?: string | null;
                mobileFormattedNumber?: string | null;
                departmentName?: string | null;
                functionalTitleName?: string | null;
                buildingId?: string | null;
                floorId?: string | null;
                roomId?: string | null;
                hugRank?: number | null;
            } & Record<string, any>;
        } & Record<string, any>;
    } & Record<string, any>)[];
} & Record<string, any>;
