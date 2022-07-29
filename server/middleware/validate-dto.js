const  validateDto = (ajvValidate) => {
  return (req, res, next) => {
    const valid = ajvValidate(req.body);
    if (!valid) {
      console.log(req.body);
      const errors = ajvValidate.errors;
      res.status(400).json(errors);
    }
    next();
  };
}
  
module.exports = validateDto;
