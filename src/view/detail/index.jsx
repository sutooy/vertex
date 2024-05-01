
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Card from '../../components/Card';
import dayjs from 'dayjs';

function Index() {
    // const [data, setData] = useState([])
    const location = useLocation();
    const state = location.state;
    const data = state[1]
    console.log(data)
    return (
        <div className='flex flex-col items-center h-full'>
            <p className=' text-5xl font-bold my-10'>Task Detail </p>
            <Card className={`${data?.complete ? " bg-neoGreen " : `bg-${data?.color} `} p-2  md:w-1/2 w-full`}>
                <p className='text-3xl font-bold underline'>  {data?.title}</p>
                <p className='text-xl font-light my-3'> {data?.description}</p>

                <table>
                    <tbody>
                        <tr className=' '>
                            <td>  due date  </td>
                            <td>  : </td>
                            <td>{dayjs(data?.date).format("DD / MM / YYYY")}</td>
                        </tr>
                        <tr className='text-left '>
                            <td>  status  </td>
                            <td>  : </td>
                            <td>  {data?.complete ? "Complete" : "Not Complete"} </td>
                        </tr>
                    </tbody>
                </table>

                <Link to={"/"} state={state ? state[0] : null} >
                    <Card className='bg-white my-4 cursor-pointer'>
                        Back to Home
                    </Card>
                </Link>
                {data &&
                    <>
                    </>
                }
            </Card>


        </div >
    )
}

export default Index