import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ConfigModule } from './config';
import { MetricsModule } from './metrics';
import { BusinessModules, Providers } from './modules';
import { PrismaModule } from './prisma';
import { SessionModule } from './session';
import { StorageModule } from './storage';
import { RateLimiterModule } from './throttler';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot(),
    StorageModule.forRoot(),
    MetricsModule,
    SessionModule,
    RateLimiterModule,
    ...BusinessModules,
  ],
  providers: Providers,
  controllers: [AppController],
})
export class AppModule {}
