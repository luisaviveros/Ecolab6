const supabase = require("../services/supabase.service");

const getAllUsers = async () => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) throw error;
  return data;
};

const createUserInDB = async ({ username, email }) => {
  const { data, error } = await supabase
    .from("users")
    .insert([{ username, email }])
    .select();
  if (error) throw error;
  return data[0];
};

const updateUserInDb = async ({ username, email }, userId) => {
  const { data, error } = await supabase
    .from("users")
    .update({ username, email })
    .eq("id", userId)
    .select();
  if (error) throw error;
  return data[0];
};

const deleteUserInDb = async (userId) => {
  const { data, error } = await supabase.from("users").delete().eq("id", userId).select();
  if (error) throw error;
  return data[0];
};

module.exports = {
  getAllUsers,
  createUserInDB,
  updateUserInDb,
  deleteUserInDb,
};
