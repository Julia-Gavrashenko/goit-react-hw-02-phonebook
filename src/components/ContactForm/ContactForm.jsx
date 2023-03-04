import { Formik } from 'formik';
import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
import { Form, FormField, Field, ErrorMessage, AddContactBtn } from './ContactForm.styled';

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

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '', }}
      validationSchema={ContactFormSchema}
      onSubmit={values => {
        console.log(values);
       
        onAddContact({ ...values });
        //  id: nanoid();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="p" />
        </FormField>

        <FormField>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="p" />
        </FormField>
        <AddContactBtn type='submit'>Add contact</AddContactBtn>
      </Form>
    </Formik>
  );
};
