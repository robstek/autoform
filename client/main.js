import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';

import { Books } from '../imports/api/books.js';

import './main.html';


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    
    const book = ({
      author: "AUT",
      title: "TIT",
      copies: instance.counter.get(),
      lastCheckedOut: new Date(),
      summary: "SUM"
    });
    
    Books.insert(book);
    
  },
});



