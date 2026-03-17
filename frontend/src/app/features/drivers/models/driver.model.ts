export interface Driver {
    id           : number,
    fullName     : string,
    licenseNumber: string,
    phone        : string,
    isAvailable  : boolean,
    createdAt    : string
}

export type CreateDriverDto = Omit<Driver, 'id' | 'createdAt'>;
export type UpdateDriverDto = Partial<CreateDriverDto> & { id: number }