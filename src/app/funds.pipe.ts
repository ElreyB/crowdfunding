import {Pipe, PipeTransform} from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: "funds",
  pure: false
})


export class FundsPipe implements PipeTransform {

  halfway(list, index) {
    return  (list[index].goal / 2 );
  }

  tenMoreHalfway(list, index) {
    return  (list[index].goal / 2 ) - 10;
  }

  tenBelowHalfway(list, index) {
    return  (list[index].goal / 2 ) + 10;
  }

  belowQuartermark(list, index) {
    return  (list[index].goal / 4);
  }

  transform(input: Project[], desiredFund) {
    let output: Project[] = [];

    if (desiredFund === "halfway"){
      for (let i = 0; i < input.length; i++) {
        if (input[i].funds === this.halfway(input, i)) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFund === "aroundHalf"){
      for (let i = 0; i < input.length; i++) {
        if (input[i].funds >= this.tenBelowHalfway(input, i) || input[i].funds <= this.tenMoreHalfway(input, i) ){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFund === "oneFourth") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].funds <= this.belowQuartermark(input, i)){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
