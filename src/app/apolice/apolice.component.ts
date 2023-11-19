import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css'],
})
export class ApoliceComponent {
  enviar() {
    let nome: string = (<HTMLInputElement>(
      document.getElementById('exampleInputNome')
    )).value;
    let idade: string = (<HTMLInputElement>(
      document.getElementById('exampleInputIdade')
    )).value;
    let valor: string = (<HTMLInputElement>(
      document.getElementById('inputValorCarro')
    )).value;

    if (nome == '') {
      alert('Preencha o campo Nome');
      return;
    }
    if (idade == '') {
      alert('Preencha o campo Idade');
      return;
    }
    if (valor == '') {
      alert('Preencha o campo Valor');
      return;
    }

    const ID: number = parseFloat(idade);
    const VL: number = parseFloat(valor);

    const sexoSelect: HTMLSelectElement = <HTMLSelectElement>(
      document.getElementById('selectSexo')
    );
    const sexo: string = sexoSelect.value;

    let label1 = <HTMLInputElement>document.getElementById('label-resposta');

    if (sexo === '1' && ID <= 25) {
      let calc1 = VL * 15;
      let calc2 = calc1 / 100;
      label1.innerText = `Valor da apólice de seguro: ${calc2},00`;
      return;
    } else if (sexo === '1' && ID > 25) {
      let calc1 = VL * 10;
      let calc2 = calc1 / 100;
      label1.innerText = `Valor da apólice de seguro: ${calc2},00`;
      return;
    } else if (sexo === '2') {
      let calc1 = VL * 8;
      let calc2 = calc1 / 100;
      label1.innerText = `Valor da apólice de seguro: ${calc2},00`;
      return;
    } else {
      alert('Nenhum sexo selecionado');
      return;
    }
  }
}
