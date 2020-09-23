import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    let toy = this.props.toy
    return (
      <div className="card" id={toy.name}>
        <h2>{toy.name}</h2>
        <img src={toy.image} alt={toy.name} className="toy-avatar" />
        <p>{toy.likes} Likes </p>
        <button onClick={e => this.props.addLikes(e)} className="like-btn">Like {'<3'}</button>
        <button onClick={e => this.props.donate(e)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
