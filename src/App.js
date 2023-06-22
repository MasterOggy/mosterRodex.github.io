import React, { Component } from 'react'
import Card from './components/Card'
import './style/index.css'

export class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters : [],
      searchField : ''
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce=>responce.json())
    .then(data=> this.setState({monsters:data}))
  }
  
  render() {
    
    const {monsters , searchField} = this.state;
    
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <>
        <h3 className='input h3'>Mosters Rodex</h3>
        <div className='input'>
          <input type='search' placeholder='Search monster'
          onChange={e=>{this.setState({searchField:e.target.value});}}
          />
         </div>
      <div className='card-container'>
        {filteredMonsters.map(monster=>(
          <Card key={monster.id} monster={monster}/>
        ))}
      </div>
      </>
    )
  }
}

export default App
