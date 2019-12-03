import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discpipe'
})
export class DiscpipePipe implements PipeTransform {

  arr;
  arr1;
  arr3;
  str="...";

  transform(value: any): any {

    this.arr=value;
    this.arr1=this.arr.slice(0,12);
    this.arr3=this.arr1+this.str;

    return this.arr3;
  }

}


