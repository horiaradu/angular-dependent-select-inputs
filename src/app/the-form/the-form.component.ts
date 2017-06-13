import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-the-form',
  templateUrl: './the-form.component.html'
})
export class TheFormComponent implements OnInit {
  myForm: FormGroup;
  private availableFirstOpts: any;
  private availableSecondOpts: any;
  object: any;

  firstOpts: any;
  secondOpts: any;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
  }

  ngOnInit() {
    Observable
      .forkJoin([
        this.dataService.getObject(),
        this.dataService.getSelectOptions()
      ])
      .subscribe(([object, availableOpts]) => {
        this.object = object;

        // build options
        this.availableFirstOpts = availableOpts.map(f => ({ id: f.id, name: f.name }));
        this.availableSecondOpts = availableOpts.reduce((acc, o) => {
          acc[o.id] = o.secondOpts;
          return acc;
        }, {});

        // init form
        this.myForm = this.formBuilder.group({
          first: [this.object.first.id],
          second: [this.object.second.id],
        });

        this.firstOpts = this.availableFirstOpts;
        this.secondOpts = this.availableSecondOpts[this.object.first.id];
      });
  }

  onSubmit() {
    console.log(this.myForm);
  }

  onChangeFirst(firstId) {
    this.secondOpts = this.availableSecondOpts[firstId];
    this.myForm.controls['second'].patchValue(null);
  }
}
