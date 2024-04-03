// cadastro.component.ts
import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../login/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  // nome: string = ''; // Inicialização da propriedade
  // email: string = '';
  // idade: number = 0;
  // telefone: string = '';
  // senha: string = '';

  constructor(private usuarioService: UsuarioService) { }

  usuario: Usuario = new Usuario();

  cadastrar() {


    this.usuarioService.cadastrarUsuario(this.usuario).subscribe(response => {
      this.usuarioService.userCreated.next();
      // Lógica após o cadastro bem-sucedido (redirecionamento, etc.)
      alert('Cadastro efetuado com sucesso!');
      console.log('Cadastro efetuado com sucesso:', response);

    }, error => {
      console.error('Erro no cadastro:', error);
      // Lidar com erros (exibindo mensagem de erro, etc.)
    });
  }
}
