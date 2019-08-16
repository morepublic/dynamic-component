import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Injector, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { MediaAssetComponent } from './media-asset/media-asset.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('questionText', { read: ElementRef }) questionTextRef: ElementRef;

  src = 'https://deviant-assets-dev.objectstore.true.nl/images/53374_asset.png';

  builderQuestionTextHtml = `
    <div class="example">
      <b>
        <span>Some question tekst with asset @@asset1</span>
      </b>
    </div>
  `;

  questionTextHtml: string;

  private static replacePlaceholders(text: string): string {
    const placeholderRegEx = /@@[\w]*[0-9]/g;

    return text.replace(placeholderRegEx, '<div class="c-teleport"></div>');
  }

  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnInit(): void {
    this.questionTextHtml = AppComponent.replacePlaceholders(this.builderQuestionTextHtml);
  }

  ngAfterViewInit(): void {
    console.log('questionTextRef', this.questionTextRef);
    setTimeout(() => this.showAsComponent(this.src));
  }

  showAsComponent(src: string) {
    // Create element
    const mediaAssetElement = document.createElement('app-media-asset');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(MediaAssetComponent);
    const mediaAssetComponentRef = factory.create(this.injector, [], mediaAssetElement);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(mediaAssetComponentRef.hostView);

    // Set the image source
    mediaAssetComponentRef.instance.src = src;

    // Add to the DOM
    const teleportElem: HTMLElement = this.questionTextRef.nativeElement.querySelector('.c-teleport');

    console.log('teleportElem', teleportElem);

    teleportElem.appendChild(mediaAssetElement);
  }
}
