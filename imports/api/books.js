import { Mongo } from 'meteor/mongo';
 
export const Books = new Mongo.Collection('books');

Books.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Titel",
    max: 200
  },
  author: {
    type: String,
    label: "Auteur"
  },
  copies: {
    type: Number,
    label: "Aantal kopieen",
    min: 1
  },
  lastCheckedOut: {
    type: Date,
    label: "Datum laatst uitgeleend",
    optional: true
  },
  summary: {
    type: String,
    label: "Korte samenvatting",
    optional: true,
    max: 1000
  }
}));
