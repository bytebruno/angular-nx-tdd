import { Photo, PhotosFacade } from '@angular-nx-tdd/photos/domain';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'photos-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
})
export class PhotoDetailComponent implements OnInit {
  photo: Photo | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private photosFacade: PhotosFacade,
    private router: Router
  ) {}

  ngOnInit() {
    const snapshot = this.activatedRoute.snapshot;
    this.photo = snapshot.data['selectedFavorite'];
  }

  removeFavorite() {
    if (!this.photo) return;
    this.photosFacade.removeFavorite(this.photo.id);
    this.router.navigateByUrl('/favorites');
  }
}
