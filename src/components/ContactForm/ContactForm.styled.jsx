import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  width: 400px;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;

  background: rgb(244, 237, 237);
  border-radius: 5px;
   box-shadow: -6px -6px 14px rgba(255, 254, 254, 0.8),
    -6px -6px 10px rgba(93, 93, 93, 0.2), 6px 6px 8px rgba(69, 68, 68, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
 
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  width: 350px;
  color: #7b7979;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  text-shadow: 8px 8px 12px rgba(174, 172, 172, 0.3),
    -8px -8px 12px rgba(164, 162, 162, 0.06);
`;

export const FormInput = styled.input`
  height: 30px;
  padding: 3px;
  margin-bottom: 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 8px 8px 12px rgba(143, 142, 142, 0.2),
    -8px -8px 12px rgba(27, 26, 26, 0.04);
`;
