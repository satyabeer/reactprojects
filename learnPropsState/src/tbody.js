import ActionButton from './actionButton';

const tbody = (props) => {
    const actions = ["Edit", "Delete"];
    const characterData = props.characterData.map((student, index) => {
        return (
            <tr key={index}>
                <td>{student.name}</td>
                <td>{student.rollno}</td>
                <td>{student.className}</td>
                <td><ActionButton actions={actions} removeCharacter={() => props.removeCharacter(index)} /></td>
            </tr>
        )
    })

    return <tbody>{characterData}</tbody>
}

export default tbody;