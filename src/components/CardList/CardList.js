import React from 'react';
import Card from '../Card/Card';

const CardList = ({robots})=>{
    return(
        <div>
        {
            robots.map((user, i) => {
                return (
                <Card 
                key={i} 
                id={robots[i].id} 
                roboName ={robots[i].name}
                roboEmail={robots[i].email}
                />
                );
            })
        }
        </div>
    );
}

export default CardList;