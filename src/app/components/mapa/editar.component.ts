import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  forma:FormGroup;

  constructor(public _fb:FormBuilder, public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
      console.log(data);
      this.forma = _fb.group({
        'titulo':data.titulo,
        'desc':data.desc
      });
    }

  ngOnInit() {
  }
 
  guardarCambios(){
    console.log(this.forma.value);
    this.dialogRef.close(this.forma.value);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
