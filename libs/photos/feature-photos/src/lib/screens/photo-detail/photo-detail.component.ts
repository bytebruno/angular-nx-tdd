import { Photo } from '@angular-nx-tdd/photos/domain';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'photos-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
})
export class PhotoDetailComponent implements OnInit {
  photo: Photo | null = null;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const snapshot = this.activatedRoute.snapshot;
    this.photo = snapshot.data['selectedFavorite'];
  }
}
