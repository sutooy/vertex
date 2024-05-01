import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from '../../../components/Card';

function Input({ ...props }) {
    const { edit, item, addList, showModal, setShowModal, handleChange, disabled, cancel } = props

    return (
        <>
            {showModal ?
                (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <Card className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start  p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            {edit ? "Edit " : "Add "} Task
                                        </h3>

                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                            <div className='flex flex-col gap-3 w-full text-slate-800 '>
                                                <input
                                                    className='block w-full rounded-md border-0 py-1.5 px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset    '
                                                    type='text' placeholder='Title' onChange={(e) => handleChange(e, 'title')} value={item?.title} />
                                                <textarea
                                                    className='block w-full rounded-md border-0 py-1.5 px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  '
                                                    placeholder='Description' onChange={(e) => handleChange(e, 'desc')} value={item?.description} />
                                                <input
                                                    className='block w-full rounded-md border-0 py-1.5 px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   '
                                                    type="date" id="start" onChange={(e) => handleChange(e, 'date')} value={item?.date} />
                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center md:gap-10 justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <Card
                                            className="cursor-pointer bg-neoRed text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            onClick={cancel}
                                        >
                                            Cancel
                                        </Card>
                                        <Card
                                            className={`${disabled ? "bg-slate-500" : " bg-emerald-500 cursor-pointer "}  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                                            onClick={() => { addList() }}
                                            disabled={disabled}
                                        >
                                            Save Changes
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>


                        {/* <Card className='flex gap-4 justify-center w-80 h-fit'>
                        <div className='flex flex-col gap-3 w-full text-slate-800 dark:text-white'>
                            <input
                                className='block w-full rounded-md border-0 py-1.5 px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  '
                                type='text' placeholder='Title' onChange={(e) => handleChange(e, 'title')} value={item?.title} />
                            <textarea
                                className='block w-full rounded-md border-0 py-1.5 px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  '
                                placeholder='Description' onChange={(e) => handleChange(e, 'desc')} value={item?.description} />
                        </div>
                        <button
                            disabled={disabled}
                            className={` ${disabled ? "bg-slate-500" : " bg-rose-500"}  text-white`} onClick={() => { addList() }} >
                            {edit ? "Edit" : "Add"}
                        </button>
                    </Card> */}
                    </>
                )
                :
                null
            }

        </>
    )
}

export default Input