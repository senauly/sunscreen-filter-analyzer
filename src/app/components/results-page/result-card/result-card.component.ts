import { 
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() filters!: string[];
  @Input() success!: boolean;
  @Input() info!: string;
}
