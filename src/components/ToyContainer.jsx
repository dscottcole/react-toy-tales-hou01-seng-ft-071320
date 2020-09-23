import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  let toys = props.toys

  return(
    <div id="toy-collection">
      {
      toys.map(toy => <ToyCard 
        key={toy.id}
        toy={toy}
        donate={props.donate}
        addLikes={props.addLikes}
      />)
      }
    </div>
  );
}

export default ToyContainer;
