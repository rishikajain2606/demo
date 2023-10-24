export interface IUser {
    id: Number;
    name: String;
    email: String;
    website: String;
address: {
    street: string; // required
    suite: string;
    city: string;
    zipcode: string
}

}