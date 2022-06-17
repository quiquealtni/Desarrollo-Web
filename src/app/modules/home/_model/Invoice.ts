export class Invoice{
    id_invoice: number;
    rfc: string;
    subtotal: number;
    taxes: number;
    total: number;
    created_at: string;

    constructor(){
        this.id_invoice = 0;
        this.rfc = "";
        this.subtotal = 0;
        this.taxes = 0;
        this.total = 0;
        this.created_at = "";
    }
}