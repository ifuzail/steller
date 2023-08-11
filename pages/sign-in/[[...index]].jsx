import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="relative w-full h-screen bg-stone-950 ">
    <video src='/bg-video.mp4'
        type='video/map4'
        loop
        controls={false}
        muted
        autoPlay
        className='w-full h-full object-cover opacity-5'/>
    <div className=" absolute top-0 left-0 flex flex-row items-center">
      <div>
      <SignIn
        appearance={{
          elements: {
           rootBox:'relative lg:left-48 lg:top-20 top-36'
          }
        }}
        />
      </div>
      <aside className="lg:block hidden">
        <h1 className="text-6xl text-emerald-500 font-bold relative left-48 w-96 top-16 uppercase ">Unlock Your Shopping Paradise- Sign In and Let the Retail Therapy Begin!</h1>
      </aside>
    </div>
    </section>
  );
}