import { number } from "prop-types";

export interface IApiResponse {
    code: number;
    data: any | any[];
    message: string;
    status: boolean;
}

export interface IDataTableResponse {
    currentPage: number;
    data: any[];
    totalItems: number;
    totalPages: number;
}
export interface IDataTableApiResponse {
    code: number;
    data: IDataTableResponse;
    message: string;
    status: boolean;
}
