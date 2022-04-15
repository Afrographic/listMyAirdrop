import { AirDropTask } from './task';
export interface AirDropData {
    name?: string;
    websiteURL?: string;
    presentingWebsiteURL?: string;
    haveAirDropHunters?: boolean;
    officialEmail?: string;
    totalRewardInToken?: number;
    totalRewardInUSD?: number;
    airDropStartDate?: any;
    airDropEndDate?: any;
    tasks?: AirDropTask[];
    haveQuiz?: boolean;
    socialMediaUrls?: string[];
    logo?: File;
    whitePaper?: File;
    listingType?: string;
    emailToFinalizeOrder?: string;
}

