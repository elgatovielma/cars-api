const ajvInstance = require('./ajv-instance');

// JSON Schema validator for the users properties 
const schema_user = {
    type: 'object',
    properties: {
        email: { type: 'string', format: 'email' },
        token: { type: 'string', minLength: 3 },
    },
    additionalProperties: false
};

module.exports = ajvInstance.compile(schema_user);