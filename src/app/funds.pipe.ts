import {Pipe, PipeTransform} from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: "funds",
  pure: false
})


export class FundsPipe implements PipeTransform {
  transform(input: Project[]) {
    let output: Project[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].funds <= input[i].goal / 2) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
