// customer_id          NUMERIC NOT NULL ,
// customer_name        VARCHAR(50) NULL ,
// customer_phone       NUMERIC NULL ,
// customer_email       VARCHAR(50) NULL ,
// other_customer_details VARCHAR(20) NULL 


export class Customer {
    constructor(
        public customer_id: number,
        public customer_name: string,
        public customer_phone: number,
        public customer_email: string,
        public other_customer_details: string,
        public addressId: string,

    ) { }
}