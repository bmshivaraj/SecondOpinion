import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Report } from '../models/report';
import { ConstantsService } from './constants.service';
//import { ConstantsService } from '../services/constants.service'


@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  baseUrl: string;

  constructor(private http: HttpClient,  _constant: ConstantsService)  { 
    console.log('ReportService instantiated!');
    this.baseUrl = _constant.baseAppUrl;
  }

  getReports(pageNum: number = 1 ,pageSize: number = 9): Observable<Report[]>
  // getReports():Observable<Report[]>
  {

     //this.http.get(baseUrl + 'reports').subscribe(resp => console.log(resp));
     const options = {
      params: {
        _page: pageNum.toString(),
        _limit: pageSize.toString()
      }
    }
    console.log(this.http.get(this.baseUrl + 'reports'));
    return this.http.get(this.baseUrl + 'reports').map(resp => resp as Report[]);

  }

}
