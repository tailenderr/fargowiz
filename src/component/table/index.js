import { useContext } from "react";
import { user } from "../../App";

const Table = () => {
  const { currentData, setCurrentData } = useContext(user);
  const deleteData = (name) => {
    const tempArray = currentData.filter((item) => {
      if (item.name != name) {
        return item;
      }
    });
    setCurrentData([...tempArray]);
  };
  return (
    <>
      {currentData.map((item) => {
        console.log(item.name);
        return (
          <>
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                {item.phonenumber} {"  "}
                <button
                  onClick={() => {
                    deleteData(item.name);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
};
export default Table;
