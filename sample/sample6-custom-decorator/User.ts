import { IsUserAlreadyExist } from './IsUserAlreadyExist';
import { IsLongerThan } from './IsLongerThan';
import { IsUUID } from '../../src';
import { IsMaxLength } from './IsMaxLenght';

export class User {
  @IsUserAlreadyExist({
    message: 'User with name $value already exists',
  })
  firstName: string;

  @IsLongerThan('firstName', {
    message: "User's last name must be longer than firstName",
  })
  lastName: string;

  @IsUUID('4', { each: true })
  @IsMaxLength({each: true})
  ids: string[];
}
