import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../../app.component';

@Component({
  selector: 'app-tarea-card',
  imports: [],
  templateUrl: './tarea-card.component.html',
  styleUrl: './tarea-card.component.css'
})
export class TareaCardComponent {
  @Input()
  tarea!: Tarea;

  @Output()
  editar = new EventEmitter<Tarea>();

  @Output()
  eliminar = new EventEmitter<number>();
}
