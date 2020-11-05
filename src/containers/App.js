import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundry from '../components/EorrorBoundry/ErrorBoundry'
import './App.css';

import { setSearchField } from '../actions';

// const mapStateToProps = state =>{
//     return {
//         searchField: state.searchRobots.searchField
//     }
// }

// const mapDispatchToProps = (dispatch)=>{
//     return {
//         onSearchChange: (event)=> dispatch(setSearchField(event.target.value))
//     }
// }

function APP({store}) {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const text = useSelector(state => state.searchRobots.searchfield);
    const dispatch = useDispatch();

    const onSearchChange = (event)=>{
        setSearchfield(event.target.value)
    }

    useEffect( ()=>{
        async function fetchData(){
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await res.json();
            setRobots(users)
        }
        fetchData();
    }, []);

    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if(robots.length === 0){
        return <h1 className="tc">Loading...</h1>
    } else {
        return(
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox 
                    searchChange={onSearchChange}
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

// export default connect(mapStateToProps, mapDispatchToProps)(APP);
export default APP;