import Login from './components/Login';
import SignupButton from './components/SignupButton';

export default function Home() {
  console.log("Test")
  return (
    <main className="flex min-h-screen items-center justify-between">
      <Login>
        <SignupButton />
      </Login>
      <div className='hidden md:block md:flex-1'>
        <img className='h-screen object-cover' alt="petron background" src="/assets/backgrounds/petron-background-2.jpg" />
      </div>
    </main>
  )
}
