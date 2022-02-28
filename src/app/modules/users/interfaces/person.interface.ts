import {IAddress} from "./address.interface";

export interface IPerson {
    firstName?: string
    lastName?: string
    age?: number
    company?: string
    department?: string
    gender?: string
    email?: string
    activated?: boolean
    addresses?: IAddress[]
    id: string
}

