import SwaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        info: {
            title: 'UMC Study API',
            version: '1.0.0',
            description: 'UMC Study API with express, API 설명'
        },
        host: 'localhost:3000',
        basepath: './'
    },

    security_definition: {
        jwt: {
            type: 'apikey',
            name: 'Authorization',
            in: 'header'
        }
    },
    security: [
        { jwt: [] }
    ],

    apis: ['../routes/*.js', './swagger/*']
};

export const specs = SwaggerJsdoc(options);