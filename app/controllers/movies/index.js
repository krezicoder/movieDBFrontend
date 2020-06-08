import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class MoviesIndexController extends Controller {
    @service session;
    @service currentUser;
    queryParams = ["page", "page_size", "search"];

    @tracked page = 1;
    @tracked page_size = 10;
    @tracked search = "";
}