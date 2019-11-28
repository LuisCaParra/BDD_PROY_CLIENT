// product_id           NUMERIC NOT NULL ,
// product_type_code    VARCHAR(20) NULL ,
// supplier_id          NUMERIC NOT NULL 


export class Product {
    constructor(
        public product_id: number,
        public product_type_code: string,
        public supplier_id: number,
        public produc_price: number
    ) { }
}