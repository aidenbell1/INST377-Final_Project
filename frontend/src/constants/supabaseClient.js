import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'https://vkpnxdkfrmzaiionljxk.supabase.co';
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrcG54ZGtmcm16YWlpb25sanhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyMjc0MjcsImV4cCI6MjA0OTgwMzQyN30.m1XBPchHEe8Q97EKAtPD0OY_I3mhy8gAHt3wl7GL0mg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);