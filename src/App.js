import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'



/// Everything on this lab was done without fetching from localhost

class App extends React.Component{

  state = {
    toys: [],
    display: false,
    toy: {
      name: '',
      image: ''
    }
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  componentDidMount = () => {
    this.setState({ toys: data })
  }

  handleForm = (e) => {
    if (e.target.name === 'name') {
      this.setState({
        toy: {
          [e.target.name]: e.target.value,
          image: this.state.toy.image
        }
      })
    } else if (e.target.name === 'image') {
      this.setState({
        toy: {
          name: this.state.toy.name,
        [e.target.name]: e.target.value
        }
      })
    }
  }

  submitToy = (e) => {
    e.preventDefault()
    let newToy = this.state.toy
    let allToys = [...this.state.toys, newToy]
    
    this.setState({toys: allToys}, this.clearToy())
    e.target.reset()
  }

  clearToy = () => {
    this.setState({
      toy: {
        name: '',
        image: ''
      }
    })
  }

  donate = (e) => {
    let toyName = e.target.parentElement.id

    let toysAfterDonating = this.state.toys.filter(toy => toy.name !== toyName)
    this.setState({ toys: toysAfterDonating })
  }

  addLikes = (e) => {
    let toyName = e.target.parentElement.id

    let moreLikes = this.state.toys.map(toy => {
      if(toy.name === toyName){
        toy.likes += 1
        return toy
      } else {
        return toy
      }
    })
    this.setState({ toys: moreLikes })

  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleForm={this.handleForm} submitToy={this.submitToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer addLikes={this.addLikes} donate={this.donate} toys={this.state.toys}/>
      </>
    );
  }

}

export default App;
