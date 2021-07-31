import { IsNotEmpty, IsObject, MaxLength, MinLength, ValidateNested } from '../../src/decorator/decorators';

class Test {
  @MinLength(10)
  title: string;
}

export class Post {
  @MinLength(10)
  title: string;

  @IsNotEmpty()
  @IsObject({ each: true })
  @ValidateNested({ each: true })
  titles: Test[];
}
