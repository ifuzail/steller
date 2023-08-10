import React from 'react';
import supabase from '@/utils/supabase'; // Import your Supabase client instance

const GoogleAuthComponent = () => {
  const handleGoogleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });

    if (error) {
      console.error('Google OAuth error:', error.message);
    }
  };

  return (
    <div>
      <p>Please sign in with Google:</p>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    </div>
  );
};

export default GoogleAuthComponent;
