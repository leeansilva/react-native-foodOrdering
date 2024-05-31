import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://haqlouplsugsuxkgzeos.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcWxvdXBsc3Vnc3V4a2d6ZW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMTkxNzAsImV4cCI6MjAzMjY5NTE3MH0.v8Pced0Il7Sx9y6hxttTVdQlzauF_1_QeNqEU2k9RY8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})