import Client from "../models/client.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config(); 
const SECRET = process.env.JWT_SECRET_KEY;

const clientController = {

    //! Inscription d’un nouveau client
    inscriptionClient: async (req, res) => {
        try {
          const clientData = req.body;
      
          // Si un fichier est uploadé, on ajoute son URL
          if (req.file && req.file.path) {
            clientData.photo = req.file.path;
          }
      
          const client = new Client(clientData);
          const nouveauClient = await client.save();
      
          const tokenClient = jwt.sign({ id: nouveauClient._id }, SECRET);
      
          res.status(201)
            .cookie("clientToken", tokenClient, { httpOnly: true })
            .json({
              client: nouveauClient,
              token: tokenClient,
              message:
                nouveauClient.role === "admin"
                  ? "Demande d'inscription en tant qu'admin envoyée. En attente d'approbation."
                  : "Inscription réussie",
            });
        } catch (error) {
          console.error(error);
          res.status(400).json(error.errors);
        }
      },
      


    //! Connexion d’un client existant
    connexionClient: async (req, res) => {
        try {
            const clientDepuisBD = await Client.findOne({ email: req.body.email });

            if (!clientDepuisBD) {
                return res.status(400).json({ message: "Email non trouvé" });
            }

            const motDePasseValide = await bcrypt.compare(req.body.motsdePasse, clientDepuisBD.motsdePasse);

            if (!motDePasseValide) {
                return res.status(400).json({ message: "Mot de passe incorrect" });
            }

            if (clientDepuisBD.role === "admin" && !clientDepuisBD.estApprouvé) {
                return res.status(403).json({ message: "Votre compte admin n’est pas encore approuvé." });
            }

            const tokenClient = jwt.sign({ id: clientDepuisBD._id }, SECRET);
            res.status(200)
               .cookie("clientToken", tokenClient, { httpOnly: true })
               .json({ client: clientDepuisBD, message: "Connexion réussie", token: tokenClient });

        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Erreur lors de la connexion", error });
        }
    },

    //! Déconnexion du client
    deconnexionClient: async (req, res) => {
        res.clearCookie("clientToken");
        res.json({ message: "Client déconnecté avec succès" });
    },

    //! Récupérer le client connecté
    getClientConnecté: async (req, res) => {
        console.log("Headers de la requête :", req.headers);
        res.json({ message: "Client actuellement connecté" });
    },

     //! Approbation d’un admin par un superAdmin
    approuverAdmin: async (req, res) => {
        try {
            const client = await Client.findById(req.params.id);
            if (!client) return res.status(404).json({ message: "Client introuvable" });

            if (client.role !== "admin") {
                return res.status(400).json({ message: "Ce client n'est pas un admin à approuver" });
            }

            client.estApprouvé = true;
            await client.save();

            res.json({ message: "Admin approuvé avec succès", client });
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de l'approbation", error });
        }
    },
    //! Approbation d'un vendeur Par le Super Admin:
    approuverVendeur: async (req, res) => {
        try {
            const client = await Client.findById(req.params.id);
            if (!client) return res.status(404).json({ message: "Client introuvable" });

            if (client.role !== "vendeurs") {
                return res.status(400).json({ message: "Ce client n'est pas un vendeur à approuver" });
            }

            client.estApprouvé = true;
            await client.save();
            res.json({ message: "Vendeur approuvé avec succès", client });
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de l'approbation", error });
        }
    },

};

export default clientController;