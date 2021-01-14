import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../Models/UsuarioDTO';
import { ResultModel } from '../Models/ResultModel';

@Injectable({
  providedIn: 'root'
})


export class ServicesService {

  constructor(private http: HttpClient) { }

  // --------------------- usuarios ---------------------
  public GetUserByUserId(id: number) { 
    return this.http.post("http://localhost:51538/api/POC/ListarUsuariosById", id);
  }

  public GetAllUsers(): Observable<ResultModel> {
    return this.http.get<ResultModel>("http://localhost:51538/api/POC");
  }

  public SaveUser(UsuarioDTO: UsuarioDTO) { 
    return this.http.post("http://localhost:51538/api/POC/GuardarUsuario", UsuarioDTO);
  }

  public UpdateUser(UsuarioDTO: UsuarioDTO) {
    return this.http.put("http://localhost:51538/api/POC/ModificarUsuario", UsuarioDTO);
  }

  public DeleteUser(id: number) {
    return this.http.post("http://localhost:51538/api/POC/EliminarUsuario", id);
  }
  
}

