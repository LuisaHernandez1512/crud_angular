import { Component, OnInit } from '@angular/core';
import { PeliModel } from '../shared/peli.model';
import { PeliService } from '../shared/peli.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-peli',
  templateUrl: './editar-peli.component.html',
  styleUrls: ['./editar-peli.component.css']
})
export class EditarPeliComponent implements OnInit {

  id=""
  peli = new PeliModel("","","","","","","","","","","")

  constructor(
    private PeliService: PeliService,
    private route:ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if(this.id){
      console.log("EDITAR");
      this.PeliService.obtenerpeli(this.id).subscribe(data =>{
        this.peli = data[0]
      })
    }else{
      console.log("CREAR");
    }
    
  }

  onSubmit(){
    console.log('onSubmit');

    if(this.peli.id_pelicula){
      this.PeliService.actualizarpeli(this.peli).subscribe(data => {
        alert(data)
        this.router.navigate(['/peli'])
      })
    }else{
      console.log('crear');
      this.PeliService.agregarpeli(this.peli).subscribe(data => {
        alert(data)
        this.router.navigate(['/peli'])
      })
    }
  }

}
