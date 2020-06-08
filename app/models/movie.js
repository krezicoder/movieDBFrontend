import Model, { attr, belongsTo } from "@ember-data/model";

export default class MovieModel extends Model {
    @attr("string") title;
    @attr("string") description;
    @belongsTo("user") user;
    @belongsTo("category") category;
}