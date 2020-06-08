import Model, { attr } from "@ember-data/model";

export default class UserModel extends Model {
    @attr("string") firstName;
    @attr("string") lastName;
    @attr("string") email;
}