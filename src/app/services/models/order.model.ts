// order_id             NUMERIC NOT NULL ,
// customer_payment_method_id NUMERIC NULL ,
// order_status_code    VARCHAR(20) NULL ,
// date_order_placed    DATE NULL ,
// date_order_paid      DATE NULL ,
// der_order_price      DATE NULL ,
// other_order_details  VARCHAR(20) NULL ,
// customer_id          NUMERIC NOT NULL 


export class Order {
    constructor(
        public order_id: number,
        public customer_payment_method_id: number,
        public date_order_placed: Date,
        public date_order_paid: Date,
        public other_order_details: string,
        public customer_id: number,
        public der_order_price: number
    ) { }
}