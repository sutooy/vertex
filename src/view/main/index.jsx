import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { getRandomColor } from '../../utils/ColorGenerator'
import Input from './components/input'
import Display from './components/display'
import { useLocation, useNavigate } from 'react-router-dom'

const idGenerator = () => Math.floor(Math.random() * 100)

function Index() {
    const location = useLocation();
    const state = location.state;
    const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setToDoList(state)
            navigate(location.pathname, {});
        }
    })
    const initialState = {
        title: "",
        description: "",
        complete: false
    }
    // modal for add Task
    const [showModal, setShowModal] = useState(false);
    // state for task input 
    const [newItem, setNewItem] = useState(initialState)
    // state for edit input 
    const [edit, setEdit] = useState(false)
    // List of Task
    const [toDoList, setToDoList] = useState([])
    // state for search
    const [search, setSearch] = useState("")

    // function for handle CRUD ==
    const handleAdd = () => {
        if (newItem.title.trim() !== "" && newItem.description.trim() !== "") {
            edit ?
                setToDoList((toDoList.map((el) => el.id === newItem.id ? newItem : el)))
                :
                setToDoList(([...toDoList, { ...newItem, id: idGenerator(), color: getRandomColor() }]))
            setEdit(false)
            toggleModal()
            setNewItem(initialState)
        }
    }
    const handleComplete = (id) => {
        setToDoList((toDoList.map((el) => el.id === id ? { ...el, complete: true } : el)))
    }

    const handleEdit = (id) => {
        setNewItem(toDoList.find(el => el.id === id))
        setEdit(true)
        toggleModal()
    }

    const handleDelete = (id) => {
        setToDoList((toDoList.filter((el) => el.id !== id)))
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleCancel = () => {
        setEdit(false)
        setNewItem(initialState)
        toggleModal()
    }

    const handleChange = (e, type) => {
        switch (type) {
            case "title": return setNewItem({ ...newItem, title: e.target.value })
            case "desc": return setNewItem({ ...newItem, description: e.target.value })
            case "date": return setNewItem({ ...newItem, date: e.target.value })
            default:
        }
    }
    // end of function for CRUD handle ==

    const toggleModal = () => {
        setShowModal(!showModal)
    }
    // disable state
    const disabled = newItem.description.trim() === "" || newItem.title.trim() === ""

    // copy of toDoList for displayed
    let displayList = toDoList.slice().filter(item => item.title.includes(search))

    return (
        <>
            <div className='flex flex-col items-center font-semibold'>
                <Display
                    list={displayList}
                    searchName={(e) => handleSearch(e)}
                    deleteItem={(id) => handleDelete(id)}
                    editItem={(id) => handleEdit(id)}
                    completeItem={(id) => handleComplete(id)}
                    toggleModal={toggleModal}
                />

                <Input
                    edit={edit}
                    list={toDoList}
                    setList={setToDoList}
                    item={newItem}
                    initial={initialState}
                    addList={(idx) => handleAdd(idx)}
                    showModal={showModal}
                    setShowModal={toggleModal}
                    handleChange={(e, type) => handleChange(e, type)}
                    disabled={disabled}
                    cancel={handleCancel}
                />
            </div>
        </>
    )
}

export default Index