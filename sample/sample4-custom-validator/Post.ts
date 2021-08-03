import { IsUUID, Validate } from '../../src/decorator/decorators';
import { CustomTextLength } from './CustomTextLength';

export class Post {
  @IsUUID()
  @Validate(CustomTextLength, {
    message: 'Wrong post title',
  })
  title: string;
}
