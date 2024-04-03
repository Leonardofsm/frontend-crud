import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule aqui

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UserListComponent } from './user-list/user-list.component';
import { RunnerDashboardComponent } from './runner-dashboard/runner-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule here
import { MatFormFieldModule } from '@angular/material/form-field';

//Angular material components


// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
// import { MatCardModule } from '@angular/material/card';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    UserListComponent,
    RunnerDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    // MatButtonModule,
    // MatInputModule,
    // MatFormFieldModule,
    // MatIconModule,
    // MatCardModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatDialogModule,
    // MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
