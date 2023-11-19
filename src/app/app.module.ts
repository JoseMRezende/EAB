import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopoTelaComponent } from './topo-tela/topo-tela.component';
import { CalculadoraMediaComponent } from './calculadora-media/calculadora-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ApoliceComponent } from './apolice/apolice.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoTelaComponent,
    CalculadoraMediaComponent,
    CalculadoraComponent,
    CadastroAlunoComponent,
    ApoliceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
