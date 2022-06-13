//import { isInt, isNumber, isString } from 'class-validator';

export class CreateUserDto {
  //@isInt()
  //id: number;

  [type: string]: string;
  public name: string;
}
