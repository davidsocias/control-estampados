Template.Menu.onCreated(function() {
	var self = this;
	self.autorun(function(){
		self.subscribe('Recipes');

	});

});

Template.Menu.helpers({
	recipes: ()=> {
		return Recipes.find({inMenu: true});
	}
});
