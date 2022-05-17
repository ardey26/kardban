import React, { useState } from 'react';

const Edit = ({ item }) => {
    const [description, setDescription] = useState(item.description)

       const editItem = async (e) => {
        e.preventDefault();

       try {
           const body = { description }
           const response = await fetch(`http://localhost:5000/todos/${item.todo_id}`,
           {
               method: "PUT",
               headers: { 'Content-Type': 'application/json'},
               body: JSON.stringify(body)
           });

           window.location = "/";
       } catch (error) {
           console.error(error.message);
       }
   }
    return ( 
    <> 
        <button type="button" className="btn btn-outline-dark" data-toggle="modal" data-target={`#id${item.todo_id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
        </button>


        <div className="modal" id={`id${item.todo_id}`} onClick={() => setDescription(item.description)}>
        <div className="modal-dialog">
            <div className="modal-content">


            <div className="modal-header">
                <h4 className="modal-title">Edit todo</h4>
                <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(item.description)}>&times;</button>
            </div>


            <div className="modal-body">
            <input type="text" className="form-control" value={description} onChange={ event => setDescription(event.target.value)} onKeyPress={(e) => { if (e.key === 'Enter') { editItem(e)}}}/>
            </div>


            <div className="modal-footer">

                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(e) => editItem(e)}>Edit</button>
                <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(item.description)}>
                Close
              </button>

            </div>

            </div>
        </div>
        </div>
    </>
    )
}

export default Edit