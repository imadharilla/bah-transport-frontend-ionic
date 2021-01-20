import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransitResultatPage } from './transit-resultat.page';

describe('TransitResultatPage', () => {
  let component: TransitResultatPage;
  let fixture: ComponentFixture<TransitResultatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitResultatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransitResultatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
