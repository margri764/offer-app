import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  closeBottomSheet$ : EventEmitter<any> = new EventEmitter<any>; 

  constructor(
                  // private http : HttpClient,
                  // private store : Store <AppState>,
                  // private cookieService: CookieService,
                  // private localStorageService : LocalstorageService,
                  // private router : Router
  ) { }
}
