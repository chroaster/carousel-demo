import DS from 'ember-data';

export default DS.Model.extend({
  active : DS.attr(),
  title : DS.attr(),
  alt : DS.attr(),
  img : DS.attr()
});
