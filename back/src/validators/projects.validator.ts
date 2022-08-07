import { body } from 'express-validator';

const getProjectValidationRules = () => {
  return [
    body('name').notEmpty().withMessage('You should have a name'),
    // body('startDate').notEmpty().withMessage('You should have a start date'),
    // body('endDate').notEmpty().withMessage('You should have a finish date'),
  ];
};
export { getProjectValidationRules };
