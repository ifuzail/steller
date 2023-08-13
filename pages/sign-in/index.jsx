import { FaGoogle } from "react-icons/fa"; // Import the Google icon
import supabase from "@/utils/supabase"; // Import your Supabase configuration

export default function signIn() {
  const handleGoogleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    // Handle the response, error, or user data as needed
  };

  return (
    <section className="relative w-full h-screen bg-stone-950 ">
      <video
        src="/bg-video.mp4"
        type="video/map4"
        loop
        controls={false}
        muted
        autoPlay
        className="w-full h-full object-cover opacity-5"
      />
      <div className=" absolute lg:top-28 lg:left-72 top-56 left-20 flex flex-row  items-center justify-center">
        <div className="bg-emerald-500 lg:w-80 w-56 h-48 rounded  flex flex-col items-center py-9">
          <div className="flex justify-center items-center">
            <img src="/shopping-cart.png" alt="" className="w-10 h-10" />
            <h1 className="text-2xl text-stone-800 font-bold ">STELLER</h1>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="mt-4 bg-white text-stone-900 p-2 rounded flex items-center space-x-2"
          >
            <img src="/google.png" alt="google logo" className="w-8 p-1" />
            <h1>Sign In with Google</h1>
          </button>
        </div>
        <aside className="lg:block hidden">
          <h1 className="text-6xl text-emerald-500 font-bold relative left-20 w-[500px] top-5 uppercase ">
            Unlock Your Shopping Paradise- Sign In and Let the Retail Therapy
            Begin!
          </h1>
        </aside>
      </div>
    </section>
  );
}
