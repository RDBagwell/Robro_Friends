import React from 'react';

const Card = ({roboName, roboEmail, id })=>{
    return(
        <div className='tc bg-light-green dib br3 ma2 pa3 grow shadow-5'>
            <img src={`https://robohash.org/${id}`}className='bg-white br3' alt={roboName} />
            <div  className='card-text'>
                <h2 className='name'>{roboName}</h2>
                <p className='email'>{roboEmail}</p>
            </div>
        </div>
    );
}

export default Card;