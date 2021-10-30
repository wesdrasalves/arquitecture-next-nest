import { NestFactory } from '@nestjs/core'
import { ServerModule } from './server.module';
import {RenderModule} from 'nest-next'
import Next from 'next'


async function bootstrap(){
  const appView = Next({
    dev:process.env.NODE_ENV !== 'production'
  });

  // await this.server.prepare();

  const app = await NestFactory.create(ServerModule);

  await app.listen(process.env.PORT || 3000);
}

bootstrap()