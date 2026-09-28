import { PaginatedResponse } from "../../../../shared/models/paginated-response.model";

export interface VesselwiseSummaryReport {
    summary: PaginatedResponse<VesselwiseSummary>,
    filters: Filters
}

export interface VesselwiseSummary {
    invoiceId  : number;
    invoiceNo  : string;
    invoiceDate: Date;
    party      : string;
    jobs       : Job[];
}

export interface Job {
    vesselName  : string;
    shipmentType: number;
    arrivalDate : Date;
    sailingDate : Date;
    cargos      : Cargo [];
}

export interface Cargo {
    productName: string;
    pcs        : number;
    cbm        : number;
    frt        : number;
    length     : number;
    isCBM      : number;
}

// Filters
export interface Filters {
    partyFilterResponses   : PartyFilter[],
    invoiceNoFilterResponses: InvoiceNoFilter[]
}

export interface PartyFilter {
    id: number,
    name: string,
}

export interface InvoiceNoFilter {
    id: number,
    name: string,
}

export enum ShipmentType {
    Import = 1,
    Export = 2
}