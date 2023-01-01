const Up = (props) => {
  const img = `https://source.unsplash.com/600x400?${props.values}`;
  return (
    <>
      <div className="container">
        <div className="col-md-12">
          <img src={img} alt="" className="rounded img-fluid"/>
        </div>
      </div>
    </>
  );
};
export default Up;



