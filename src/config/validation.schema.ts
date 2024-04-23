import * as Joi from 'joi';

const validationSchema = Joi.object({
  MONGO_DB: Joi.string().required(),
  PORT: Joi.number().default(3000),
});

export default validationSchema;
