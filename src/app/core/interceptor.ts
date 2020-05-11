import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';

export const HttpIntercptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
];
