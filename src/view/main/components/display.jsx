import React, { useState } from 'react'
import Card from '../../../components/Card'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

function Display({ list, deleteItem, editItem, completeItem, searchName, toggleModal }) {
    console.log(list)
    return (
        <div className='flex flex-col md:w-9/12 w-full p-4 h-full'>
            <h1 className='my-5 font-extrabold text-2xl'>My Task</h1>
            <Card className={`my-5 p-2 hover:bg-yellow-500 cursor-pointer`} onClick={toggleModal}>
                Add Task
            </Card>

            <Card className='flex justify-center md:w-full p-1 '>
                <input
                    className=' bg-transparent focus:bg-white w-full rounded py-1.5 px-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-neoRed  '
                    type='text' placeholder='Search Task'
                    onChange={(e) => searchName(e)}
                />
            </Card>

            <div className=''>
                <div className='min-w-40 mt-6 '>

                    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
                        {list.map((el, index) =>
                            <Card key={el.id} className={`min-w-40 ${el.complete ? " bg-neoGreen " : `${"bg-" + el.color} `} flex flex-col text-left p-2 ease-linear delay-150 duration-400 transition `}>
                                <div className=' max-h-7 mb-2 flex justify-between items-center'>
                                    <p className='font-bold text-2xl truncate'>
                                        {el?.title}
                                    </p>
                                    <Link className='cursor-pointer' to="/detail" state={[list, el]} >
                                        <img
                                            className=' hover:origin-bottom hover:-rotate-12 '
                                            src='assets/arrow.svg'
                                            alt='detail'
                                        />
                                    </Link>
                                </div>
                                <table>
                                    <tbody>
                                        <tr className=' '>
                                            <td>  due date  </td>
                                            <td>  : </td>
                                            <td>{dayjs(el?.date).format("DD / MM / YYYY")}</td>
                                        </tr>
                                        <tr className=' '>
                                            <td>  status  </td>
                                            <td>  : </td>
                                            <td>  {el.complete ? "Complete" : "Not Complete"}                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='my-2'>
                                </div>
                                <div className='flex justify-between'>
                                    <img
                                        className='cursor-pointer hover:scale-125'
                                        src='assets/delete.svg'
                                        alt='delete'
                                        onClick={() => deleteItem(el.id)}
                                    />
                                    {!el.complete ?
                                        <>

                                            <div className='flex gap-2'>
                                                <img
                                                    className='cursor-pointer   hover:scale-125  '
                                                    src='assets/edit.svg'
                                                    alt='edit'
                                                    onClick={() => editItem(el.id)}
                                                />
                                                <img
                                                    className='cursor-pointer   hover:scale-125  '
                                                    src='assets/checkList.svg'
                                                    alt='complete'
                                                    onClick={() => completeItem(el.id)}
                                                />
                                            </div>
                                        </>
                                        :
                                        null
                                    }
                                </div>
                            </Card>

                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Display