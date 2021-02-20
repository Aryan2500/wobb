import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private url = "http://localhost:5000/get-campaign"
  header : HttpHeaders
  constructor( private httpClient : HttpClient) {
    this.header = new HttpHeaders()
    this.header.append('content-type', 'application/json')

   }

   getCampagin(){
      return this.httpClient.get(this.url , {headers:this.header})
   }


}
