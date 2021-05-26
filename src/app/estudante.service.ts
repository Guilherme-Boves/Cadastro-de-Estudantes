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

  getEstudante(id: number): Observable<Cadastro> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const estudante = ESTUDANTES.find(e => e.id === id)!;
    this.messageService.add(`EstudanteService: fetched estudante id=${id}`);
    return of(estudante);
  }
}
