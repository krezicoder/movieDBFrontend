import JSONAPIAdapter from "@ember-data/adapter/json-api";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default class ApplicationAdapter extends JSONAPIAdapter {
    @service session;
    host = "http://localhost:3000";
    namespace = "api/v1";

    @computed("session.data.authenticated.jwt")
    get headers() {
        let headers = {};
        if (this.session.isAuthenticated) {
            headers[
                "Authorization"
            ] = `Bearer ${this.session.data.authenticated.jwt}`;
        }
        return headers;
    }
}