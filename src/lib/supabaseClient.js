import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qpahryzzmaexbqugmfhw.supabase.co'
const supabaseAnonKey = 'sb_publishable_9rD6bBQPv6eynp7CJAR9Qw_-GOwesIp'


export const supabase = createClient(supabaseUrl, supabaseAnonKey)