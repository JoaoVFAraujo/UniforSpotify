import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImagePlaylistComponent } from './my-image-playlist.component';

describe('MyImagePlaylistComponent', () => {
  let component: MyImagePlaylistComponent;
  let fixture: ComponentFixture<MyImagePlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyImagePlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImagePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
