import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iewacisbprtmpdgijhsc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlld2FjaXNicHJ0bXBkZ2lqaHNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyODcyOTksImV4cCI6MjA4OTg2MzI5OX0.ax5ORIQ9bgIvAJPDAPUR8Gf4lMp4cgFqmE4dKKpNjxE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
