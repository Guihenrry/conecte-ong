import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyzcompany.supabase.co';
const supabaseKey = 'your-anon-key';
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
