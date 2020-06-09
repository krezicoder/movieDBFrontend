import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default class CategoriesIndexRoute extends Route {
    @service store;
    model() {
        return this.store.findAll("category");
    }
}