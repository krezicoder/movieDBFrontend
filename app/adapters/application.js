import JSONAPIAdapter from "@ember-data/adapter/json-api";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";
import config from "../config/environment";

export default class ApplicationAdapter extends JSONAPIAdapter {
    @service session;
    host = config.API_HOST;
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