export const DELETE_NOTE = 'DELETE_NOTE'
export const Add_NOTE = 'Add_NOTE'

export  function deleteNote(id)  {
    return {
        type: 'DELETE_NOTE',
        id,
        }
}
export  function AddNote (val)  {
    return {
        type: 'Add_NOTE',
        val,
        }
}
export function selectButton() {
return {
    type: 'SELECT_FLAG',
}
}

