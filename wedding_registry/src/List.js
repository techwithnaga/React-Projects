import React from 'react'
import data from './data';
import {useState} from 'react';

const List = () =>{
    const [gifts, setGifts] = useState (data);

    const deleteItem = (id) =>{
        let newList = gifts.filter((gift)=> gift.id !== id);
        setGifts (newList);
        
    }

    const addItem = (description, quantity, url) => {
        let newItem = {'id': gifts.length, 'description': description, 'quantity': quantity, 'link':url}
        gifts.push(newItem);
        console.log (gifts);
        setGifts (gifts);
        document.getElementById("exampleModal").hidden();
        
    }
   return (
    <>
       <div className="row">
       {gifts.map ((gift) =>{
           const {id,description, quantity, link, purchased } = gift 
           return(
            <div id={id} className="w-25 mx-auto">
                <div className="card" >
                    <img class="card-img-top" src={link} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 className="card-title">{description}</h5>
                        <div className="d-flex justify-content-between" id="card-bottom"> 
                            <p>{quantity} still needed</p>
                            <button type='button' class="btn btn-danger" onClick={()=> {deleteItem(id)}}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
       );
    })}
    </div>
     <button id="clearButton" type="button" className="btn btn-lg btn-warning" onClick={()=> setGifts([])}>Clear All Items</button>
     <button id="clearButton" type="button" className="btn btn-lg btn-info" data-toggle="modal" data-target="#exampleModal">Add Item</button>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add an Item to Wedding Registry</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
      </div>
      <div className="modal-body">
        <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-default"> Description</span>
  </div>
  <input id="description" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
  </div>
  <div className="input-group mb-3">
  <div className="input-group-prepend">
      <span className="input-group-text" id="inputGroup-sizing-default"> Quantity</span>
      </div>
      <input id="quantity" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
      </div>
      <div className="input-group mb-3">
      <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-default"> Picture URL</span>
    </div>
  <input id="url" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>{addItem(document.getElementById("description").value, document.getElementById("quantity").value,document.getElementById("url").value)}} >Add Item</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default List