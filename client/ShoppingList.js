Template.ShoppingList.onCreated(function() {
	var self = this;
	self.autorun(function(){
		self.subscribe('Recipes');

	});

});

Template.ShoppingList.helpers({
	shoppingList: ()=> {
		return Recipes.find({inMenu: true});
	}
});
