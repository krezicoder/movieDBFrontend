import Model, { attr, hasMany } from "@ember-data/model";

export default class UserModel extends Model {
    @attr("string") firstName;
    @attr("string") lastName;
    @attr("string") fullName;
    @attr("string") email;
    @hasMany("movie") movies;
    @hasMany("rating") ratings;
}