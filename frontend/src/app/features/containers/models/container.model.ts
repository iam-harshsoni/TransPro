export interface Container {
    id: number,
    containerNumber: string,
    type: string
    weightCapacity: number,
    isAvailable: boolean,
    createdAt: string
}

export type CreateContainerDto = Omit<Container, 'id' | 'createdAt'>;

export type UpdateContainerDto = Partial<CreateContainerDto> & { id: number }