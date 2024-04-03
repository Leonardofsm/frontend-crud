// Runner.service.ts
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Runner } from '../runner-dashboard/runner';


@Injectable({
  providedIn: 'root'
})
export class RunnerService {
  private apiUrl = 'http://localhost:3000/runner';
  userCreated = new Subject<void>();
  router: any;

  constructor(private http: HttpClient) { }

  cadastrarRunner(runner: Runner): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, runner);
  }

  loginRunner(runner: Runner): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, runner).pipe(
      tap(response => {
        // Salvar token de autenticação em localStorage ou em um serviço de autenticação
        console.log('Token service:', response);
        localStorage.setItem('token', response.token);
      })
    );
  }


  private RunnerAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();


  fazerLogin(Runner: any){

    if (Runner.nome === 'Runner@email.com' &&
      Runner.senha === '123456') {

      this.RunnerAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

    } else {
      this.RunnerAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  exportRunnerToExcel(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/exportRunnerToExcel`, { responseType: 'blob' });
  }

  updateRunner(runner: Runner): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${runner.id}`, runner);
  }

  deleteRunner(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }


  /**
    * Recupera uma lista de usuários da API.
    * @returns Um Observable que emite um array de objetos Runner.
   */

  listarRunners(): Observable<Runner[]> {
    return this.http.get<Runner[]>(`${this.apiUrl}`).pipe(
      tap(response => {
        console.log('List of Runner:', response);
      }),
      catchError(error => {
        console.log('Error fetching Runner:', error);
        return throwError(error);
      })
    );
  }

  RunnerEstaAutenticado(){
    return this.RunnerAutenticado;
  }
}
