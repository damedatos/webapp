import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function Form(){
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  return(<div className='flex flex-col items-center m-auto'>
    <img src='dD.png' width='150' height='150'/>
    <Auth
      supabaseClient={supabase}
      providers={['github', 'google']}
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: 'black',
              brandAccent: 'grey',
            },
          },
        },
      }}
    />
  </div>)
}