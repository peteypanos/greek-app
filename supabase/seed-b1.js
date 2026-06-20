// Run with: node --env-file=.env supabase/seed-b1.js
// Requires SUPABASE_SERVICE_ROLE_KEY in .env

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const lessons = [
  // ─── 1. Talking About the Past ────────────────────────────────────────────
  {
    meta: {
      title: 'Talking About the Past',
      greek_title: 'Μιλώντας για το Παρελθόν',
      tags: ['past tense', 'aorist', 'grammar', 'storytelling'],
      focus: 'Learn to use the simple past tense (αόριστος) to describe completed actions and tell stories.',
      grammar_title: 'The Simple Past Tense (Αόριστος)',
      grammar_rule_summary: 'The αόριστος describes completed actions. For most -ω verbs, remove the ending and shift stress to the antepenultimate syllable: γράφω → έγραψα. Many common verbs are irregular and must be learned individually.',
      culture_note: 'Greeks love storytelling. The phrase "Θυμάμαι όταν..." (I remember when...) opens countless conversations. Sharing personal stories over coffee is a central part of Greek social life.',
      level: 'B1',
    },
    grammarPoints: [
      { greek_text: 'έγραψα, έγραψες, έγραψε / γράψαμε, γράψατε, έγραψαν', romanization: 'é-grap-sa, é-grap-ses, é-grap-se / grá-psa-me, grá-psa-te, é-grap-san', note: 'Regular past tense of γράφω (to write). Note the stress shift and the augment (έ-) at the start.', display_order: 1 },
      { greek_text: 'πήγα, πήγες, πήγε / πήγαμε, πήγατε, πήγαν', romanization: 'PÍ-ga, PÍ-ges, PÍ-ge / PÍ-ga-me, PÍ-ga-te, PÍ-gan', note: 'Irregular past of πηγαίνω (to go). One of the most common irregular past forms — must be memorised.', display_order: 2 },
      { greek_text: 'είπα, είπες, είπε / είπαμε, είπατε, είπαν', romanization: 'Í-pa, Í-pes, Í-pe / Í-pa-me, Í-pa-te, Í-pan', note: 'Irregular past of λέω (to say). Another essential irregular. Είπε = he/she said.', display_order: 3 },
      { greek_text: 'χθες / πέρυσι / πριν από δύο χρόνια', romanization: 'hthes / PÉ-ree-si / prin a-PÓ dí-o HRÓ-nia', note: 'Time expressions used with the αόριστος: yesterday, last year, two years ago. These signal a completed past action.', display_order: 4 },
    ],
    vocabulary: [
      { word: 'χθες', pronunciation: 'HTHES', part_of_speech: 'adverb', translation: 'yesterday', example_sentence: 'Χθες πήγα στη θάλασσα.', example_translation: 'Yesterday I went to the sea.' },
      { word: 'πέρυσι', pronunciation: 'PÉ-ree-si', part_of_speech: 'adverb', translation: 'last year', example_sentence: 'Πέρυσι ταξίδεψα στην Κρήτη.', example_translation: 'Last year I travelled to Crete.' },
      { word: 'πριν', pronunciation: 'PRIN', part_of_speech: 'preposition/adverb', translation: 'before / ago', example_sentence: 'Πριν από δύο χρόνια έμενα στο Λονδίνο.', example_translation: 'Two years ago I was living in London.' },
      { word: 'έγραψα', pronunciation: 'É-grap-sa', part_of_speech: 'verb (past)', translation: 'I wrote', example_sentence: 'Έγραψα ένα γράμμα στη φίλη μου.', example_translation: 'I wrote a letter to my friend.' },
      { word: 'πήγα', pronunciation: 'PÍ-ga', part_of_speech: 'verb (past)', translation: 'I went', example_sentence: 'Πήγα στο σούπερ μάρκετ το πρωί.', example_translation: 'I went to the supermarket in the morning.' },
      { word: 'θυμάμαι', pronunciation: 'thee-MÁ-me', part_of_speech: 'verb', translation: 'I remember', example_sentence: 'Θυμάμαι εκείνη την ημέρα πολύ καλά.', example_translation: 'I remember that day very well.' },
    ],
    exercises: [
      { question: 'Put πηγαίνω in the past tense: Χθες ___ στην Αθήνα. (I went to Athens yesterday)', correct_answer: 'πήγα', hint_text: 'The past tense of πηγαίνω is irregular', display_order: 1 },
      { question: 'How do you say "I said" in Greek? (past tense of λέω)', correct_answer: 'είπα', hint_text: 'The past of λέω is irregular — it starts with είπ-', display_order: 2 },
      { question: 'Translate: "Last year I went to Greece." (Πέρυσι...)', correct_answer: 'Πέρυσι πήγα στην Ελλάδα.', hint_text: 'Use πέρυσι and the past of πηγαίνω', display_order: 3 },
      { question: 'What is "yesterday" in Greek?', correct_answer: 'χθες', hint_text: 'It sounds like "hthes" — the χθ combination is unique to Greek', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Το Σαββατοκύριακό Μου (My Weekend)',
        greek_text: 'Το Σαββατοκύριακο ήταν υπέροχο. Το Σάββατο πήγα με φίλους στη θάλασσα. Κολυμπήσαμε και φάγαμε σε μια ταβέρνα κοντά στην παραλία. Την Κυριακή έμεινα σπίτι και διάβασα ένα βιβλίο. Ήταν μια ωραία ξεκούραση.',
        english_translation: 'The weekend was wonderful. On Saturday I went to the sea with friends. We swam and ate at a taverna near the beach. On Sunday I stayed home and read a book. It was a nice rest.',
        annotation_note: 'κολυμπήσαμε = we swam (past of κολυμπώ). φάγαμε = we ate (past of τρώω, irregular). έμεινα = I stayed (past of μένω).',
      },
    ],
  },

  // ─── 2. Daily Routines and Habits ─────────────────────────────────────────
  {
    meta: {
      title: 'Daily Routines and Habits',
      greek_title: 'Καθημερινή Ρουτίνα',
      tags: ['routines', 'reflexive verbs', 'daily life', 'habits'],
      focus: 'Describe your daily routine using reflexive verbs, time expressions, and sequencing words.',
      grammar_title: 'Reflexive Verbs and the Habitual Present',
      grammar_rule_summary: 'Many daily-routine verbs in Greek are reflexive, ending in -ομαι or -άμαι: σηκώνομαι (I get up), ντύνομαι (I get dressed), κοιμάμαι (I sleep). They follow a different conjugation pattern from regular -ω verbs.',
      culture_note: 'Greeks typically eat dinner late — often 9 or 10pm. The afternoon rest (μεσημεριανός ύπνος) is still observed in many households and traditional businesses, especially in summer.',
      level: 'B1',
    },
    grammarPoints: [
      { greek_text: 'σηκώνομαι, σηκώνεσαι, σηκώνεται / σηκωνόμαστε, σηκώνεστε, σηκώνονται', romanization: 'si-KÓ-no-me, si-KÓ-ne-se, si-KÓ-ne-te / si-ko-NÓ-mas-te, si-KÓ-nes-te, si-KÓ-non-de', note: 'Reflexive conjugation pattern (-ομαι, -εσαι, -εται, -όμαστε, -εστε, -ονται). Used for σηκώνομαι (to get up).', display_order: 1 },
      { greek_text: 'κάθε μέρα / συνήθως / πάντα / ποτέ', romanization: 'KÁ-the MÉ-ra / si-NÍ-thos / PÁN-da / po-TÉ', note: 'Frequency adverbs: every day, usually, always, never. Place them before the verb or at the start of the sentence.', display_order: 2 },
      { greek_text: 'Πρώτα... μετά... στο τέλος...', romanization: 'PRÓ-ta... me-TÁ... sto TÉ-los...', note: 'Sequencing words for describing routines: first, then, finally. Essential for narrating a sequence of events.', display_order: 3 },
      { greek_text: 'Τι ώρα ξυπνάς συνήθως;', romanization: 'Ti Ó-ra xip-NÁS si-NÍ-thos?', note: 'How to ask about someone\'s routine: "What time do you usually wake up?" Τι ώρα = what time.', display_order: 4 },
    ],
    vocabulary: [
      { word: 'ξυπνάω', pronunciation: 'xip-NÁ-o', part_of_speech: 'verb', translation: 'to wake up', example_sentence: 'Ξυπνάω στις επτά κάθε μέρα.', example_translation: 'I wake up at seven every day.' },
      { word: 'σηκώνομαι', pronunciation: 'si-KÓ-no-me', part_of_speech: 'verb (reflexive)', translation: 'to get up', example_sentence: 'Σηκώνομαι αμέσως μετά το ξυπνητήρι.', example_translation: 'I get up immediately after the alarm.' },
      { word: 'ντύνομαι', pronunciation: 'DÍ-no-me', part_of_speech: 'verb (reflexive)', translation: 'to get dressed', example_sentence: 'Ντύνομαι γρήγορα το πρωί.', example_translation: 'I get dressed quickly in the morning.' },
      { word: 'κοιμάμαι', pronunciation: 'ki-MÁ-me', part_of_speech: 'verb (reflexive)', translation: 'to sleep / to go to sleep', example_sentence: 'Κοιμάμαι στις έντεκα το βράδυ.', example_translation: 'I go to sleep at eleven at night.' },
      { word: 'συνήθως', pronunciation: 'si-NÍ-thos', part_of_speech: 'adverb', translation: 'usually', example_sentence: 'Συνήθως πίνω καφέ το πρωί.', example_translation: 'I usually drink coffee in the morning.' },
      { word: 'πρωινό', pronunciation: 'pro-i-NÓ', part_of_speech: 'noun (n)', translation: 'breakfast', example_sentence: 'Τρώω πάντα πρωινό πριν φύγω.', example_translation: 'I always eat breakfast before I leave.' },
    ],
    exercises: [
      { question: 'Conjugate σηκώνομαι for "she": αυτή ___', correct_answer: 'σηκώνεται', hint_text: 'The 3rd person singular of reflexive verbs ends in -εται', display_order: 1 },
      { question: 'How do you say "I usually wake up at 7"? (Συνήθως ξυπνάω...)', correct_answer: 'Συνήθως ξυπνάω στις επτά.', hint_text: 'Use στις before the hour for feminine clock times', display_order: 2 },
      { question: 'What does κοιμάμαι mean?', correct_answer: 'to sleep / to go to sleep', hint_text: 'It\'s a reflexive verb used for sleeping', display_order: 3 },
      { question: 'Put these in order with sequencing words: shower, coffee, wake up (Πρώτα... μετά... στο τέλος...)', correct_answer: 'Πρώτα ξυπνάω, μετά κάνω ντους, στο τέλος πίνω καφέ.', hint_text: 'Use πρώτα, μετά, and στο τέλος to sequence', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Μια Τυπική Δευτέρα (A Typical Monday)',
        greek_text: 'Κάθε Δευτέρα ξυπνάω στις επτά. Πρώτα κάνω ντους και μετά ντύνομαι. Συνήθως δεν τρώω πρωινό — πίνω μόνο έναν καφέ. Φεύγω από το σπίτι στις οκτώ και φτάνω στη δουλειά στις οκτώ και μισή. Κοιμάμαι συνήθως μετά τα μεσάνυχτα.',
        english_translation: 'Every Monday I wake up at seven. First I shower and then I get dressed. I usually don\'t eat breakfast — I only drink a coffee. I leave the house at eight and arrive at work at half past eight. I usually go to sleep after midnight.',
        annotation_note: 'φεύγω = I leave (from φεύγω). φτάνω = I arrive. μετά τα μεσάνυχτα = after midnight.',
      },
    ],
  },

  // ─── 3. Shopping and Comparing ────────────────────────────────────────────
  {
    meta: {
      title: 'Shopping and Comparing',
      greek_title: 'Ψώνια και Συγκρίσεις',
      tags: ['shopping', 'comparatives', 'superlatives', 'prices'],
      focus: 'Compare prices and items using comparatives and superlatives, and navigate a shopping interaction from start to finish.',
      grammar_title: 'Comparatives and Superlatives',
      grammar_rule_summary: 'Comparative: πιο + adjective + από (more/cheaper than). Superlative: το/η/το + πιο + adjective (the most expensive). The comparison particle is από (than): Αυτό είναι πιο φτηνό από εκείνο.',
      culture_note: 'Bargaining is common at Greek street markets (λαϊκές αγορές) and antique shops. In regular stores prices are fixed, but at the λαϊκή — held weekly in most neighbourhoods — negotiating near closing time often works.',
      level: 'B1',
    },
    grammarPoints: [
      { greek_text: 'πιο + adjective + από', romanization: 'pio ... a-PÓ', note: 'Comparative structure: πιο φτηνό από (cheaper than), πιο μεγάλο από (bigger than). από always follows the adjective.', display_order: 1 },
      { greek_text: 'το πιο + adjective', romanization: 'to pio...', note: 'Superlative: το πιο ακριβό (the most expensive), η πιο όμορφη (the most beautiful). The article agrees with the noun.', display_order: 2 },
      { greek_text: 'Μπορώ να το δοκιμάσω;', romanization: 'bo-RÓ na to do-ki-MÁ-so?', note: '"Can I try it on?" The essential question when shopping for clothes. να + subjunctive after μπορώ.', display_order: 3 },
      { greek_text: 'Έχετε σε άλλο μέγεθος / χρώμα;', romanization: 'É-he-te se Á-lo MÉ-ge-thos / HRÓ-ma?', note: '"Do you have it in another size / colour?" Useful when the item doesn\'t fit or you want a different colour.', display_order: 4 },
    ],
    vocabulary: [
      { word: 'φτηνός', pronunciation: 'ftee-NÓS', part_of_speech: 'adjective', translation: 'cheap / inexpensive', example_sentence: 'Αυτό το μαγαζί έχει πολύ φτηνά ρούχα.', example_translation: 'This shop has very cheap clothes.' },
      { word: 'ακριβός', pronunciation: 'a-kri-VÓS', part_of_speech: 'adjective', translation: 'expensive', example_sentence: 'Αυτή η τσάντα είναι πολύ ακριβή.', example_translation: 'This bag is very expensive.' },
      { word: 'μέγεθος', pronunciation: 'MÉ-ge-thos', part_of_speech: 'noun (n)', translation: 'size', example_sentence: 'Τι μέγεθος φοράτε;', example_translation: 'What size do you wear?' },
      { word: 'έκπτωση', pronunciation: 'ÉK-pto-si', part_of_speech: 'noun (f)', translation: 'discount / sale', example_sentence: 'Έχετε κάποια έκπτωση σήμερα;', example_translation: 'Do you have any discounts today?' },
      { word: 'αποδείξη', pronunciation: 'a-po-DÍK-si', part_of_speech: 'noun (f)', translation: 'receipt', example_sentence: 'Μπορώ να έχω αποδείξη, παρακαλώ;', example_translation: 'Can I have a receipt, please?' },
      { word: 'ταμείο', pronunciation: 'ta-MÍ-o', part_of_speech: 'noun (n)', translation: 'till / cash register', example_sentence: 'Πηγαίνετε στο ταμείο για να πληρώσετε.', example_translation: 'Go to the till to pay.' },
    ],
    exercises: [
      { question: 'How do you say "This is cheaper than that"? (Αυτό είναι...)', correct_answer: 'Αυτό είναι πιο φτηνό από εκείνο.', hint_text: 'Use πιο + adjective + από for comparatives', display_order: 1 },
      { question: 'What phrase do you use to ask to try something on?', correct_answer: 'Μπορώ να το δοκιμάσω;', hint_text: 'It starts with Μπορώ να...', display_order: 2 },
      { question: 'What is the superlative of ακριβός? (το πιο...)', correct_answer: 'το πιο ακριβό', hint_text: 'Add το πιο before the neuter form of the adjective', display_order: 3 },
      { question: 'How do you ask for a receipt in Greek?', correct_answer: 'Μπορώ να έχω αποδείξη;', hint_text: 'Use Μπορώ να έχω + the word for receipt', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Στο Μαγαζί (At the Shop)',
        greek_text: '— Καλημέρα, μπορώ να σας βοηθήσω;\n— Ναι, ψάχνω για ένα πουκάμισο. Αυτό το μπλε είναι ωραίο. Έχετε σε μέγεθος medium;\n— Μάλιστα. Θέλετε να το δοκιμάσετε;\n— Ναι, παρακαλώ. Πόσο κάνει;\n— Κάνει τριάντα πέντε ευρώ. Έχουμε έκπτωση είκοσι τοις εκατό σήμερα.\n— Τέλεια! Θα το πάρω.',
        english_translation: '— Good morning, can I help you?\n— Yes, I\'m looking for a shirt. This blue one is nice. Do you have it in medium?\n— Yes. Would you like to try it on?\n— Yes, please. How much is it?\n— It\'s thirty-five euros. We have a twenty percent discount today.\n— Great! I\'ll take it.',
        annotation_note: 'ψάχνω για = I\'m looking for. τοις εκατό = percent (literally "per hundred"). Θα το πάρω = I\'ll take it.',
      },
    ],
  },

  // ─── 4. Health and the Body ───────────────────────────────────────────────
  {
    meta: {
      title: 'Health and the Body',
      greek_title: 'Υγεία και Σώμα',
      tags: ['health', 'body', 'doctor', 'pharmacy', 'symptoms'],
      focus: 'Describe physical symptoms and ailments, and navigate a visit to the pharmacy or doctor.',
      grammar_title: 'Expressing Pain with Πονάει and Έχω',
      grammar_rule_summary: 'To describe pain: με πονάει + body part (my head hurts — literally "the head hurts me"). Uses accusative of the person (με/σε/τον) + πονάει + nominative body part. Alternatively: έχω + ailment noun.',
      culture_note: 'Greek pharmacies (φαρμακεία) are highly accessible — look for the green cross. Pharmacists can advise on many minor ailments without a prescription, and many medicines available only on prescription elsewhere can be purchased over the counter in Greece.',
      level: 'B1',
    },
    grammarPoints: [
      { greek_text: 'Με πονάει το κεφάλι.', romanization: 'Me po-NÁ-i to ke-FÁ-li.', note: '"My head hurts." Literally "The head hurts me." με = me (accusative), πονάει = hurts (3rd person), το κεφάλι = the head (subject).', display_order: 1 },
      { greek_text: 'Έχω πυρετό / βήχα / πονόλαιμο.', romanization: 'É-ho pi-re-TÓ / VÍ-ha / po-NÓ-le-mo.', note: 'I have a fever / cough / sore throat. The έχω + noun pattern for ailments is very common and natural.', display_order: 2 },
      { greek_text: 'Από πότε; / Πόσο καιρό έχετε αυτά τα συμπτώματα;', romanization: 'A-pó pó-te? / Pó-so ke-RÓ É-he-te af-TÁ ta sim-PTÓ-ma-ta?', note: '"Since when? / How long have you had these symptoms?" Questions a doctor will ask. Από πότε = since when.', display_order: 3 },
      { greek_text: 'Πρέπει να πάρετε + φάρμακο', romanization: 'PRÉ-pi na PÁ-re-te...', note: '"You need to take + medicine." Πρέπει να + subjunctive = must/need to. Very useful for doctor/pharmacist instructions.', display_order: 4 },
    ],
    vocabulary: [
      { word: 'κεφάλι', pronunciation: 'ke-FÁ-li', part_of_speech: 'noun (n)', translation: 'head', example_sentence: 'Με πονάει πολύ το κεφάλι.', example_translation: 'My head hurts a lot.' },
      { word: 'πυρετός', pronunciation: 'pi-re-TÓS', part_of_speech: 'noun (m)', translation: 'fever / temperature', example_sentence: 'Έχω πυρετό από χθες.', example_translation: 'I\'ve had a fever since yesterday.' },
      { word: 'πονόλαιμος', pronunciation: 'po-NÓ-le-mos', part_of_speech: 'noun (m)', translation: 'sore throat', example_sentence: 'Έχω πονόλαιμο και δεν μπορώ να μιλώ.', example_translation: 'I have a sore throat and I can\'t speak.' },
      { word: 'φαρμακείο', pronunciation: 'far-ma-KÍ-o', part_of_speech: 'noun (n)', translation: 'pharmacy', example_sentence: 'Το φαρμακείο είναι ανοιχτό ως τις οκτώ.', example_translation: 'The pharmacy is open until eight.' },
      { word: 'γιατρός', pronunciation: 'ya-TRÓS', part_of_speech: 'noun (m/f)', translation: 'doctor', example_sentence: 'Πρέπει να δω γιατρό.', example_translation: 'I need to see a doctor.' },
      { word: 'ραντεβού', pronunciation: 'ran-de-VÚ', part_of_speech: 'noun (n, indeclinable)', translation: 'appointment', example_sentence: 'Έκλεισα ραντεβού για αύριο.', example_translation: 'I booked an appointment for tomorrow.' },
    ],
    exercises: [
      { question: 'How do you say "My stomach hurts"? (Με πονάει...)', correct_answer: 'Με πονάει το στομάχι.', hint_text: 'Use με πονάει + the body part in nominative', display_order: 1 },
      { question: 'What does "Έχω πυρετό" mean?', correct_answer: 'I have a fever', hint_text: 'πυρετός is the word for fever', display_order: 2 },
      { question: 'How do you say "I have a cough"? (Έχω...)', correct_answer: 'Έχω βήχα.', hint_text: 'βήχας is the word for cough', display_order: 3 },
      { question: 'Translate: "I need to make a doctor\'s appointment."', correct_answer: 'Πρέπει να κλείσω ραντεβού με γιατρό.', hint_text: 'Use Πρέπει να κλείσω (I need to book) + ραντεβού', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Στο Φαρμακείο (At the Pharmacy)',
        greek_text: '— Καλημέρα. Μπορείτε να με βοηθήσετε; Δεν αισθάνομαι καλά.\n— Τι έχετε;\n— Με πονάει το κεφάλι και έχω πυρετό από χθες. Έχω και λίγο πονόλαιμο.\n— Από πότε έχετε αυτά τα συμπτώματα;\n— Από χθες το απόγευμα.\n— Πάρτε αυτό το σιρόπι τρεις φορές την ημέρα. Αν δεν νιώσετε καλύτερα σε δύο μέρες, πηγαίνετε στο γιατρό.',
        english_translation: '— Good morning. Can you help me? I\'m not feeling well.\n— What\'s wrong?\n— My head hurts and I\'ve had a fever since yesterday. I also have a slight sore throat.\n— Since when have you had these symptoms?\n— Since yesterday afternoon.\n— Take this syrup three times a day. If you don\'t feel better in two days, go to the doctor.',
        annotation_note: 'Δεν αισθάνομαι καλά = I don\'t feel well (reflexive). τρεις φορές = three times. αν = if.',
      },
    ],
  },

  // ─── 5. Travel and Transportation ─────────────────────────────────────────
  {
    meta: {
      title: 'Travel and Transportation',
      greek_title: 'Ταξίδι και Μεταφορές',
      tags: ['travel', 'transport', 'future tense', 'tickets', 'booking'],
      focus: 'Book tickets, ask about schedules, and talk about travel plans using the future tense.',
      grammar_title: 'Future Tense with Θα',
      grammar_rule_summary: 'The future tense is formed with θα + verb (usually the same form as present tense): θα πάω (I will go), θα φτάσουμε (we will arrive). θα is invariable and never changes regardless of person.',
      culture_note: 'Ferries (πλοία) are essential for island travel — Greece has over 200 inhabited islands. KTEL buses connect mainland cities affordably. Athens has a modern metro. Booking ferries in advance is crucial in summer.',
      level: 'B1',
    },
    grammarPoints: [
      { greek_text: 'θα πάω, θα πας, θα πάει / θα πάμε, θα πάτε, θα πάνε', romanization: 'tha PÁ-o, tha pas, tha PÁ-i / tha PÁ-me, tha PÁ-te, tha PÁ-ne', note: 'Future of πηγαίνω: θα + irregular subjunctive stem πάω. This is one of the most common future forms.', display_order: 1 },
      { greek_text: 'Θέλω να κλείσω εισιτήριο.', romanization: 'THÉ-lo na KLÍ-so i-si-TÍ-rio.', note: '"I want to book a ticket." να + subjunctive after θέλω for expressing desire/intention. κλείνω = to book/close.', display_order: 2 },
      { greek_text: 'Πότε φεύγει / φτάνει το πλοίο;', romanization: 'PÓ-te FÉV-yi / ftá-ni to PLÍ-o?', note: '"When does the ferry leave / arrive?" Key travel questions. φεύγω = to leave, φτάνω = to arrive.', display_order: 3 },
      { greek_text: 'Μονό / Με επιστροφή', romanization: 'mo-NÓ / me e-pi-stro-FÍ', note: 'Single / Return ticket. Essential vocabulary when buying any transport ticket in Greece.', display_order: 4 },
    ],
    vocabulary: [
      { word: 'εισιτήριο', pronunciation: 'i-si-TÍ-rio', part_of_speech: 'noun (n)', translation: 'ticket', example_sentence: 'Θέλω ένα εισιτήριο για Θεσσαλονίκη.', example_translation: 'I want a ticket to Thessaloniki.' },
      { word: 'αναχώρηση', pronunciation: 'a-na-HÓ-ri-si', part_of_speech: 'noun (f)', translation: 'departure', example_sentence: 'Η αναχώρηση είναι στις εννιά το πρωί.', example_translation: 'The departure is at nine in the morning.' },
      { word: 'άφιξη', pronunciation: 'Á-fik-si', part_of_speech: 'noun (f)', translation: 'arrival', example_sentence: 'Η άφιξη του τρένου καθυστερεί.', example_translation: 'The train\'s arrival is delayed.' },
      { word: 'καθυστέρηση', pronunciation: 'ka-thee-STÉ-ri-si', part_of_speech: 'noun (f)', translation: 'delay', example_sentence: 'Υπάρχει καθυστέρηση μισής ώρας.', example_translation: 'There is a half-hour delay.' },
      { word: 'αποβάθρα', pronunciation: 'a-po-VÁ-thra', part_of_speech: 'noun (f)', translation: 'platform / pier', example_sentence: 'Το πλοίο φεύγει από αποβάθρα τρία.', example_translation: 'The ferry leaves from pier three.' },
      { word: 'βαλίτσα', pronunciation: 'va-LÍ-tsa', part_of_speech: 'noun (f)', translation: 'suitcase', example_sentence: 'Η βαλίτσα μου είναι πολύ βαριά.', example_translation: 'My suitcase is very heavy.' },
    ],
    exercises: [
      { question: 'Say "I will go to Thessaloniki tomorrow". (Αύριο θα...)', correct_answer: 'Αύριο θα πάω στη Θεσσαλονίκη.', hint_text: 'Use θα + the subjunctive form of πηγαίνω', display_order: 1 },
      { question: 'How do you ask "When does the ferry leave"? (Πότε...)', correct_answer: 'Πότε φεύγει το πλοίο;', hint_text: 'Use πότε + φεύγει + το πλοίο', display_order: 2 },
      { question: 'What is the Greek word for "delay"?', correct_answer: 'καθυστέρηση', hint_text: 'You\'ll hear this at airports and stations', display_order: 3 },
      { question: 'How do you ask for a return ticket? (Ένα εισιτήριο...)', correct_answer: 'Ένα εισιτήριο με επιστροφή.', hint_text: 'με επιστροφή means with return', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Κλείνοντας Εισιτήριο (Booking a Ticket)',
        greek_text: '— Καλημέρα. Θέλω να κλείσω ένα εισιτήριο για Σαντορίνη.\n— Για πότε;\n— Για την Παρασκευή, 15 Αυγούστου. Πότε φεύγει το πρώτο πλοίο;\n— Φεύγει στις επτά το πρωί από την αποβάθρα πέντε. Θέλετε μονό ή με επιστροφή;\n— Με επιστροφή, παρακαλώ. Πότε φτάνει;\n— Φτάνει στις δύο το μεσημέρι. Να είστε εκεί μισή ώρα πριν.',
        english_translation: '— Good morning. I want to book a ticket to Santorini.\n— For when?\n— For Friday, 15th August. When does the first ferry leave?\n— It leaves at seven in the morning from pier five. Do you want single or return?\n— Return, please. When does it arrive?\n— It arrives at two in the afternoon. You should be there half an hour before.',
        annotation_note: 'Να είστε εκεί = You should be there (subjunctive used for gentle instruction). πριν = before.',
      },
    ],
  },

  // ─── 6. Work and Professions ──────────────────────────────────────────────
  {
    meta: {
      title: 'Work and Professions',
      greek_title: 'Δουλειά και Επαγγέλματα',
      tags: ['work', 'professions', 'workplace', 'employment'],
      focus: 'Talk about your job, describe your workplace, and discuss work in everyday conversation.',
      grammar_title: 'Talking About Work with Δουλεύω',
      grammar_rule_summary: 'To state your profession after είμαι, no article is needed: Είμαι γιατρός (I am a doctor). To ask about profession: Τι δουλειά κάνεις; (What do you do?) or Τι είσαι; (What are you?). For workplace: δουλεύω σε + place.',
      culture_note: 'Self-employment (ελεύθερος επαγγελματίας) is extremely common in Greece — one of the highest rates in the EU. Asking about someone\'s work is perfectly normal conversation when meeting someone new.',
      level: 'B1',
    },
    grammarPoints: [
      { greek_text: 'Τι δουλειά κάνεις;', romanization: 'Ti doo-LEIÁ KÁ-nis?', note: '"What do you do for work?" The most natural question to ask about someone\'s profession. Literally: "What work do you do?"', display_order: 1 },
      { greek_text: 'Είμαι + επάγγελμα (χωρίς άρθρο)', romanization: 'Í-me + e-PÁ-gel-ma', note: 'To state your job: Είμαι γιατρός, Είμαι δασκάλα. No article before the profession after είμαι — a key difference from English.', display_order: 2 },
      { greek_text: 'Δουλεύω σε εταιρεία / σε σχολείο / ως ελεύθερος επαγγελματίας', romanization: 'Doo-LÉ-vo se e-te-RÍ-a / se sho-LÍ-o / os e-LEF-the-ros e-pa-gel-ma-TÍ-as', note: 'I work at a company / at a school / as a freelancer. σε = at/in for workplace locations.', display_order: 3 },
      { greek_text: 'Από τις 9 έως τις 5 / Κάνω υπερωρίες', romanization: 'A-pó tis en-NÉ-a É-os tis PÉN-de / KÁ-no i-pe-ro-RÍ-es', note: '9 to 5 / I work overtime. Common expressions when discussing working hours.', display_order: 4 },
    ],
    vocabulary: [
      { word: 'δουλειά', pronunciation: 'doo-LEIÁ', part_of_speech: 'noun (f)', translation: 'work / job', example_sentence: 'Η δουλειά μου είναι πολύ ενδιαφέρουσα.', example_translation: 'My job is very interesting.' },
      { word: 'εταιρεία', pronunciation: 'e-te-RÍ-a', part_of_speech: 'noun (f)', translation: 'company', example_sentence: 'Δουλεύω σε μια μεγάλη εταιρεία στην Αθήνα.', example_translation: 'I work at a large company in Athens.' },
      { word: 'συνάδελφος', pronunciation: 'si-NÁ-del-fos', part_of_speech: 'noun (m/f)', translation: 'colleague', example_sentence: 'Οι συνάδελφοί μου είναι πολύ φιλικοί.', example_translation: 'My colleagues are very friendly.' },
      { word: 'αφεντικό', pronunciation: 'a-fen-di-KÓ', part_of_speech: 'noun (n)', translation: 'boss', example_sentence: 'Το αφεντικό μου είναι πολύ αυστηρό.', example_translation: 'My boss is very strict.' },
      { word: 'μισθός', pronunciation: 'mis-THÓS', part_of_speech: 'noun (m)', translation: 'salary / wage', example_sentence: 'Ο μισθός μου δεν είναι πολύ καλός.', example_translation: 'My salary is not very good.' },
      { word: 'άδεια', pronunciation: 'Á-dei-a', part_of_speech: 'noun (f)', translation: 'leave / holiday', example_sentence: 'Παίρνω άδεια τον Αύγουστο.', example_translation: 'I take leave in August.' },
    ],
    exercises: [
      { question: 'How do you ask someone what they do for work? (Τι δουλειά...)', correct_answer: 'Τι δουλειά κάνεις;', hint_text: 'Use τι δουλειά + κάνεις', display_order: 1 },
      { question: 'How do you say "I am a teacher" in Greek? (no article before the profession)', correct_answer: 'Είμαι δάσκαλος.', hint_text: 'Use Είμαι + profession with no article', display_order: 2 },
      { question: 'What does συνάδελφος mean?', correct_answer: 'colleague', hint_text: 'You work alongside them', display_order: 3 },
      { question: 'How do you say "I work at a company"? (Δουλεύω...)', correct_answer: 'Δουλεύω σε εταιρεία.', hint_text: 'Use δουλεύω σε + the workplace', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Στο Διάλειμμα (On the Break)',
        greek_text: '— Τι δουλειά κάνεις;\n— Είμαι προγραμματιστής. Δουλεύω σε μια εταιρεία τεχνολογίας στο κέντρο. Εσύ;\n— Είμαι νοσηλεύτρια σε νοσοκομείο. Η δουλειά είναι δύσκολη αλλά την αγαπώ.\n— Κάνεις υπερωρίες;\n— Ναι, πολύ συχνά. Αλλά έχω καλό μισθό και ωραίους συναδέλφους.',
        english_translation: '— What do you do for work?\n— I\'m a programmer. I work at a tech company in the centre. You?\n— I\'m a nurse at a hospital. The work is hard but I love it.\n— Do you work overtime?\n— Yes, very often. But I have a good salary and nice colleagues.',
        annotation_note: 'προγραμματιστής = programmer. νοσηλεύτρια = nurse (female). νοσοκομείο = hospital. αγαπώ = I love.',
      },
    ],
  },

  // ─── 7. Hobbies and Free Time ─────────────────────────────────────────────
  {
    meta: {
      title: 'Hobbies and Free Time',
      greek_title: 'Χόμπι και Ελεύθερος Χρόνος',
      tags: ['hobbies', 'free time', 'preferences', 'μου αρέσει', 'leisure'],
      focus: 'Express likes, dislikes, and preferences about hobbies and leisure activities.',
      grammar_title: 'Expressing Preferences with Μου Αρέσει',
      grammar_rule_summary: 'To say you like something: μου αρέσει + singular, μου αρέσουν + plural. The verb agrees with the thing liked, not the person. To prefer: προτιμώ να + verb (I prefer to...). To ask: Σου αρέσει... ;',
      culture_note: 'Football (ποδόσφαιρο) is a national passion — rivalries between Olympiakos, Panathinaikos, and AEK are intense. Tavli (backgammon) is played in kafeneions by all ages. Swimming is almost universal in summer.',
      level: 'B1',
    },
    grammarPoints: [
      { greek_text: 'Μου αρέσει η μουσική. / Μου αρέσουν τα βιβλία.', romanization: 'Moo a-RÉ-si i moo-si-KÍ. / Moo a-RÉ-soon ta vi-VLÍ-a.', note: 'The verb (αρέσει/αρέσουν) agrees with the thing liked: singular noun → αρέσει, plural noun → αρέσουν.', display_order: 1 },
      { greek_text: 'Δεν μου αρέσει / Μισώ', romanization: 'Den moo a-RÉ-si / mi-SÓ', note: 'I don\'t like / I hate. Δεν μου αρέσει is polite; μισώ is stronger. Both are commonly used.', display_order: 2 },
      { greek_text: 'Προτιμώ να + verb', romanization: 'Pro-ti-MÓ na...', note: 'I prefer to + verb. E.g. Προτιμώ να διαβάζω (I prefer to read) vs Προτιμώ το ποδόσφαιρο (I prefer football — noun).', display_order: 3 },
      { greek_text: 'Ασχολούμαι με + noun', romanization: 'A-sho-LÚ-me me...', note: '"I do / I\'m involved in..." e.g. Ασχολούμαι με τη ζωγραφική (I do painting). A natural way to describe a hobby.', display_order: 4 },
    ],
    vocabulary: [
      { word: 'χόμπι', pronunciation: 'HÓ-bi', part_of_speech: 'noun (n, indeclinable)', translation: 'hobby', example_sentence: 'Τι χόμπι έχεις;', example_translation: 'What hobbies do you have?' },
      { word: 'ποδόσφαιρο', pronunciation: 'po-DÓ-sfe-ro', part_of_speech: 'noun (n)', translation: 'football / soccer', example_sentence: 'Μου αρέσει πολύ το ποδόσφαιρο.', example_translation: 'I like football very much.' },
      { word: 'κιθάρα', pronunciation: 'ki-THÁ-ra', part_of_speech: 'noun (f)', translation: 'guitar', example_sentence: 'Παίζω κιθάρα από μικρός.', example_translation: 'I\'ve been playing guitar since I was young.' },
      { word: 'ζωγραφική', pronunciation: 'zo-gra-fi-KÍ', part_of_speech: 'noun (f)', translation: 'painting / drawing', example_sentence: 'Ασχολούμαι με τη ζωγραφική τα Σαββατοκύριακα.', example_translation: 'I do painting at weekends.' },
      { word: 'διάβασμα', pronunciation: 'diá-vas-ma', part_of_speech: 'noun (n)', translation: 'reading', example_sentence: 'Το διάβασμα είναι το αγαπημένο μου χόμπι.', example_translation: 'Reading is my favourite hobby.' },
      { word: 'ελεύθερος χρόνος', pronunciation: 'e-LEF-the-ros HRÓ-nos', part_of_speech: 'noun phrase (m)', translation: 'free time', example_sentence: 'Στον ελεύθερο χρόνο μου παίζω μουσική.', example_translation: 'In my free time I play music.' },
    ],
    exercises: [
      { question: 'How do you say "I like music"? (Μου αρέσει...)', correct_answer: 'Μου αρέσει η μουσική.', hint_text: 'Music is singular, so use αρέσει', display_order: 1 },
      { question: 'How do you say "I like books"? What changes from the previous answer?', correct_answer: 'Μου αρέσουν τα βιβλία.', hint_text: 'Books are plural, so the verb changes to αρέσουν', display_order: 2 },
      { question: 'What does "Προτιμώ να κολυμπώ" mean?', correct_answer: 'I prefer to swim', hint_text: 'κολυμπώ means to swim', display_order: 3 },
      { question: 'How do you ask "Do you like football"? (Σου αρέσει...)', correct_answer: 'Σου αρέσει το ποδόσφαιρο;', hint_text: 'Change μου to σου to ask "you"', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Τι Κάνεις στον Ελεύθερο Χρόνο Σου; (What Do You Do in Your Free Time?)',
        greek_text: '— Τι κάνεις συνήθως στον ελεύθερο χρόνο σου;\n— Μου αρέσουν πολλά πράγματα. Ασχολούμαι με τη φωτογραφία και παίζω κιθάρα. Σου αρέσει η μουσική;\n— Ναι, πολύ! Εγώ προτιμώ να ακούω μουσική παρά να την παίζω. Πηγαίνεις και σε αθλητικές δραστηριότητες;\n— Κολυμπώ δύο φορές την εβδομάδα. Δεν μου αρέσει το γυμναστήριο.',
        english_translation: '— What do you usually do in your free time?\n— I like many things. I do photography and play guitar. Do you like music?\n— Yes, very much! I prefer to listen to music rather than play it. Do you also do sports?\n— I swim twice a week. I don\'t like the gym.',
        annotation_note: 'παρά = rather than (in comparisons). φωτογραφία = photography. δραστηριότητες = activities. γυμναστήριο = gym.',
      },
    ],
  },

  // ─── 8. Weather and the Seasons ───────────────────────────────────────────
  {
    meta: {
      title: 'Weather and the Seasons',
      greek_title: 'Καιρός και Εποχές',
      tags: ['weather', 'seasons', 'impersonal verbs', 'future', 'nature'],
      focus: 'Describe weather conditions and seasons using impersonal verbs and make weather-related plans.',
      grammar_title: 'Impersonal Weather Verbs and Κάνει',
      grammar_rule_summary: 'Greek uses impersonal verbs for weather — 3rd person singular with no subject: Βρέχει (it rains), Χιονίζει (it snows), Φυσάει (it\'s windy). Temperature and general conditions use κάνει: Κάνει ζέστη / κρύο / καλό καιρό.',
      culture_note: 'Greece has a Mediterranean climate — hot dry summers and mild wet winters. August is peak tourist season; Greeks themselves escape the city heat for the beach or ancestral village. The Greek summer (καλοκαίρι) is almost synonymous with the sea.',
      level: 'B1',
    },
    grammarPoints: [
      { greek_text: 'Βρέχει. / Χιονίζει. / Φυσάει.', romanization: 'VRÉ-hi. / hio-NÍ-zi. / fi-SÁ-i.', note: 'Impersonal weather verbs: it rains, it snows, it\'s windy. Used in 3rd person singular with no subject pronoun — no "it" in Greek.', display_order: 1 },
      { greek_text: 'Κάνει ζέστη / κρύο / καλό καιρό.', romanization: 'KÁ-ni ZÉ-sti / KRÍO / ka-LÓ ke-RÓ.', note: 'κάνει + noun for general weather conditions: it\'s hot, it\'s cold, the weather is nice.', display_order: 2 },
      { greek_text: 'Ο καιρός είναι συννεφιασμένος / ηλιόλουστος.', romanization: 'O ke-RÓS Í-ne si-ne-fias-MÉ-nos / i-lio-LÚ-stos.', note: 'Describing weather with adjectives after είναι: cloudy (συννεφιασμένος), sunny (ηλιόλουστος).', display_order: 3 },
      { greek_text: 'Θα βρέξει. / Θα έχει ήλιο.', romanization: 'Tha VRÉ-ksi. / Tha É-hi Í-lio.', note: 'Future weather: it will rain / it will be sunny. θα + subjunctive of impersonal verb. Used for forecasts.', display_order: 4 },
    ],
    vocabulary: [
      { word: 'καιρός', pronunciation: 'ke-RÓS', part_of_speech: 'noun (m)', translation: 'weather', example_sentence: 'Τι καιρό κάνει σήμερα;', example_translation: 'What\'s the weather like today?' },
      { word: 'θερμοκρασία', pronunciation: 'ther-mo-kra-SÍ-a', part_of_speech: 'noun (f)', translation: 'temperature', example_sentence: 'Η θερμοκρασία φτάνει τους σαράντα βαθμούς.', example_translation: 'The temperature reaches forty degrees.' },
      { word: 'βροχή', pronunciation: 'vro-HÍ', part_of_speech: 'noun (f)', translation: 'rain', example_sentence: 'Πάρε ομπρέλα — έρχεται βροχή.', example_translation: 'Take an umbrella — rain is coming.' },
      { word: 'χιόνι', pronunciation: 'HIO-ni', part_of_speech: 'noun (n)', translation: 'snow', example_sentence: 'Σπάνια χιονίζει στην Αθήνα.', example_translation: 'It rarely snows in Athens.' },
      { word: 'καλοκαίρι', pronunciation: 'ka-lo-KÉ-ri', part_of_speech: 'noun (n)', translation: 'summer', example_sentence: 'Το καλοκαίρι στην Ελλάδα είναι πολύ ζεστό.', example_translation: 'Summer in Greece is very hot.' },
      { word: 'χειμώνας', pronunciation: 'hi-MÓ-nas', part_of_speech: 'noun (m)', translation: 'winter', example_sentence: 'Ο χειμώνας στη βόρεια Ελλάδα είναι κρύος.', example_translation: 'Winter in northern Greece is cold.' },
    ],
    exercises: [
      { question: 'How do you say "It\'s raining" in Greek?', correct_answer: 'Βρέχει.', hint_text: 'Greek uses an impersonal verb — no "it" subject needed', display_order: 1 },
      { question: 'How do you say "It\'s hot"? (Κάνει...)', correct_answer: 'Κάνει ζέστη.', hint_text: 'Use κάνει + the noun for heat', display_order: 2 },
      { question: 'What does "Θα χιονίσει" mean?', correct_answer: 'It will snow', hint_text: 'θα signals future tense; χιονίζει = it snows', display_order: 3 },
      { question: 'How do you describe "sunny" weather using an adjective? (ηλιό...)', correct_answer: 'ηλιόλουστος', hint_text: 'It combines ήλιος (sun) + λουστός', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Η Πρόγνωση του Καιρού (The Weather Forecast)',
        greek_text: 'Σήμερα ο καιρός είναι συννεφιασμένος με πιθανότητα βροχής το απόγευμα. Η θερμοκρασία θα φτάσει τους δεκαοκτώ βαθμούς. Αύριο ο καιρός θα βελτιωθεί. Θα έχει ήλιο και η θερμοκρασία θα ανέβει στους είκοσι τέσσερις βαθμούς. Το Σαββατοκύριακο αναμένονται καταιγίδες στα βόρεια.',
        english_translation: 'Today the weather is cloudy with a chance of rain in the afternoon. The temperature will reach eighteen degrees. Tomorrow the weather will improve. It will be sunny and the temperature will rise to twenty-four degrees. At the weekend, storms are expected in the north.',
        annotation_note: 'πιθανότητα = chance/probability. βελτιωθεί = will improve (future of βελτιώνομαι). αναμένονται = are expected. καταιγίδες = storms.',
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
