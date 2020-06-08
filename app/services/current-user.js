import Service from "@ember/service";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class CurrentUserService extends Service {
    @service session;
    @service store;
    @tracked user;

    getCurrentUser() {
        this.user = this.store.findRecord("user", "me");
    }
}