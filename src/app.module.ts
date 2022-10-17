import { Module } from '@nestjs/common';
import { ObservationsModule } from './observations/observations.module';


@Module({
  imports: [ObservationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
