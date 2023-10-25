export interface IUser {
    id: Number;
    name: String;
    email: String;
    phone: String;
    address: {
        street: string; 
        suite: string;
        city: string;
        zipcode: string
    }

}