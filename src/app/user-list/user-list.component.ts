import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../login/usuario';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  //
  ngOnInit(): void {
    this.fetchUsers();
    this.usuarioService.userCreated.subscribe(() => {
      this.fetchUsers();
    });
  }

  // Exports the list of users to an Excel file
  exportToExcel(): void {
    this.usuarioService.exportUsersToExcel().subscribe((excelData: any) => {
      FileSaver.saveAs(excelData, 'users.xlsx');
    });
  }

  // Fetches the list of users from an API or a service
  fetchUsers(): void {
    // Your code to fetch the list of users goes here
    this.usuarioService.listarUsuarios().subscribe((users: Usuario[]) => {
      this.usuarios = users;
    });
  }
}
