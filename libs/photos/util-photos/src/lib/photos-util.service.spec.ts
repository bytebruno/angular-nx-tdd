import { TestBed, getTestBed } from '@angular/core/testing';
import { PhotosUtilService } from './photos-util.service';
import { Photo } from '@angular-nx-tdd/photos/domain';

describe('PhotosDataService', () => {
  let injector: TestBed;
  let service: PhotosUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [PhotosUtilService],
    });

    injector = getTestBed();
    service = injector.inject(PhotosUtilService);
  });

  it('should add lite URL to photos', () => {
    const originalPhotos: Photo[] = [
      {
        id: '9',
        author: 'Alejandro Escamilla',
        width: 5000,
        height: 3269,
        url: 'https://unsplash.com/photos/ABDTiLqDhJA',
        download_url: 'https://picsum.photos/id/9/5000/3269',
      },
      {
        id: '10',
        author: 'Paul Jarvis',
        width: 800,
        height: 1667,
        url: 'https://unsplash.com/photos/6J--NXulQCs',
        download_url: 'https://picsum.photos/id/10/800/1667',
      },
    ];

    const expectedLitePhotos: Photo[] = [
      {
        id: '9',
        author: 'Alejandro Escamilla',
        width: 5000,
        height: 3269,
        url: 'https://unsplash.com/photos/ABDTiLqDhJA',
        download_url: 'https://picsum.photos/id/9/5000/3269',
        lite_download_url: 'https://picsum.photos/id/9/300/300',
      },
      {
        id: '10',
        author: 'Paul Jarvis',
        width: 800,
        height: 1667,
        url: 'https://unsplash.com/photos/6J--NXulQCs',
        download_url: 'https://picsum.photos/id/10/800/1667',
        lite_download_url: 'https://picsum.photos/id/10/300/300',
      },
    ];

    const litePhotos = service.addLiteUrlToPhoto(originalPhotos);
    expect(litePhotos).toEqual(expectedLitePhotos);
  });
});
