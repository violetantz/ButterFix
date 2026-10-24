const { createClient } = require('@supabase/supabase-js');

// Récupération et nettoyage des variables d'environnement (supprime les espaces invisibles)
const supabaseUrl = (process.env.SUPABASE_URL || '').trim();
const supabaseKey = (process.env.SUPABASE_SERVICE_KEY || '').trim();

// Vérification de sécurité pour s'assurer que les clés sont présentes
if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Erreur : Les clés de configuration Supabase sont manquantes.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function updatePrices() {
  console.log("🔄 Connexion à Supabase et mise à jour des prix pour ButterFix...");

  // Mise à jour de test sur la table component_offers
  const { data, error } = await supabase
    .from('component_offers')
    .update({ 
      price: 289.99, 
      last_updated: new Date() 
    })
    .not('id', 'is', null); // Cible les offres pour les actualiser

  if (error) {
    console.error("❌ Erreur lors de la mise à jour des prix :", error.message);
    process.exit(1);
  }

  console.log("✅ Prix mis à jour avec succès !");
}

updatePrices();
