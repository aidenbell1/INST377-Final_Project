import { supabase } from '../constants/supabaseClient';

// Function to fetch data from a table
export async function fetchDataFromSupabase(tableName) {
  const { data, error } = await supabase.from(tableName).select('*');
  if (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
  return data;
}

// Function to insert data into a table
export async function insertDataToSupabase(tableName, payload) {
  const { data, error } = await supabase.from(tableName).insert(payload);
  if (error) {
    console.error('Error inserting data:', error.message);
    throw error;
  }
  return data;
}