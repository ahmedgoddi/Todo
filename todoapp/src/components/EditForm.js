import React , {useState , Fragment , useEffect} from 'react'
import {connect} from "react-redux"
import {editTask} from "../js/actions"
import Modal from "react-modal"


const customStyles = {
    content: {
    top: "25%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#c5d0dd ",
    },
};


Modal.setAppElement("#root");

const EditForm = ({oldTodo , editTask}) =>

    {const [Show ,  setShow] = useState(false)
    const [text , setText] = useState ("")

    useEffect (() => {
        setText(oldTodo.text)
    } , [Show , oldTodo.text]);
    
    const ToggleModal = () => setShow(!Show)


    const handleSubmit = (e) => {
        e.preventDefault() ;
        const newTask = {...oldTodo ,  text} ; 
        editTask(newTask)
        ToggleModal();
    }

    return (
    <div>
        <Fragment>
            <button onClick={ToggleModal}>EDIT</button>
            <Modal isOpen={Show}  style={customStyles} onRequestClose={ToggleModal} >
            <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} required />
            <button type="submit" > Confirm </button>
            <button onClick={ToggleModal}> Cancel </button>
            </form>
            </Modal>
        </Fragment>
    </div>
    )}


    export default connect(null , {editTask}) (EditForm)
