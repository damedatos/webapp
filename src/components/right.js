export function Right({ userId }) {
    return(<section className="flex flex-col gap-3 mt-14">
        <Noticia/>
        <Noticia/>
        <Noticia/>
        <Noticia/>
    </section>
    )
}

function Noticia({ materiaId }) {
    return(<li className="card card-bordered rounded-xl">
        <div className="card-body mx-auto px-6 lg:py-8">
            <h2 className="card-title">Noticia!</h2>
            <p>Data muy interesante de dameDatos.</p>
        </div>
    </li>)
}