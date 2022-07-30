const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

// JSON Schema validator for the cars properties 
const schema_car = {
    type: 'object',
    properties: {
        licencePlate: { type: 'string', minLength: 3 },
        brand: { type: 'string', minLength: 3 },
        model: { type: 'string', minLength: 3 },
        hybrid: { type: 'boolean' },
        year: { type: "integer" },
        images: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    path: { type: 'string', minLength: 3 },
                    mimeType: { type: 'string', minLength: 3 },
                }
            }
        }
    },
    required: ['licencePlate', 'brand', 'model', 'hybrid', 'year', 'images'],
    additionalProperties: false
};

// JSON Schema validator for the users properties 
const schema_user = {
    type: 'object',
    properties: {
        email: { type: 'string', format: 'email' },
        token: { type: 'string', minLength: 3 },
    },
    additionalProperties: false
};

module.exports = ajv.addSchema(schema_car).compile(schema_user);