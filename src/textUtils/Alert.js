import React from "react";

const Alert = (props) => {
  return (
    props.alert && <div className="alert text-center alert-warning alert-dismissible fade show" role="alert">
      <strong>{props.alert.msg}</strong> 
     
    </div>
  );
};

export default Alert;
