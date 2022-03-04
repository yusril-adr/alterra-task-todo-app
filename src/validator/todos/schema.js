import Joi from 'joi';

const TodoPayloadSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
  completed: Joi.boolean().required(),
});

export default TodoPayloadSchema;
