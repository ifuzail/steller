import { useRouter } from 'next/router';
import supabase from '@/utils/supabase';
import { PiSignOut } from 'react-icons/pi'

const SignOutButton = () => {
  const router = useRouter();

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push("/sign-in")
  };

  return (
    <button
      onClick={signOut}
      className=" text-black rounded"
    >
     <PiSignOut  fontSize={20}/>
    </button>
  );
};

export default SignOutButton;
