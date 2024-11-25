import { Component, OnInit } from '@angular/core';
import { loginModel } from '../shared/login.model';
import { LoginService } from '../shared/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 id=""
 user= new loginModel("","","","")

 constructor(
  private LoginService: LoginService,
  private route: ActivatedRoute,
  private router: Router

 ){}

 ngOnInit() {
  this.id = this.route.snapshot.params['id']
  if(this.id){
    console.log("EDITAR");
    this.LoginService.obteneruser(this.id).subscribe(data =>{
      this.user = data[0]
    })
  }else{
    console.log("CREAR");
  }
  
 }

 onSubmit(){
  console.log('onSubmit');

  if(this.user.id_usuario){
    this.LoginService.actualizaruser(this.user).subscribe(data => {
      alert(data)
      this.router.navigate(['/iniciarsesion'])
    })
  }else{
    console.log('crear');
    this.LoginService.agregarUser(this.user).subscribe(data => {
      alert(data)
      this.router.navigate(['/iniciarsesion'])
    })
  }
}


}
