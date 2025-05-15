const supabase = require("../services/supabase.service");

// Obtiene todos los productos sin filtro
const getAllProducts = async (req, res) => {
  try {
    // Consulta todos los registros de la tabla products
    const { data, error } = await supabase.from("products").select("*");
    if (error) throw error; // Manejo de error
    res.json(data); // Responde con los datos en formato JSON
  } catch (error) {
    res.status(500).json({ error: error.message }); // Responde con error si falla
  }
};

// Obtiene productos con precio menor a 50
const getProductsUnder50 = async (req, res) => {
  try {
    // Consulta productos cuyo campo price es menor a 50
    const { data, error } = await supabase.from("products").select("*").lt("price", 50);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtiene productos con precio mayor a 30 y categoría "Electronics"
const getProductsPriceMoreThan30Electronics = async (req, res) => {
  try {
    // Filtra con condiciones combinadas: price > 30 y category = Electronics
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .gt("price", 30)
      .eq("category", "Electronics");
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Trae productos paginados (primeros 10 productos)
const getProductsPaginated = async (req, res) => {
  try {
    // range(offset, offset + limit - 1) para limitar registros (paginación)
    const limit = 10;
    const offset = 0;
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .range(offset, offset + limit - 1);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Trae productos asociados a un usuario específico (user_id pasado como query param)
const getProductsByUser = async (req, res) => {
  try {
    const userId = req.query.user_id; // Obtenemos user_id de la URL
    if (!userId) return res.status(400).json({ error: "Falta user_id en query" });

    // Consulta filtrando por user_id
    const { data, error } = await supabase.from("products").select("*").eq("user_id", userId);
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductsUnder50,
  getProductsPriceMoreThan30Electronics,
  getProductsPaginated,
  getProductsByUser,
};
