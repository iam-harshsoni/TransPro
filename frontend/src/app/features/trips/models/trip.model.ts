export interface CustomerInfo {
    id      : number;
    fullName: string;
    email   : string;
    phone   : string
}

export interface DriverInfo {
    id           : number;
    fullName     : string;
    licenseNumber: string;
    phone        : string
}

export interface TruckInfo {
    id         : number;
    plateNumber: string;
    model      : string;
    capacity   : number
}

export interface RouteInfo {
    id            : number;
    origin        : string;
    destination   : string;
    distanceKm    : number;
    estimatedHours: number
}

export interface ContainerInfo {
    id             : number;
    containerNumber: string;
    type           : string;
    weightCapacity : number;
}

export interface TripDetail {
    id           : number;
    customer     : CustomerInfo;
    driver       : DriverInfo;
    truck        : TruckInfo;
    route        : RouteInfo;
    containers   : ContainerInfo[];
    status       : TripStatus;
    departureDate: string;
    arrivalDate  : string | null;
    notes        : string;
    createdAt    : string;
}

export interface TripSummary {
    id: number;
    customerName: string;
    driverName: string,
    truckPlate: string,
    origin: string;
    destination: string;
    status: string;
    departureDate: string;
    arrivalDate  : string | null;
}

export interface TripQueryParams {
  pageNumber : number;
  pageSize   : number;
  search     : number;
  status    ?: string;
  customerId?: number;
  driverId  ?: number;
  fromDate  ?: string;
  toDate    ?: string;
}

//Enum
export type TripStatus = 'Planned' | 'InTransit' | 'Completed' | 'Cancelled';

export interface CreateTripDto {
    customerId   : number;
    driverId     : number;
    truckId      : number;
    routeId      : number;
    containerIds : number[];
    departureDate: string;
    notes        : string
}

export interface UpdateTripStatusDto  {
    newStatus: TripStatus
}