import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ApplicationRoute extends Route {
    @service session;
    @service currentUser;
    beforeModel() {
        if (this.session.isAuthenticated) {
            this.currentUser.getCurrentUser();
        } else {
            this.transitionTo("movies");
        }
    }
}