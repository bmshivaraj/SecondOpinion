import { Component, OnInit, Input } from '@angular/core';
import { Report } from 'src/app/models/report';
import { ReportsService } from '@services/reports.service';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {

  @Input() // this is to say that this component receives data from parent components html for ex: <app-product-card [product]="p"> in product-list.component.html
  report: Report;

  quantity: number =1;
  inCart: boolean = false;

  constructor(private rs: ReportsService) { }

  ngOnInit() {
   
  }

  submitOpinionReport()
  {

    console.log('customer details', this.report);
    

  }

}
