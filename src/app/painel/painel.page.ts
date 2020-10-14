import { Component, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Globais } from '../globais';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-painel',
  templateUrl: './painel.page.html',
  styleUrls: ['./painel.page.scss'],
})
export class PainelPage implements OnInit{

  constructor(private router: Router, private el: ElementRef,private menu: MenuController) {
    if(!JSON.parse(localStorage.getItem('logado'))){
      el.nativeElement.style.opacity = 0;
      console.log(JSON.parse(localStorage.getItem('logado')))
      window.location.href = '/'
    }    
   }
   openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  ngOnInit() {
    if(JSON.parse(localStorage.getItem('logado'))){
      this.el.nativeElement.style.opacity = 1;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.el.nativeElement.style.opacity = 1;
  }
  desloga(){
    localStorage.removeItem('logado')
    this.router.navigate(['/'])
  }
}
