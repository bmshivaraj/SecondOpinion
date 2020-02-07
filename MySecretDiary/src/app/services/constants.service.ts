import { Injectable } from '@angular/core';



@Injectable()
export class ConstantsService{
    readonly baseAppUrl: string = 'http://15.114.183.86:8080/';
    //readonly baseAppUrl: string = 'http://localhost:8080/';
    readonly distLocation: string = 'MyApplication/';

}
