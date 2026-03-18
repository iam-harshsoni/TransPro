export interface Truck {
    id         : number,
    plateNumber: string,
    model      : string,
    capacity   : number,
    isAvailable: boolean,
    createdAt  : string,
}

export type CreateTruckDto = Omit<Truck, 'id' | 'createdAt'>;
export type UpdateTruckDto = Partial<CreateTruckDto> & { id: number }