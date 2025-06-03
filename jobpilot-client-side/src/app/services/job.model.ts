export interface Job {
    title: string;
    companyName: string;
    locationName: string;
    description: string;
    redirect_url: string;
    externalCreatedAt: string;
    latitude: number | null;
    longitude: number | null;
}

export interface JobPage {
    content: Job[];
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
}