/* A model in Angular = a TypeScript interface.
    It describes the shape of data coming from your API.
    This is exactly like a DTO (Data Transfer Object) in your C# backend.
    When your API returns JSON like:
    { "id": 1, "name": "Tata Logistics", "email": "tata@gmail.com" }
    Angular maps it to this interface automatically.
    Unlike C# classes, TypeScript interfaces exist ONLY at compile time.
    They disappear after compilation — they are just for type safety.
*/

export interface Customer {
    id: number,
    fullName: string,
    email: string,
    phone: string,
    address: string,
    isActive: boolean,
    createdAt: string // date come as strings fro JSON
}

/* This interface is used when CREATING a customer. We OMIT 'id' and 'createdAt' because the backend generates those.
    Omit<T, Keys> is a TypeScript utilit - removese specific keys from an interface 
*/

export type CreateCustomerDto = Omit<Customer, 'id' | 'createdAt'>;

// Used when editing - all fields are optional except id
export type UpdateCustomerDto = Partial<CreateCustomerDto> & { id: number };