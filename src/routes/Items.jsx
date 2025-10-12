import PendingItems from "../components/PendingItems/PendingItems";
import AddItem from "../components/AddItem/AddItem";
import classNames from "classnames";
const Items = () => {
  return (
    <div className={classNames('w-full flex justify-center mt-[10%] px-[20px]')}>
      <div className="w-full sm:w-full md:w-full lg:w-lg">
        <AddItem></AddItem>
        <PendingItems></PendingItems>
      </div>
    </div>
  );
};

export default Items;
