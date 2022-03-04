import InvariantError from '../../exceptions/InvariantError';
import TodorPayloadSchema from './schema';

const TodosValidator = {
  validateTodoPayload: (payload) => {
    const validationResult = TodorPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

export default TodosValidator;
