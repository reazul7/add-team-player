import React from 'react';

const AddPlayer = (props) => {
    // console.log(props.addPlayer);
    // const addPlayer = props.addPlayer;
    // const addNames = props.addPlayer.reduce( (names, player) => names + player.name.split(' '), '');
    // console.log(...addNames.split(''));
    for (let i = 0; i < props.addPlayer && props.addPlayer.length; i++) {
        const element = props.addPlayer[i];
      console.log(element);
    }
    // const totalBudget = addPlayer.reduce( (sum, player) => sum + player.salary, 0);
    // console.log(addPlayer);
    return (
        <div>
            <h2>Added Player: {props.addPlayer.length}</h2>
            {/* <h2>Added Player Name: {addNames}</h2> */}
            {/* <h2>Total Salary: {totalBudget}</h2> */}
        </div>
    );
};

export default AddPlayer;