import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadForm: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.uploadForm = new FormGroup({
      reportNumber: new FormControl(null, [Validators.required, Validators.min(1)]),
      reportTitle: new FormControl('', [Validators.required, Validators.minLength(3)]),
      referenceDoctor: new FormControl('', [Validators.required, Validators.minLength(3)]),
      imagePath: new FormControl(''),
      visitDate: new FormControl(''),
      patientComment: new FormControl(''),
      secOpiComment: new FormControl('')
    })
    
  }

  addReport()
  {
    console.log(this.uploadForm.value);
  }

  save(){
    console.log(this.uploadForm.value);
  }


}
