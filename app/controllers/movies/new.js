import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class MoviesNewController extends Controller {
    @service store;
    @service currentUser;
    @tracked updatedRatingValue;

    @action
    changeCategory(category) {
        this.model.movie.category = category;
    }

    @action
    updateRatingValue(val) {
        this.model.movie.ratingValue = val;
    }

    @action
    saveRating(val) {
        let rating = this.store.createRecord("rating");
        rating.movie = this.model.movie;
        rating.user = this.currentUser.user;
        rating.ratingValue = val;
        this.model.movie.save();
        rating.save();
    }

    @action
    saveMovie(movie) {
        movie.user = this.currentUser.user;
        movie.save().then(() => {
            this.transitionToRoute("movies.index");
        });
    }
}