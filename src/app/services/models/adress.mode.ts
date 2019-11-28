export class Address {
    constructor(
        public address_id: number,
        public line_1_NUMERIC_building: string,
        public line_2_NUMERIC_street: number,
        public line_3_area_locality: string,
        public city: string,
        public state_province_country: string,
        public other_address_details: string,
        public zip_postcode: number,

    ) { }
}