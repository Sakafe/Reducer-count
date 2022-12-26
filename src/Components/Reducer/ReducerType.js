export const patientState = {
    patients : [],
}

export const patientreducer = (state,action) =>{
    switch(action.type){
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const allPatients = [...state.patients, newPatient];
            return { patients: allPatients };
        case 'REMOVE_PATIENT':
            const remaining = state.patients.filter(p => p.id !== action.id);
            const newState = {patients: remaining}
            return newState;
            console.log(action);
            return state;
        default : 
        return state;
    }
} 