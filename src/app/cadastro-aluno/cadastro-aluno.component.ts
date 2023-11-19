import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css'],
})
export class CadastroAlunoComponent {
  ra: string = '';
  nome: string = '';
  email: string = '';
  celular: string = '';

  enviar() {
    if (this.ra == '') {
      alert('Preencha o campo RA');
      return;
    }
    if (this.nome == '') {
      alert('Preencha o campo Nome');
      return;
    }
    if (this.email == '') {
      alert('Preencha o campo Email');
      return;
    }
    if (this.celular == '') {
      alert('Preencha o campo Celular');
      return;
    }

    this.ra = '';
    this.nome = '';
    this.email = '';
    this.celular = '';

    alert('Enviado');
  }
}
