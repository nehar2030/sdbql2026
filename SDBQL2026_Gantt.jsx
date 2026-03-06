import { useState, useRef, useEffect } from "react";

// ============================================================
// DATA — MEMBRES
// ============================================================
const MO = {
  Mo0: { name: "SOULIMANE N.A.", role: "Présidente Congrès", color: "#0f5132" },
  Mo1: { name: "BELYAGOUBI L.", role: "Président Organisation", color: "#146c43" },
  Mo2: { name: "AZZI R.", role: "Coordinateur Adjoint", color: "#1a7a4a" },
  Mo3: { name: "ABBOU F.", role: "Communication Scientifique", color: "#198754" },
  Mo4: { name: "AINAD TABET M.", role: "IT / Logistique", color: "#20a060" },
  Mo5: { name: "BELLAHCENE N.", role: "Logistique", color: "#25b36a" },
  Mo6: { name: "BENARIBA H.", role: "Transport", color: "#2cc071" },
  Mo7: { name: "GHANEMI F.Z.", role: "Communication", color: "#32cf7a" },
  Mo8: { name: "HADJ MERABET D.", role: "Documentation", color: "#3adf82" },
  Mo9: { name: "KADI S.", role: "Inscriptions", color: "#47e98a" },
  Mo10: { name: "KHOLKHAL D.", role: "Salles / Logistique", color: "#52e891" },
  Mo11: { name: "LAHFA-HASSAINE I.", role: "Inscriptions", color: "#60e89a" },
  Mo12: { name: "MALTI N.", role: "Programme", color: "#6ee0a0" },
  Mo13: { name: "MERZOUK Am.", role: "Hébergement", color: "#7ad9a8" },
  Mo14: { name: "MIMOUN A.", role: "Communication", color: "#86d0b0" },
  Mo15: { name: "RABAH A.", role: "Accueil", color: "#92ccb8" },
  Mo16: { name: "TEIBI A.", role: "Certificats / Kits", color: "#9ec7be" },
  Mo17: { name: "ZETTAM A.", role: "IT / Technique", color: "#aac0c4" },
  Mo18: { name: "MEZOUAR D.", role: "Formulaires / Web", color: "#b5bcc9" },
  Mo19: { name: "MELLAL A.", role: "Coordination Générale", color: "#c0b8ce" },
  Mo20: { name: "BRAHIMI N.", role: "Partenariats / Sponsors", color: "#cab4d3" },
  Mo21: { name: "BETTIOUI R.A.", role: "Logistique / Médias", color: "#d5afd8" },
  Mo22: { name: "BOUCHERIF A.", role: "Communication", color: "#dfaade" },
};

const MS = {
  Ms0: { name: "NEHAR B.", role: "Président Comité Sci.", color: "#084298" },
  Ms1: { name: "ABDELLAOUI K.", role: "Écologie animale", color: "#0d519e" },
  Ms2: { name: "AZZI R.", role: "LAPRONA", color: "#1261a0" },
  Ms3: { name: "BELARBI M.", role: "LAPRONA", color: "#1770a5" },
  Ms4: { name: "BELYAGOUBI-BENHAMMOU N.", role: "Phytochimie", color: "#1c7fab" },
  Ms5: { name: "BENDIDJELLOUL S.M.B.", role: "LECGEN", color: "#218faf" },
  Ms6: { name: "BENGUEDDA R.W.", role: "Labo 10", color: "#259eb3" },
  Ms7: { name: "BOUCHIKHI T.Z.", role: "Labo 10", color: "#28adb6" },
  Ms8: { name: "BOUANANI A.", role: "Hydraulique / Eau", color: "#2cbcb9" },
  Ms9: { name: "BOUHRAOUA R.T.", role: "Foresterie", color: "#30c0bb" },
  Ms10: { name: "CHAOUCH M.T.", role: "LAPRONA", color: "#34c3bc" },
  Ms11: { name: "CHERRAK S.A.", role: "PPABIONUT", color: "#39c7be" },
  Ms12: { name: "DAMERDJI A.", role: "Labo 10", color: "#3fcabf" },
  Ms13: { name: "HADDOUCHE D.", role: "Foresterie / Géomatique", color: "#44ccc0" },
  Ms14: { name: "HASSAINE H.", role: "LAMAABE", color: "#49cfc1" },
  Ms15: { name: "HASSANI F.", role: "Énergie / Labo 13", color: "#4fd2c2" },
  Ms16: { name: "KAZI TANI L.M.", role: "AFTAGRO / Agriculture", color: "#53d3c3" },
  Ms17: { name: "LOUKIDI B.", role: "PPABIONUT", color: "#58d5c4" },
  Ms18: { name: "MERZOUK Ab.", role: "LECGEN", color: "#5dd6c5" },
  Ms19: { name: "MOSTEFAI N.", role: "Foresterie", color: "#62d8c5" },
  Ms20: { name: "RAHMOUN N.", role: "LapSab", color: "#68dac6" },
  Ms21: { name: "REBIAHI S.A.", role: "LAMAABE", color: "#6ddbc7" },
  Ms22: { name: "GAOUAR S.B.S.", role: "Génétique", color: "#72dcc8" },
  Ms23: { name: "STAMBOULI-MEZIANE H.", role: "LECGEN / Biodiversité", color: "#77ddc8" },
  Ms24: { name: "ZENASNI M.A.", role: "AFTAGRO", color: "#7ddfc9" },
  Ms25: { name: "AL-DHABI N.A.", role: "King Saud University", color: "#82e0ca" },
  Ms26: { name: "AMARA M.", role: "Ain Temouchent", color: "#87e1ca" },
  Ms27: { name: "BENARADJ A.", role: "Naâma / Écologie", color: "#8de3cb" },
  Ms28: { name: "GUETTAIA S.", role: "Labo 25 / Eau", color: "#92e4cb" },
  Ms29: { name: "BOUMEDIENE M.", role: "Hydraulique", color: "#97e5cc" },
  Ms30: { name: "MAHBOUBI S.", role: "Énergie / STU", color: "#9ce5cc" },
  Ms31: { name: "TEFIANI C.", role: "Agronomie", color: "#a1e7cd" },
  Ms32: { name: "MERGHACHE S.", role: "Biomasse / Eau", color: "#a6e8cd" },
  Ms33: { name: "MERGHACHE D.", role: "Biochimie / Microbio", color: "#abe9ce" },
};

