import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import RSVP from "rsvp";

export default class MoviesNewRoute extends Route.extend(
    AuthenticatedRouteMixin
) {
    model() {
        return RSVP.hash({
            movie: this.store.createRecord("movie"),
            categories: this.store.findAll("category"),
        });
    }
}