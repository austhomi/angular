import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { Routes,RouterModule } from "@angular/router";

const appRoutes: Routes= [
    {path: '',redirectTo: '/recipe', pathMatch:'full' },
    {
        path: 'shopping',
        children:[
            {path: 'list', component:ShoppingListComponent}
        ]},
    {path: 'recipe', component: RecipesComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}