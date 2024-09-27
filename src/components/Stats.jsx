import React from 'react';

const Stats = ({toDoList}) => {
        let countList = toDoList.length;
    return <div className='stats'>
        <p className='notify'>
            {countList ===0 ? 'YOU GOT EVERYTHING! FIGHTING':`You have ${countList} item/s on your list.`}
        </p>
    </div>
};

export default Stats;