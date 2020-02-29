export interface Contact {

    gender: string,
    email: string,
    last_name: string,
    first_name: string,
    id: number,
    address?: {
        id: number,
        user_id: number,
        street: string,
        number: string
    }

}
