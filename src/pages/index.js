export default function Home() {
  return (<div className="flex flex-col grow px-3 overflow-scroll gap-1">
    <h1 className="text-3xl font-bold mb-3 px-3">miFeed</h1>
    <Actividad/>
    <Actividad/>
    <Actividad/>
    <Actividad/>
    <Actividad/>
    <Actividad/>
    <Actividad/>
    <Actividad/>
    <Actividad/>
    <Actividad/>
    <Actividad/>
    <Actividad/>
  </div>)
}

function Actividad({ materiaId }) {
  return(<article className="p-3 card-bordered rounded-md">
    <h2 className="font-extrabold text-xl">tR</h2>
    <div className="card bg-base-200">
      <div className="card-body mx-3 lg:py-8">
          <h2 className="card-title">Actividad</h2>
          <p>Paso algo re locooo.</p>
      </div>
    </div>
  </article>)
}