// ============================================================
// DATA — TIMELINE
// Days from March 1, 2026
// ============================================================
const TOTAL_DAYS = 244; // March 1 → Oct 31
const TODAY = 5; // March 6

const months = [
  { label: "MARS 2026", start: 0, days: 31 },
  { label: "AVRIL", start: 31, days: 30 },
  { label: "MAI", start: 61, days: 31 },
  { label: "JUIN", start: 92, days: 30 },
  { label: "JUILLET", start: 122, days: 31 },
  { label: "AOÛT", start: 153, days: 31 },
  { label: "SEPT", start: 184, days: 30 },
  { label: "OCT", start: 214, days: 31 },
];

const milestones = [
  { day: 5, label: "Aujourd'hui", icon: "📍" },
  { day: 111, label: "Clôture soumissions", icon: "📝" },
  { day: 139, label: "Notif. acceptation", icon: "✉️" },
  { day: 184, label: "Notif. confirmation", icon: "✅" },
  { day: 213, label: "Congrès SDBQL", icon: "🎓" },
];

// ============================================================
// DATA — TÂCHES
// ============================================================
const PHASES = [
  {
    id: "P0",
    label: "PHASE 0 — LANCEMENT IMMÉDIAT",
    icon: "🚨",
    urgency: "critique",
    tasks: [
      { id: "P0T1", name: "Finalisation & confirmation liste comité complet", start: 0, end: 14, assigned: ["Mo0","Mo1","Mo2"], desc: "Valider la liste définitive de tous les membres, communiquer officiellement les rôles et responsabilités." },
      { id: "P0T2", name: "Site web opérationnel & formulaires actifs", start: 0, end: 7, assigned: ["Mo2","Mo17","Mo18"], desc: "Vérifier le bon fonctionnement des 3 formulaires Google, du compteur visiteurs, du compte à rebours et du mode sombre." },
      { id: "P0T3", name: "Rédaction & diffusion 1ère Circulaire + Appel à communications", start: 0, end: 14, assigned: ["Mo0","Ms0"], desc: "Rédiger la circulaire officielle en 3 langues (FR/EN/AR), la diffuser à toutes les universités algériennes et aux réseaux internationaux." },
      { id: "P0T4", name: "Réunion de lancement — Présentation des missions", start: 0, end: 10, assigned: ["Mo0","Mo1","Mo2","Ms0"], desc: "Organiser une réunion plénière pour présenter les rôles Mo/Ms, valider le plan de travail et les délais." },
      { id: "P0T5", name: "Invitation conférenciers invités (Guest Speakers)", start: 0, end: 30, assigned: ["Ms0","Ms25","Ms18"], desc: "Identifier et contacter les conférenciers invités nationaux et internationaux, confirmer les plénières et les titres de conférences." },
      { id: "P0T6", name: "Lancement campagne réseaux sociaux & affiche officielle", start: 0, end: 30, assigned: ["Mo7","Mo14","Mo19"], desc: "Créer l'affiche officielle SDBQL 2026, lancer les campagnes Facebook/LinkedIn/ResearchGate, coordonner avec les partenaires." },
    ],
  },
  {
    id: "P1",
    label: "PHASE 1 — APPEL À CONTRIBUTIONS",
    icon: "📢",
    urgency: "urgent",
    tasks: [
      { id: "P1T1", name: "Plateforme soumission en ligne — Maintenance continue", start: 7, end: 111, assigned: ["Mo2","Mo17"], desc: "Assurer la disponibilité de la plateforme de soumission, gérer les bugs, répondre aux demandes techniques des auteurs." },
      { id: "P1T2", name: "Diffusion appel — Universités algériennes", start: 5, end: 111, assigned: ["Mo3","Mo7","Mo8"], desc: "Envoyer l'appel à toutes les universités et centres de recherche algériens. Cible : 200+ institutions." },
      { id: "P1T3", name: "Diffusion appel — Réseau international", start: 5, end: 111, assigned: ["Ms0","Ms25","Ms27"], desc: "Mobiliser les réseaux académiques internationaux (ResearchGate, LinkedIn, listes de diffusion scientifiques)." },
      { id: "P1T4", name: "Suivi inscriptions participants & base de données", start: 14, end: 111, assigned: ["Mo9","Mo11","Mo15"], desc: "Tenir à jour la liste des inscrits, envoyer les accusés de réception, gérer les questions des participants." },
      { id: "P1T5", name: "Gestion sponsors, partenaires & conventions", start: 5, end: 111, assigned: ["Mo1","Mo20"], desc: "Démarcher les sponsors potentiels (ONA, entreprises privées), préparer les conventions de partenariat." },
      { id: "P1T6", name: "Budget prévisionnel & suivi financier", start: 14, end: 184, assigned: ["Mo0","Mo1"], desc: "Établir et suivre le budget du congrès : frais d'organisation, matériels, restauration, hébergement conférenciers." },
      { id: "P1T7", name: "Relances ciblées soumissions (dernière ligne droite)", start: 61, end: 111, assigned: ["Mo2","Mo4","Mo14"], desc: "Envoyer des rappels personnalisés 30 jours et 10 jours avant la clôture des soumissions le 20 juin 2026." },
    ],
  },
  {
    id: "P2",
    label: "PHASE 2 — ÉVALUATION SCIENTIFIQUE",
    icon: "🔬",
    urgency: "important",
    tasks: [
      { id: "P2T1", name: "Attribution des abstracts aux évaluateurs par axe", start: 111, end: 122, assigned: ["Ms0","Ms2"], desc: "Trier et distribuer les soumissions selon les 6 axes thématiques. Chaque abstract → 2 évaluateurs." },
      { id: "P2T2", name: "Évaluation Axe 1 — Agriculture & Sécurité Alimentaire", start: 111, end: 139, assigned: ["Ms16","Ms24","Ms31"], desc: "Révision en double aveugle des soumissions de l'Axe 1. Grille d'évaluation : originalité, pertinence, méthodologie." },
      { id: "P2T3", name: "Évaluation Axe 2 — Bioénergie & Énergies Renouvelables", start: 111, end: 139, assigned: ["Ms7","Ms15","Ms30","Ms32"], desc: "Révision en double aveugle des soumissions de l'Axe 2." },
      { id: "P2T4", name: "Évaluation Axe 3 — Biodiversité & Écosystèmes", start: 111, end: 139, assigned: ["Ms9","Ms13","Ms19","Ms27"], desc: "Révision en double aveugle des soumissions de l'Axe 3." },
      { id: "P2T5", name: "Évaluation Axe 4 — Action pour le Climat", start: 111, end: 139, assigned: ["Ms5","Ms18","Ms23"], desc: "Révision en double aveugle des soumissions de l'Axe 4." },
      { id: "P2T6", name: "Évaluation Axe 5 — Santé & Bien-être", start: 111, end: 139, assigned: ["Ms11","Ms17","Ms33"], desc: "Révision en double aveugle des soumissions de l'Axe 5." },
      { id: "P2T7", name: "Évaluation Axe 6 — Partenariats Socio-économiques", start: 111, end: 139, assigned: ["Ms14","Ms21"], desc: "Révision en double aveugle des soumissions de l'Axe 6." },
      { id: "P2T8", name: "Rapport d'évaluation & notifications aux auteurs (18 Juil)", start: 139, end: 145, assigned: ["Ms0","Ms1","Mo2"], desc: "Compiler les résultats, générer les lettres d'acceptation/refus, envoyer les notifications le 18 juillet 2026." },
    ],
  },
  {
    id: "P3",
    label: "PHASE 3 — LOGISTIQUE & PROGRAMME",
    icon: "🏛️",
    urgency: "planifie",
    tasks: [
      { id: "P3T1", name: "Réservation salles, amphis & espaces du campus SNV-STU", start: 139, end: 184, assigned: ["Mo1","Mo10"], desc: "Réserver les amphithéâtres et salles de conférence, organiser les espaces d'exposition et de restauration." },
      { id: "P3T2", name: "Programme scientifique définitif (sessions, plénières, ateliers)", start: 139, end: 184, assigned: ["Ms0","Ms3","Ms10"], desc: "Établir le programme détaillé heure par heure : plénières, sessions parallèles, atelier doctoral, pauses café." },
      { id: "P3T3", name: "Coordination hébergement & transfert participants", start: 153, end: 184, assigned: ["Mo13","Mo14"], desc: "Négocier des tarifs hôteliers groupés, gérer les réservations, organiser les navettes université ↔ hôtels." },
      { id: "P3T4", name: "Logistique & accueil conférenciers invités", start: 153, end: 184, assigned: ["Mo5","Mo6"], desc: "Organiser les vols, l'hébergement VIP et le protocole d'accueil des conférenciers invités internationaux." },
      { id: "P3T5", name: "Préparation kits participants, badges & tote bags", start: 153, end: 184, assigned: ["Mo16","Mo19"], desc: "Concevoir et produire les badges, les kits participants (programme, stylo, bloc, goodies SDBQL 2026)." },
      { id: "P3T6", name: "Impression & affichage : affiches, roll-up, bannières", start: 153, end: 184, assigned: ["Mo3","Mo8"], desc: "Commander l'impression de tous les supports visuels : affiches A0, roll-up 80x200cm, bannières entrée." },
      { id: "P3T7", name: "Coordination technique : IT, son, vidéo, streaming", start: 139, end: 213, assigned: ["Mo4","Mo17"], desc: "Tester le matériel audiovisuel, préparer le streaming en ligne (format hybride), connexion internet renforcée." },
      { id: "P3T8", name: "Relations presse & médias locaux/nationaux", start: 153, end: 184, assigned: ["Mo7","Mo21"], desc: "Préparer le dossier de presse, contacter les journalistes, organiser la couverture médiatique de l'événement." },
      { id: "P3T9", name: "2ème Circulaire & programme provisoire diffusés", start: 139, end: 153, assigned: ["Mo0","Mo2"], desc: "Envoyer la 2ème circulaire avec le programme provisoire, les informations pratiques, les modalités d'inscription." },
    ],
  },
  {
    id: "P4",
    label: "PHASE 4 — FINALISATION",
    icon: "✅",
    urgency: "finalisation",
    tasks: [
      { id: "P4T1", name: "Confirmations finales & liste définitive participants", start: 184, end: 213, assigned: ["Mo9","Mo11"], desc: "Collecter les confirmations de présence (1er sept.), finaliser la liste des 300+ participants attendus." },
      { id: "P4T2", name: "Book of Abstracts — Compilation & impression", start: 184, end: 213, assigned: ["Ms0","Ms1","Ms18"], desc: "Compiler tous les résumés acceptés, mettre en page le Recueil des Résumés SDBQL 2026 (format A5, ~250 pages)." },
      { id: "P4T3", name: "Programme final imprimé & distribué (numérique et papier)", start: 198, end: 213, assigned: ["Mo0","Mo2"], desc: "Imprimer le programme définitif, le publier sur le site web, l'envoyer à tous les participants confirmés." },
      { id: "P4T4", name: "Accueil & installation conférenciers invités à Tlemcen", start: 184, end: 213, assigned: ["Mo1","Mo13"], desc: "Accueillir les conférenciers à l'aéroport, les installer dans leurs hôtels, organiser les dîners de bienvenue." },
      { id: "P4T5", name: "Répétition générale — Logistique & technique", start: 206, end: 213, assigned: ["Mo0","Mo1","Mo2"], desc: "Test complet de l'installation : son, vidéo, connexion, salles, affiches. Simulation de l'ouverture." },
      { id: "P4T6", name: "Préparation certificats, attestations & trophées", start: 198, end: 213, assigned: ["Mo16","Mo19"], desc: "Imprimer et signer les certificats de participation, les attestations de présentation, les prix Best Paper." },
      { id: "P4T7", name: "Bilan financier pré-congrès & validation dépenses", start: 198, end: 213, assigned: ["Mo0","Mo1"], desc: "Clôturer les paiements fournisseurs, valider les dépenses exceptionnelles, préparer la caisse de l'événement." },
    ],
  },
  {
    id: "P5",
    label: "PHASE 5 — CONGRÈS SDBQL 2026",
    icon: "🎓",
    urgency: "congres",
    tasks: [
      { id: "P5T1", name: "Cérémonie d'ouverture officielle (30 Sept.)", start: 213, end: 214, assigned: ["Mo0","Ms0","Mo1"], desc: "Ouverture par les autorités académiques, discours du Recteur, présentation du Comité, remise des kits." },
      { id: "P5T2", name: "Sessions plénières (conférenciers invités)", start: 213, end: 215, assigned: ["Ms0","Ms1","Ms18","Ms22"], desc: "Animation des 4-6 conférences plénières de haut niveau par les invités nationaux et internationaux." },
      { id: "P5T3", name: "Sessions parallèles — 6 Axes thématiques", start: 213, end: 215, assigned: ["Ms2","Ms3","Ms4","Ms5","Ms11","Ms14","Ms19","Ms23"], desc: "Modération et animation de toutes les sessions de communications orales (6 tracks en simultané)." },
      { id: "P5T4", name: "Atelier doctoral & session posters", start: 213, end: 215, assigned: ["Ms16","Ms28"], desc: "Atelier dédié aux doctorants : présentations de thèses, session posters, échanges avec les professeurs." },
      { id: "P5T5", name: "Accueil, orientation & assistance participants", start: 213, end: 215, assigned: ["Mo9","Mo11","Mo15","Mo19"], desc: "Permanence à l'accueil pendant toute la durée du congrès, orientation dans les salles, gestion des imprévus." },
      { id: "P5T6", name: "Gestion technique en temps réel", start: 213, end: 215, assigned: ["Mo4","Mo17"], desc: "Assistance technique permanente : projecteurs, micros, streaming, enregistrements, connexion internet." },
      { id: "P5T7", name: "Cérémonie de clôture & remise des prix (2 Oct.)", start: 214, end: 215, assigned: ["Mo0","Ms0","Mo1"], desc: "Clôture officielle, remise des prix Best Paper & Best Poster, annonce de SDBQL 2028, photos officielles." },
    ],
  },
  {
    id: "P6",
    label: "PHASE 6 — POST-CONGRÈS",
    icon: "📊",
    urgency: "post",
    tasks: [
      { id: "P6T1", name: "Rapport général & bilan du congrès", start: 215, end: 244, assigned: ["Mo0","Ms0"], desc: "Rédiger le rapport complet : statistiques (participants, pays, soumissions), points forts, recommandations." },
      { id: "P6T2", name: "Publication des Proceedings / Actes du congrès", start: 215, end: 244, assigned: ["Ms0","Ms1","Ms22"], desc: "Préparer et soumettre les actes du congrès pour publication (revue indexée ou ISBN). Coordonner avec l'éditeur." },
      { id: "P6T3", name: "Rapport financier final & reddition de comptes", start: 215, end: 230, assigned: ["Mo0","Mo1"], desc: "Clôturer tous les paiements, rédiger le rapport financier, soumettre au Vice-Rectorat." },
      { id: "P6T4", name: "Questionnaire de satisfaction & bilan collectif", start: 215, end: 244, assigned: ["Mo0","Mo2","Ms0"], desc: "Envoyer le questionnaire de satisfaction aux participants, analyser les résultats, partager le bilan avec le comité." },
    ],
  },
];

