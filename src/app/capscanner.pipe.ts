import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capscanner'
})
export class CapscannerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
