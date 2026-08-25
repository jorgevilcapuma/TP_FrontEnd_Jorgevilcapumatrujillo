import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../../app.component';
import { TareaCardComponent } from '../tarea-card/tarea-card.component';
@Component({
  selector: 'app-tarea-lista',
  imports: [
    TareaCardComponent
  ],
  templateUrl: './tarea-lista.component.html',
  styleUrl: './tarea-lista.component.css'
})
export class TareaListaComponent {
  @Input()
  tareas: Tarea[] = [];

  @Output()
  editar = new EventEmitter<Tarea>();

  @Output()
  eliminar = new EventEmitter<number>();
}
