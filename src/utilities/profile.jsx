import { useAuthState, useDbData } from "./firebase";

export const useProfile = () => {
  const [user] = useAuthState();
  const [isAdmin, error, isLoading] =  useDbData(`/admins/${user?.uid || 'guest'}`);
  return [{ user, isAdmin }, error, isLoading];
};