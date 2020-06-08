import Controller from "@ember/controller";

import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class MoviesEditController extends Controller {
    @tracked updatedRatingValue;

    @action
    changeCategory(category) {
        this.model.movie.category = category;
    }

    @action
    updateRatingValue(val) {
        this.updatedRatingValue = val;
    }

    @action
    saveRating(val) {
        this.model.movie.ratingValue = val;
    }

    @action
    saveMovie(movie) {
        movie.save();
    }
}