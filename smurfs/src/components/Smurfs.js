import React from 'react';

const Smurfs = (props) => {

    return (
        <div>
            {props.state.getStarted && <h2>Loading Data ...</h2>}
            {props.state.error && <h2>error getting data:{props.state.error}</h2>}
            {props.state.smurfs.map(item => 
                
                 <div key={item.id}>
                    <h3><i className="far fa-edit edit"></i>{item.name}<i onClick={() => props.deleteData(item.id)} className="far fa-trash-alt delete"></i></h3>
                    <p>Age: {item.age}</p>
                    <p>Height: {item.height}</p>
                    
                </div> 
                    
            )}
            
        </div>
    );

};
export default Smurfs;