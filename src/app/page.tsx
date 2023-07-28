import SigninButton from "@/components/SignInButton";

export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-col gap-5 items-center justify-center'>
      <h1>Home Page</h1>
      <SigninButton/>
    </div>
  );
}
