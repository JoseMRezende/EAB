import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraMediaComponent } from './calculadora-media/calculadora-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ApoliceComponent } from './apolice/apolice.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calculadora-media',
  },

  {
    path: 'calculadora-media',
    component: CalculadoraMediaComponent,
  },

  {
    path: 'calculadora',
    component: CalculadoraComponent,
  },

  {
    path: 'cadastro-aluno',
    component: CadastroAlunoComponent,
  },

  {
    path: 'apolice',
    component: ApoliceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
