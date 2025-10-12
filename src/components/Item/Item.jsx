import { useDispatch } from "react-redux";
import { deleteItemReq, toggleCompleteReq, updateItem } from "../../store/itemsSlice";
import { useState } from "react";
import { ChevronDownIcon, IconButton } from "@radix-ui/themes";
import { Tooltip, Text } from "@radix-ui/themes";
import { CheckIcon, Cross2Icon, CounterClockwiseClockIcon, DoubleArrowDownIcon } from "@radix-ui/react-icons";
import Spinner from "../Spinner/Spinner";
import { format } from 'date-fns';
import Modal from '../Modal/Modal';
import EditForm from "./EditForm/EditForm";
import classNames from "classnames";

const Item = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const deleteItem = (id) => {
    dispatch(deleteItemReq({ dispatch, id, setIsLoading }));
  };

  const markAsComplete = (item, isCompleted) => {
    dispatch(toggleCompleteReq({ dispatch, item, setIsLoading, isCompleted }));
  };

  const saveItemEdits = (item, setIsLoading) => {
    dispatch(updateItem({ dispatch, item, setIsLoading }));
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const createdAt = new Date(props.item.createdAt);
  const dateTooltip = format(createdAt, 'PPpp');

  return (
    <div>
      <div className={classNames(`flex justify-between gap-2.5 p-2.5 bg-gray-50 rounded-md mb-2.5 duration-700 transition-opacity`, {'text-gray-400': props.item.isCompleted } )}>
        <div>
           <Modal>
            <Modal.Trigger>
              <Text size="3" className={classNames({ 'line-through': props.item.isCompleted }, 'flex items-center break-all hover:text-sky-600')}>{props.item.name}</Text>
            </Modal.Trigger>
            <Modal.Content>
              <EditForm item={props.item} saveItem={saveItemEdits}/>
            </Modal.Content>
          </Modal>
          {isExpanded && <Text className='mt-1.5 text-xs block'>{props.item.notes}</Text>}
        </div>
        <div>
          {createdAt &&
            <Tooltip content={`Created at ${dateTooltip}`}>
              <Text size="1" className='flex items-center justify-self-end hidden'>{props.item.createdAt && format(createdAt, 'Pp')}</Text>
            </Tooltip>
          }
          {isLoading ? (
            <Spinner customClassName={classNames('svg-sm flex self-center ml-0.25 h-[24px]')} />
          ) : (
            //  Actions section
            <span className={classNames("flex items-center text-blue-600")}> 
              {props.item.notes && (
                <Tooltip content={isExpanded ? 'Collapse' : 'Expand'}>
                  <button variant="ghost" onClick={toggleExpansion} className={classNames({ 'rotate180': isExpanded }, 'm-0 w-5 hover:bg-blue-100 rounded flex justify-center p-1 gap-0.5 [&>svg]:w-[16px] [&>svg]:h-[16px]')}>
                    <DoubleArrowDownIcon />
                  </button>
                </Tooltip>
              )}
              <Tooltip content='Delete'>
                <button
                  className='hover:bg-blue-100 rounded flex justify-center p-1 gap-0.5 [&>svg]:w-[16px] [&>svg]:h-[16px]'
                  variant="ghost"
                  onClick={deleteItem.bind(this, props.item.id)}
                >
                  <Cross2Icon />
                </button>
              </Tooltip>

                {/* Opens a Task edit modal */}
              
              <Tooltip content={props.item.isCompleted ? 'Mark incomplete' : 'Mark complete'}>
                <button
                  variant="ghost"
                  className="hover:bg-blue-100 rounded flex justify-center p-1 gap-0.5 [&>svg]:w-[16px] [&>svg]:h-[16px]"
                  onClick={markAsComplete.bind(this, props.item, !props.item.isCompleted)}
                >
                  {props.item.isCompleted ? (
                    
                    <CounterClockwiseClockIcon/>
                  ):
                    <CheckIcon />
                  }
                </button>
              </Tooltip>
            </span>
          )}

        </div>
      </div>
    </div>
  );
};

export default Item;
