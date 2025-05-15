const supabase = require("../services/supabase.service");

const getPostsByTitleLike = async (req, res) => {
  try {
    const searchTerm = "tutorial";
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .ilike("title", `%${searchTerm}%`);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPostsByTitleLike,
};
