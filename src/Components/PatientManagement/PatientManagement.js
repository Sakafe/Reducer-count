import React, { useReducer, useRef } from 'react';
import { patientreducer, patientState } from '../Reducer/ReducerType';

const PatientManagement = () => {
    const [state,dispatch] = useReducer(patientreducer,patientState);
    const nameREf = useRef();
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT', 
            name: nameREf.current.value, 
            id : state.patients.length + 1
        })
                 nameREf.current.value = '';
                //  console.log(nameREf.current.value);
    }
    return (
        <div>
            <h1>Doctor Chamber</h1>
            <h2>Patient Management : {state.patients.length}</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={nameREf} />
            </form>

            {
                state.patients.map(pt=><li 
                    key={pt.id}
                    onClick={ () => dispatch({type: 'REMOVE_PATIENT',id: pt.id})} 
                    >{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;