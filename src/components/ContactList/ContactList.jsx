import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactContainer, List } from './ContactList.styled';


export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactContainer>
       <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id} info={contact}
       onDeleteContact={onDeleteContact} ></ContactItem>
      ))}
    </List>
    </ContactContainer>
   
  );
};

