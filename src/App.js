import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
        robots: [],
        searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users})});

    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value});
    }
    render(){
            const { robots, searchfield } = this.state;
            const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase() );
            })

            // return (
                if(this.state.robots.length === 0){
                     return <h1>Loading</h1>
                }else{
                    return(
                        <div className="tc">
                            <h1 className="f1">RoboFriends Card Catalogue</h1>
                            <SearchBox searchThis={this.onSearchChange} />
                            <CardList robots={filteredRobots} />
                        </div>
                        );
                }
            // );
    }
}

export default App;
