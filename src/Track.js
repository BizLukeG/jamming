import React from 'react';


function Track(props){


  return(
    <div>
      <p>{props.trackObject.title}</p> 
      <p>{props.trackObject.artist}</p>
      <p>{props.trackObject.album}</p>
      
    </div>
  );
}

export default Track;