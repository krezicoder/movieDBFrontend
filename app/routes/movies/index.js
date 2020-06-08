import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default class MoviesIndexRoute extends Route.extend(
    AuthenticatedRouteMixin
) {
    @service store;
    model() {
        return this.store.findAll("movie");
    }
}