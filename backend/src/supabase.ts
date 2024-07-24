import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ksceifrpcrkcxbhfoaiu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzY2VpZnJwY3JrY3hiaGZvYWl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2OTE4MTUsImV4cCI6MjAzNzI2NzgxNX0.lzeg1luIzOUcOXLt1v83Db8BSDA620JsJ3VDiACBdL0';
export const supabase = createClient(supabaseUrl, supabaseKey);

export const getOngs = async (page: number, pageSize: number) => {
  const start = (page - 1) * pageSize;
  const end = page * pageSize - 1;

  const { data, error } = await supabase
    .from('ongs')
    .select('*')
    .range(start, end);

  if (error) throw error;
  return data;
};

export const createOng = async (ongData: any) => {
  const { data, error } = await supabase
    .from('ongs')
    .insert([ongData]);

  if (error) throw error;
  return data;
};
