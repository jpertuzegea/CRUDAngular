import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../Models/UsuarioDTO';

@Injectable({
  providedIn: 'root'
})


export class ServicesService {

  constructor(private http: HttpClient) { }

  // --------------------- usuarios ---------------------
  public GetUserByUserId(id: number) {
    alert("Entro a GetUserByUserId");
  }

  public GetAllUsers(): Observable<any[]> {
    return this.http.get<UsuarioDTO[]>("http://localhost:51538/api/POC");
  }

  public SaveUser(UsuarioDTO: UsuarioDTO) { 
    return this.http.post("http://localhost:51538/api/POC/GuardarUsuario", UsuarioDTO);
  }

  public UpdateUser() {
    alert("Entro a UpdateUser");
  }

}

