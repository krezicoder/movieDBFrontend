import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default class MoviesIndexRoute extends Route.extend(
    AuthenticatedRouteMixin
) {
    @service store;

    queryParams = {
        page: {
            refreshModel: true,
        },
        page_size: {
            refreshModel: true,
        },
        category: {
            refreshModel: true,
        },
        search: {
            refreshModel: true,
        },
    };
    model(params) {
        return this.store.query("movie", params);
    }
}