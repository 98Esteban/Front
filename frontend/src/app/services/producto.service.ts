import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  producto: Producto;
  productos: Producto[];
  constructor(private http: HttpClient) { 
    this.producto = new Producto;
  }

  obtenerProductos(){
    return this.http
        .get<Producto>(`${environment.apiUrl}get-producto`)
  }

  crearProducto(event: Producto){
    console.log(environment.apiUrl)
    return this.http.post(`${environment.apiUrl}create-producto`, event);
  }

  editarProducto(data: Producto): Observable<Producto>{
    return this.http.put(`${environment.apiUrl}update-producto/${data.id}`,data);
  }

  eliminarProducto(id: string){
    return this.http.delete(`${environment.apiUrl}delete-producto/${id}`);
  }

}