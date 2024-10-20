
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ywdrvrfzxecijpmelavq.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPA_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;