import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PhotosDataService } from './photos.data.service';

describe('PhotosDataService', () => {
  let injector: TestBed;
  let service: PhotosDataService;
  let httpMock: HttpTestingController;

  const dummyPhotoListRes = {
    data: [
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
        width: 2500,
        height: 1667,
        url: 'https://unsplash.com/photos/6J--NXulQCs',
        download_url: 'https://picsum.photos/id/10/2500/1667',
      },
      {
        id: '11',
        author: 'Paul Jarvis',
        width: 2500,
        height: 1667,
        url: 'https://unsplash.com/photos/Cm7oKel-X2Q',
        download_url: 'https://picsum.photos/id/11/2500/1667',
      },
    ],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotosDataService],
    });

    injector = getTestBed();
    service = injector.inject(PhotosDataService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('load should return data', () => {
    service.load(1).subscribe((res) => {
      expect(res).toEqual(dummyPhotoListRes);
    });

    const req = httpMock.expectOne('https://picsum.photos/v2/list?page=1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPhotoListRes);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
