import Model, { attr, belongsTo } from "@ember-data/model";

export default class RatingModel extends Model {
    @attr("number") ratingValue;
    @belongsTo("user") user;
    @belongsTo("movie") movie;
}