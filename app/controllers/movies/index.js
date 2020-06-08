import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default class MoviesIndexController extends Controller {
    @service session;
    @service currentUser;

    hasCrudPermission() {
        debugger;
        this.currentUser.user.id === user.id ? true : false;
    }
}