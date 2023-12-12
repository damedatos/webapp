export function Right({ userId }) {
    return(<div class="flex flex-shrink px-3">
        <div class="flex sm:flex-col px-2">
           <Noticia/>
        </div>
    </div>
    )
}

function Noticia({ materiaId }) {
    return(<li className="card card-primary bg-gray-100 rounded-xl mb-3 w-full">
        <div className="card-body mx-auto px-6 lg:py-8">
            <h2 className="card-title">Noticia!</h2>
            <p>Data muy interesante de dameDatos.</p>
        </div>
    </li>)
}