import Model, { attr } from "@ember-data/model";

export default class CategoryModel extends Model {
    @attr("string") title;
    @attr("string") description;
    @attr("movie") movies;
}