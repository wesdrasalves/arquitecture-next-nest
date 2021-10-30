import { Controller, Get, Res, Req, Render } from "@nestjs/common";
import {Request, Response} from 'express'
import { parse } from "url";
import { ViewService } from "./view.service";

@Controller('/')
export class ViewController{

  constructor(private readonly viewService: ViewService){

  }

  @Get('home')
  public async Home(@Req() req: Request, @Res() res : Response ){
    const parseUrl = parse(req.url, true);
    
    await this.viewService
    .getNextServer()
    .render(req,res, parseUrl.pathname, parseUrl.query);
  }

  @Get('login')
  public async Login(@Req() req: Request, @Res() res: Response){
    const parseUrl=parse(req.url, true);

    await this.viewService
    .getNextServer()
    .render(req,res, parseUrl.pathname, parseUrl.query)
  }

  @Get('_next*')
  public async assets(@Req() req: Request, @Res() res: Response) {
    const parsedUrl = parse(req.url, true);
    await this.viewService
      .getNextServer()
      .render(req, res, parsedUrl.pathname, parsedUrl.query);
  }
}