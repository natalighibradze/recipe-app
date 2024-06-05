import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { PexelsService } from './pexels.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private placeholderImageUrl = 'https://via.placeholder.com/600';
  private recipes: Recipe[] = [
    {
      id: 1,
      title: 'Veggie Salad',
      imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080', 
      ingredients: ['5 romaine leaves', '2 fresh tomatoes', 'Parmesan cheese', '1 clove garlic', 'Pepper'],
      instructions: ['Place lettuce', 'Whisk olive oil', 'Mix cheese', 'Combine all'],
    },
    {
      id: 2,
      title: 'Pancakes',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1672130779170-c71d34169786?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ingredients: ['3 cups all-purpose flour', '3 tablespoons white sugar', 'Butter', 'Heavy cream', '3 eggs'],
      instructions: ['Combine flour, sugar and baking powder a large bowl', 'Heat a lightly oiled griddle over medium-high heat. ', 'Pour the wet mixture into the dry mixture', 'Pour or scoop the batter onto the preheated griddle'],
    },
      {
      id: 3,
      title: 'Burger',
      imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      ingredients: ['2 pounds extra-lean ground beef', '1 package dry onion soup mix', '1 egg', '2 teaspoons hot pepper sauce', '2 teaspoons Worcestershire sauce'],
      instructions: ['Preheat an outdoor grill for medium high heat and lightly oil grate.', 'In a large bowl, combine beef, onions, eggand hot sauce. Shape into 6 patties.', 'Grill patties over medium high heat for 10 to 20 minutes.'],
    },
    {
      id: 4,
      title: 'Acai Bowl',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1663924211435-bd1a936c6384?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      ingredients: ['1 cup frozen acai puree, slightly thawedf', '¼ cup liquid (like your milk of choice or fruit juice of choice)', '1 banana', '½ cup fruit of choice (like strawberries, blueberries, and pineapple)'],
      instructions: ['Slightly thaw the frozen acai puree, either by soaking it in warm water for a few minutes or placing it in the refrigerator overnight.', 'Add acai, your liquid of choice, banana, and any other fruits to a high-speed blender.', 'Blend until all the frozen chunks are gone and the mixture is thick and smooth.'],
    },
    {
      id: 5,
      title: 'Pasta With Shrimps',
      imageUrl: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      ingredients: ['1 package linguine pasta', '1 pound shrimp, peeled and deveinedr', '½ cup dry white wine', '2 tablespoons butter'],
      instructions: ['Gather ingredients', 'Bring a large pot of salted water to a boil; cook linguine in boiling water until nearly tender, 6 to 8 minutes. Drain.', 'Melt 2 tablespoons butter with 2 tablespoons olive oil in a large skillet over medium heat.', 'Cook and stir shallots, garlic, and red pepper flakes in the hot butter and oil until shallots are translucent, 3 to 4 minutes.' , 'Season shrimp with kosher salt and black pepper; add to the skillet and cook until pink, stirring occasionally, 2 to 3 minutes. Remove shrimp from skillet and keep warm.'],
    },
    {
      id: 6,
      title: 'Asian Food',
      imageUrl: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      ingredients: ['¼ cup packed light brown sugar', '2 racks Smithfield® Extra Tender Pork Back Ribs, membrane removed', '4 ½ teaspoons onion powder', '2 teaspoons ground black pepper'],
      instructions: ['About one hour before you plan to start grilling, make the rub', 'Preheat the grill for indirect cooking at 250 to 300 degrees F. Add the drained wood chips, if using.', 'Place the ribs, meaty side up, over a drip pan, close the grill, and cook for 2 hours, adding about 12 coals to a charcoal grill every 45 minutes or so to maintain the heat', 'Meanwhile, make the sauce: In a medium saucepan over medium heat, combine the honey, soy sauce, jam, vinegar and garlic sauce and bring to a boil.' , 'Continue to cook the ribs until they are so tender the rack will easily break when bent with tongs, 1 to 2 more hours, spraying on both sides with the tamarind juice every 20 to 30 minutes.'],
    },
    {
      id: 7,
      title: 'Greek Salad With Eggs',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1676047258557-de72954cf17c?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      ingredients: ['(5 ounce) cans tuna, drained', '5 large hard-boiled eggs, chopped', '½ cup chopped sweet onion', '¾ cup mayonnaise'],
      instructions: ['Mix tuna, eggs, onion, and celery together in a large bowl.', 'Mix mayonnaise, relish, honey mustard, celery seed, seasoned salt, and pepper together in a small bowl', 'pour over tuna mixture and stir gently until all ingredients are coated. Serve immediately, or cover and chill until ready to serve.', 'Cook and stir shallots, garlic, and red pepper flakes in the hot butter and oil until shallots are translucent, 3 to 4 minutes.' , 'Season shrimp with kosher salt and black pepper; add to the skillet and cook until pink, stirring occasionally, 2 to 3 minutes. Remove shrimp from skillet and keep warm.'],
    },
    {
      id: 8,
      title: 'Caesar Salad',
      imageUrl: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      ingredients: ['2 anchovy fillet', '2 cloves garlic, chopped, or to taste', '1 cup mayonnaise', '2 teaspoons Worcestershire sauce'],
      instructions: ['Combine anchovy fillets with garlic in a food processor and pulse several times to form a paste. Process mayonnaise, Parmesan cheese', ' half-and-half, lemon juice, Dijon mustard, and Worcestershire sauce with anchovy mixture until dressing is creamy. ', '  Refrigerate for 1 hour or more before serving.'],
    },
  ];

  constructor(private pexelsService: PexelsService) { }

  getRecipes(): Observable<Recipe[]> {
    return this.pexelsService.getFoodImages().pipe(
      map(response => {
        console.log(response); // Log the API response
        return this.recipes.map((recipe, index) => ({
          ...recipe,
          imageUrl: response.photos[index]?.src.medium || this.placeholderImageUrl
        }));
      })
    );
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }
}
