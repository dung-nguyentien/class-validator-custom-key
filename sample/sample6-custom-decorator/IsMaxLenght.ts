import { registerDecorator } from '../../src/index';
import { ValidationOptions } from '../../src/decorator/ValidationOptions';
import { ValidatorConstraintInterface } from '../../src/validation/ValidatorConstraintInterface';
import { ValidatorConstraint } from '../../src/decorator/decorators';
import { ValidationArguments } from '../../src/validation/ValidationArguments';

export function IsMaxLength(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsMaxLengthConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'IsMaxLength' })
export class IsMaxLengthConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    console.log(value);
    return value.length > 5;
  }
}
