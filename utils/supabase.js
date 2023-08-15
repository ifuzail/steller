
import { createClient } from '@supabase/supabase-js';
// import { useAuth } from "@clerk/nextjs";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);


// const { id, email, display_name, avatar_url } = useAuth() 

// const profileTableName = 'profiles';

// const { data, error } = await supabase
//   .from(profileTableName)
//   .upsert([
//     {
//       id: id,
//       email: email,
//       display_name: display_name,
//       avatar_url: avatar_url,
//     },
//   ]);

// if (error) {
//   console.error('Error saving profile:', error);
// } else {
//   console.log('Profile saved successfully:', data);
// }

export default supabase;
