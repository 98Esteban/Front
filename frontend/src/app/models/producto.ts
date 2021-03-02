export class Producto {
    constructor(id = '', nombre='',marca='',cantidad=0){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.cantidad = cantidad;

    }
    id?:String;
    nombre?: String;
    marca?:String;
    cantidad?:number;
}
