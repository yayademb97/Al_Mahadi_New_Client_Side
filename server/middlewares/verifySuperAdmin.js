import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Client from "../models/client.model.js";

dotenv.config();
const SECRET = process.env.JWT_SECRET_KEY;

const verifySuperAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.clientToken;
    if (!token) return res.status(401).json({ message: "Accès refusé. Token manquant." });

    const decoded = jwt.verify(token, SECRET);
    const client = await Client.findById(decoded.id);

    if (!client) return res.status(404).json({ message: "Client non trouvé." });
    if (client.role !== "superAdmin") {
      return res.status(403).json({ message: "Accès refusé. Rôle superAdmin requis." });
    }

    req.client = client; //? stocker le client dans la requête si nécessaire
    next();

  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Token invalide ou expiré." });
  }
};

export default verifySuperAdmin;