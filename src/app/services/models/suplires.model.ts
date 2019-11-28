// supplier_id          NUMERIC NOT NULL ,
// supplier_name        VARCHAR(20) NULL ,
// other_supplier_details VARCHAR(20) NULL 


export class Suppliers {
    constructor(
        public supplier_id: number,
        public supplier_name: string,
        public other_supplier_details: string,
    ) { }
}