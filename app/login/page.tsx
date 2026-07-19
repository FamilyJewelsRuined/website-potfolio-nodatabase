import { login, signup } from './actions'

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams
  const error = params?.error as string | undefined

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px', width: '350px' }}>
        <h2>Admin Login</h2>
        
        {error && (
          <div style={{ padding: '0.5rem', backgroundColor: '#fee2e2', color: '#b91c1c', border: '1px solid #f87171', borderRadius: '4px', fontSize: '0.9rem' }}>
            {error}
          </div>
        )}

        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required style={{ padding: '0.5rem' }} />
        
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required style={{ padding: '0.5rem' }} />
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button formAction={login} style={{ padding: '0.5rem 1rem', cursor: 'pointer', flex: 1 }}>Log in</button>
          <button formAction={signup} style={{ padding: '0.5rem 1rem', cursor: 'pointer', flex: 1 }}>Sign up</button>
        </div>
      </form>
    </div>
  )
}
