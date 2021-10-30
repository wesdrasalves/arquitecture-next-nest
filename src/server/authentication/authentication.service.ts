import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticationService{
  validateUser(user: string, pass: string): boolean{
    if(user == 'sa' && pass == 'sa'){
      return true;
    }

    return false;
  }
}