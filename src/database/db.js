
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseKey = import.meta.env.VITE_SUPA_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const profiles = 'profiles_db';
const userposts = 'userposts_db';

console.log(supabaseUrl);

export { supabase, profiles, userposts };