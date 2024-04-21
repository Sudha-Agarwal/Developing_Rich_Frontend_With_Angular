export class Product {
    id:number;
    name:string;
    description:string;
    category:string;
    visible:boolean;
    stock:number

    constructor(id:number,
        name:string,
        description:string,
        category:string,
    visible:boolean,
    stock:number){
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
            this.visible = visible;
            this.stock = stock

        }
}
