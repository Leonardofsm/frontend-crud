// usuario.service.ts
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Usuario } from '../login/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/users';
  userCreated = new Subject<void>();
  router: any;

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, usuario);
  }

  loginUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, usuario).pipe(
      tap(response => {
        // Salvar token de autenticação em localStorage ou em um serviço de autenticação
        console.log('Token service:', response);
        localStorage.setItem('token', response.token);
      })
    );
  }


  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();


  fazerLogin(usuario: any){

    if (usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123456') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  exportUsersToExcel(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/exportUsersToExcel`, { responseType: 'blob' });
  }


  /**
    * Recupera uma lista de usuários da API.
    * @returns Um Observable que emite um array de objetos Usuario.
   */

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}`).pipe(
      tap(response => {
        console.log('List of users:', response);
      }),
      catchError(error => {
        console.log('Error fetching users:', error);
        return throwError(error);
      })
    );
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
