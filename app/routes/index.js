import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(/* transition */) {
    this.replaceWith('items'); // Implicitly aborts the on-going transition.
  }
});
