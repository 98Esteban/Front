import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../../services/producto.service';

declare var M: any;
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService]
})
export class ProductosComponent implements OnInit {
  
 

  constructor(public productoService: ProductoService) { }

  ngOnInit(){
    this.obtenerProductos();
  }

  agregarProducto(form: NgForm){
    if(form.value.id){
      this.productoService.editarProducto(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Producto actualizado'});
        this.obtenerProductos();      });
    }else{
      this.productoService.crearProducto(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Producto guardado'});
        this.obtenerProductos();
      });
    }
  }

  editarProducto(producto: Producto){
    this.productoService.producto = producto; 
  }

  eliminarProducto(id: string){
    this.productoService.eliminarProducto(id).subscribe(res => {
      M.toast({html: 'Producto eliminado'});
      this.obtenerProductos();  
    });
  }

  obtenerProductos(){
    this.productoService.obtenerProductos().subscribe(res => {
      this.productoService.productos = res as Producto[];
      console.log(res);
    })
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.productoService.producto = new Producto;
    }
  }

}
