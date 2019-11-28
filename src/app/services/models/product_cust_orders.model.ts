// product_id           NUMERIC NOT NULL ,
// supplier_id          NUMERIC NOT NULL ,
// order_id             NUMERIC NOT NULL ,
// customer_id          NUMERIC NOT NULL ,
// quantity             NUMERIC NULL ,
// comments             VARCHAR(20) NULL 
export class ProductOrderCus {
    constructor(
        public product_id: number,
        public supplier_id: number,
        public order_id: number,
        public comments: string,
        public customer_id: number
    ) { }
}