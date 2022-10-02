import { useSelector } from "react-redux";
const PendingItems = () => {
  const items = useSelector(state => state.items);
  return(
    <div> 
      {
        items.map(item => {
          return (
            <div>
              <div key={item.name}>{item.name}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default PendingItems;