export type SideBarMode = "default" | "custom" | "invisible";

export type ModuleName = "af_ghl_report";

export type AppName = "APP_NAME_CORE" | "APP_NAME_CORE_SETTING" | "APP_NAME_ADMIN";

export type AppIdentifier = "af_local" | "af_secret_shop" | "af_schema" | "af_ghl_report";
export type SSTOOLFeatures = "Campaign" | "Prospects" | "Settings";
export type SchemaFeatures = "GMB" | "Templates";
export type AFLocalFeatures = "GMB" | "Bulk-Scan";
export type GHLReportFeatures = "Ad-Report" | "Opportunity-Report" | "Mapping" | "Location";
export interface IActiveIcon {
    [identifier: GHLReportFeatures]: boolean;
}
