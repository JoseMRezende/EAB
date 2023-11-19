import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  calcular() {
    let n1: string = (<HTMLInputElement>document.getElementById('input1'))
      .value;
    let n2: string = (<HTMLInputElement>document.getElementById('input3'))
      .value;

    if (n1 == '') {
      alert('Preencha o campo primeiro campo');
      return;
    }
    if (n2 == '') {
      alert('Preencha o campo segundo campo');
      return;
    }

    const PN: number = parseFloat(n1);
    const SN: number = parseFloat(n2);

    let operacaoSelecionada: string = '';

    if (
      (<HTMLInputElement>document.getElementById('flexRadioDefault1')).checked
    ) {
      operacaoSelecionada = 'soma';
    } else if (
      (<HTMLInputElement>document.getElementById('flexRadioDefault2')).checked
    ) {
      operacaoSelecionada = 'subtracao';
    } else if (
      (<HTMLInputElement>document.getElementById('flexRadioDefault3')).checked
    ) {
      operacaoSelecionada = 'multiplicacao';
    } else if (
      (<HTMLInputElement>document.getElementById('flexRadioDefault4')).checked
    ) {
      operacaoSelecionada = 'divisao';
    }

    let resultado: number;
    switch (operacaoSelecionada) {
      case 'soma':
        resultado = PN + SN;
        break;
      case 'subtracao':
        resultado = PN - SN;
        break;
      case 'multiplicacao':
        resultado = PN * SN;
        break;
      case 'divisao':
        if (SN !== 0) {
          resultado = PN / SN;
        } else {
          alert('Não é possível dividir por zero');
          return;
        }
        break;
      default:
        alert('Selecione uma operação');
        return;
    }

    let label1 = <HTMLInputElement>document.getElementById('label-resposta');
    label1.innerText = `Resultado: ${resultado}`;
  }
}
