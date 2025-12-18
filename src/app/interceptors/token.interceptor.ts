import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services/token/token.service';
import { inject } from '@angular/core';




export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const tokenService = inject(TokenService);
  const token = tokenService.getToken();

  if(token) {
    const authReq = req.clone( {
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
