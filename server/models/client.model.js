import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcryptjs"; // Assure-toi d'avoir importé bcrypt

const clientSchema = new Schema({
  prénom: {
    type: String,
    required: [true, "{PATH} est requis!!"],
    minLength: [2, "{PATH} doit être au minimum 2 caractères"],
    maxLength: [255, "{PATH} doit être au maximum 255 caractères"]
  },
  nomFamille: {
    type: String,
    required: [true, "{PATH} est requis!!"],
    minLength: [2, "{PATH} doit être au minimum 2 caractères"],
    maxLength: [255, "{PATH} doit être au maximum 255 caractères"]
  },
  role: {
    type: String,
    enum: ["superAdmin", "client", "admin", "vendeurs"],
    default: "client"
  },
  email: {
    type: String,
    required: [true, "Email est requis"],
    validate: {
      validator: val => /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(val),
      message: "Veuillez entrer un email valide!"
    }
  },
  motsdePasse: {
    type: String,
    required: [true, "{PATH} est requis!"],
    minLength: [8, "{PATH} doit être au minimum 8 caractères!!"]
  },
  photo: { type: String },
  phone: { type: Number },
  //* === SUPER ADMIN QUI APPROUVERA UN VENDEUR ===

   estApprouvé: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

//* Virtual field pour confirmer le mot de passe
clientSchema.virtual('confirmMotsdePasse')
  .get(function () {
    return this._confirmMotsdePasse;
  })
  .set(function (value) {
    this._confirmMotsdePasse = value;
  });

//* Vérification des mots de passe
clientSchema.pre('validate', function (next) {
  if (this.motsdePasse !== this._confirmMotsdePasse) {
    this.invalidate('confirmMotsdePasse', "Les mots de passe doivent correspondre");
  }
  next();
});

//* Hash du mot de passe + forcer la validation pour le rôle admin
clientSchema.pre('save', async function (next) {
  if (this.isModified('motsdePasse')) {
    try {
      const motDePasseHaché = await bcrypt.hash(this.motsdePasse, 10);
      this.motsdePasse = motDePasseHaché;
    } catch (error) {
      return next(error);
    }
  }

  //* Un admin nouvellement inscrit n'est jamais approuvé par défaut
  if (this.role === "admin" && this.role == "vendeurs") {
    this.estApprouvé = false;
  }

  next();
});

const Client = model('Client', clientSchema);
export default Client;