import {Controller, Get, Post,Header, Req, Res} from '@nestjs/common'
import { Request, Response } from 'express';
import { AuthenticationService } from './authentication.service'

@Controller("authentication")
export class AuthenticationController{
  constructor(private readonly authenticationService: AuthenticationService ){
  }

  @Post()
  login(@Req() req: Request){
    const {user, pass} = req.body;

    return this.authenticationService.validateUser(user, pass);
  }

  @Get("teste")
  teste(){
    return "Hello World"
  }
}