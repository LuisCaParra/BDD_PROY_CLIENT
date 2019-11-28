// date_reported        DATE NOT NULL ,
// delivery_status_code VARCHAR(20) NULL ,
// order_id             NUMERIC NOT NULL ,
// customer_id          NUMERIC NOT NULL 

export class CustomerDelivery {
    constructor(
        public date_reported: Date,
        public delivery_status_code: string,
        public order_id: number,
        public customer_id: number,
    ) { }
}