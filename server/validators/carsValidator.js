const ajvInstance = require('./ajv-instance');

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
    additionalProperties: false
};

module.exports = ajvInstance.compile(schema_car);