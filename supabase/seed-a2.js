// Run with: node --env-file=.env supabase/seed-a2.js
// Adds 4 more A2 lessons to bring A2 count to 6 (matching A1)

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const lessons = [
  // ─── 1. Telling the Time ──────────────────────────────────────────────────
  {
    meta: {
      title: 'Telling the Time',
      greek_title: 'Τι Ώρα Είναι;',
      tags: ['time', 'clock', 'numbers', 'daily life'],
      focus: 'Tell and ask the time in Greek, and use basic time expressions in everyday situations.',
      grammar_title: 'Asking and Telling the Time',
      grammar_rule_summary: 'To ask the time: Τι ώρα είναι; To tell the time: Είναι + η/οι + number. Hours use the feminine article: η μία (1), οι δύο (2), οι τρεις (3)... η δώδεκα (12). For "half past" add και μισή; for "quarter past" και τέταρτο.',
      culture_note: 'Greeks are famously relaxed about punctuality in social settings — arriving 20–30 minutes late to a dinner party is perfectly normal. However, for business appointments and transport, punctuality matters.',
      level: 'A2',
    },
    grammarPoints: [
      { greek_text: 'Τι ώρα είναι; — Είναι η μία. / Είναι οι τρεις.', romanization: 'Ti Ó-ra Í-ne? — Í-ne i mi-A. / Í-ne i TRÍ-is.', note: 'Τι ώρα είναι; = What time is it? Hours use η (singular 1, 12) or οι (plural 2–11). Είναι = it is.', display_order: 1 },
      { greek_text: 'και μισή / και τέταρτο / παρά τέταρτο', romanization: 'ke mi-SÍ / ke TÉ-tar-to / pa-RÁ TÉ-tar-to', note: 'Half past = και μισή. Quarter past = και τέταρτο. Quarter to = παρά τέταρτο. E.g. Είναι τέσσερις και μισή = It\'s half past four.', display_order: 2 },
      { greek_text: 'το πρωί / το μεσημέρι / το απόγευμα / το βράδυ', romanization: 'to pro-Í / to me-si-MÉ-ri / to a-PÓ-yev-ma / to VRÁ-di', note: 'Parts of the day: morning, midday, afternoon, evening. Greeks often specify these instead of AM/PM.', display_order: 3 },
      { greek_text: 'Στις τι ώρα; — Στις οκτώ.', romanization: 'Stis ti Ó-ra? — Stis ok-TÓ.', note: '"At what time? — At eight." Use στις before feminine hours (all of them). Contrast: Τι ώρα είναι; (what time is it?) vs Στις τι ώρα; (at what time?)', display_order: 4 },
    ],
    vocabulary: [
      { word: 'ώρα', pronunciation: 'Ó-ra', part_of_speech: 'noun (f)', translation: 'hour / time', example_sentence: 'Τι ώρα είναι τώρα;', example_translation: 'What time is it now?' },
      { word: 'λεπτό', pronunciation: 'lep-TÓ', part_of_speech: 'noun (n)', translation: 'minute', example_sentence: 'Περίμενε πέντε λεπτά.', example_translation: 'Wait five minutes.' },
      { word: 'μεσάνυχτα', pronunciation: 'me-SÁ-ni-hta', part_of_speech: 'noun (f, plural)', translation: 'midnight', example_sentence: 'Κοιμάμαι μετά τα μεσάνυχτα.', example_translation: 'I sleep after midnight.' },
      { word: 'μεσημέρι', pronunciation: 'me-si-MÉ-ri', part_of_speech: 'noun (n)', translation: 'midday / noon', example_sentence: 'Τρώμε στο μεσημέρι.', example_translation: 'We eat at midday.' },
      { word: 'νωρίς', pronunciation: 'no-RÍS', part_of_speech: 'adverb', translation: 'early', example_sentence: 'Ξυπνάω πολύ νωρίς το πρωί.', example_translation: 'I wake up very early in the morning.' },
      { word: 'αργά', pronunciation: 'ar-GÁ', part_of_speech: 'adverb', translation: 'late / slowly', example_sentence: 'Έφτασα αργά στη δουλειά.', example_translation: 'I arrived late at work.' },
    ],
    exercises: [
      { question: 'How do you ask "What time is it?" in Greek?', correct_answer: 'Τι ώρα είναι;', hint_text: 'Use τι ώρα + είναι', display_order: 1 },
      { question: 'How do you say "It\'s half past three"? (Είναι τρεις...)', correct_answer: 'Είναι τρεις και μισή.', hint_text: 'Add και μισή after the hour', display_order: 2 },
      { question: 'What does "παρά τέταρτο" mean?', correct_answer: 'quarter to', hint_text: 'παρά means minus/less', display_order: 3 },
      { question: 'How do you say "at eight in the morning"? (Στις οκτώ...)', correct_answer: 'Στις οκτώ το πρωί.', hint_text: 'Use στις + hour + το πρωί', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Ένα Πρωινό (One Morning)',
        greek_text: 'Ξυπνάω στις επτά το πρωί. Πίνω καφέ στις επτά και μισή. Φεύγω για τη δουλειά στις οκτώ παρά τέταρτο. Γυρίζω σπίτι στις τρεις το απόγευμα. Τρώω βραδινό στις εννιά το βράδυ.',
        english_translation: 'I wake up at seven in the morning. I drink coffee at half past seven. I leave for work at quarter to eight. I come home at three in the afternoon. I eat dinner at nine in the evening.',
        annotation_note: 'Γυρίζω = I come back / I return. βραδινό = dinner (evening meal). Notice the pattern: Στις + hour for scheduled times.',
      },
    ],
  },

  // ─── 2. At the Café ───────────────────────────────────────────────────────
  {
    meta: {
      title: 'At the Café',
      greek_title: 'Στο Καφενείο',
      tags: ['café', 'ordering', 'food', 'drink', 'social'],
      focus: 'Order drinks and snacks at a Greek café and handle the basic interaction from greeting to paying.',
      grammar_title: 'Ordering with Θα Ήθελα and Μπορώ να Έχω',
      grammar_rule_summary: 'Two polite ways to order: θα ήθελα + noun (I would like...) or μπορώ να έχω + noun; (can I have...?). Both are more polite than a bare noun. θα ήθελα is slightly more formal; μπορώ να έχω; is casual and very common.',
      culture_note: 'The Greek café (καφενείο) is a cornerstone of social life. Greeks drink coffee slowly — often spending hours over one cup. The frappé (cold instant coffee with foam) was invented in Thessaloniki in 1957 and remains iconic. Freddo espresso is now the most popular.',
      level: 'A2',
    },
    grammarPoints: [
      { greek_text: 'Θα ήθελα έναν καφέ, παρακαλώ.', romanization: 'Tha Í-the-la É-nan ka-FÉ, pa-ra-ka-LÓ.', note: '"I would like a coffee, please." θα ήθελα is the polite form for ordering (conditional of θέλω). Use έναν before masculine nouns.', display_order: 1 },
      { greek_text: 'Μπορώ να έχω λογαριασμό;', romanization: 'Bo-RÓ na É-ho lo-ga-rias-MÓ?', note: '"Can I have the bill?" μπορώ να + verb (subjunctive) = can I...? Essential for finishing any café visit.', display_order: 2 },
      { greek_text: 'Με / χωρίς ζάχαρη — σκέτος / μέτριος / γλυκός', romanization: 'Me / ho-RÍS ZÁ-ha-ri — SKÉ-tos / MÉ-tri-os / gli-KÓS', note: 'With / without sugar. Greek coffee is specified by sweetness: σκέτος (no sugar), μέτριος (medium), γλυκός (sweet). Always specify when ordering Greek coffee.', display_order: 3 },
      { greek_text: 'Τι θα πάρετε; / Τι θα φέρω;', romanization: 'Ti tha PÁ-re-te? / Ti tha FÉ-ro?', note: '"What will you have? / What shall I bring?" These are the standard waiter questions. θα πάρετε literally means "what will you take?"', display_order: 4 },
    ],
    vocabulary: [
      { word: 'καφές', pronunciation: 'ka-FÉS', part_of_speech: 'noun (m)', translation: 'coffee', example_sentence: 'Θα ήθελα έναν καφέ, παρακαλώ.', example_translation: 'I would like a coffee, please.' },
      { word: 'φραπέ', pronunciation: 'fra-PÉ', part_of_speech: 'noun (m, indeclinable)', translation: 'frappé (iced instant coffee)', example_sentence: 'Το καλοκαίρι πίνω φραπέ κάθε μέρα.', example_translation: 'In summer I drink frappé every day.' },
      { word: 'τσάι', pronunciation: 'TSÁ-i', part_of_speech: 'noun (n)', translation: 'tea', example_sentence: 'Θέλεις τσάι ή καφέ;', example_translation: 'Do you want tea or coffee?' },
      { word: 'λογαριασμός', pronunciation: 'lo-ga-rias-MÓS', part_of_speech: 'noun (m)', translation: 'bill / account', example_sentence: 'Μπορώ να έχω τον λογαριασμό;', example_translation: 'Can I have the bill?' },
      { word: 'ζάχαρη', pronunciation: 'ZÁ-ha-ri', part_of_speech: 'noun (f)', translation: 'sugar', example_sentence: 'Χωρίς ζάχαρη, παρακαλώ.', example_translation: 'Without sugar, please.' },
      { word: 'σερβιτόρος', pronunciation: 'ser-vi-TÓ-ros', part_of_speech: 'noun (m)', translation: 'waiter', example_sentence: 'Ο σερβιτόρος είναι πολύ φιλικός.', example_translation: 'The waiter is very friendly.' },
    ],
    exercises: [
      { question: 'How do you politely order "a coffee, please"? (Θα ήθελα...)', correct_answer: 'Θα ήθελα έναν καφέ, παρακαλώ.', hint_text: 'Use θα ήθελα + έναν καφέ', display_order: 1 },
      { question: 'How do you ask for the bill? (Μπορώ να...)', correct_answer: 'Μπορώ να έχω τον λογαριασμό;', hint_text: 'Use Μπορώ να έχω + the bill', display_order: 2 },
      { question: 'What does σκέτος mean when ordering Greek coffee?', correct_answer: 'no sugar', hint_text: 'It\'s one of three sweetness levels', display_order: 3 },
      { question: 'What does the waiter mean by "Τι θα πάρετε;"?', correct_answer: 'What will you have?', hint_text: 'θα πάρετε literally means "will you take"', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Ένας Καφές με Φίλους (A Coffee with Friends)',
        greek_text: '— Καλημέρα! Τι θα πάρετε;\n— Εγώ θα ήθελα έναν ελληνικό καφέ, μέτριο.\n— Κι εγώ έναν φραπέ, με γάλα χωρίς ζάχαρη.\n— Αμέσως. Θέλετε και κάτι να φάτε;\n— Ναι, μία τυρόπιτα, παρακαλώ.\n[αργότερα]\n— Μπορούμε να έχουμε τον λογαριασμό;\n— Βεβαίως! Έξι ευρώ παρακαλώ.',
        english_translation: '— Good morning! What will you have?\n— I would like a Greek coffee, medium sweet.\n— And I\'ll have a frappé, with milk and no sugar.\n— Right away. Would you like something to eat too?\n— Yes, a cheese pie, please.\n[later]\n— Can we have the bill?\n— Of course! Six euros please.',
        annotation_note: 'ελληνικός καφές = Greek coffee (boiled in a small pot). τυρόπιτα = cheese pie (a staple snack). Αμέσως = right away. Βεβαίως = of course.',
      },
    ],
  },

  // ─── 3. My Home ───────────────────────────────────────────────────────────
  {
    meta: {
      title: 'My Home',
      greek_title: 'Το Σπίτι Μου',
      tags: ['home', 'rooms', 'furniture', 'describing', 'locations'],
      focus: 'Describe your home, name the rooms and furniture, and say where things are located.',
      grammar_title: 'Location Prepositions: Σε, Πάνω σε, Κοντά σε',
      grammar_rule_summary: 'To say where something is, Greek uses prepositions + σε (at/in/on): στο (in the / at the — neuter), στην (in the — feminine), στον (in the — masculine). Πάνω στο = on the, κάτω από = under, δίπλα στο = next to.',
      culture_note: 'Greek apartments (διαμερίσματα) are typically built around a central living/dining area. A balcony (μπαλκόνι) is almost universal — it is used for drying clothes, growing plants, and socialising. Shoes are removed at the door in most Greek homes.',
      level: 'A2',
    },
    grammarPoints: [
      { greek_text: 'στο σαλόνι / στην κουζίνα / στον κήπο', romanization: 'sto sa-LÓ-ni / stin ku-ZÍ-na / ston KÍ-po', note: 'In the living room / in the kitchen / in the garden. σε contracts with the article: σε + το = στο, σε + τη(ν) = στη(ν), σε + τον = στον.', display_order: 1 },
      { greek_text: 'πάνω στο / κάτω από / δίπλα στο / μπροστά από', romanization: 'PÁ-no sto / KÁ-to a-PÓ / DÍ-pla sto / bros-TÁ a-PÓ', note: 'on the / under / next to / in front of. These compound prepositions always combine with the definite article.', display_order: 2 },
      { greek_text: 'Πού είναι το...;', romanization: 'Pu Í-ne to...?', note: '"Where is the...?" The basic question for locations. Answer with Είναι + preposition + location.', display_order: 3 },
      { greek_text: 'Έχω / Δεν έχω + room/item', romanization: 'É-ho / Den É-ho...', note: 'I have / I don\'t have... Used to describe your home: Έχω μεγάλη κουζίνα (I have a big kitchen). No article needed after έχω with a modified noun.', display_order: 4 },
    ],
    vocabulary: [
      { word: 'σαλόνι', pronunciation: 'sa-LÓ-ni', part_of_speech: 'noun (n)', translation: 'living room', example_sentence: 'Το σαλόνι είναι μεγάλο και φωτεινό.', example_translation: 'The living room is big and bright.' },
      { word: 'κουζίνα', pronunciation: 'ku-ZÍ-na', part_of_speech: 'noun (f)', translation: 'kitchen', example_sentence: 'Μαγειρεύω κάθε μέρα στην κουζίνα.', example_translation: 'I cook every day in the kitchen.' },
      { word: 'υπνοδωμάτιο', pronunciation: 'ip-no-do-MÁ-tio', part_of_speech: 'noun (n)', translation: 'bedroom', example_sentence: 'Το υπνοδωμάτιό μου έχει μεγάλο παράθυρο.', example_translation: 'My bedroom has a big window.' },
      { word: 'μπαλκόνι', pronunciation: 'bal-KÓ-ni', part_of_speech: 'noun (n)', translation: 'balcony', example_sentence: 'Πίνω καφέ στο μπαλκόνι το πρωί.', example_translation: 'I drink coffee on the balcony in the morning.' },
      { word: 'τραπέζι', pronunciation: 'tra-PÉ-zi', part_of_speech: 'noun (n)', translation: 'table', example_sentence: 'Το τραπέζι είναι στη μέση του δωματίου.', example_translation: 'The table is in the middle of the room.' },
      { word: 'καρέκλα', pronunciation: 'ka-RÉK-la', part_of_speech: 'noun (f)', translation: 'chair', example_sentence: 'Υπάρχουν τέσσερις καρέκλες γύρω από το τραπέζι.', example_translation: 'There are four chairs around the table.' },
    ],
    exercises: [
      { question: 'How do you say "in the kitchen"? (στ...)', correct_answer: 'στην κουζίνα', hint_text: 'κουζίνα is feminine, so σε + την = στην', display_order: 1 },
      { question: 'How do you ask "Where is the bathroom?" (Πού είναι...)', correct_answer: 'Πού είναι το μπάνιο;', hint_text: 'Use Πού είναι + το/η/ο + room', display_order: 2 },
      { question: 'What does "δίπλα στο" mean?', correct_answer: 'next to the', hint_text: 'Think of it as "side by side with"', display_order: 3 },
      { question: 'How do you say "I have a balcony"? (Έχω...)', correct_answer: 'Έχω μπαλκόνι.', hint_text: 'No article needed after έχω', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Το Διαμέρισμά Μου (My Apartment)',
        greek_text: 'Μένω σε ένα μικρό διαμέρισμα στο κέντρο. Έχει ένα σαλόνι, μια κουζίνα, ένα υπνοδωμάτιο και ένα μπάνιο. Το σαλόνι είναι δίπλα στην κουζίνα. Το τραπέζι είναι στη μέση του σαλονιού. Έχω και ένα μικρό μπαλκόνι με θέα στη θάλασσα. Μου αρέσει πολύ το σπίτι μου.',
        english_translation: 'I live in a small apartment in the centre. It has a living room, a kitchen, a bedroom and a bathroom. The living room is next to the kitchen. The table is in the middle of the living room. I also have a small balcony with a view of the sea. I really like my home.',
        annotation_note: 'Μένω σε = I live in. θέα στη θάλασσα = view of the sea. Μου αρέσει = I like it (literally "it pleases me").',
      },
    ],
  },

  // ─── 4. Getting Around the City ───────────────────────────────────────────
  {
    meta: {
      title: 'Getting Around the City',
      greek_title: 'Μετακίνηση στην Πόλη',
      tags: ['transport', 'city', 'directions', 'bus', 'metro'],
      focus: 'Use public transport, read signs, and navigate a Greek city using simple directions.',
      grammar_title: 'Imperatives for Giving Directions',
      grammar_rule_summary: 'Directions in Greek use the imperative mood. Informal singular: πήγαινε (go), στρίψε (turn), συνέχισε (continue). Polite/plural: πηγαίνετε, στρίψτε, συνεχίστε. The verb ακολουθώ (to follow) is also common: ακολουθείστε την οδό... (follow the street...).',
      culture_note: 'Athens has a modern metro (Μετρό) with 3 lines, a tram, and an extensive bus network. Most stops are announced in Greek and English. The tap-in/tap-out card system (ΟΑΣΑ) works across all modes. Taxis (ταξί) are plentiful and relatively cheap.',
      level: 'A2',
    },
    grammarPoints: [
      { greek_text: 'Πήγαινε / Πηγαίνετε ευθεία.', romanization: 'PÍ-ye-ne / Pi-yé-ne-te ef-THÍ-a.', note: 'Go straight ahead. πήγαινε is informal (one person), πηγαίνετε is polite or plural. ευθεία = straight ahead.', display_order: 1 },
      { greek_text: 'Στρίψε / Στρίψτε δεξιά / αριστερά.', romanization: 'STRÍ-pse / STRÍP-ste dek-siÁ / a-ri-ste-RÁ.', note: 'Turn right / left. δεξιά = right, αριστερά = left. These are the two most important direction words.', display_order: 2 },
      { greek_text: 'Πού είναι η στάση του λεωφορείου;', romanization: 'Pu Í-ne i STÁ-si tu le-o-fo-RÍ-u?', note: '"Where is the bus stop?" η στάση = the stop. λεωφορείο = bus. Replace with μετρό (metro) or ταξί (taxi) as needed.', display_order: 3 },
      { greek_text: 'Πόσες στάσεις; — Δύο στάσεις.', romanization: 'PÓ-ses STÁ-sis? — DÍ-o STÁ-sis.', note: '"How many stops? — Two stops." Useful when on a bus or metro to know when to get off.', display_order: 4 },
    ],
    vocabulary: [
      { word: 'λεωφορείο', pronunciation: 'le-o-fo-RÍ-o', part_of_speech: 'noun (n)', translation: 'bus', example_sentence: 'Παίρνω το λεωφορείο για το κέντρο.', example_translation: 'I take the bus to the centre.' },
      { word: 'μετρό', pronunciation: 'me-TRÓ', part_of_speech: 'noun (n, indeclinable)', translation: 'metro / underground', example_sentence: 'Το μετρό είναι πιο γρήγορο από το λεωφορείο.', example_translation: 'The metro is faster than the bus.' },
      { word: 'στάση', pronunciation: 'STÁ-si', part_of_speech: 'noun (f)', translation: 'stop (bus/metro)', example_sentence: 'Ποια είναι η επόμενη στάση;', example_translation: 'What is the next stop?' },
      { word: 'εισιτήριο', pronunciation: 'i-si-TÍ-rio', part_of_speech: 'noun (n)', translation: 'ticket', example_sentence: 'Πού αγοράζω εισιτήριο;', example_translation: 'Where do I buy a ticket?' },
      { word: 'ευθεία', pronunciation: 'ef-THÍ-a', part_of_speech: 'adverb', translation: 'straight ahead', example_sentence: 'Πηγαίνετε ευθεία και μετά στρίψτε αριστερά.', example_translation: 'Go straight ahead and then turn left.' },
      { word: 'σταυροδρόμι', pronunciation: 'stav-ro-DRÓ-mi', part_of_speech: 'noun (n)', translation: 'crossroads / intersection', example_sentence: 'Στρίψτε δεξιά στο σταυροδρόμι.', example_translation: 'Turn right at the crossroads.' },
    ],
    exercises: [
      { question: 'How do you say "go straight ahead" (polite form)?', correct_answer: 'Πηγαίνετε ευθεία.', hint_text: 'Use the polite plural imperative of πηγαίνω', display_order: 1 },
      { question: 'How do you ask "Where is the bus stop?" (Πού είναι...)', correct_answer: 'Πού είναι η στάση του λεωφορείου;', hint_text: 'η στάση = the stop, λεωφορείο = bus', display_order: 2 },
      { question: 'What does "Στρίψτε αριστερά" mean?', correct_answer: 'Turn left', hint_text: 'αριστερά = left, δεξιά = right', display_order: 3 },
      { question: 'How do you ask "How many stops?" (Πόσες...)', correct_answer: 'Πόσες στάσεις;', hint_text: 'στάση (stop) pluralises to στάσεις', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Πώς Πάω στο Μουσείο; (How Do I Get to the Museum?)',
        greek_text: '— Συγγνώμη, πώς πάω στο Εθνικό Μουσείο;\n— Πηγαίνετε ευθεία αυτόν τον δρόμο. Στο πρώτο σταυροδρόμι στρίψτε δεξιά. Μετά περπατήστε πέντε λεπτά και το μουσείο είναι στα αριστερά σας.\n— Μπορώ να πάω με μετρό;\n— Ναι, πάρτε τη γραμμή δύο και κατεβείτε στη στάση Βικτώρια. Είναι τρεις στάσεις.',
        english_translation: '— Excuse me, how do I get to the National Museum?\n— Go straight along this road. At the first crossroads turn right. Then walk five minutes and the museum is on your left.\n— Can I go by metro?\n— Yes, take line two and get off at Victoria station. It\'s three stops.',
        annotation_note: 'Συγγνώμη = Excuse me. περπατήστε = walk (imperative). κατεβείτε = get off / get out (imperative of κατεβαίνω). γραμμή = line.',
      },
    ],
  },
]

for (const lesson of lessons) {
  const { data: row, error: lessonError } = await supabase
    .from('lessons')
    .insert(lesson.meta)
    .select()
    .single()

  if (lessonError) {
    console.error(`✗ Failed to insert lesson "${lesson.meta.title}":`, lessonError.message)
    continue
  }

  const id = row.id
  const [gpRes, vocRes, exRes, passRes] = await Promise.all([
    supabase.from('grammar_points').insert(lesson.grammarPoints.map(g => ({ ...g, lesson_id: id }))),
    supabase.from('vocabulary').insert(lesson.vocabulary.map(v => ({ ...v, lesson_id: id }))),
    supabase.from('exercises').insert(lesson.exercises.map(e => ({ ...e, lesson_id: id }))),
    supabase.from('passages').insert(lesson.passages.map(p => ({ ...p, lesson_id: id }))),
  ])

  const errors = [gpRes.error, vocRes.error, exRes.error, passRes.error].filter(Boolean)
  if (errors.length) {
    console.error(`  ⚠ Related inserts failed for "${lesson.meta.title}":`, errors.map(e => e.message).join(', '))
  } else {
    console.log(`✓ ${lesson.meta.title}`)
  }
}
