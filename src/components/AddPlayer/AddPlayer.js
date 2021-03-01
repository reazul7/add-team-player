import React from 'react';

const AddPlayer = (props) => {
    // console.log(props.addPlayer);
    // const addPlayer = props.addPlayer;
    const addNames = props.addPlayer.reduce( (names, player) => names + player.name, '');
    console.log(addNames);
    // console.log(...addNames.split(''));
    const totalBudget = props.addPlayer.reduce( (sum, player) => sum + player.salary, 0);
    // console.log(addPlayer);
    return (
        <div>
            {/* <h2>Added Player: {addPlayer.length}</h2>
            <h2>Added Player Name: {addNames}</h2>
            <h2>Total Salary: {totalBudget}</h2> */}
            <h2>Added Player Name: {addNames}</h2>
            <h2>Total Salary: {totalBudget}</h2>
        </div>
    );
};

export default AddPlayer;