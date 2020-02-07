import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report';
import * as $ from 'jquery';
import { ReportsService } from 'src/app/services/reports.service';
import { ActivatedRoute } from '@angular/router';
window['$'] = $;

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

 reports: Report[] = [];
 pageNum: number = 1

  constructor(private rs: ReportsService, private activatedRoute: ActivatedRoute) {
    console.log("inside report-list constructor.")
   }

  ngOnInit() {

    console.log("inside report-list ngOnInit..")
     //scrol feature

  const w = $(window);
  const d = $(document);

  //this keyword will not have scope within window onscroll as this is a window function and not a angular one
  const self = this;
  //register an event handler for the windows scroll event
    window.onscroll = function() {
        const windowHeight = w.height();
        const windowTopPosition = w.scrollTop();
        const documentHeight = d.height();

        if((windowHeight + windowTopPosition) >= (documentHeight - 50 ))
        {
          self.loadData();
            
        }
      }
      this.loadData();
    }
  
    //use activatedRoute.params instead of activatedRoute.snapshot.params
    //if you want to do something on change of route parameters
    loadData(){
    this.activatedRoute.params.subscribe(({by_what, by_val}) => {
      if(by_what){
        //this.ps.getProductsBy(by_what,by_val, this.pageNum++).subscribe(data => this.products.push(...data));
      } else {
        console.log("about to call getreports...");
         // this.rs.getReports(this.pageNum++).subscribe(data => this.reports.push(...data));
         this.rs.getReports().subscribe(data => this.reports.push(...data));
        
      }
    });
  }

  

}
