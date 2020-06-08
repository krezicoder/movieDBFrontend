import Model, { attr, belongsTo } from "@ember-data/model";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class MovieModel extends Model {
    @service currentUser;

    @attr("string") title;
    @attr("string") description;
    @belongsTo("user") user;
    @belongsTo("category") category;

    get hasCrudPermission() {
        return this.user.get("id") === this.currentUser.user.get("id") ?
            true :
            false;
    }
}