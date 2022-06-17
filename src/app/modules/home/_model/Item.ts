export class Item{
    id_item: number;
    id_invoice: number;
    gtin: string;
    quantity: number;
    unit_price: number;
    taxes: number;
    subtotal: number;
    total: number;

    constructor(){
        this.id_item = 0;
        this.id_invoice = 0;
        this.gtin = "";
        this.quantity = 0;
        this.unit_price = 0;
        this.taxes = 0;
        this.subtotal = 0;
        this.total = 0;
    }
}