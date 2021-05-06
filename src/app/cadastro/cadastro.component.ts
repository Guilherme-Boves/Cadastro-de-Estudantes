import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';
import { ESTUDANTES } from '../mock-estudantes';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  estudantes = ESTUDANTES;
  
  cadastro: Cadastro = {
    id: 1,
    nome: 'Guilherme',
    curso: 'Ads',
    idade: 18,
    escola: 'Fatec',
  }

  constructor() { }

  selectedestudante?: Cadastro;
  ngOnInit(): void {
  }

  
onSelect(ESTUDANTES: Cadastro): void {
  this.selectedestudante = ESTUDANTES;
}

}
