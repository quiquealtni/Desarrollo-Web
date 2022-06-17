import { ProductImage } from "../../product/_model/productImage";

export class ProductRandom{
    gtin: string;
    id_product: number;
    images: ProductImage[];
    price: number;
    product: string;

    constructor(){
        this.id_product = 0;
        this.gtin = "";
        this.product = "";
        this.price = 0.0;
        this.images = [];
    }
}