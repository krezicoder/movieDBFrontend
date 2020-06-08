import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class MoviesIndexController extends Controller {
    @service session;
    @service currentUser;
    queryParams = ["page", "page_size", "search"];

    @tracked page = 1;
    @tracked page_size = 10;
    @tracked search = "";

    @action
    deleteMovie(movie) {
        movie.deleteRecord();
        movie.save().then(console.log("Movie Deleted"));
    }
}