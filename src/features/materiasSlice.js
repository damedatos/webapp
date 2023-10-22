const initialState = [
    { id: 2, nombre: 'Aprendizaje Automático', cht: 64, cuatri: 1 }
]

export default function materiasReducer(state = initialState, action) {
    switch (action.type) {
        case 'materias/agregar':
            return [...state, action.payload]
        case 'materias/borrar':
            return state.filter(materia => { materia.id != action.payload })
        case 'materias/mover':
            return state.map(materia => { 
                if (materia.id == action.payload.id) {
                    return {...materia, cuatri: action.payload.cuatri}
                }
            })
    }
}