// Why this? Well we need this to allow attributes on tags like id on <div id='12345'> when using [innerHtml]
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
