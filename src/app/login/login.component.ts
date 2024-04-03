// login.component.ts
import { UsuarioService } from '../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {

  }

  fazerLogin(){
    console.log(this.usuario);
    this.usuarioService.loginUsuario(this.usuario).subscribe(response => {
      console.log('Login efetuado com sucesso:', response);
      // Lógica após o login bem-sucedido (redirecionamento, etc.)
      // redirecionar para a página de CadastroComponent
      // Exemplo de redirecionamento usando o Angular Router
      this.router.navigate(['/cadastro']);
    } , error => {
      console.error('Erro no login:', error);
      // Lidar com erros (exibindo mensagem de erro, etc.)
    } );
  }

}
