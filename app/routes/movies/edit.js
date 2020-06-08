import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";
import RSVP from "rsvp";
export default class MoviesEditRoute extends Route.extend(
    AuthenticatedRouteMixin
) {
    model(params) {
        return RSVP.hash({
            movie: this.store.findRecord("movie", params.movie_id),
            categories: this.store.findAll("category"),
        });
    }
}