const ajvInstance = require('./ajv-instance');

const schema = {
  type: 'object',
  properties: {
    ownersEmail: { type: 'string', format: 'email' },
    brand: { type: 'string', minLength: 3 },
    model: { type: 'string', minLength: 3 },
    hybrid: { type: 'boolean'},
    color: { type: 'string', minLength: 3 }, 
    year: {type: "integer"}
  },
  additionalProperties: false
};

module.exports = ajvInstance.compile(schema);