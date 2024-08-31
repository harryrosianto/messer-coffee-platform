import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function useRequireAuth() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      router.push('/user_signin');
    }
  }, [isLoggedIn, router]);

  return isLoggedIn;
}
