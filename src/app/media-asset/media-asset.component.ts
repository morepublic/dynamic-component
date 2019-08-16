import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-asset',
  templateUrl: './media-asset.component.html',
  styleUrls: ['./media-asset.component.sass']
})
export class MediaAssetComponent implements OnInit {
  @Input() src = '';

  ngOnInit() {
  }
}
