import React from 'react';

const SearchBox = ({searchfield, searchChange})=>{
    return (
        <div>
            <input 
                className='bg-lightest-blue br3 ma2 pa3'
                type='search' 
                placeholder='Search Robots'
                onChange = {searchChange} 
            />
        </div>  
    );
}

export default SearchBox;