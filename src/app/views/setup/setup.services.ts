import { Injectable } from '@angular/core';
import { HttpClient, JsonInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IJobType } from './jobtype/jobtype';

@Injectable({
    providedIn: 'root'
})
export class SetupService{

}