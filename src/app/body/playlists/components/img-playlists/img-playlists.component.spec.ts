import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPlaylistsComponent } from './img-playlists.component';

describe('ImgPlaylistsComponent', () => {
  let component: ImgPlaylistsComponent;
  let fixture: ComponentFixture<ImgPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPlaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
