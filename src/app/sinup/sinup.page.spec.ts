import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinupPage } from './sinup.page';

describe('SinupPage', () => {
  let component: SinupPage;
  let fixture: ComponentFixture<SinupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
