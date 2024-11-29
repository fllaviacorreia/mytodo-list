import * as Yup from 'yup';

const taskSchema = Yup.object().shape({
  title: Yup.string()
    .required('O título é obrigatório')
    .min(3, 'O título deve ter pelo menos 3 caracteres')
    .max(100, 'O título pode ter no máximo 100 caracteres'),
  
  description: Yup.string()
    .optional()
    .max(500, 'A descrição pode ter no máximo 500 caracteres'),
  
  startsAt: Yup.date()
    .required('A data de início é obrigatória')
    .typeError('Data de início inválida'),

  endsAt: Yup.date()
    .required('A data de término é obrigatória')
    .typeError('Data de término inválida')
    .min(Yup.ref('startsAt'), 'A data de término deve ser após a data de início'),
  
  priority: Yup.string()
    .required('A prioridade é obrigatória')
    .oneOf(['low', 'medium', 'high'], 'Prioridade inválida, deve ser low, medium ou high')
});

export default taskSchema;
