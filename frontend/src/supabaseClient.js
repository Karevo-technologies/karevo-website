import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const adminToken = import.meta.env.VITE_ADMIN_SECRET_TOKEN

const options = {}

if (adminToken) {
  options.global = {
    headers: { 'x-admin-token': adminToken },
  }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, options)