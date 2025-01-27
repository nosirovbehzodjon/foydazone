import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zbzqtmbdxrwrdgoyftqd.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpienF0bWJkeHJ3cmRnb3lmdHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxNzg3NTYsImV4cCI6MjA1Mjc1NDc1Nn0.yOX6oJtvNGEtGBOH8vc83l8LFBeAmin-wM7lZTuDSmg";

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
