import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro';
import { ESTUDANTES } from './mock-estudantes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private messageService: MessageService) { }
 
  getEstudantes(): Observable<Cadastro[]> {
    const estudantes = of(ESTUDANTES);
    this.messageService.add('EstudanteService: fetched estudantes');
    return estudantes;
  }
  
}
