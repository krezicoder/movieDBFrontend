import Model, { attr, belongsTo, hasMany } from "@ember-data/model";
import { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class MovieModel extends Model {
    @service currentUser;
    @tracked ratingUpdatedValue;

    @attr("string") title;
    @attr("string") description;
    @attr("number") avgRating;
    @belongsTo("user") user;
    @belongsTo("category") category;
    @hasMany("rating") ratings;

    get hasCrudPermission() {
        if (this.currentUser.user && this.user) {
            return this.user.get("id") === this.currentUser.user.get("id") ?
                true :
                false;
        } else {
            return false;
        }
    }

    get canRate() {
        return !this.hasCrudPermission;
    }
}