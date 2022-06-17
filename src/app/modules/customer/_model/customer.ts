export class Customer{
    address: string;
    id_customer: number;
    id_region: number;
    name: string;
    surname: string;
    rfc: string;
    mail: string;
    status: number;
    image: string;

    constructor(){
        this.address = "";
        this.id_customer = 0;
        this.id_region = 0;
        this.name = "";
        this.surname = "";
        this.rfc = "";
        this.mail = "";
        this.status = 1;
        this.image = "";
    }
}