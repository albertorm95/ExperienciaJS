import DS from 'ember-data';

/*export default DS.Model.extend({
	name: DS.attr('string'),
	phone: DS.attr('number'),
	add_date: DS.attr('date'),
	client: DS.hasMany('client')
});*/

export default DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  description: DS.attr()
});