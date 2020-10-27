import React, {Component} from 'react';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundry from '../components/EorrorBoundry/ErrorBoundry'
import './App.css';

class APP  extends Component{

    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        this.setState({robots:users });
    }

    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield);
        });

        if(this.state.robots.length === 0){
            return <h1 className="tc">Loading...</h1>
        } else {
            return(
                <div className="tc">
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox 
                        searchChange={this.onSearchChange}
                    />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList 
                                robots={filterRobots}
                            />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}

export default APP;