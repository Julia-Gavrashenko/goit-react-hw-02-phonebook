import { ListItem } from "./ContactItem.styled";

export const ContactItem = ({ info: { name, number, id }, onDeleteContact }) => {
  return (
    <>
      <ListItem>
        {name}: {number}
      </ListItem>
      <button type="button" onClick={() => onDeleteContact (id)}>Delete contact</button>
    </>
  );
};

