// import {
//     DELETE_NOTE,
//     Add_NOTE
// } from '../action/notesAction';

const initState = {
data: [
    // {id: 0, title: 'test', content: 'abcd'}
]
}
const rootReducer = (state = initState, action) => {
    console.log('check',action)
    if(action.type === 'DELETE_NOTE') {
        let newNotes = state.data.filter(d=> {
            return action.id !== d.id
        });
        return{
            ...state,
            data: newNotes
        }
    }
    if(action.type === 'Add_NOTE') {
        let addNote = [action.val, ...state.data];
        console.log(addNote);
        return{
            ...state,
            data: addNote
        }
    }
    return state;
}
export default rootReducer;