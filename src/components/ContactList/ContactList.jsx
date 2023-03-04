import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactContainer, List } from './ContactList.styled';


export const ContactList = ({ contacts }) => {
  return (
    <ContactContainer>
       <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id} info={contact}></ContactItem>
      ))}
    </List>
    </ContactContainer>
   
  );
};

