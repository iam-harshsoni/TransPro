export interface VesselwiseSummaries {
    id         : number;
    invoiceNo  : string;
    invoiceDate: Date;
    party      : string;
    jobs       : Jobs[];
}

export interface Jobs {
    vesselName  : string;
    shipmentType: number;
    arrivalDate : Date;
    sailingDate : Date;
    cargo       : Cargo [];
}

export interface Cargo {
    productName: string;
    pcs        : number;
    cbm        : number;
    frt        : number;
    length     : number;
    isCBM      : number;
}

export enum ShipmentType {
    Import = 1,
    Export = 2
}