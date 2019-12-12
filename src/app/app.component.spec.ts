import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TeaService } from './services/tea.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule
      ],
      providers: [
        TeaService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as nameInput ''`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.nameInput).toEqual('');
  });

  it(`should reset nameInput`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    app.nameInput = 'abc';
    expect(app.nameInput).toEqual('abc');
    fixture.detectChanges();
    app.nameSubmit();
    fixture.detectChanges();
    expect(app.nameInput).toEqual('');
  });

  it(`should add name to TeaService`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.nameInput).toEqual('');
    app.nameInput = 'abc';
    fixture.detectChanges();
    app.nameSubmit();
    fixture.detectChanges();
    app.teaService.people$.subscribe(
      people => expect(people.length).toEqual(1)
    );
  });

});
