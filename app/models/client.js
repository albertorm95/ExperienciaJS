import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	last_name: DS.attr('string'),
	email: DS.attr('string'),
	phone: DS.attr('number'),
	birth_date: DS.attr('date'),
	space: DS.hasMany('space')
});
