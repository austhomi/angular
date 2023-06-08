import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  id: number;
  editMode: boolean = false

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
      this.id = +params['id']
      // If no id is returned, we know that it is not in edit mode based on our routing config
      this.editMode = params['id'] != null;
      }
    )
  }
}
