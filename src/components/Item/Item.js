import { useDispatch } from "react-redux";
import { deleteItemReq, markDoneReq } from "../../store/itemsSlice";
import { useState } from "react";
import { Table, IconButton } from "@radix-ui/themes";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
const Item = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const deleteItem = (id) => {
    dispatch(deleteItemReq({ dispatch, id, setIsLoading }));
  };

  const markAsComplete = (item) => {
    dispatch(markDoneReq({ dispatch, item, setIsLoading }));
  };

  return (
    <Table.Row border={false}>
      <Table.Cell>
        {isLoading ? "Processing item... " : props.item.name}
      </Table.Cell>
      <Table.Cell width="20px">
        <IconButton
          variant="ghost"
          onClick={deleteItem.bind(this, props.item.id)}
        >
          <Cross1Icon />
        </IconButton>
      </Table.Cell>
      <Table.Cell width="20px">
        {!props.item.isCompleted && (
          <IconButton
            variant="ghost"
            onClick={markAsComplete.bind(this, props.item)}
          >
            <CheckIcon />
          </IconButton>
        )}
      </Table.Cell>
    </Table.Row>
  );
};

export default Item;
