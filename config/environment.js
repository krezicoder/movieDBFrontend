"use strict";

module.exports = function(environment) {
    let ENV = {
        modulePrefix: "movie-db",
        environment,
        rootURL: "/",
        locationType: "auto",
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
            },
            EXTEND_PROTOTYPES: {
                // Prevent Ember Data from overriding Date.parse.
                Date: false,
            },
        },
        fontawesome: {
            warnIfNoIconsIncluded: false,
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        },
    };

    if (environment === "development") {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
        ENV["ember-simple-auth-token"] = {
            refreshAccessTokens: false,
            refreshLeeway: 300, // refresh 5 minutes (300 seconds) before expiration
            // refreshTokenPropertyName: "refresh_token", // Key in server response that contains the refresh token  // TODO
            // tokenExpireName: "exp", // Field containing token expiration // TODO
            tokenExpirationInvalidateSession: true, // Enables session invalidation on token expiration
            // serverTokenRefreshEndpoint: "/api/token-refresh/", // Server endpoint to send refresh request
            serverTokenEndpoint: "http://localhost:3000/api/v1/login", // Server endpoint to send authenticate request
            tokenPropertyName: "jwt", // Key in server response that contains the access token
            headers: { "Content-Type": "application/json" }, // Headers to add to the
            tokenDataPropertyName: "jwt",
            authorizationHeaderName: "Authorization", // Header name added to each API request
            authorizationPrefix: "Bearer ", // Prefix added to each API request
        };
    }

    if (environment === "test") {
        // Testem prefers this...
        ENV.locationType = "none";

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = "#ember-testing";
        ENV.APP.autoboot = false;
    }

    if (environment === "production") {
        // here you can enable a production-specific feature
    }

    return ENV;
};