// ============================================================
// URGENCY CONFIG
// ============================================================
const URGENCY = {
  critique: { label: "🔴 CRITIQUE", bg: "#dc3545", light: "#fff5f5", border: "#dc3545", text: "#842029" },
  urgent:   { label: "🟠 URGENT",   bg: "#fd7e14", light: "#fff8f3", border: "#fd7e14", text: "#7d3a08" },
  important:{ label: "🟡 IMPORTANT",bg: "#ffc107", light: "#fffdf0", border: "#ffc107", text: "#665005" },
  planifie: { label: "🟢 PLANIFIÉ", bg: "#198754", light: "#f0fff6", border: "#198754", text: "#0a3622" },
  finalisation: { label: "🔵 FINAL", bg: "#0d6efd", light: "#f0f5ff", border: "#0d6efd", text: "#041a4f" },
  congres:  { label: "⚫ CONGRÈS",  bg: "#212529", light: "#f8f9fa", border: "#212529", text: "#000" },
  post:     { label: "🔷 POST",     bg: "#6c757d", light: "#f5f5f5", border: "#6c757d", text: "#2c2c2c" },
};

// ============================================================
// HELPER
// ============================================================
function pct(day) { return (day / TOTAL_DAYS * 100).toFixed(3); }

// ============================================================
// GANTT BAR
// ============================================================
function GanttBar({ task, phaseUrgency, onSelect, isSelected }) {
  const left = pct(task.start);
  const width = Math.max(0.5, parseFloat(pct(task.end)) - parseFloat(pct(task.start)));
  const urg = URGENCY[phaseUrgency];
  
  return (
    <div
      onClick={() => onSelect(task)}
      style={{
        position: "absolute",
        left: `${left}%`,
        width: `${width}%`,
        top: "6px",
        height: "28px",
        background: urg.bg,
        borderRadius: "5px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        paddingLeft: "6px",
        overflow: "hidden",
        boxSizing: "border-box",
        boxShadow: isSelected ? `0 0 0 3px #fff, 0 0 0 5px ${urg.bg}` : "0 1px 4px rgba(0,0,0,0.25)",
        transition: "transform 0.15s, box-shadow 0.15s",
        zIndex: isSelected ? 10 : 2,
        transform: isSelected ? "scaleY(1.1)" : "none",
      }}
      title={task.name}
    >
      <span style={{ fontSize: "9px", color: "#fff", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {task.assigned.join(" · ")}
      </span>
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function SDBQL2026Gantt() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [filterMember, setFilterMember] = useState("");
  const [expandedPhases, setExpandedPhases] = useState(() => Object.fromEntries(PHASES.map(p => [p.id, true])));
  const [viewMode, setViewMode] = useState("gantt"); // gantt | members
  const timelineRef = useRef(null);

  const togglePhase = (id) => setExpandedPhases(prev => ({ ...prev, [id]: !prev[id] }));

  const allMembers = { ...MO, ...MS };

  const filteredPhases = PHASES.map(ph => ({
    ...ph,
    tasks: ph.tasks.filter(t =>
      !filterMember || t.assigned.some(a => a.toLowerCase().includes(filterMember.toLowerCase()))
    ),
  })).filter(ph => ph.tasks.length > 0);

  const LABEL_W = 320;
  const ROW_H = 40;

  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: "#f8fafc",
      minHeight: "100vh",
      color: "#1e293b",
    }}>
      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #0a3622 0%, #1a5f3f 50%, #0d6efd 100%)",
        padding: "28px 32px 20px",
        color: "#fff",
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: 3, fontWeight: 700, opacity: 0.8, marginBottom: 6 }}>UNIVERSITÉ ABOU BEKR BELKAID — TLEMCEN</div>
            <h1 style={{ margin: 0, fontSize: 24, fontWeight: 900, letterSpacing: -0.5 }}>🎓 SDBQL 2026 — DIAGRAMME DE GANTT</h1>
            <p style={{ margin: "4px 0 0", fontSize: 13, opacity: 0.85 }}>
              Planification stratégique · 30 Sept – 2 Oct 2026 · 6 Phases · {PHASES.reduce((a,p)=>a+p.tasks.length,0)} Tâches
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "8px 14px", fontSize: 13 }}>
              📅 Aujourd'hui : <strong>6 Mars 2026</strong>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["gantt","members"].map(m => (
                <button key={m} onClick={()=>setViewMode(m)} style={{
                  background: viewMode===m ? "#fff" : "rgba(255,255,255,0.2)",
                  color: viewMode===m ? "#0a3622" : "#fff",
                  border: "none", borderRadius: 6, padding: "6px 14px", cursor: "pointer",
                  fontWeight: 600, fontSize: 13,
                }}>
                  {m === "gantt" ? "📊 Gantt" : "👥 Membres"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* LEGEND */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
          {Object.entries(URGENCY).map(([k,v]) => (
            <span key={k} style={{
              background: v.bg, color: "#fff",
              borderRadius: 20, padding: "3px 10px", fontSize: 11, fontWeight: 700,
            }}>{v.label}</span>
          ))}
        </div>
      </div>

      {/* FILTER BAR */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "12px 32px", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ fontWeight: 700, fontSize: 13, color: "#475569" }}>🔍 Filtrer par membre :</span>
        <input
          placeholder="Ex: Mo1, Ms0, NEHAR..."
          value={filterMember}
          onChange={e => setFilterMember(e.target.value)}
          style={{
            border: "1px solid #cbd5e1", borderRadius: 6, padding: "6px 12px",
            fontSize: 13, width: 220, outline: "none",
          }}
        />
        {filterMember && (
          <button onClick={()=>setFilterMember("")} style={{
            background: "#dc3545", color: "#fff", border: "none", borderRadius: 6,
            padding: "6px 12px", cursor: "pointer", fontSize: 13, fontWeight: 600,
          }}>✕ Effacer</button>
        )}
        <span style={{ marginLeft: "auto", fontSize: 12, color: "#94a3b8" }}>
          {filteredPhases.reduce((a,p)=>a+p.tasks.length,0)} tâches affichées
        </span>
      </div>

      {/* MEMBERS VIEW */}
      {viewMode === "members" && (
        <div style={{ padding: 32 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {/* MO */}
            <div>
              <h2 style={{ color: "#0a3622", borderBottom: "3px solid #198754", paddingBottom: 8, marginBottom: 20, fontSize: 18 }}>
                🏛️ COMITÉ D'ORGANISATION ({Object.keys(MO).length} membres)
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {Object.entries(MO).map(([code, m]) => (
                  <div key={code} style={{
                    background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10,
                    padding: "10px 16px", display: "flex", alignItems: "center", gap: 12,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}>
                    <span style={{
                      background: "#0a3622", color: "#fff", borderRadius: 6,
                      padding: "3px 8px", fontSize: 11, fontWeight: 900, minWidth: 36, textAlign: "center",
                    }}>{code}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{m.name}</div>
                      <div style={{ fontSize: 11, color: "#64748b" }}>{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* MS */}
            <div>
              <h2 style={{ color: "#084298", borderBottom: "3px solid #0d6efd", paddingBottom: 8, marginBottom: 20, fontSize: 18 }}>
                🔬 COMITÉ SCIENTIFIQUE ({Object.keys(MS).length} membres)
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {Object.entries(MS).map(([code, m]) => (
                  <div key={code} style={{
                    background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10,
                    padding: "10px 16px", display: "flex", alignItems: "center", gap: 12,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}>
                    <span style={{
                      background: "#084298", color: "#fff", borderRadius: 6,
                      padding: "3px 8px", fontSize: 11, fontWeight: 900, minWidth: 36, textAlign: "center",
                    }}>{code}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{m.name}</div>
                      <div style={{ fontSize: 11, color: "#64748b" }}>{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GANTT VIEW */}
      {viewMode === "gantt" && (
        <div style={{ padding: "24px 0 32px" }}>
          <div style={{ overflowX: "auto" }}>
            <div style={{ minWidth: 1100 }}>
              {/* MONTH HEADER */}
              <div style={{ display: "flex", position: "sticky", top: 0, zIndex: 20, background: "#fff", borderBottom: "2px solid #e2e8f0" }}>
                <div style={{ width: LABEL_W, minWidth: LABEL_W, flexShrink: 0, padding: "8px 24px", fontWeight: 700, fontSize: 12, color: "#475569", borderRight: "2px solid #e2e8f0" }}>
                  TÂCHE
                </div>
                <div style={{ flex: 1, position: "relative", height: 36 }}>
                  {months.map(m => (
                    <div key={m.label} style={{
                      position: "absolute",
                      left: `${pct(m.start)}%`,
                      width: `${pct(m.days)}%`,
                      top: 0, bottom: 0,
                      borderRight: "1px solid #e2e8f0",
                      display: "flex", alignItems: "center",
                      paddingLeft: 8,
                    }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#64748b", whiteSpace: "nowrap" }}>{m.label}</span>
                    </div>
                  ))}
                  {/* TODAY LINE */}
                  <div style={{
                    position: "absolute",
                    left: `${pct(TODAY)}%`,
                    top: 0, bottom: -999,
                    width: 2,
                    background: "#dc3545",
                    zIndex: 15,
                    pointerEvents: "none",
                  }} />
                </div>
              </div>

              {/* MILESTONES ROW */}
              <div style={{ display: "flex", background: "#f8fafc", borderBottom: "1px solid #e2e8f0", height: 28 }}>
                <div style={{ width: LABEL_W, minWidth: LABEL_W, flexShrink: 0, padding: "4px 24px", fontSize: 10, fontWeight: 700, color: "#94a3b8", borderRight: "2px solid #e2e8f0", display: "flex", alignItems: "center" }}>
                  JALONS CLÉS
                </div>
                <div style={{ flex: 1, position: "relative" }}>
                  {milestones.map(ms => (
                    <div key={ms.day} style={{
                      position: "absolute",
                      left: `${pct(ms.day)}%`,
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: 9,
                      fontWeight: 700,
                      color: ms.day === TODAY ? "#dc3545" : "#475569",
                      whiteSpace: "nowrap",
                      textAlign: "center",
                      zIndex: 5,
                    }}>
                      {ms.icon}<br /><span style={{ fontSize: 8 }}>{ms.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PHASES & TASKS */}
              {filteredPhases.map(phase => {
                const urg = URGENCY[phase.urgency];
                const isExpanded = expandedPhases[phase.id];
                return (
                  <div key={phase.id}>
                    {/* Phase Header */}
                    <div
                      onClick={() => togglePhase(phase.id)}
                      style={{
                        display: "flex",
                        background: urg.bg,
                        cursor: "pointer",
                        borderBottom: "1px solid rgba(0,0,0,0.1)",
                      }}
                    >
                      <div style={{
                        width: LABEL_W, minWidth: LABEL_W, flexShrink: 0,
                        padding: "10px 24px", color: "#fff", fontWeight: 800, fontSize: 12,
                        display: "flex", alignItems: "center", gap: 8,
                        borderRight: "2px solid rgba(255,255,255,0.2)",
                      }}>
                        <span style={{ fontSize: 16 }}>{phase.icon}</span>
                        <span>{phase.label}</span>
                        <span style={{ marginLeft: "auto", opacity: 0.8, fontSize: 11 }}>
                          {phase.tasks.length} tâches {isExpanded ? "▲" : "▼"}
                        </span>
                      </div>
                      <div style={{ flex: 1, position: "relative" }}>
                        {/* Phase span bar */}
                        {phase.tasks.length > 0 && (() => {
                          const s = Math.min(...phase.tasks.map(t=>t.start));
                          const e = Math.max(...phase.tasks.map(t=>t.end));
                          return (
                            <div style={{
                              position: "absolute",
                              left: `${pct(s)}%`,
                              width: `${Math.max(0.5,parseFloat(pct(e))-parseFloat(pct(s)))}%`,
                              top: "50%", transform: "translateY(-50%)",
                              height: 8, background: "rgba(255,255,255,0.35)",
                              borderRadius: 4,
                            }} />
                          );
                        })()}
                      </div>
                    </div>

                    {/* Task rows */}
                    {isExpanded && phase.tasks.map((task, ti) => (
                      <div key={task.id} style={{
                        display: "flex",
                        background: selectedTask?.id === task.id ? urg.light : ti%2===0 ? "#fff" : "#fafafa",
                        borderBottom: "1px solid #f1f5f9",
                        height: ROW_H,
                        transition: "background 0.15s",
                      }}>
                        {/* Label */}
                        <div style={{
                          width: LABEL_W, minWidth: LABEL_W, flexShrink: 0,
                          padding: "0 12px 0 28px",
                          display: "flex", alignItems: "center", gap: 8,
                          borderRight: "2px solid #e2e8f0",
                          cursor: "pointer",
                        }} onClick={() => setSelectedTask(selectedTask?.id === task.id ? null : task)}>
                          <span style={{
                            background: urg.bg, color: "#fff",
                            borderRadius: 4, padding: "2px 6px", fontSize: 9, fontWeight: 800, minWidth: 32, textAlign: "center",
                          }}>{task.id}</span>
                          <span style={{ fontSize: 11, fontWeight: 500, color: "#334155", lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>
                            {task.name}
                          </span>
                          <span style={{ fontSize: 9, color: "#94a3b8", whiteSpace: "nowrap" }}>
                            {task.end - task.start}j
                          </span>
                        </div>

                        {/* Bar */}
                        <div style={{ flex: 1, position: "relative" }}>
                          {/* Month grid lines */}
                          {months.map(m => (
                            <div key={m.label} style={{
                              position: "absolute",
                              left: `${pct(m.start)}%`,
                              top: 0, bottom: 0, width: 1,
                              background: "#f1f5f9",
                              zIndex: 1,
                            }} />
                          ))}
                          {/* Today line */}
                          <div style={{
                            position: "absolute", left: `${pct(TODAY)}%`,
                            top: 0, bottom: 0, width: 2,
                            background: "rgba(220,53,69,0.2)", zIndex: 3,
                          }} />
                          <GanttBar
                            task={task}
                            phaseUrgency={phase.urgency}
                            onSelect={t => setSelectedTask(selectedTask?.id === t.id ? null : t)}
                            isSelected={selectedTask?.id === task.id}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* DETAIL PANEL */}
          {selectedTask && (() => {
            const phase = PHASES.find(p => p.tasks.some(t => t.id === selectedTask.id));
            const urg = URGENCY[phase.urgency];
            const moMembers = selectedTask.assigned.filter(a => a.startsWith("Mo")).map(a => ({ code: a, ...MO[a] })).filter(x => x.name);
            const msMembers = selectedTask.assigned.filter(a => a.startsWith("Ms")).map(a => ({ code: a, ...MS[a] })).filter(x => x.name);
            const startDate = new Date(2026, 2, 1 + selectedTask.start).toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
            const endDate = new Date(2026, 2, 1 + selectedTask.end).toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
            return (
              <div style={{
                margin: "0 32px",
                background: "#fff",
                borderRadius: 12,
                border: `2px solid ${urg.bg}`,
                padding: 24,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: 300 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <span style={{ background: urg.bg, color: "#fff", borderRadius: 6, padding: "4px 10px", fontSize: 12, fontWeight: 900 }}>{selectedTask.id}</span>
                      <span style={{ background: urg.bg, color: "#fff", borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 700 }}>{urg.label}</span>
                      <button onClick={()=>setSelectedTask(null)} style={{ marginLeft: "auto", background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "#94a3b8" }}>✕</button>
                    </div>
                    <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 800, color: "#1e293b" }}>{selectedTask.name}</h3>
                    <p style={{ margin: "0 0 12px", fontSize: 13, color: "#475569", lineHeight: 1.6 }}>{selectedTask.desc}</p>
                    <div style={{ display: "flex", gap: 20, fontSize: 12, color: "#64748b" }}>
                      <span>📅 Début : <strong>{startDate}</strong></span>
                      <span>📅 Fin : <strong>{endDate}</strong></span>
                      <span>⏱ Durée : <strong>{selectedTask.end - selectedTask.start} jours</strong></span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                    {moMembers.length > 0 && (
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 11, color: "#0a3622", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>🏛️ Organisateurs</div>
                        {moMembers.map(m => (
                          <div key={m.code} style={{
                            background: "#f0fff6", border: "1px solid #198754", borderRadius: 8,
                            padding: "6px 12px", marginBottom: 6, fontSize: 12,
                          }}>
                            <span style={{ background: "#0a3622", color: "#fff", borderRadius: 4, padding: "1px 6px", fontSize: 10, fontWeight: 900, marginRight: 8 }}>{m.code}</span>
                            <strong>{m.name}</strong>
                            <div style={{ fontSize: 10, color: "#475569", marginTop: 2, marginLeft: 30 }}>{m.role}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    {msMembers.length > 0 && (
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 11, color: "#084298", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>🔬 Scientifiques</div>
                        {msMembers.map(m => (
                          <div key={m.code} style={{
                            background: "#f0f5ff", border: "1px solid #0d6efd", borderRadius: 8,
                            padding: "6px 12px", marginBottom: 6, fontSize: 12,
                          }}>
                            <span style={{ background: "#084298", color: "#fff", borderRadius: 4, padding: "1px 6px", fontSize: 10, fontWeight: 900, marginRight: 8 }}>{m.code}</span>
                            <strong>{m.name}</strong>
                            <div style={{ fontSize: 10, color: "#475569", marginTop: 2, marginLeft: 30 }}>{m.role}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* SUMMARY STATS */}
          <div style={{ display: "flex", gap: 16, padding: "24px 32px 0", flexWrap: "wrap" }}>
            {[
              { icon: "📋", label: "Total tâches", val: PHASES.reduce((a,p)=>a+p.tasks.length,0), color: "#0a3622" },
              { icon: "🏛️", label: "Membres organisateurs", val: Object.keys(MO).length, color: "#198754" },
              { icon: "🔬", label: "Membres scientifiques", val: Object.keys(MS).length, color: "#084298" },
              { icon: "📅", label: "Jours jusqu'au congrès", val: 213 - TODAY, color: "#dc3545" },
              { icon: "📝", label: "Axes thématiques", val: 6, color: "#6c757d" },
              { icon: "🌍", label: "Pays représentés", val: "20+", color: "#0d6efd" },
            ].map(s => (
              <div key={s.label} style={{
                background: "#fff", borderRadius: 10, padding: "14px 20px",
                border: "1px solid #e2e8f0", flex: "1 1 150px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}>
                <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
                <div style={{ fontSize: 26, fontWeight: 900, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "#64748b", fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ textAlign: "center", padding: "16px 0 24px", fontSize: 11, color: "#94a3b8" }}>
        SDBQL 2026 — Université Abou Bekr Belkaid · Tlemcen, Algérie · Développé avec 💚
      </div>
    </div>
  );
}
