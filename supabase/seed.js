// Run with: node --env-file=.env supabase/seed.js
// Requires SUPABASE_SERVICE_ROLE_KEY in .env (not the anon key — needs insert permissions)

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const lessons = [
  // ─── 1. Greetings and Introductions ───────────────────────────────────────
  {
    meta: {
      title: 'Greetings and Introductions',
      greek_title: 'Χαιρετισμοί και Συστάσεις',
      tags: ['greetings', 'introductions', 'basic'],
      focus: 'Learn how to greet people, introduce yourself, and say goodbye in Greek.',
      grammar_title: 'Formal vs Informal Address',
      grammar_rule_summary: 'Greek distinguishes between informal (εσύ) and formal (εσείς) address. Greetings adapt accordingly: Γεια σου is informal, Γεια σας is formal or plural.',
      culture_note: 'In Greece, it\'s common to greet acquaintances with a kiss on both cheeks. Γεια is used for both hello and goodbye.',
      level: 'A1',
    },
    grammarPoints: [
      { greek_text: 'Γεια σου', romanization: 'Yia su', note: 'Informal hello/goodbye. Use with friends, family, and children.', display_order: 1 },
      { greek_text: 'Γεια σας', romanization: 'Yia sas', note: 'Formal or plural hello/goodbye. Use with strangers, elders, or groups.', display_order: 2 },
      { greek_text: 'Με λένε Μαρία.', romanization: 'Me léne María.', note: 'My name is Maria. Literally "They call me Maria." The most natural way to introduce yourself.', display_order: 3 },
      { greek_text: 'Χαίρω πολύ.', romanization: 'Héro polí.', note: 'Nice to meet you. A formal expression used when being introduced.', display_order: 4 },
    ],
    vocabulary: [
      { word: 'γεια', pronunciation: 'YAH', part_of_speech: 'interjection', translation: 'hi / bye', example_sentence: 'Γεια σου, Νίκο!', example_translation: 'Hi, Nikos!' },
      { word: 'καλημέρα', pronunciation: 'ka-lee-MÉ-ra', part_of_speech: 'interjection', translation: 'good morning', example_sentence: 'Καλημέρα! Τι κάνεις;', example_translation: 'Good morning! How are you?' },
      { word: 'καλησπέρα', pronunciation: 'ka-lee-SPÉ-ra', part_of_speech: 'interjection', translation: 'good evening', example_sentence: 'Καλησπέρα, κυρία Παπαδοπούλου.', example_translation: 'Good evening, Mrs Papadopoulou.' },
      { word: 'ευχαριστώ', pronunciation: 'ef-ha-ree-STÓ', part_of_speech: 'interjection', translation: 'thank you', example_sentence: 'Ευχαριστώ πολύ!', example_translation: 'Thank you very much!' },
      { word: 'παρακαλώ', pronunciation: 'pa-ra-ka-LÓ', part_of_speech: 'interjection', translation: 'please / you\'re welcome', example_sentence: 'Παρακαλώ, κάτσε.', example_translation: 'Please, sit down.' },
      { word: 'συγνώμη', pronunciation: 'seeg-NÓ-mee', part_of_speech: 'interjection', translation: 'excuse me / sorry', example_sentence: 'Συγνώμη, πού είναι η τουαλέτα;', example_translation: 'Excuse me, where is the bathroom?' },
    ],
    exercises: [
      { question: 'How do you say "hello" informally in Greek? (Γεια...)', correct_answer: 'Γεια σου', hint_text: 'Use the informal version with σου', display_order: 1 },
      { question: 'How do you introduce yourself? Complete: Με λένε... (My name is Kostas)', correct_answer: 'Με λένε Κώστας', hint_text: 'Use Με λένε followed by the name', display_order: 2 },
      { question: 'What is the Greek word for "good morning"? (Καλη...)', correct_answer: 'Καλημέρα', hint_text: 'Good morning is one word in Greek', display_order: 3 },
      { question: 'Translate: "Nice to meet you." (Formal Greek expression)', correct_answer: 'Χαίρω πολύ', hint_text: 'The verb χαίρω means "to be glad"', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Μια Γνωριμία (A Meeting)',
        greek_text: '— Γεια σου! Με λένε Μαρία. Εσένα πώς σε λένε;\n— Γεια! Με λένε Νίκος. Χαίρω πολύ.\n— Χαίρω πολύ κι εγώ, Νίκο!',
        english_translation: '— Hi! My name is Maria. What\'s your name?\n— Hi! My name is Nikos. Nice to meet you.\n— Nice to meet you too, Nikos!',
        annotation_note: 'κι εγώ means "me too" or "I too". The vocative form of Νίκος is Νίκο.',
      },
    ],
  },

  // ─── 2. Numbers 1–20 ──────────────────────────────────────────────────────
  {
    meta: {
      title: 'Numbers 1–20',
      greek_title: 'Αριθμοί 1–20',
      tags: ['numbers', 'counting', 'basic'],
      focus: 'Learn to count from 1 to 20 in Greek and understand how numbers agree with nouns.',
      grammar_title: 'Cardinal Numbers and Gender Agreement',
      grammar_rule_summary: 'Numbers 1, 3, and 4 change form to agree with the gender of the noun they modify. The number 2 has two forms: δύο (standard) and δυο (informal).',
      culture_note: 'Greeks use the same Hindu-Arabic numerals (1, 2, 3…) as most of the world, but knowing the spoken words is essential for prices, phone numbers, and addresses.',
      level: 'A1',
    },
    grammarPoints: [
      { greek_text: 'ένας / μία / ένα', romanization: 'é-nas / mí-a / é-na', note: 'The number 1 has three gender forms: masculine (ένας), feminine (μία), neuter (ένα).', display_order: 1 },
      { greek_text: 'τρεις / τρία', romanization: 'trees / trí-a', note: 'The number 3: τρεις for masculine/feminine nouns, τρία for neuter nouns.', display_order: 2 },
      { greek_text: 'έντεκα, δώδεκα, δεκατρία...', romanization: 'én-de-ka, dó-de-ka, de-ka-trí-a', note: 'Numbers 11–19: έντεκα (11), δώδεκα (12), then δεκα- + unit: δεκατρία (13), δεκατέσσερα (14)...', display_order: 3 },
      { greek_text: 'είκοσι', romanization: 'í-ko-si', note: 'Twenty. Numbers 21–29: είκοσι + unit (e.g. είκοσι ένα = 21).', display_order: 4 },
    ],
    vocabulary: [
      { word: 'ένα', pronunciation: 'É-na', part_of_speech: 'numeral', translation: 'one (neuter)', example_sentence: 'Θέλω ένα καφέ.', example_translation: 'I want one coffee.' },
      { word: 'πέντε', pronunciation: 'PÉN-de', part_of_speech: 'numeral', translation: 'five', example_sentence: 'Έχω πέντε ευρώ.', example_translation: 'I have five euros.' },
      { word: 'δέκα', pronunciation: 'DÉ-ka', part_of_speech: 'numeral', translation: 'ten', example_sentence: 'Είναι δέκα η ώρα.', example_translation: 'It is ten o\'clock.' },
      { word: 'δεκαπέντε', pronunciation: 'de-ka-PÉN-de', part_of_speech: 'numeral', translation: 'fifteen', example_sentence: 'Η λεωφορός φεύγει σε δεκαπέντε λεπτά.', example_translation: 'The bus leaves in fifteen minutes.' },
      { word: 'είκοσι', pronunciation: 'Í-ko-si', part_of_speech: 'numeral', translation: 'twenty', example_sentence: 'Είμαι είκοσι χρονών.', example_translation: 'I am twenty years old.' },
      { word: 'αριθμός', pronunciation: 'a-reeth-MÓS', part_of_speech: 'noun (m)', translation: 'number', example_sentence: 'Ποιος είναι ο αριθμός σου;', example_translation: 'What is your number?' },
    ],
    exercises: [
      { question: 'Write the number 3 in Greek (masculine/feminine form)', correct_answer: 'τρεις', hint_text: 'Three changes form depending on the noun\'s gender', display_order: 1 },
      { question: 'How do you say "fifteen" in Greek?', correct_answer: 'δεκαπέντε', hint_text: 'It combines δεκα (ten) + πέντε (five)', display_order: 2 },
      { question: 'What is the neuter form of the number 1?', correct_answer: 'ένα', hint_text: 'The three forms are ένας, μία, ένα', display_order: 3 },
      { question: 'How do you say "twenty" in Greek?', correct_answer: 'είκοσι', hint_text: 'This is the base for all numbers 21–29', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Στην Αγορά (At the Market)',
        greek_text: '— Πόσα μήλα θέλετε;\n— Θέλω πέντε μήλα, παρακαλώ.\n— Και πόσες πατάτες;\n— Δώστε μου δέκα. Πόσο κάνουν;\n— Κάνουν είκοσι ευρώ.',
        english_translation: '— How many apples do you want?\n— I want five apples, please.\n— And how many potatoes?\n— Give me ten. How much do they cost?\n— They cost twenty euros.',
        annotation_note: 'πόσα/πόσες means "how many" and agrees with the noun\'s gender. δώστε μου means "give me" (formal imperative).',
      },
    ],
  },

  // ─── 3. Days and Months ───────────────────────────────────────────────────
  {
    meta: {
      title: 'Days and Months',
      greek_title: 'Μέρες και Μήνες',
      tags: ['time', 'calendar', 'days', 'months'],
      focus: 'Learn the days of the week and months of the year, and how to talk about schedules.',
      grammar_title: 'Days and Months as Nouns',
      grammar_rule_summary: 'Days of the week and months are not capitalised in Greek. Days are mostly feminine (η Δευτέρα), while months are masculine (ο Ιανουάριος). Use "την" before a day and "τον" before a month.',
      culture_note: 'The Greek week traditionally starts on Monday (Δευτέρα). Sunday is Κυριακή, from Κύριος (Lord), reflecting Greece\'s strong Orthodox Christian tradition.',
      level: 'A1',
    },
    grammarPoints: [
      { greek_text: 'Την Δευτέρα πηγαίνω στη δουλειά.', romanization: 'Teen Deftéra pee-YÉ-no stee doo-leiá.', note: 'Use "την" (accusative of η) before feminine days to mean "on Monday". Most days are feminine.', display_order: 1 },
      { greek_text: 'Τον Ιανουάριο κάνει κρύο.', romanization: 'Ton Ia-noo-á-rio ká-nei krí-o.', note: 'Use "τον" (accusative of ο) before masculine months to mean "in January".', display_order: 2 },
      { greek_text: 'Σήμερα είναι Τετάρτη.', romanization: 'Sí-me-ra í-ne Te-tár-ti.', note: 'To say what day it is: Σήμερα είναι + day name.', display_order: 3 },
      { greek_text: 'Τι μέρα είναι σήμερα;', romanization: 'Ti mé-ra í-ne sí-me-ra?', note: 'To ask what day it is today. Σήμερα = today.', display_order: 4 },
    ],
    vocabulary: [
      { word: 'Δευτέρα', pronunciation: 'def-TÉ-ra', part_of_speech: 'noun (f)', translation: 'Monday', example_sentence: 'Την Δευτέρα έχω μάθημα.', example_translation: 'On Monday I have class.' },
      { word: 'Παρασκευή', pronunciation: 'pa-ra-ske-VÍ', part_of_speech: 'noun (f)', translation: 'Friday', example_sentence: 'Την Παρασκευή βγαίνουμε έξω.', example_translation: 'On Friday we go out.' },
      { word: 'Σάββατο', pronunciation: 'SÁ-va-to', part_of_speech: 'noun (n)', translation: 'Saturday', example_sentence: 'Το Σάββατο κοιμάμαι αργά.', example_translation: 'On Saturday I sleep late.' },
      { word: 'Ιανουάριος', pronunciation: 'ia-noo-Á-rios', part_of_speech: 'noun (m)', translation: 'January', example_sentence: 'Τον Ιανουάριο κάνει πολύ κρύο.', example_translation: 'In January it is very cold.' },
      { word: 'μήνας', pronunciation: 'MÍ-nas', part_of_speech: 'noun (m)', translation: 'month', example_sentence: 'Ποιος μήνας είναι;', example_translation: 'Which month is it?' },
      { word: 'εβδομάδα', pronunciation: 'ev-do-MÁ-da', part_of_speech: 'noun (f)', translation: 'week', example_sentence: 'Η εβδομάδα έχει επτά μέρες.', example_translation: 'The week has seven days.' },
    ],
    exercises: [
      { question: 'How do you say "on Monday" in Greek? (την...)', correct_answer: 'την Δευτέρα', hint_text: 'Use την before the feminine day name', display_order: 1 },
      { question: 'What is "Friday" in Greek?', correct_answer: 'Παρασκευή', hint_text: 'It sounds similar to the Greek name Paraskevi', display_order: 2 },
      { question: 'How do you ask "What day is it today?" in Greek?', correct_answer: 'Τι μέρα είναι σήμερα;', hint_text: 'Σήμερα means "today"', display_order: 3 },
      { question: 'What is the Greek word for "week"?', correct_answer: 'εβδομάδα', hint_text: 'It comes from the word for seven (επτά)', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Η Εβδομάδα Μου (My Week)',
        greek_text: 'Τη Δευτέρα και την Τετάρτη πηγαίνω στη δουλειά νωρίς. Την Παρασκευή βγαίνω με φίλους. Το Σάββατο πηγαίνω στην αγορά. Την Κυριακή ξεκουράζομαι.',
        english_translation: 'On Monday and Wednesday I go to work early. On Friday I go out with friends. On Saturday I go to the market. On Sunday I rest.',
        annotation_note: 'νωρίς means "early". ξεκουράζομαι is a reflexive verb meaning "I rest / I relax".',
      },
    ],
  },

  // ─── 4. Colors and Adjectives ─────────────────────────────────────────────
  {
    meta: {
      title: 'Colors and Adjectives',
      greek_title: 'Χρώματα και Επίθετα',
      tags: ['colors', 'adjectives', 'descriptive'],
      focus: 'Learn colour vocabulary and how to make adjectives agree with the nouns they describe.',
      grammar_title: 'Adjective Agreement with Nouns',
      grammar_rule_summary: 'Greek adjectives agree in gender, number, and case with the noun they modify. Most adjectives follow the -ος/-η/-ο pattern for masculine/feminine/neuter.',
      culture_note: 'Blue and white (μπλε και άσπρο) are the national colours of Greece, representing the sea and sky. They appear on the Greek flag.',
      level: 'A1',
    },
    grammarPoints: [
      { greek_text: 'κόκκινος / κόκκινη / κόκκινο', romanization: 'kó-ki-nos / kó-ki-ni / kó-ki-no', note: 'Three-ending adjectives: -ος (m), -η (f), -ο (n). E.g. ο κόκκινος τοίχος, η κόκκινη τσάντα, το κόκκινο αυτοκίνητο.', display_order: 1 },
      { greek_text: 'μπλε (indeclinable)', romanization: 'ble', note: 'Some adjectives, especially borrowed words like μπλε, do not change form for any gender or case.', display_order: 2 },
      { greek_text: 'Η τσάντα είναι κόκκινη.', romanization: 'I tsán-da í-ne kó-ki-ni.', note: 'In predicative position (after είναι), the adjective still agrees with the noun\'s gender.', display_order: 3 },
      { greek_text: 'πολύ + επίθετο', romanization: 'po-LÍ', note: 'Use πολύ before an adjective to mean "very": πολύ μεγάλος (very big), πολύ όμορφη (very beautiful).', display_order: 4 },
    ],
    vocabulary: [
      { word: 'κόκκινος', pronunciation: 'KÓ-kee-nos', part_of_speech: 'adjective', translation: 'red', example_sentence: 'Το τριαντάφυλλο είναι κόκκινο.', example_translation: 'The rose is red.' },
      { word: 'μπλε', pronunciation: 'BLE', part_of_speech: 'adjective (indeclinable)', translation: 'blue', example_sentence: 'Η θάλασσα είναι μπλε.', example_translation: 'The sea is blue.' },
      { word: 'πράσινος', pronunciation: 'PRÁ-see-nos', part_of_speech: 'adjective', translation: 'green', example_sentence: 'Τα φύλλα είναι πράσινα.', example_translation: 'The leaves are green.' },
      { word: 'άσπρος', pronunciation: 'Á-spros', part_of_speech: 'adjective', translation: 'white', example_sentence: 'Ο τοίχος είναι άσπρος.', example_translation: 'The wall is white.' },
      { word: 'μαύρος', pronunciation: 'MÁV-ros', part_of_speech: 'adjective', translation: 'black', example_sentence: 'Έχω έναν μαύρο σκύλο.', example_translation: 'I have a black dog.' },
      { word: 'μεγάλος', pronunciation: 'me-GHÁ-los', part_of_speech: 'adjective', translation: 'big / large', example_sentence: 'Η Αθήνα είναι μια μεγάλη πόλη.', example_translation: 'Athens is a big city.' },
    ],
    exercises: [
      { question: 'What is the feminine form of κόκκινος? (κόκκιν...)', correct_answer: 'κόκκινη', hint_text: 'Feminine adjectives ending in -ος change to -η', display_order: 1 },
      { question: 'How do you say "The sea is blue" in Greek? (Η θάλασσα...)', correct_answer: 'Η θάλασσα είναι μπλε.', hint_text: 'μπλε is indeclinable — it never changes form', display_order: 2 },
      { question: 'What is the neuter form of πράσινος? (πράσιν...)', correct_answer: 'πράσινο', hint_text: 'Neuter adjectives end in -ο', display_order: 3 },
      { question: 'How do you say "very big" in Greek?', correct_answer: 'πολύ μεγάλος', hint_text: 'Use πολύ before the adjective', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Το Δωμάτιό Μου (My Room)',
        greek_text: 'Το δωμάτιό μου είναι μικρό αλλά όμορφο. Οι τοίχοι είναι άσπροι. Η πόρτα είναι καφέ και τα παράθυρα είναι μεγάλα. Έχω μια μπλε καρέκλα και έναν πράσινο καναπέ.',
        english_translation: 'My room is small but beautiful. The walls are white. The door is brown and the windows are large. I have a blue chair and a green sofa.',
        annotation_note: 'μικρό and όμορφο are neuter to agree with δωμάτιο. Note how τοίχος (masculine) makes its adjective άσπροι (plural masculine).',
      },
    ],
  },

  // ─── 5. Family Members ────────────────────────────────────────────────────
  {
    meta: {
      title: 'Family Members',
      greek_title: 'Μέλη της Οικογένειας',
      tags: ['family', 'relationships', 'possessives'],
      focus: 'Learn vocabulary for family members and how to talk about your family using possessives.',
      grammar_title: 'Possessives with Family Nouns',
      grammar_rule_summary: 'In Greek, possession is shown by placing a weak pronoun (μου, σου, του, της, μας, σας, τους) after the noun. The definite article is always required before the noun.',
      culture_note: 'Family (οικογένεια) is central to Greek culture. Extended families often gather for Sunday lunch. Grandparents (παππούς and γιαγιά) play an active role in raising grandchildren.',
      level: 'A1',
    },
    grammarPoints: [
      { greek_text: 'η μαμά μου / ο μπαμπάς μου', romanization: 'i ma-MÁ moo / o ba-BÁS moo', note: 'Possessives follow the noun. The article (η/ο) is always needed: η μαμά μου (my mum), ο μπαμπάς μου (my dad).', display_order: 1 },
      { greek_text: 'ο αδερφός μου / η αδερφή μου', romanization: 'o a-der-FÓS moo / i a-der-FÍ moo', note: 'Brother and sister differ only in gender: αδερφός (m) vs αδερφή (f). The possessive μου stays the same.', display_order: 2 },
      { greek_text: 'Έχω δύο αδέρφια.', romanization: 'É-ho dí-o a-DÉR-fia.', note: 'Siblings together use the neuter plural αδέρφια. Έχω = I have.', display_order: 3 },
      { greek_text: 'Πώς λέγεται η οικογένειά σου;', romanization: 'Pos lé-ye-te i oi-ko-YÉ-nia su?', note: 'A natural way to ask about someone\'s family. Literally: "How is your family called?"', display_order: 4 },
    ],
    vocabulary: [
      { word: 'μαμά', pronunciation: 'ma-MÁ', part_of_speech: 'noun (f)', translation: 'mum / mom', example_sentence: 'Η μαμά μου μαγειρεύει πολύ καλά.', example_translation: 'My mum cooks very well.' },
      { word: 'μπαμπάς', pronunciation: 'ba-BÁS', part_of_speech: 'noun (m)', translation: 'dad', example_sentence: 'Ο μπαμπάς μου είναι γιατρός.', example_translation: 'My dad is a doctor.' },
      { word: 'αδερφός', pronunciation: 'a-der-FÓS', part_of_speech: 'noun (m)', translation: 'brother', example_sentence: 'Ο αδερφός μου μένει στην Αθήνα.', example_translation: 'My brother lives in Athens.' },
      { word: 'αδερφή', pronunciation: 'a-der-FÍ', part_of_speech: 'noun (f)', translation: 'sister', example_sentence: 'Η αδερφή μου σπουδάζει ιατρική.', example_translation: 'My sister studies medicine.' },
      { word: 'παππούς', pronunciation: 'pa-POÓS', part_of_speech: 'noun (m)', translation: 'grandfather', example_sentence: 'Ο παππούς μου είναι ογδόντα χρονών.', example_translation: 'My grandfather is eighty years old.' },
      { word: 'γιαγιά', pronunciation: 'ya-YÁ', part_of_speech: 'noun (f)', translation: 'grandmother', example_sentence: 'Η γιαγιά μου φτιάχνει τέλεια μουσακά.', example_translation: 'My grandmother makes perfect moussaka.' },
    ],
    exercises: [
      { question: 'How do you say "my mum" in Greek?', correct_answer: 'η μαμά μου', hint_text: 'Remember to include the article η before the noun', display_order: 1 },
      { question: 'What is the Greek word for "brother"?', correct_answer: 'αδερφός', hint_text: 'The feminine form is αδερφή', display_order: 2 },
      { question: 'How do you say "I have two siblings" in Greek? (Έχω δύο...)', correct_answer: 'Έχω δύο αδέρφια.', hint_text: 'Siblings together use the neuter plural form', display_order: 3 },
      { question: 'What is the Greek word for "grandmother"?', correct_answer: 'γιαγιά', hint_text: 'A warm, informal word — similar to Italian "nonna"', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Η Οικογένειά Μου (My Family)',
        greek_text: 'Έχω μια μικρή οικογένεια. Ο μπαμπάς μου λέγεται Γιώργης και η μαμά μου λέγεται Ελένη. Έχω έναν αδερφό, τον Πέτρο. Ο παππούς και η γιαγιά μου μένουν κοντά μας.',
        english_translation: 'I have a small family. My dad is called Giorgis and my mum is called Eleni. I have one brother, Petros. My grandfather and grandmother live near us.',
        annotation_note: 'λέγεται means "is called/named". μένουν means "they live/stay". κοντά μας means "near us".',
      },
    ],
  },

  // ─── 6. Food and Drink ────────────────────────────────────────────────────
  {
    meta: {
      title: 'Food and Drink',
      greek_title: 'Φαγητό και Ποτό',
      tags: ['food', 'drink', 'ordering', 'café'],
      focus: 'Learn food and drink vocabulary and how to order at a Greek café or taverna.',
      grammar_title: 'Ordering with the Accusative Case',
      grammar_rule_summary: 'When ordering or expressing what you want, the direct object takes the accusative case. Masculine articles change ο→τον. Use θέλω (I want) or θα ήθελα (I would like, more polite).',
      culture_note: 'Greek coffee culture is strong. The freddo espresso (φρέντο εσπρέσο) — espresso poured over ice — was invented in Greece and is now popular worldwide. In a traditional kafeneio, regulars gather to play backgammon.',
      level: 'A2',
    },
    grammarPoints: [
      { greek_text: 'Θέλω έναν καφέ.', romanization: 'Thé-lo é-nan ka-FÉ.', note: 'θέλω (I want) + accusative. Masculine καφές becomes έναν καφέ in the accusative.', display_order: 1 },
      { greek_text: 'Θέλω μία σαλάτα.', romanization: 'Thé-lo mí-a sa-LÁ-ta.', note: 'Feminine nouns like σαλάτα stay the same in the accusative singular.', display_order: 2 },
      { greek_text: 'Δεν θέλω ζάχαρη.', romanization: 'Den thé-lo ZÁ-ha-ri.', note: 'To say you don\'t want something, add δεν before the verb: δεν θέλω (I don\'t want).', display_order: 3 },
      { greek_text: 'Τι θα πάρετε;', romanization: 'Ti tha PÁ-re-te?', note: 'The standard phrase a waiter uses: "What will you have?" Literally "What will you take?"', display_order: 4 },
    ],
    vocabulary: [
      { word: 'καφές', pronunciation: 'ka-FÉS', part_of_speech: 'noun (m)', translation: 'coffee', example_sentence: 'Πίνω έναν καφέ κάθε πρωί.', example_translation: 'I drink a coffee every morning.' },
      { word: 'νερό', pronunciation: 'ne-RÓ', part_of_speech: 'noun (n)', translation: 'water', example_sentence: 'Μπορώ να έχω ένα ποτήρι νερό;', example_translation: 'Can I have a glass of water?' },
      { word: 'ψωμί', pronunciation: 'pso-MÍ', part_of_speech: 'noun (n)', translation: 'bread', example_sentence: 'Το ψωμί είναι φρέσκο.', example_translation: 'The bread is fresh.' },
      { word: 'τυρί', pronunciation: 'tee-RÍ', part_of_speech: 'noun (n)', translation: 'cheese', example_sentence: 'Η φέτα είναι ελληνικό τυρί.', example_translation: 'Feta is a Greek cheese.' },
      { word: 'ελιές', pronunciation: 'e-LIÉS', part_of_speech: 'noun (f, plural)', translation: 'olives', example_sentence: 'Οι ελιές είναι πολύ νόστιμες.', example_translation: 'The olives are very tasty.' },
      { word: 'κρασί', pronunciation: 'kra-SÍ', part_of_speech: 'noun (n)', translation: 'wine', example_sentence: 'Θα ήθελα ένα ποτήρι κρασί.', example_translation: 'I would like a glass of wine.' },
    ],
    exercises: [
      { question: 'How do you order a coffee in Greek? (Θέλω...)', correct_answer: 'Θέλω έναν καφέ.', hint_text: 'Masculine nouns use έναν in the accusative', display_order: 1 },
      { question: 'How does a waiter ask "What will you have?" in Greek?', correct_answer: 'Τι θα πάρετε;', hint_text: 'πάρετε comes from the verb παίρνω (to take)', display_order: 2 },
      { question: 'How do you say "I don\'t want sugar" in Greek? (Δεν...)', correct_answer: 'Δεν θέλω ζάχαρη.', hint_text: 'Use δεν before the verb to negate it', display_order: 3 },
      { question: 'What is the Greek word for "wine"?', correct_answer: 'κρασί', hint_text: 'It\'s a neuter noun', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Σε Ένα Καφενείο (At a Café)',
        greek_text: '— Καλημέρα! Τι θα πάρετε;\n— Θέλω έναν ελληνικό καφέ, παρακαλώ. Και λίγο ψωμί με τυρί.\n— Αμέσως. Θέλετε και νερό;\n— Ναι, παρακαλώ. Ευχαριστώ πολύ!',
        english_translation: '— Good morning! What will you have?\n— I want a Greek coffee, please. And some bread with cheese.\n— Right away. Would you like water too?\n— Yes, please. Thank you very much!',
        annotation_note: 'αμέσως means "right away". λίγο means "a little / some". The Greek coffee (ελληνικός καφές) is served unfiltered in a small cup.',
      },
    ],
  },

  // ─── 7. Basic Verbs: είμαι, έχω, θέλω ───────────────────────────────────
  {
    meta: {
      title: 'Basic Verbs: To Be, To Have, To Want',
      greek_title: 'Βασικά Ρήματα: Είμαι, Έχω, Θέλω',
      tags: ['verbs', 'grammar', 'conjugation', 'core'],
      focus: 'Master the three most essential Greek verbs and their present-tense conjugations.',
      grammar_title: 'Present Tense of Core Verbs',
      grammar_rule_summary: 'Greek verbs change ending for each person. Subject pronouns (εγώ, εσύ, αυτός…) are optional since the ending already indicates the person. Negation uses δεν before the verb.',
      culture_note: 'Because verb endings carry the person information, Greeks often drop the subject pronoun in conversation: "Είμαι καλά" (I\'m well) rather than "Εγώ είμαι καλά". This makes speech sound more natural and fluid.',
      level: 'A1',
    },
    grammarPoints: [
      { greek_text: 'είμαι, είσαι, είναι / είμαστε, είστε, είναι', romanization: 'í-me, í-se, í-ne / í-mas-te, í-ste, í-ne', note: 'Full conjugation of είμαι (to be). Note: 3rd person singular and plural are identical — both are είναι.', display_order: 1 },
      { greek_text: 'έχω, έχεις, έχει / έχουμε, έχετε, έχουν', romanization: 'é-ho, é-his, é-hi / é-hoo-me, é-he-te, é-hoon', note: 'Full conjugation of έχω (to have). Regular -ω verb pattern.', display_order: 2 },
      { greek_text: 'θέλω, θέλεις, θέλει / θέλουμε, θέλετε, θέλουν', romanization: 'thé-lo, thé-lis, thé-li / thé-loo-me, thé-le-te, thé-loon', note: 'Full conjugation of θέλω (to want). Follows the same pattern as έχω.', display_order: 3 },
      { greek_text: 'Δεν είμαι / Δεν έχω / Δεν θέλω', romanization: 'Den í-me / Den é-ho / Den thé-lo', note: 'Negation: place δεν directly before any verb form. Δεν is never separated from its verb.', display_order: 4 },
    ],
    vocabulary: [
      { word: 'είμαι', pronunciation: 'Í-me', part_of_speech: 'verb', translation: 'I am', example_sentence: 'Είμαι φοιτητής.', example_translation: 'I am a student.' },
      { word: 'είναι', pronunciation: 'Í-ne', part_of_speech: 'verb', translation: 'he/she/it is / they are', example_sentence: 'Η Αθήνα είναι μεγάλη πόλη.', example_translation: 'Athens is a big city.' },
      { word: 'έχω', pronunciation: 'É-ho', part_of_speech: 'verb', translation: 'I have', example_sentence: 'Έχω δύο γάτες.', example_translation: 'I have two cats.' },
      { word: 'έχει', pronunciation: 'É-hi', part_of_speech: 'verb', translation: 'he/she/it has', example_sentence: 'Έχει ωραία μάτια.', example_translation: 'She has beautiful eyes.' },
      { word: 'θέλω', pronunciation: 'THÉ-lo', part_of_speech: 'verb', translation: 'I want', example_sentence: 'Θέλω να μάθω ελληνικά.', example_translation: 'I want to learn Greek.' },
      { word: 'δεν', pronunciation: 'DEN', part_of_speech: 'particle', translation: 'not / don\'t / doesn\'t', example_sentence: 'Δεν έχω αδέρφια.', example_translation: 'I don\'t have any siblings.' },
    ],
    exercises: [
      { question: 'Conjugate είμαι for "you" (informal singular): εσύ ___', correct_answer: 'είσαι', hint_text: 'The second person singular of είμαι', display_order: 1 },
      { question: 'How do you say "We have a dog" in Greek? (___ έναν σκύλο)', correct_answer: 'Έχουμε έναν σκύλο.', hint_text: 'Use the 1st person plural of έχω', display_order: 2 },
      { question: 'How do you say "She doesn\'t want coffee"? (Δεν ___ καφέ)', correct_answer: 'Δεν θέλει καφέ.', hint_text: 'Use the 3rd person singular of θέλω with δεν', display_order: 3 },
      { question: 'What is the 3rd person plural of είναι? (They are...)', correct_answer: 'είναι', hint_text: 'It\'s the same as the 3rd person singular in Greek', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Λίγα Λόγια για Μένα (A Few Words About Me)',
        greek_text: 'Γεια σας! Με λένε Σοφία. Είμαι είκοσι πέντε χρονών και είμαι από τη Θεσσαλονίκη. Έχω δύο αδέρφια και έναν σκύλο. Θέλω να μάθω αγγλικά και να ταξιδέψω στην Ευρώπη.',
        english_translation: 'Hello! My name is Sofia. I am twenty-five years old and I am from Thessaloniki. I have two siblings and a dog. I want to learn English and to travel around Europe.',
        annotation_note: 'χρονών means "years old" (genitive plural of χρόνος). να μάθω = "to learn" (subjunctive). να ταξιδέψω = "to travel".',
      },
    ],
  },

  // ─── 8. Asking for Directions ─────────────────────────────────────────────
  {
    meta: {
      title: 'Asking for Directions',
      greek_title: 'Ρωτώντας για Οδηγίες',
      tags: ['directions', 'travel', 'imperatives', 'location'],
      focus: 'Learn to ask for and give directions in Greek using imperatives and location prepositions.',
      grammar_title: 'Imperatives and Prepositions of Place',
      grammar_rule_summary: 'The formal imperative is formed from the 2nd person plural: Πηγαίνετε (Go!), Στρίψτε (Turn!). Key prepositions: σε (at/to), κοντά σε (near), απέναντι από (opposite), δίπλα σε (next to).',
      culture_note: 'In Greece, asking strangers for directions is perfectly normal and welcomed. Expect directions to use landmarks — "the blue church", "the big tree" — rather than street names.',
      level: 'A2',
    },
    grammarPoints: [
      { greek_text: 'Πηγαίνετε ευθεία.', romanization: 'Pi-YÉ-ne-te ef-THÍ-a.', note: 'Formal imperative of πηγαίνω (to go): Πηγαίνετε. Used for giving directions formally or to a group.', display_order: 1 },
      { greek_text: 'Στρίψτε αριστερά / δεξιά.', romanization: 'STRÍ-pste a-ris-te-RÁ / dek-siÁ.', note: 'Formal imperative of στρίβω (to turn): Στρίψτε. Combined with αριστερά (left) or δεξιά (right).', display_order: 2 },
      { greek_text: 'Είναι κοντά / μακριά.', romanization: 'Í-ne kon-TÁ / ma-kriÁ.', note: 'To say something is near or far. Often followed by από: κοντά από εδώ (near here).', display_order: 3 },
      { greek_text: 'Πόσο μακριά είναι;', romanization: 'PÓ-so ma-kriÁ Í-ne?', note: 'How far is it? You can reply with: Είναι πέντε λεπτά με τα πόδια (It\'s five minutes on foot).', display_order: 4 },
    ],
    vocabulary: [
      { word: 'αριστερά', pronunciation: 'a-ris-te-RÁ', part_of_speech: 'adverb', translation: 'left', example_sentence: 'Στρίψτε αριστερά στο φανάρι.', example_translation: 'Turn left at the traffic light.' },
      { word: 'δεξιά', pronunciation: 'dek-siÁ', part_of_speech: 'adverb', translation: 'right', example_sentence: 'Η τράπεζα είναι στα δεξιά.', example_translation: 'The bank is on the right.' },
      { word: 'ευθεία', pronunciation: 'ef-THÍ-a', part_of_speech: 'adverb', translation: 'straight ahead', example_sentence: 'Πηγαίνετε ευθεία για διακόσια μέτρα.', example_translation: 'Go straight for two hundred metres.' },
      { word: 'κοντά', pronunciation: 'kon-TÁ', part_of_speech: 'adverb', translation: 'near / close by', example_sentence: 'Το μουσείο είναι κοντά.', example_translation: 'The museum is nearby.' },
      { word: 'μακριά', pronunciation: 'ma-kriÁ', part_of_speech: 'adverb', translation: 'far', example_sentence: 'Το αεροδρόμιο είναι πολύ μακριά.', example_translation: 'The airport is very far.' },
      { word: 'δρόμος', pronunciation: 'DRÓ-mos', part_of_speech: 'noun (m)', translation: 'road / street', example_sentence: 'Αυτός ο δρόμος οδηγεί στην πλατεία.', example_translation: 'This road leads to the square.' },
    ],
    exercises: [
      { question: 'How do you say "Turn left" formally in Greek? (Στρίψτε...)', correct_answer: 'Στρίψτε αριστερά.', hint_text: 'αριστερά means left', display_order: 1 },
      { question: 'How do you ask "How far is it?" in Greek?', correct_answer: 'Πόσο μακριά είναι;', hint_text: 'Use πόσο (how much/far) + μακριά (far) + είναι (is it)', display_order: 2 },
      { question: 'What does "ευθεία" mean in English?', correct_answer: 'straight ahead', hint_text: 'You hear this when someone says "Go straight"', display_order: 3 },
      { question: 'How do you say "The museum is nearby" in Greek? (Το μουσείο είναι...)', correct_answer: 'Το μουσείο είναι κοντά.', hint_text: 'κοντά is the opposite of μακριά', display_order: 4 },
    ],
    passages: [
      {
        passage_title: 'Πού Είναι το Μουσείο; (Where Is the Museum?)',
        greek_text: '— Συγνώμη, πού είναι το Αρχαιολογικό Μουσείο;\n— Πηγαίνετε ευθεία μέχρι τα φανάρια. Μετά στρίψτε δεξιά. Το μουσείο είναι στα αριστερά σας, δίπλα στο πάρκο.\n— Είναι μακριά;\n— Όχι, είναι πέντε λεπτά με τα πόδια.\n— Ευχαριστώ πολύ!',
        english_translation: '— Excuse me, where is the Archaeological Museum?\n— Go straight until the traffic lights. Then turn right. The museum is on your left, next to the park.\n— Is it far?\n— No, it\'s five minutes on foot.\n— Thank you very much!',
        annotation_note: 'μέχρι means "until/up to". μετά means "then/after". με τα πόδια means "on foot" (literally "with the feet").',
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
