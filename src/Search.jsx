import { useState } from "react";
import Up from "./Up";




const Search = () => {
  const [img, setimg] = useState("");

  const date=new Date().toLocaleTimeString();
  const [time,settime]=useState(date);

const mains=()=>{
    const datee=new Date().toLocaleTimeString();
    settime(datee)

}

setInterval(mains,date)



  const Result = (e) => {
    setimg(e.target.value);
  };
  return (
    <>
      <center>
        <div className="pt-5">
          <h1 className="text-center text-primary">Search Any Image You Want <span className="text-danger">{img}</span></h1>
          <h1 className="text-success"> {time}</h1>
          <input
            type="text"
            className="form-control"
            onChange={Result}
            placeholder="Search Images"
          />
          <br />
          <br />
          <Up values={img} />
        </div>
      </center>
    </>
  );
};
export default Search;
