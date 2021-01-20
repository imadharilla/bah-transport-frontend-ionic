import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransitPage } from './transit.page';

describe('TransitPage', () => {
  let component: TransitPage;
  let fixture: ComponentFixture<TransitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
