// import React from 'react';
import Tbody from './tbody';
import Theader from './theader';

const Table = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <table>
                <Theader />
                <Tbody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}

export default Table;