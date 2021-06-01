import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrls: ['./add-animal-form.component.scss']
})
export class AddAnimalFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      city: [''],
      url: ['', ]
    });
  }

  ngOnInit(): void { }

  addBook(): void {

  }

}
