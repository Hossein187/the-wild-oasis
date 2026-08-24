import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://heezauhhftonhbxkyfay.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlZXphdWhoZnRvbmhieGt5ZmF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwNjUwNjUsImV4cCI6MjEwMDY0MTA2NX0.H1xiApXxohg6kpnz3WCthmdDKSZkhiYtYUxe7pXey5c';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
