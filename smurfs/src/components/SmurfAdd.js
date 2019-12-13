import React,{useState} from 'react';




const SmurfAdd = (props) => {
    const [formData, setFormData] = useState({
        name:'',
        age:'',
        height:''
    });
    const handelChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
    };
    const handelSubmit = (e) => {
        e.preventDefault();
        props.postData(formData);
        setFormData({
            
            name:'',
            age:'',
            height:''
        });

    };
    return(
        <form onSubmit={handelSubmit}>
            <label>Name: 
            <input onChange={handelChange} type="text" name="name" id='name' value={formData.name} /></label>
            <label>Age: 
            <input onChange={handelChange} type="text" name="age" id='age' value={formData.age} /></label>
            <label>Height: 
            <input onChange={handelChange} type="text" name="height" id='height' value={formData.height}/></label>
            <button>Add Smurf</button>
        </form>
    );
};

export default SmurfAdd;