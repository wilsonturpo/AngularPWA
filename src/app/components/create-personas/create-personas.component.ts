import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonasService } from 'src/app/services/personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-personas',
  templateUrl: './create-personas.component.html',
  styleUrls: ['./create-personas.component.css']
})
export class CreatePersonasComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private personaService: PersonasService,
    private formBuilder: FormBuilder,
    private router: Router
    )
   { 

   }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      Nombre: [''],
      Apellidos: [''],
      Documento: [''],
      Correo: ['']
    });
  }

  public enviarData(){
    this.personaService.createPersona(
      this.form.value
      )
    .subscribe(resp =>{
      console.log('Persona creada!');
      this.router.navigate(['/list-personas']);
    })
  }
}
