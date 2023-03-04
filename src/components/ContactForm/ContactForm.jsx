import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, FormField, FormInput } from './ContactForm.styled';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactFormSchema}
      onSubmit={() => {}}
    >
      <Form>
        <FormField>
          Name
          <FormInput
            type="text"
            name="name"
          />
        </FormField>

        <FormField>
          Number
          <FormInput
            type="tel"
            name="number"
          />
        </FormField>
      </Form>
    </Formik>
  );
};
