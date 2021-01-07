import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
// material
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditarComponent } from './editar.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat: number = 4.7361111;
  lng: number = -74.2616301;

  descripcion: string;
  titulo: string;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
  }

  agregarMarcador(event) {
    const coord = event.coords;
    const nuevoMarcador = new Marcador(coord.lat, coord.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarMarcador();
    this.snackBar.open('Marcador agregado', 'OK', { duration: 1200 });

  }


  borrarMarcador(i: number) {
    console.log(i);
    this.marcadores.splice(i, 1);
    this.guardarMarcador();
    this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 1200 });
  }

  guardarMarcador() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  editarMarcador(marcador: Marcador) {
    let dialogRef = this.dialog.open(EditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        marcador.titulo = result.titulo;
        marcador.desc = result.desc;
      } else {
        return;
      }
      localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
      this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 1200 });
    });
  }
}
