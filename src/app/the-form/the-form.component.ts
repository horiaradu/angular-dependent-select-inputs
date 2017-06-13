import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.availableFirstOpts = [
      { name: 'a', id: 1 },
      { name: 'b', id: 2 },
    ];

    this.availableSecondOpts = {
      1: [
        { name: 'aa', id: 11 },
        { name: 'bb', id: 22 },
      ],
      2: [
        { name: 'cc', id: 11 },
        { name: 'dd', id: 33 },
      ],
    };

    this.object = {
      first: {
        name: 'a',
        id: 1,
      },
      second: {
        name: 'bb',
        id: 22,
      }
    };
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      first: [this.object.first.id],
      second: [this.object.second.id],
    });

    this.firstOpts = this.availableFirstOpts;
    this.secondOpts = this.availableSecondOpts[this.object.first.id];
  }

  onSubmit() {
    console.log(this.myForm);
  }

  onChangeFirst(firstId) {
    this.secondOpts = this.availableSecondOpts[firstId];
    this.myForm.controls['second'].patchValue(null);
  }
}
