import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryService } from 'src/app/services/repository.service';
import { Item, IRepositoryResponse } from 'src/app/models/repositoryResponse.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatCardModule,MatButtonModule,RouterModule],
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repo!: IRepositoryResponse;
  items!:Item[];
  bookmarks:Item[]=[];

  submitted = false;
  form!: FormGroup;
  constructor(private readonly repositoryService: RepositoryService,private readonly sessionStorageService:SessionStorageService,private formBuilder: FormBuilder) {
   
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        repositoryName: ['', Validators.required],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  
  GetControlValue = (form: FormGroup, field: string) => {
    let el = document.querySelector('input[name="'+field+'"]');
    return form.get(field)?.value;
  }
 
  /* REPOSITORY SEARCH */
  onSubmit = () => {
    this.submitted = true;
 
    this.repo = {} as IRepositoryResponse;
    this.items=[];
 
    if (this.form.invalid) {
      return;
    }
    
    let searchStr = this.GetControlValue(this.form,'repositoryName') ;  
 
    this.repositoryService.GetRepositories(searchStr).subscribe({
          next: (response:any) => {
            this.repo = response.value;
            this.items = this.repo.items;
    },
    error: (error) => {
      console.log('AuthAuthenticate error ! ');

    }
    });
    
  }

  bookmarkAdd = (repository:Item) => {
    this.bookmarks.push(repository)
    this.sessionStorageService.set('bookmarks',JSON.stringify(this.bookmarks));

  }

}
