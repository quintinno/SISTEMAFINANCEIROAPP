import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioMonitoramentoPage } from './usuario-monitoramento.page';

describe('UsuarioMonitoramentoPage', () => {
  let component: UsuarioMonitoramentoPage;
  let fixture: ComponentFixture<UsuarioMonitoramentoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioMonitoramentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioMonitoramentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
