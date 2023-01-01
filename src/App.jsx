import { useState } from "react";
import Todolist from "./Todolist";

const App = () => {
  const [data, setdata] = useState("");
  const [data2, setdata2] = useState([]);

  const Change = (e) => {
    setdata(e.target.value);
  };

  const Result = () => {
    setdata2((all)=>{
        return [...all,data]

    })
    setdata('')
  };

const deleteitems=(id)=>{
setdata2((all)=>{
return all.filter((elem,index)=>{
return index !==id
})
})
}

  return (
    <>
      <center>
        <h1>ToDo List {data}</h1>
        <input
          type="text"
          placeholder="Add A List"
          className="form-control"
          onChange={Change}
          value={data}
        />
        <br />
        <button className="btn btn-primary" onClick={Result}>
          add a list
        </button>
    </center>

<ol>
    {
        data2.map((main,index)=>{
            return(
                
                <>
                    <Todolist
                        key={index}
                        id={index}
                        texts={main}
                        onSelect={deleteitems}
                    />
                </>
                
            )

        })
    }
</ol>


    </>
  );
};
export default App;