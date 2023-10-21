type AppList = {
    subscribed: boolean;
    logo: string;
    identifier: string;
    name: string;
};

export interface CustomizedMenusProps {
    customClass?: string;
    appList?: AppList[];
    appUrls: any[];
}
