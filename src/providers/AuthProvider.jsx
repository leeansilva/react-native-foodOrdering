import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchSession = async () => {
            const { data: {session}, error } = await supabase.auth.getSession();

            setSession(session);

            //This is because the auth is not the same table than profiles
            if (session) {
                // fetch profile
                const { data } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', session.user.id)
                    .single();
                    
                setProfile(data || null);
            }

            setLoading(false)
        }
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
        fetchSession()
    }, [])


    return (
        <AuthContext.Provider value={{ session, loading, profile, isAdmin : profile?.Group == 'ADMIN' }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);


