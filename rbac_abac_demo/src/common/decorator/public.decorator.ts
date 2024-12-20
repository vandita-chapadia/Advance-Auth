import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const PublicRoute = (): CustomDecorator<string> =>
  SetMetadata('PUBLIC', true);
