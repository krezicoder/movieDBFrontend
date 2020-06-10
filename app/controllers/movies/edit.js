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
        let rating = this.store.createRecord("rating");
        rating.movie = this.model.movie;
        // rating.user_id = this.currentUser.user;
        rating.ratingValue = val;
        this.model.movie.save().then(() => {
            rating.save().then(() => {
                alert("Movie Rating added");
            });
        });
    }

    @action
    saveMovie(movie) {
        movie.save();
    }
}