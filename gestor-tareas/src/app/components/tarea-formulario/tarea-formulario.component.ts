import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../../app.component';

@Component({
  selector: 'app-tarea-formulario',
  imports: [FormsModule],
  templateUrl: './tarea-formulario.component.html',
  styleUrl: './tarea-formulario.component.css'
})
export class TareaFormularioComponent {
  @Output()
  guardar = new EventEmitter<Tarea>();
  tarea: Tarea = {
    id: 0,
    titulo: '',
    descripcion: '',
    prioridad: 'Media',
    estado: 'Pendiente'
  };
  guardarTarea() {
    this.guardar.emit({...this.tarea});
    this.limpiar();
  }
  limpiar(){
    this.tarea = {
      id: 0,
      titulo: '',
      descripcion: '',
      prioridad: 'Media',
      estado: 'Pendiente'
    };
  }
}
