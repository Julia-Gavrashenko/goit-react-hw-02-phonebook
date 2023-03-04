import { ListItem } from "./ContactItem.styled";

export const ContactItem = ({ info: { name, number } }) => {
  return (
    <>
      <ListItem>
        {name}: {number}
      </ListItem>
    </>
  );
};

