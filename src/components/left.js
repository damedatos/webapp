export function Left({ userId }) {
    return(<div class="w-fixed px-3 sticky top-0 rounded-xl h-full">
        <ul class="flex sm:flex-col overflow-scroll gap-1">
            <Materia/>
            <Materia/>
            <Materia/>
            <Materia/>
            <Materia/>
            <Materia/>
            <Materia/>
            <Materia/>
            <Materia/>
        </ul>
    </div>)
}

function Materia({ materiaId }) {
    return(<li className="card card-bordered">
        <div className="card-body">
            <h3 className="text-slate-500">supratitulo</h3>
            <h2 className="card-title">
                Materia
                <div className="badge badge-primary">Sugerida</div>
            </h2>
            <p>informacion sobre la materia</p>
        </div>
    </li>)
}

// export function Left({ userId }) {
//     return(<div className="w-fixed sticky top-0 rounded-xl sm:px-3 h-full">
//         <ul className="flex sm:flex-col content-center gap-1 overflow-scroll">
//             <Materia/>
//             <Materia/>
//             <Materia/>
//             <Materia/>
//             <Materia/>
//             <Materia/>
//             <Materia/>
//         </ul>
//     </div>)
// }