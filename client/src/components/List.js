import React, { useEffect, useState, Fragment } from 'react';

import Edit from './Edit';
import Delete from './Delete'

import '../styles/list.css'


const List = () => {
   const [list, setList] = useState([]);



   const getList = async() => {
       try {
           const response = await fetch("http://localhost:5000/todos")

           const parsedResponse = await response.json()

           setList(parsedResponse)
       } catch (error) {
           console.error(error.message)
       }
   }
    useEffect(() => {
        getList();
    }, []);
    
    return (
        <> 
            <div className="py-2">
                <div className="container">
                    <div className="row">
                        
                        {list.map((item) => (
                            
                            <div className='col-md-4 col-sm-12 mt-5'>
                            <div className="card p-5 align-items-center" style={{height: "400px"}}>
                                <div className="card-block h-100">
                                    <div className='col h-100'>
                                        <div className='row card-text p-4' style={{height: "300px"}}> {item.description} </div>
                                        <div className='row mx-5 justify-content-around'>
                                        <div className='card-link'> <Edit item={item}/></div>
                                        <div className='card-link'> <Delete item={item}/></div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>  
            </div>


        </>
    )
}

export default List