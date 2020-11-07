
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SalasService {
  readonly API_URL = environment.serverLocation + 'api/solicitudes';
  solicitudes: []
  constructor(public http: HttpClient) { }

  getSolicitudes() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.API_URL, { headers: headers });
  }

  postSolicitudes(solicitud) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.API_URL + '/crear', solicitud, { headers: headers });

  }

  procesarSolicitudes(proceso) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.API_URL + '/procesar', proceso, { headers: headers });
  }

  getSolicitudUsuario(username) {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.API_URL + '/' + username, { headers: headers });
  }
  mostrarEstado(id) {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.API_URL + '/mostrar/' + id, { headers: headers });


  }
}