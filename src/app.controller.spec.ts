import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    const modules = app['container']['modules'];
    for (const module of modules) {
      const controllers = Array.from(module[1]['_controllers']);
      if (controllers.length === 0) continue;
      console.log(controllers[0][0]);
      console.log(controllers[0][0] === AppController);
    }
    /*
    const controllers = modules
      .map((module) => Reflect.getMetadata('controllers', module))
      .filter((controller) => Array.isArray(controller))
      .reduce((prev, cur) => [...prev, ...cur], []);
      */
    console.log(AppController);
  });

  describe('getHello', () => {
    it('should return "Hello World!"', async () => {
      console.log(
        new AppController({} as any),
        new AppController({} as any).getHello,
      );
      const appController = app.get<AppController>(AppController);
      console.log(appController, appController.getHello);
      console.log('poyo', AppService);
      console.log(appController, appController.getHello());
      console.log('poyopoyo');
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
