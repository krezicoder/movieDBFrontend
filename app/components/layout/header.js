import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class LayoutHeaderComponent extends Component {
    @service session;
    @service currentUser;
    @action
    logout() {
        this.session.invalidate();
    }
}