import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public THUMB_UP_IMAGE_URL = '/assets/img/thumbs-up.svg';
  public THUMB_DOWN_IMAGE_URL = '/assets/img/thumbs-down.svg';

  constructor() { }
}
