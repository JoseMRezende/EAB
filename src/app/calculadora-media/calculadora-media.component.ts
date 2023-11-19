import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-media',
  templateUrl: './calculadora-media.component.html',
  styleUrls: ['./calculadora-media.component.css'],
})
export class CalculadoraMediaComponent {
  calcular() {
    let ac1: string = (<HTMLInputElement>document.getElementById('input1'))
      .value;
    let ac2: string = (<HTMLInputElement>document.getElementById('input2'))
      .value;
    let ac3: string = (<HTMLInputElement>document.getElementById('input3'))
      .value;
    let ac4: string = (<HTMLInputElement>document.getElementById('input4'))
      .value;

    if (ac1 == '') {
      alert('Preencha o campo AC1');
      return;
    }
    if (ac2 == '') {
      alert('Preencha o campo AC2');
      return;
    }
    if (ac3 == '') {
      alert('Preencha o campo AG');
      return;
    }
    if (ac4 == '') {
      alert('Preencha o campo AF');
      return;
    }

    const pAC1: number = parseFloat(ac1);
    const pAC2: number = parseFloat(ac2);
    const pAG: number = parseFloat(ac3);
    const pAF: number = parseFloat(ac4);

    const notaAC1: number = pAC1 * 0.15;
    const notaAC2: number = pAC2 * 0.3;
    const notaAG: number = pAG * 0.1;
    const notaAF: number = pAF * 0.45;

    const media: number = notaAC1 + notaAC2 + notaAG + notaAF;

    let label1 = <HTMLInputElement>document.getElementById('label-resposta');

    if (media < 5) {
      label1.innerText = `Reprovado Média Final: ${media}`;
    }
    if (media >= 5) {
      label1.innerText = `Aprovado Média Final: ${media}`;
    }
  }
}
