import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor() { }

    intercept( request: HttpRequest<any>, next: HttpHandler ):  Observable<HttpEvent<any>> {
        return next.handle(request);
    }
}
