export interface User {
    name: string; // required with minimum 5 characters
    mobile:string;
    address: {
    street: string; // required
    postcode: string;
    
    }

    }