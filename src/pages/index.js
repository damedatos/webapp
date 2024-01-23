import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'

import { Right } from '@/components/right'
import { Left } from '@/components/left'
import { Postear } from '@/components/postear'

export async function getServerSideProps(ctx) {
  const supabase = createPagesServerClient(ctx)
  const {data: {user}} = await supabase.auth.getUser()
  return {props: {
    user
  }}
}

export default function Home({user}) {
  return (<>
    <Left materias={[]}/>
    <div className="flex grow flex-col">
      <Postear/>
      <h1>{user?.id}</h1>
      <div className="flex flex-row overflow-scroll gap-3 scrollbar-hide">
        <div className="flex flex-col grow gap-1">
          <h1>miFeed</h1>
          <Actividad/>
          <Actividad/>  
          <Actividad/>  
          <Actividad/>  
          <Actividad/>  
          <Actividad/>  
          <Actividad/>  
          <Actividad/>  
        </div>
        <Right/>
      </div>
    </div>
  </>)
}

function Actividad({ materiaId }) {
  return(<article className="p-3 card-bordered rounded-md">
    <h2>tR</h2>
    <div className="card bg-base-200">
      <div className="card-body mx-3 lg:py-8">
          <h2 className="card-title">Actividad</h2>
          <p>Paso algo re locooo.</p>
      </div>
    </div>
  </article>)
}