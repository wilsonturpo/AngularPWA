import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit {
  
  public personas: Array<any> = []

  constructor(
    private personaService: PersonasService
  ) {
    this.personaService.getPersonas().subscribe((resp:any) =>{
      this.personas = resp
    })
   }

  ngOnInit(): void {
  }

}
