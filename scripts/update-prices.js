// scripts/update-prices.js
const { createClient } = require('@supabase/supabase-js');

// Connexion à ta base de données via les coffres-forts GitHub Secrets
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Erreur : Les clés de configuration Supabase sont manquantes.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateComponentPrices() {
  console.log("🔄 Lancement de la mise à jour des prix pour ButterFix...");

  try {
    // 1. Récupérer la liste des composants enregistrés
    const { data: components, error } = await supabase
      .from('components')
      .select('id, name');

    if (error) {
      throw error;
    }

    if (!components || components.length === 0) {
      console.log("⚠️ Aucun composant trouvé dans la base de données pour l'instant.");
      return;
    }

    for (const component of components) {
      // 2. Simulation ou appel API réel pour récupérer le prix frais
      // (Pour l'instant, on simule un prix actualisé)
      const freshPrice = Math.floor(Math.random() * (600 - 150 + 1)) + 150; // Prix aléatoire entre 150€ et 600€
      const now = new Date().toISOString();

      // 3. Mettre à jour le prix et le timestamp dans la base
      const { error: updateError } = await supabase
        .from('component_offers')
        .update({ 
          price: freshPrice, 
          last_updated: now 
        })
        .eq('component_id', component.id);

      if (updateError) {
        console.error(`Erreur pour ${component.name}:`, updateError.message);
      } else {
        console.log(`✅ Mis à jour : ${component.name} -> ${freshPrice}€ (${now})`);
      }
    }

    console.log("✨ Mise à jour des prix terminée avec succès !");
  } catch (err) {
    console.error("❌ Erreur critique lors de la mise à jour :", err.message);
    process.exit(1);
  }
}

updateComponentPrices();
