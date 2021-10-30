import { Module } from "@nestjs/common";
import { AppModule } from "./app/app.module";
import { AuthenticationModule } from './authentication/authentication.module';
import { ViewModule } from "./view/view.module";

@Module({
  imports: [AppModule, AuthenticationModule, ViewModule],
})
export class ServerModule {}