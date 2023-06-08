import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { Routes,RouterModule } from "@angular/router";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";

const appRoutes: Routes= [
    {path: '',redirectTo: '/recipe', pathMatch:'full' },
    {
        path: 'shopping',
        children:[
            {path: 'list', component:ShoppingListComponent}
        ]},
    {path: 'recipe', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: ':id', component: RecipeDetailComponent}
    ]},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}