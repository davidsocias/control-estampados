import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'; 

Recipes = new Mongo.Collection('recipes');
SimpleSchema.extendOptions(['autoform']);

Recipes.allow({
 insert: function(userId, doc){
  return !!userId;
 },
 update: function(userId, doc){
  return !!userId;
 }

});

 const Ingredient = new SimpleSchema({
 name: {
  type: String,
 },
 amount: {
  type: String
 }
});

const RecipeSchema = new SimpleSchema({
 name: {
  type: String,
  label: "Name"
 },
 desc: {
  type: String,
  label: "Description",
 },
 ingredientes: {
 	type: Array,
 },
 'ingredientes.$': { type: Object },
 'ingredientes.$.name' : { type: String },
 'ingredientes.$.amount' : { type: String },
 
  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
 author: {
  type: String,
  label: "Author",
  autoValue: function(){
   return this.userId
  },
  autoform:{
   type: "hidden"
  }
 },
 createdAt: { 
  type: Date,
  label: "Created At",
  autoValue: function() { 
   return new Date() 
  },
  autoform: {
   type: "hidden"
  }
 }
});

Meteor.methods({
  toggleMenuItem: function(id, currentState) {
    Recipes.update(id, {
      $set: {
        inMenu: !currentState
      }
    });
  },
  deleteRecipe: function(id) {
    Recipes.remove(id);

  }
});

Recipes.attachSchema(RecipeSchema);﻿