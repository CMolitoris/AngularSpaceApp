import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecasing'
})
export class TitlecasingPipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    let words = value.split(" ");
    for(let i=0;i<words.length;i++) {
      if(i>0 && this.isPreposition(words[i].toLowerCase()))
        words[i].toLowerCase();
      else
        words[i] = this.toTitleCase(words[i])
    }
    return words.join(" ");
    
  }

  private toTitleCase(word: string): string {
    return word[0].toUpperCase() + word.substring(1);
  }

  private isPreposition(word: string):boolean {
    let prepositions = [
      "of","the"
    ]
    return prepositions.includes(word)
  }

}
