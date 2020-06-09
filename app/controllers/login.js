import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class LoginController extends Controller {
    @service session;
    @service currentUser;

    @action
    async authenticate(e) {
        e.preventDefault();
        const credentials = this.getProperties("username", "password");
        const authenticator = "authenticator:jwt";

        try {
            await this.session.authenticate(authenticator, credentials);
        } catch (error) {
            this.errorMessage = error.error || error;
        }

        if (this.session.isAuthenticated) {
            this.username = "";
            this.password = "";
            this.currentUser.getCurrentUser();
            this.transitionToRoute("movies");
        }
    }
}