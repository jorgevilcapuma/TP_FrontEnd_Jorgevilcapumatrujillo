import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import {TareaListaComponent} from './components/tarea-lista/tarea-lista.component';
import {TareaFormularioComponent} from './components/tarea-formulario/tarea-formulario.component';

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  prioridad: string;
  estado: string;
}

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    TareaFormularioComponent,
    TareaListaComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
tareas: Tarea[]=[
  {
    id: 1, 
    titulo: 'Estudiar Angular',
    descripcion: 'Aprender los conceptos',
    prioridad: 'Alta',
    estado: 'Pendiente'
  },
    {
    id: 2, 
    titulo: 'Estudiar Angular',
    descripcion: 'Aprender los conceptos',
    prioridad: 'Alta',
    estado: 'Pendiente'
  },
];
agregarTarea(tarea: Tarea){
  tarea.id = this.tareas.length +1;
  this.tareas.push(tarea);
}

editarTarea(tarea: Tarea){
  const titulo = window.prompt('Titulo:', tarea.titulo);
  if (titulo === null) return;

  const descripcion = window.prompt('Descripcion:', tarea.descripcion);
  if (descripcion === null) return;

  const indice = this.tareas.findIndex(tareaActual => tareaActual.id === tarea.id);
  if (indice !== -1) {
    this.tareas[indice] = {...tarea, titulo, descripcion};
  }
}

eliminarTarea(id: number){
  if (window.confirm('¿Eliminar esta tarea?')) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }
}

}
