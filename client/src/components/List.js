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
            <div class="py-5">
                <div class="container">
                    <div class="row">
                        
                        {list.map((item) => (
                            
                            <div className='col-md-4 col-sm-12 mt-5'>
                            <div className="card h-100 p-5 align-items-center">
                                <div className="card-block">
                                    <div className='col'>
                                        <div className='row card-text p-4'> {item.description} </div>
                                        <div className='row mt-5 mx-5'>
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