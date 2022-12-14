import { aliasQuery } from "../util/graphql-utils";

Cypress.Commands.add("selectTherapist", () => {
    cy.intercept("POST", "https://equilibrium.herokuapp.com/graphql",(req) => {
        const { body } = req;
        aliasQuery(req, "GET_ALL_THERAPISTS");
        if (req.body.operationName === "GetTherapist") {
            req.alias = "gqlGET_ALL_THERAPISTSQuery";
            req.reply((res) => {
                res.body.data.therapists = {
                    id: "1",
                    address: "Suite 954 373 Billy Ville, West Judsonmouth, MS 21150",
                    phoneNumber: "863-571-0641",
                    name: "Bob",
                    labels: "[\"Sliding Scale\", \"Works with Neurodivergence\", \"Grief Counseling\", \"Works with Depression\"]",
                    imageUrl: "https://loremflickr.com/300/300",
                    bio: "here to stay",
                    practice: {
                        id: "1",
                        name: "ABC therapy",
                        websiteUrl: "WWW.ABCD.com"
                    }
                };
            });
        };
    }
    ).as("getTherapist");
    cy.visit('http://localhost:3000/1')
});