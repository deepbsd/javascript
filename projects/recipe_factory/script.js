//  Thinkful Prep Course:  Advanced Object Drills.
//  ############  Recipe Factory  ###############

/*
Recipe Factory
In this drill, you'll practice using a factory function called recipeFactory to
create objects representing cooking recipes.

Each recipe created by recipeFactory must have the following properties:

recipe.name: this is the name of the recipe (for instance, "grilled cheese")

recipe.steps: an array of steps to follow to complete recipe. Items in this
list are strings, and the list should be sorted in order that steps get
completed.

recipe.ingredients: an array of ingredients needed for recipe. Items in this
list are strings. Order doesn't matter.

Additionally, each recipe must have the following methods:

recipe.stepsHtml: This method generates a string value representing the steps
in the recipe as an ordered list. So if your recipe's ingredients were "pour
water in pot", "boil", "serve", this method would output: "<ol><li>pour water
in pot</li><li>boil</li><li>serve></li></ol>". Note that it's not necessary to
have line breaks between <li> elements in the string.

recipe.ingredientsHtml: This method should generate a string value representing
the recipe ingredients ingredients.

Generating HTML elements from data like this is a common front end web
development task, and you'll get more practice generating strings like these in
Unit 3, where you'll learn how to dynamically insert HTML elements into your
web pages, using jQuery.

Finally, note that your factory method recipeFactory should take three
arguments: name, ingredients, and steps, which means it gets called like this:
recipeFactory('ice water', ['water', 'ice'], ['pour water', 'add ice cubes',
'drink']).

In this JS Bin, we've wired up the function you'll be writing with jQuery to
dynamically update the content that displays in the Output console. When your
recipeFactory function is working as specified above, the JS Bin will display a
recipe for grilled cheese sandwich in the Output (note that you may need to
click "Run" to see an updated view of the output your code produces).
*/

function recipeFactory(rname, ringredients, rsteps) {

  // creating a recipe class here
  function Recipe(name, ingredients, steps) {
    this.name = name;
    this.ingredients = ingredients;
    this.steps = steps;

    // first get the ordered steps
    this.stepsHtml = function(steps) {
      var recipeSteps = [];
      var end = this.steps.length;
      for (var n=0; n<end; n++) {
        var step = '<li>'+this.steps[n]+'</li>';
        recipeSteps.push(step);
      }
      // console.log("steps: "+'<li>'+recipeSteps+'</li>');
      return '<h2>To Make:</h2><ol>'+recipeSteps.join('')+'</ol>';
    }  // end of .stepsHtml() method

    this.ingredientsHtml = function(ingredients) {
      var recipeIngredients = [];
      var end = this.ingredients.length;
      for (var n=0; n < end; n++) {
        var ingredient = '<li>'+this.ingredients[n]+'</li>';
        recipeIngredients.push(ingredient);
      }  // end of for loop for ingredientsHtml
      // console.log("ingredients: "+'<ul>'+recipeIngredients+'</ul>');
      return '<h2>Ingredients:</h2><ul>'+recipeIngredients.join('')+'</ul>';
    }  // end of .ingredientsHtml() method
  }  // end of recipe class

  var recipe = new Recipe(rname, ringredients, rsteps);
  // console.log(recipe)
  return recipe;
}  // end of recipeFactory

// tests

function testRecipeFactory() {
  var grilledCheese = recipeFactory(
    'grilled cheese',
    ['2 slices bread','butter','1 slice cheese'],
    ['Butter bread', 'Put cheese between bread', 'Toast bread on stove']
  );
  if (grilledCheese) {
    // `$` is a shortcut to the jQuery library, which
    // you'll learn about in the next unit.
    // Here, we're using jQuery to update elements in the HTML
    $('.js-recipe-name').text(grilledCheese.name);
    $('.js-ingredients').html(grilledCheese.ingredientsHtml());
    $('.js-steps').html(grilledCheese.stepsHtml());
  }
}

testRecipeFactory()
