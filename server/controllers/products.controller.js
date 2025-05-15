const supabase = require("../services/supabase.service");

const getAllProducts = async (req, res) => {
  try {
    const { data, error } = await supabase.from("products").select("*");
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductsUnder50 = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .lt("price", 50);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductsUnder50,
};
