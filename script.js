const holidaysData = {
    2025: [
        { date: '2025-01-01', names: { de: 'Neujahr', ru: 'Новый год', tr: 'Yılbaşı', sq: 'Viti i Ri', ar: 'رأس السنة', hr: 'Nova godina', sk: 'Nový rok', en: 'New Year\'s Day' } },
        { date: '2025-01-06', names: { de: 'Heilige Drei Könige', ru: 'Богоявление', tr: 'Epifani', sq: 'Uji i Bekuar', ar: 'عيد الغطاس', hr: 'Sveta Tri kralja', sk: 'Zjavenie Pána', en: 'Epiphany' } },
        { date: '2025-04-18', names: { de: 'Karfreitag', ru: 'Страстная пятница', tr: 'Kutsal Cuma', sq: 'E Premtja e Madhe', ar: 'الجمعة العظيمة', hr: 'Veliki petak', sk: 'Veľký piatok', en: 'Good Friday' } },
        { date: '2025-04-20', names: { de: 'Ostersonntag', ru: 'Пасха', tr: 'Paskalya Pazarı', sq: 'E Diela e Pashkëve', ar: 'أحد الفصح', hr: 'Uskrsna nedeľa', sk: 'Veľkonočná nedeľa', en: 'Easter Sunday' } },
        { date: '2025-04-21', names: { de: 'Ostermontag', ru: 'Пасхальный понедельник', tr: 'Paskalya Pazartesi', sq: 'E Hëna e Pashkëve', ar: 'اثنين الفصح', hr: 'Uskrsni ponedjeljak', sk: 'Veľkonočný pondelok', en: 'Easter Monday' } },
        { date: '2025-05-01', names: { de: 'Tag der Arbeit', ru: 'День труда', tr: 'İşçi Bayramı', sq: 'Dita e Punës', ar: 'عيد العمال', hr: 'Praznik rada', sk: 'Sviatok práce', en: 'Labour Day' } },
        { date: '2025-05-29', names: { de: 'Christi Himmelfahrt', ru: 'Вознесение Господне', tr: 'İsa\'nın Göğe Yükselişi', sq: 'Dita e Ngritjes së Krishtit', ar: 'عيد الصعود', hr: 'Uzašašće', sk: 'Nanebovstúpenie Pána', en: 'Ascension Day' } },
        { date: '2025-06-08', names: { de: 'Pfingstsonntag', ru: 'Пятидесятница', tr: 'Pentekost Pazarı', sq: 'E Diela e Rrëshajëve', ar: 'أحد العنصë', hr: 'Duhovi', sk: 'Turíce', en: 'Pentecost Sunday' } },
        { date: '2025-06-09', names: { de: 'Pfingstmontag', ru: 'Понедельник Пятидесятницы', tr: 'Pentekost Pazartesi', sq: 'E Hëna e Pashkëve', ar: 'اثنين العنصرة', hr: 'Duhovski ponedjeljak', sk: 'Turíčny pondelok', en: 'Pentecost Monday' } },
        { date: '2025-06-19', names: { de: 'Fronleichnam', ru: 'Празdник Тела и Крови Христовых', tr: 'Katolik Yortusu', sq: 'Corpus Christi', ar: 'عيد القربان', hr: 'Tijelovo', sk: 'Božie Telo', en: 'Corpus Christi' } },
        { date: '2025-08-15', names: { de: 'Mariä Himmelfahrt', ru: 'Успение Пресвятой Богородицы', tr: 'Meryem\'in Göğe Kabulü', sq: 'Fjetja e Shën Mërisë', ar: 'عيد انتقال العذراء', hr: 'Velika Gospa', sk: 'Nanebovzatie Panny Márie', en: 'Assumption Day' } },
        { date: '2025-10-03', names: { de: 'Tag der Deutschen Einheit', ru: 'День герmanского единства', tr: 'Alman Birliği Günü', sq: 'Dita e Bashkimit Gjerman', ar: 'يوم الوحدة الألمانية', hr: 'Dan njemačkog jedinstwa', sk: 'Deň nemeckej jednoty', en: 'German Unity Day' } },
        { date: '2025-11-01', names: { de: 'Allerheiligen', ru: 'День всех святых', tr: 'Azizler Günü', sq: 'Dita e të Gjithë Shenjtorëve', ar: 'عيد جميع القديسين', hr: 'Svi Sveti', sk: 'Sviatok Všetkých svätých', en: 'All Saints\' Day' } },
        { date: '2025-12-24', names: { de: 'Heiligabend', ru: 'Сочельник', tr: 'Noel Arifesi', sq: 'Nata e Krishtlindjes', ar: 'ليلة عيد الميلاد', hr: 'Badnjak', sk: 'Štedrý deň', en: 'Christmas Eve' } },
        { date: '2025-12-25', names: { de: '1. Weihnachtstag', ru: 'Рождество', tr: 'Noel', sq: 'Dita e Parë e Krishtlindjes', ar: 'عيد الميلاد الأول', hr: 'Božić', sk: 'Prvý sviatok vianočný', en: 'Christmas Day' } },
        { date: '2025-12-26', names: { de: '2. Weihnachtstag', ru: 'Второй день Рождества', tr: 'Noel\'in Икиии Günü', sq: 'Dita e Dytë e Krishtlindjes', ar: 'عيد الميلاد الثاني', hr: 'Sveti Stjepan', sk: 'Druhý sviatok vianočný', en: 'St. Stephen\'s Day' } },
        { date: '2025-12-31', names: { de: 'Silvester', ru: 'Новый год', tr: 'Yılbaşı Gecesi', sq: 'Nata e Vitit të Ri', ar: 'ليلة رأس السنة', hr: 'Stara godina', sk: 'Silvester', en: 'New Year\'s Eve' } }
    ],
    2026: [
        { date: '2026-01-01', names: { de: 'Neujahr', en: 'New Year\'s Day', ru: 'Новый год', tr: 'Yılbaşı', sq: 'Viti i Ri', ar: 'رأس السنة', hr: 'Nova godina', sk: 'Nový rok' } },
        { date: '2026-01-06', names: { de: 'Heilige Drei Könige', en: 'Epiphany', ru: 'Богоявление', tr: 'Epifani', sq: 'Uji i Bekuar', ar: 'عيد الغطاس', hr: 'Sveta Tri kralja', sk: 'Zjavenie Pána' } },
        { date: '2026-04-03', names: { de: 'Karfreitag', en: 'Good Friday', ru: 'Страстная пятница', tr: 'Kutsal Cuma', sq: 'E Premtja e Madhe', ar: 'الجمعة العظيمة', hr: 'Veliki petak', sk: 'Veľký piatok' } },
        { date: '2026-04-05', names: { de: 'Ostersonntag', en: 'Easter Sunday', ru: 'Пасха', tr: 'Paskalya Pazarı', sq: 'E Diela e Pashkëve', ar: 'أحد الفصح', hr: 'Uskrsna nedeľa', sk: 'Veľkonočná nedeľa' } },
        { date: '2026-04-06', names: { de: 'Ostermontag', en: 'Easter Monday', ru: 'Пасхальный понедельник', tr: 'Paskalya Pazartesi', sq: 'E Hëna e Pashkëve', ar: 'اثنين الفصح', hr: 'Uskrsni ponedjeljak', sk: 'Veľkonočný pondelok' } },
        { date: '2026-05-01', names: { de: 'Tag der Arbeit', en: 'Labour Day', ru: 'День труда', tr: 'İşçi Bayramı', sq: 'Dita e Punës', ar: 'عيد العمال', hr: 'Praznik rada', sk: 'Sviatok práce' } },
        { date: '2026-05-14', names: { de: 'Christi Himmelfahrt', en: 'Ascension Day', ru: 'Вознесение Господне', tr: 'İsa\'nın Göğe Yükselişi', sq: 'Dita e Ngritjes së Krishtit', ar: 'عيد الصعود', hr: 'Uzašašće', sk: 'Nanebovstúpenie Pána' } },
        { date: '2026-05-24', names: { de: 'Pfingstsonntag', en: 'Pentecost Sunday', ru: 'Пятидесятница', tr: 'Pentekost Pazarı', sq: 'E Diela e Rrëshajëve', ar: 'أحد العنصرة', hr: 'Duhovi', sk: 'Turíce' } },
        { date: '2026-05-25', names: { de: 'Pfingstmontag', en: 'Pentecost Monday', ru: 'Понедельник Пятидесятницы', tr: 'Pentekost Pazartesi', sq: 'E Hëna e Pashkëve', ar: 'اثنين العنصرة', hr: 'Duhovski ponedjeljak', sk: 'Turíčny pondelok' } },
        { date: '2026-06-04', names: { de: 'Fronleichnam', en: 'Corpus Christi', ru: 'Празdник Тела и Крови Христовых', tr: 'Katolik Yortusu', sq: 'Corpus Christi', ar: 'عيد القربان', hr: 'Tijelovo', sk: 'Božie Telo' } },
        { date: '2026-08-15', names: { de: 'Mariä Himmelfahrt', en: 'Assumption Day', ru: 'Успение Пресвятой Богородицы', tr: 'Meryem\'in Göğe Kabulü', sq: 'Fjetja e Shën Mërisë', ar: 'عيد انتقال العذراء', hr: 'Velika Gospa', sk: 'Nanebovzatie Panny Márie' } },
        { date: '2026-10-03', names: { de: 'Tag der Deutschen Einheit', en: 'German Unity Day', ru: 'День герmanского единства', tr: 'Alman Birliği Günü', sq: 'Dita e Bashkimit Gjerman', ar: 'يوم الوحدة الألمانية', hr: 'Dan njemačkog jedinstwa', sk: 'Deň nemeckej jednoty' } },
        { date: '2026-11-01', names: { de: 'Allerheiligen', en: 'All Saints\' Day', ru: 'День всех святых', tr: 'Azizler Günü', sq: 'Dita e të Gjithë Shenjtorëve', ar: 'عيد جميع القديسين', hr: 'Svi Sveti', sk: 'Sviatok Všetkých svätých' } },
        { date: '2026-12-24', names: { de: 'Heiligabend', en: 'Christmas Eve', ru: 'Сочельник', tr: 'Noel Arifesi', sq: 'Nata e Krishtlindjes', ar: 'ليلة عيد الميلاد', hr: 'Badnjak', sk: 'Štedrý deň' } },
        { date: '2026-12-25', names: { de: '1. Weihnachtstag', en: 'Christmas Day', ru: 'Рождество', tr: 'Noel', sq: 'Dita e Parë e Krishtlindjes', ar: 'عيد الميلاد الأول', hr: 'Božić', sk: 'Prvý sviatok vianočný' } },
        { date: '2026-12-26', names: { de: '2. Weihnachtstag', en: 'St. Stephen\'s Day', ru: 'Второй день Рождества', tr: 'Noel\'in Икиии Günü', sq: 'Dita e Dytë e Krishtlindjes', ar: 'عيد الميلاد الثاني', hr: 'Sveti Stjepan', sk: 'Druhý sviatok vianočný' } },
        { date: '2026-12-31', names: { de: 'Silvester', en: 'New Year\'s Eve', ru: 'Новый год', tr: 'Yılbaşı Gecesi', sq: 'Nata e Vitit të Ri', ar: 'ليلة رأس السنة', hr: 'Stara godina', sk: 'Silvester' } }
    ],
    2027: [
        { date: '2027-01-01', names: { de: 'Neujahr', en: 'New Year\'s Day', ru: 'Новый год', tr: 'Yılbaşı', sq: 'Viti i Ri', ar: 'رأس السنة', hr: 'Nova godina', sk: 'Nový rok' } },
        { date: '2027-01-06', names: { de: 'Heilige Drei Könige', en: 'Epiphany', ru: 'Богоявление', tr: 'Epifani', sq: 'Uji i Bekuar', ar: 'عيد الغطاس', hr: 'Sveta Tri kralja', sk: 'Zjavenie Pána' } },
        { date: '2027-03-26', names: { de: 'Karfreitag', en: 'Good Friday', ru: 'Страстная пятница', tr: 'Kutsal Cuma', sq: 'E Premtja e Madhe', ar: 'الجمعة العظيمة', hr: 'Veliki petak', sk: 'Veľký piatok' } },
        { date: '2027-03-28', names: { de: 'Ostersonntag', en: 'Easter Sunday', ru: 'Пасха', tr: 'Paskalya Pazarı', sq: 'E Diela e Pashkëve', ar: 'أحد الفصح', hr: 'Uskrsna nedeľa', sk: 'Veľkonočná nedeľa' } },
        { date: '2027-03-29', names: { de: 'Ostermontag', en: 'Easter Monday', ru: 'Пасхальный понедельник', tr: 'Paskalya Pazartesi', sq: 'E Hëna e Pashkëve', ar: 'اثنين الفصح', hr: 'Uskrsni ponedjeljak', sk: 'Veľkonočný pondelok' } },
        { date: '2027-05-01', names: { de: 'Tag der Arbeit', en: 'Labour Day', ru: 'День труда', tr: 'İşçi Bayramı', sq: 'Dita e Punës', ar: 'عيد العمال', hr: 'Praznik rada', sk: 'Sviatok práce' } },
        { date: '2027-05-06', names: { de: 'Christi Himmelfahrt', en: 'Ascension Day', ru: 'Вознесение Господне', tr: 'İsa\'nın Göğe Yükselişi', sq: 'Dita e Ngritjes së Krishtit', ar: 'عيد الصعود', hr: 'Uzašašće', sk: 'Nanebovstúpenie Pána' } },
        { date: '2027-05-16', names: { de: 'Pfingstsonntag', en: 'Pentecost Sunday', ru: 'Пятидесятница', tr: 'Pentekost Pazarı', sq: 'E Diela e Rrëshajëve', ar: 'أحد العنصرة', hr: 'Duhovi', sk: 'Turíce' } },
        { date: '2027-05-17', names: { de: 'Pfingstmontag', en: 'Pentecost Monday', ru: 'Понедельник Пятидесятницы', tr: 'Pentekost Pazartesi', sq: 'E Hëna e Pashkëve', ar: 'اثنين العنصرة', hr: 'Duhovski ponedjeljak', sk: 'Turíčny pondelok' } },
        { date: '2027-05-27', names: { de: 'Fronleichnam', en: 'Corpus Christi', ru: 'Празdник Тела и Крови Христовых', tr: 'Katolik Yortusu', sq: 'Corpus Christi', ar: 'عيد القربان', hr: 'Tijelovo', sk: 'Božie Telo' } },
        { date: '2027-08-15', names: { de: 'Mariä Himmelfahrt', en: 'Assumption Day', ru: 'Успение Пресвятой Богородицы', tr: 'Meryem\'in Göğe Kabulü', sq: 'Fjetja e Shën Mërisë', ar: 'عيد انتقال العذراء', hr: 'Velika Gospa', sk: 'Nanebovzatie Panny Márie' } },
        { date: '2027-10-03', names: { de: 'Tag der Deutschen Einheit', en: 'German Unity Day', ru: 'День герmanского единства', tr: 'Alman Birliği Günü', sq: 'Dita e Bashkimit Germa', ar: 'يوم الوحدة الألمانية', hr: 'Dan njemačkog jedinstwa', sk: 'Deň nemeckej jednoty' } },
        { date: '2027-11-01', names: { de: 'Allerheiligen', en: 'All Saints\' Day', ru: 'День всех святых', tr: 'Azizler Günü', sq: 'Dita e të Gjithë Shenjtorëve', ar: 'عيد جميع القديسين', hr: 'Svi Sveti', sk: 'Sviatok Všetkých svätých' } },
        { date: '2027-12-24', names: { de: 'Heiligabend', en: 'Christmas Eve', ru: 'Сочельник', tr: 'Noel Arifesi', sq: 'Nata e Krishtlindjes', ar: 'ليلة عيد الميلاد', hr: 'Badnjak', sk: 'Štedrý deň' } },
        { date: '2027-12-25', names: { de: '1. Weihnachtstag', en: 'Christmas Day', ru: 'Рождество', tr: 'Noel', sq: 'Dita e Parë e Krishtlindjes', ar: 'عيد الميلاد الأول', hr: 'Božić', sk: 'Prvý sviatok vianočný' } },
        { date: '2027-12-26', names: { de: '2. Weihnachtstag', en: 'St. Stephen\'s Day', ru: 'Второй день Рождества', tr: 'Noel\'in Икиии Günü', sq: 'Dita e Dytë e Krishtlindjes', ar: 'عيد الميلاد الثاني', hr: 'Sveti Stjepan', sk: 'Druhý sviatok vianočný', en: 'St. Stephen\'s Day' } },
        { date: '2027-12-31', names: { de: 'Silvester', en: 'New Year\'s Eve', ru: 'Новый год', tr: 'Yılbaşı Gecesi', sq: 'Nata e Vitit të Ri', ar: 'ليلة رأس السنة', hr: 'Stara godina', sk: 'Silvester' } }
    ],
    2028: [
        { date: '2028-01-01', names: { de: 'Neujahr', en: 'New Year\'s Day' } },
        { date: '2028-01-06', names: { de: 'Heilige Drei Könige', en: 'Epiphany' } },
        { date: '2028-04-14', names: { de: 'Karfreitag', en: 'Good Friday' } },
        { date: '2028-04-16', names: { de: 'Ostersonntag', en: 'Easter Sunday' } },
        { date: '2028-04-17', names: { de: 'Ostermontag', en: 'Easter Monday' } },
        { date: '2028-05-01', names: { de: 'Tag der Arbeit', en: 'Labour Day' } },
        { date: '2028-05-25', names: { de: 'Christi Himmelfahrt', en: 'Ascension Day' } },
        { date: '2028-06-04', names: { de: 'Pfingstsonntag', en: 'Pentecost Sunday' } },
        { date: '2028-06-05', names: { de: 'Pfingstmontag', en: 'Pentecost Monday' } },
        { date: '2028-06-15', names: { de: 'Fronleichnam', en: 'Corpus Christi' } },
        { date: '2028-08-15', names: { de: 'Mariä Himmelfahrt', en: 'Assumption Day' } },
        { date: '2028-10-03', names: { de: 'Tag der Deutschen Einheit', en: 'German Unity Day' } },
        { date: '2028-11-01', names: { de: 'Allerheiligen', en: 'All Saints\' Day' } },
        { date: '2028-12-24', names: { de: 'Heiligabend', en: 'Christmas Eve' } },
        { date: '2028-12-25', names: { de: '1. Weihnachtstag', en: 'Christmas Day' } },
        { date: '2028-12-26', names: { de: '2. Weihnachtstag', en: 'St. Stephen\'s Day' } },
        { date: '2028-12-31', names: { de: 'Silvester', en: 'New Year\'s Eve' } }
    ],
    2029: [
        { date: '2029-01-01', names: { de: 'Neujahr', en: 'New Year\'s Day' } },
        { date: '2029-01-06', names: { de: 'Heilige Drei Könige', en: 'Epiphany' } },
        { date: '2029-03-30', names: { de: 'Karfreitag', en: 'Good Friday' } },
        { date: '2029-04-01', names: { de: 'Ostersonntag', en: 'Easter Sunday' } },
        { date: '2029-04-02', names: { de: 'Ostermontag', en: 'Easter Monday' } },
        { date: '2029-05-01', names: { de: 'Tag der Arbeit', en: 'Labour Day' } },
        { date: '2029-05-10', names: { de: 'Christi Himmelfahrt', en: 'Ascension Day' } },
        { date: '2029-05-20', names: { de: 'Pfingstsonntag', en: 'Pentecost Sunday' } },
        { date: '2029-05-21', names: { de: 'Pfingstmontag', en: 'Pentecost Monday' } },
        { date: '2029-05-31', names: { de: 'Fronleichnam', en: 'Corpus Christi' } },
        { date: '2029-08-15', names: { de: 'Mariä Himmelfahrt', en: 'Assumption Day' } },
        { date: '2029-10-03', names: { de: 'Tag der Deutschen Einheit', en: 'German Unity Day' } },
        { date: '2029-11-01', names: { de: 'Allerheiligen', en: 'All Saints\' Day' } }
        ,
        { date: '2029-12-24', names: { de: 'Heiligabend', en: 'Christmas Eve' } },
        { date: '2029-12-25', names: { de: '1. Weihnachtstag', en: 'Christmas Day' } },
        { date: '2029-12-26', names: { de: '2. Weihnachtstag', en: 'St. Stephen\'s Day' } },
        { date: '2029-12-31', names: { de: 'Silvester', en: 'New Year\'s Eve' } }
    ],
    2030: [
        { date: '2030-01-01', names: { de: 'Neujahr', en: 'New Year\'s Day' } },
        { date: '2030-01-06', names: { de: 'Heilige Drei Könige', en: 'Epiphany' } },
        { date: '2030-04-19', names: { de: 'Karfreitag', en: 'Good Friday' } },
        { date: '2030-04-21', names: { de: 'Ostersonntag', en: 'Easter Sunday' } },
        { date: '2030-04-22', names: { de: 'Ostermontag', en: 'Easter Monday' } },
        { date: '2030-05-01', names: { de: 'Tag der Arbeit', en: 'Labour Day' } },
        { date: '2030-05-30', names: { de: 'Christi Himmelfahrt', en: 'Ascension Day' } },
        { date: '2030-06-09', names: { de: 'Pfingstsonntag', en: 'Pentecost Sunday' } },
        { date: '2030-06-10', names: { de: 'Pfingstmontag', en: 'Pentecost Monday' } },
        { date: '2030-06-20', names: { de: 'Fronleichnam', en: 'Corpus Christi' } },
        { date: '2030-08-15', names: { de: 'Mariä Himmelfahrt', en: 'Assumption Day' } },
        { date: '2030-10-03', names: { de: 'Tag der Deutschen Einheit', en: 'German Unity Day' } },
        { date: '2030-11-01', names: { de: 'Allerheiligen', en: 'All Saints\' Day' } },
        { date: '2030-12-24', names: { de: 'Heiligabend', en: 'Christmas Eve' } },
        { date: '2030-12-25', names: { de: '1. Weihnachtstag', en: 'Christmas Day' } },
        { date: '2030-12-26', names: { de: '2. Weihnachtstag', en: 'St. Stephen\'s Day' } },
        { date: '2030-12-31', names: { de: 'Silvester', en: 'New Year\'s Eve' } }
    ]
};

let currentCalendarYear = parseInt(localStorage.getItem('currentCalendarYear')) || 2025;
let notesData = JSON.parse(localStorage.getItem('calendarNotes')) || {};

// NEUE KONSTANTEN FÜR GITHUB-DATEN
const GITHUB_USERNAME = 'alexgett'; // Passe dies an deinen GitHub-Benutzernamen an
const GITHUB_REPO_NAME = 'Schichtkalender-pwa'; // Passe dies an den Namen deines GitHub-Repositorys an
const INFO_FOLDER_PATH = 'info_data'; // Der neue Ordner für deine PDFs und Bilder

// Symbolisches Passwort für das Schichtsystem
const SHIFT_SYSTEM_PASSWORD = "Hakunamatata";

// --- BENUTZERDEFINIERTES SCHICHTSYSTEM ---
// Schichttypen und ihre CSS-Klassen
const SHIFT_TYPES = {
    'F': 'fruehschicht',
    'N': 'nachtschicht',
    'S': 'spaetschicht',
    'Frei': 'freischicht',
    'Früh': 'fruehschicht', // Alternative Bezeichnungen für bessere UX
    'Nacht': 'nachtschicht',
    'Spät': 'spaetschicht'
};

// Laden des benutzerdefinierten Schichtsystems aus dem localStorage
let customShiftSystem = JSON.parse(localStorage.getItem('customShiftSystem')) || {
    sequence: [],
    referenceStartDate: null,
    referenceShiftType: null
};

// Standard-Schichtsystem, falls kein benutzerdefiniertes gesetzt ist
// (Dies ist ein Beispiel für ein 3-Schicht-System, falls der Benutzer noch nichts eingegeben hat)
const defaultShiftSystem = {
    sequence: ['fruehschicht', 'fruehschicht', 'fruehschicht', 'fruehschicht', 'fruehschicht', 'freischicht', 'freischicht', 'nachtschicht', 'nachtschicht', 'nachtschicht', 'nachtschicht', 'nachtschicht', 'freischicht', 'freischicht', 'spaetschicht', 'spaetschicht', 'spaetschicht', 'spaetschicht', 'spaetschicht', 'freischicht', 'freischicht'],
    // WICHTIG: Passe dieses Datum an einen bekannten Startpunkt an, z.B. einen Montag, an dem die erste Schicht des Zyklus war
    referenceStartDate: '2025-01-06', // Beispiel: Ein Montag
    referenceShiftType: 'nachtschicht' // Beispiel: Die Schicht, die am 2025-01-06 beginnt
};

// Überprüfen, ob ein benutzerdefiniertes System gültig ist, sonst Standard verwenden
function getActiveShiftSystem() {
    if (customShiftSystem.sequence.length > 0 && customShiftSystem.referenceStartDate && customShiftSystem.referenceShiftType) {
        // Validierung der benutzerdefinierten Schichtsequenz
        const validSequence = customShiftSystem.sequence.every(shift => Object.values(SHIFT_TYPES).includes(shift));
        const validReferenceType = Object.values(SHIFT_TYPES).includes(customShiftSystem.referenceShiftType);

        if (validSequence && validReferenceType) {
            return {
                sequence: customShiftSystem.sequence,
                referenceStartDate: new Date(customShiftSystem.referenceStartDate + 'T12:00:00Z'), // Wichtig: UTC für konsistente Datumsberechnung
                referenceShiftType: customShiftSystem.referenceShiftType
            };
        }
    }
    // Fallback zum Standard, wenn kein gültiges benutzerdefiniertes System vorhanden ist
    return {
        sequence: defaultShiftSystem.sequence,
        referenceStartDate: new Date(defaultShiftSystem.referenceStartDate + 'T12:00:00Z'),
        referenceShiftType: defaultShiftSystem.referenceShiftType
    };
}
// --- ENDE BENUTZERDEFINIERTES SCHICHTSYSTEM ---


function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNo;
}


function generateCalendar(year) {
    currentCalendarYear = year;
    localStorage.setItem('currentCalendarYear', year);
    const monthGrid = document.querySelector('.month-grid');
    monthGrid.innerHTML = '';
    document.getElementById('currentYearDisplay').textContent = year;

    // --- ANPASSUNG FÜR INDIVIDUELLES SCHICHTSYSTEM ---
    const activeSystem = getActiveShiftSystem();
    const shiftSequence = activeSystem.sequence;
    const referenceShiftStartDate = activeSystem.referenceStartDate;
    const referenceShiftType = activeSystem.referenceShiftType;

    // Finde den Index des Referenz-Schichttyps in der Sequenz
    const referenceShiftStartIndex = shiftSequence.indexOf(referenceShiftType);
    if (referenceShiftStartIndex === -1) {
        console.error(`Referenz-Schichttyp "${referenceShiftType}" nicht in der benutzerdefinierten Sequenz gefunden.`);
        // Fallback zur Standardsequenz, wenn der Referenztyp nicht in der benutzerdefinierten Sequenz ist
        // Dies sollte durch bessere Validierung bei der Eingabe verhindert werden.
    }
    // --- ENDE ANPASSUNG FÜR INDIVIDUELLES SCHICHTSYSTEM ---

    const orderedDayNames = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    const orderedDayIndices = [1, 2, 3, 4, 5, 6, 0];

    const CELL_WIDTH = 42;
    const CELL_HEIGHT = 42;
    const CELL_GAP = 4;

    const DAY_LABEL_WIDTH = 55;

    const MAX_COLUMNS_FOR_DATES = 6;
    const MAX_DATE_COLUMNS_WIDTH = (MAX_COLUMNS_FOR_DATES * CELL_WIDTH) + ((MAX_COLUMNS_FOR_DATES - 1) * CELL_GAP);

    const MONTH_CARD_WIDTH = DAY_LABEL_WIDTH + MAX_DATE_COLUMNS_WIDTH + (20 * 2);

    document.documentElement.style.setProperty('--cell-width', `${CELL_WIDTH}px`);
    document.documentElement.style.setProperty('--cell-height', `${CELL_HEIGHT}px`);
    document.documentElement.style.setProperty('--cell-height-kw', `${CELL_HEIGHT * 0.8}px`);
    document.documentElement.style.setProperty('--cell-gap', `${CELL_GAP}px`);
    document.documentElement.style.setProperty('--day-label-width', `${DAY_LABEL_WIDTH}px`);
    document.documentElement.style.setProperty('--month-card-width', `${MONTH_CARD_WIDTH}px`);
    document.documentElement.style.setProperty('--month-grid-gap', `30px`);

    const yearHolidays = holidaysData[year] || [];

    for (let month = 0; month < 12; month++) {
        const monthCard = document.createElement('div');
        monthCard.classList.add('month-card');

        monthCard.innerHTML = `<div class="month-title">${new Date(year, month, 1).toLocaleString('de-DE', { month: 'long' }).toUpperCase()}</div>`;

        const weeksData = [];
        const firstDayOfMonth = new Date(year, month, 1);
        const firstDayRelativePosition = (firstDayOfMonth.getDay() === 0) ? 6 : firstDayOfMonth.getDay() - 1;

        let currentWeek = [];

        for (let i = 0; i < firstDayRelativePosition; i++) {
            currentWeek.push({ day: '', classes: 'empty-cell', weekNumber: null });
        }

        for (let day = 1; day <= daysInMonth(year, month); day++) {
            const currentDate = new Date(year, month, day, 12, 0, 0); // 12 Uhr mittags, um DST-Probleme zu minimieren
            const dayOfWeek = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

            const currentFormattedDate = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            const holiday = yearHolidays.find(h => h.date === currentFormattedDate);

            let classes = [];
            let holidayNames = {};

            if (holiday) {
                classes.push('feiertag');
                holidayNames = holiday.names;
            } else if (dayOfWeek === 6) { // Samstag
                classes.push('samstag');
            } else if (dayOfWeek === 0) { // Sonntag
                classes.push('sonntag');
            } else { // Wochentage Mo-Fr
                // --- ANPASSUNG FÜR INDIVIDUELLES SCHICHTSYSTEM ---
                const oneDay = 1000 * 60 * 60 * 24;
                const diffDays = Math.round((currentDate.getTime() - referenceShiftStartDate.getTime()) / oneDay);

                let shiftIndex = (referenceShiftStartIndex + diffDays) % shiftSequence.length;
                if (shiftIndex < 0) {
                    shiftIndex += shiftSequence.length;
                }
                classes.push(shiftSequence[shiftIndex]);
                // --- ENDE ANPASSUNG FÜR INDIVIDUELLES SCHICHTSYSTEM ---
            }

            const weekNumber = getWeekNumber(currentDate);

            currentWeek.push({ day: day, classes: classes.join(' '), originalDayOfWeek: dayOfWeek, weekNumber: weekNumber, holidayNames: holidayNames, fullDate: currentFormattedDate });
        }

        // Fill up the last week if it's not full
        if (currentWeek.length % 7 !== 0) {
            while (currentWeek.length % 7 !== 0) {
                currentWeek.push({ day: '', classes: 'empty-cell', weekNumber: null, holidayNames: {}, fullDate: null });
            }
        }

        for (let i = 0; i < currentWeek.length; i += 7) {
            weeksData.push(currentWeek.slice(i, i + 7));
        }

        const weekNumbersContainer = document.createElement('div');
        weekNumbersContainer.classList.add('week-numbers-container');

        const kwLabelColumn = document.createElement('div');
        kwLabelColumn.classList.add('kw-label-column');
        kwLabelColumn.textContent = 'KW';
        weekNumbersContainer.appendChild(kwLabelColumn);

        const kwNumbersGrid = document.createElement('div');
        kwNumbersGrid.classList.add('kw-numbers-grid');

        const kwsInMonth = new Set();
        weeksData.forEach(week => {
            week.forEach(day => {
                if (day.weekNumber !== null) {
                    kwsInMonth.add(day.weekNumber);
                }
            });
        });

        let actualKWsInMonth = Array.from(kwsInMonth);

        actualKWsInMonth.sort((a, b) => {
            const isAHigh = a > 50;
            const isBHigh = b > 50;

            if (a === 1 && isBHigh) {
                return 1;
            }
            if (b === 1 && isAHigh) {
                return -1;
            }
            return a - b;
        });

        for (let col = 0; col < MAX_COLUMNS_FOR_DATES; col++) {
            const kwCell = document.createElement('div');
            kwCell.classList.add('kw-cell');
            if (actualKWsInMonth[col] !== undefined) {
                kwCell.textContent = actualKWsInMonth[col];
            } else {
                kwCell.classList.add('empty-kw');
            }
            kwNumbersGrid.appendChild(kwCell);
        }

        weekNumbersContainer.appendChild(kwNumbersGrid);
        monthCard.appendChild(weekNumbersContainer);

        const dayGridContainer = document.createElement('div');
        dayGridContainer.classList.add('day-grid-container');

        const dayLabelColumn = document.createElement('div');
        dayLabelColumn.classList.add('day-label-column');
        dayLabelColumn.style.width = `var(--day-label-width)`;
        orderedDayNames.forEach(name => {
            const label = document.createElement('div');
            label.classList.add('day-label');
            if (name === 'So') {
                label.classList.add('sunday');
            }
            label.textContent = name;
            dayLabelColumn.appendChild(label);
        });
        dayGridContainer.appendChild(dayLabelColumn);

        const dateColumnsContainer = document.createElement('div');
        dateColumnsContainer.classList.add('date-columns-container');
        dateColumnsContainer.style.width = `${MAX_DATE_COLUMNS_WIDTH}px`;

        weeksData.forEach(week => {
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('day-column');

            orderedDayIndices.forEach(dayIndex => {
                const cellData = week.find(data => data.originalDayOfWeek === dayIndex);
                const dateCell = document.createElement('div');
                if (cellData && cellData.fullDate) {
                    dateCell.classList.add('date-cell', cellData.classes);
                    dateCell.dataset.fullDate = cellData.fullDate;
                    dateCell.innerHTML = `<div class="day-number">${cellData.day}</div><div class="note-indicator"></div>`;

                    const noteText = notesData[cellData.fullDate];
                    if (noteText) {
                        dateCell.querySelector('.note-indicator').textContent = noteText;
                    }

                    if (Object.keys(cellData.holidayNames).length > 0) {
                        dateCell.dataset.holidayNames = JSON.stringify(cellData.holidayNames);
                    }
                } else {
                    dateCell.classList.add('date-cell', 'empty-cell');
                }
                columnDiv.appendChild(dateCell);
            });
            dateColumnsContainer.appendChild(columnDiv);
        });

        dayGridContainer.appendChild(dateColumnsContainer);
        monthCard.appendChild(dayGridContainer);
        monthGrid.appendChild(monthCard);
    }

    document.querySelectorAll('.date-cell').forEach(cell => {
        if (!cell.classList.contains('empty-cell')) {
            cell.addEventListener('click', function(event) {
                const holidayNamesJson = this.dataset.holidayNames;
                if (this.classList.contains('feiertag') && holidayNamesJson && (event.target === this || event.target.classList.contains('day-number'))) {
                    const holidayNames = JSON.parse(holidayNamesJson);
                    const holidayTranslationsDiv = document.getElementById('holidayTranslations');
                    holidayTranslationsDiv.innerHTML = '';

                    for (const langCode in holidayNames) {
                        const p = document.createElement('p');
                        p.textContent = `${langCode.toUpperCase()}: ${holidayNames[langCode]}`;
                        holidayTranslationsDiv.appendChild(p);
                    }
                    document.getElementById('holidayDialogOverlay').classList.add('active');
                } else {
                    openNoteDialog(this);
                }
            });
        }
    });
}

function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

// Initialisierung bei DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Lade die gespeicherten Einstellungen für das benutzerdefinierte Schichtsystem
    const storedShiftSystem = localStorage.getItem('customShiftSystem');
    if (storedShiftSystem) {
        try {
            const parsedSystem = JSON.parse(storedShiftSystem);
            document.getElementById('customShiftSequence').value = parsedSystem.sequence_input || '';
            document.getElementById('customShiftStartDate').value = parsedSystem.referenceStartDate_input || '';
            document.getElementById('customShiftStartType').value = parsedSystem.referenceShiftType_input || '';
        } catch (e) {
            console.error('Fehler beim Parsen des gespeicherten Schichtsystems:', e);
            // Optional: Daten zurücksetzen, wenn sie ungültig sind
            localStorage.removeItem('customShiftSystem');
        }
    }

    // Event Listener für Speichern des benutzerdefinierten Schichtsystems
    const saveButton = document.getElementById('saveCustomShiftSystem');
    if (saveButton) { // Sicherstellen, dass das Element existiert
        saveButton.addEventListener('click', saveCustomShiftSystem);
    }
    
    // Geänderter Event Listener für das "Einstellen" des Standard-Schichtsystems
    const setStandardButton = document.getElementById('resetCustomShiftSystem'); // Die ID des Buttons bleibt gleich
    if (setStandardButton) {
        setStandardButton.addEventListener('click', resetCustomShiftSystem); // Die Funktion heißt weiterhin so
    }

    // NEUE FUNKTIONALITÄT FÜR DAS ÖFFNEN/SCHLIESSEN DES SCHICHTSYSTEM-BEREICHS MIT PASSWORT
    const openCustomShiftSystemButton = document.getElementById('openCustomShiftSystemSettings');
    const customShiftSystemSection = document.getElementById('customShiftSystemSection');

    if (openCustomShiftSystemButton && customShiftSystemSection) {
        openCustomShiftSystemButton.addEventListener('click', () => {
            if (customShiftSystemSection.style.display === 'none') {
                const passwordAttempt = prompt("Bitte gib das Passwort ein, um das eigene Schichtsystem zu bearbeiten:");
                if (passwordAttempt === SHIFT_SYSTEM_PASSWORD) {
                    customShiftSystemSection.style.display = 'block';
                    openCustomShiftSystemButton.textContent = 'Eigenes Schichtsystem schließen';
                } else {
                    alert("Falsches Passwort.");
                }
            } else {
                customShiftSystemSection.style.display = 'none';
                openCustomShiftSystemButton.textContent = 'Eigenes Schichtsystem festlegen';
            }
        });
    }

    generateCalendar(currentCalendarYear); // Initialer Kalenderaufbau
});

// --- FUNKTIONEN FÜR BENUTZERDEFINIERTES SCHICHTSYSTEM ---
function saveCustomShiftSystem() {
    const sequenceInput = document.getElementById('customShiftSequence').value.trim();
    const startDateInput = document.getElementById('customShiftStartDate').value; //YYYY-MM-DD
    const startTypeInput = document.getElementById('customShiftStartType').value.trim();

    // Eingaben validieren
    if (!sequenceInput || !startDateInput || !startTypeInput) {
        alert('Bitte fülle alle Felder für das Schichtsystem aus.');
        return;
    }

    const sequenceArrayRaw = sequenceInput.split(',').map(s => s.trim().toLowerCase());
    const sequenceArray = sequenceArrayRaw.map(s => {
        if (s === 'f' || s === 'früh') return 'fruehschicht';
        if (s === 'n' || s === 'nacht') return 'nachtschicht';
        if (s === 's' || s === 'spät') return 'spaetschicht';
        if (s === 'frei') return 'freischicht';
        return null; // Ungültiger Typ
    }).filter(s => s !== null); // Entferne ungültige Einträge

    if (sequenceArray.length === 0 || sequenceArray.length !== sequenceArrayRaw.length) {
        alert('Ungültige Schichtsequenz. Bitte verwende F, N, S, Frei oder die vollen Bezeichnungen und trenne mit Kommas.');
        return;
    }

    let parsedStartType = null;
    const lowerStartType = startTypeInput.toLowerCase();
    if (lowerStartType === 'f' || lowerStartType === 'früh') parsedStartType = 'fruehschicht';
    else if (lowerStartType === 'n' || lowerStartType === 'nacht') parsedStartType = 'nachtschicht';
    else if (lowerStartType === 's' || lowerStartType === 'spät') parsedStartType = 'spaetschicht';
    else if (lowerStartType === 'frei') parsedStartType = 'freischicht';

    if (!parsedStartType) {
        alert('Ungültiger Startschicht-Typ. Bitte verwende Früh, Nacht, Spät oder Frei.');
        return;
    }

    if (!sequenceArray.includes(parsedStartType)) {
        alert(`Der Startschicht-Typ "${startTypeInput}" ist nicht in deiner definierten Sequenz enthalten.`);
        return;
    }

    // Speichere die Eingabewerte, um sie beim Laden wieder anzuzeigen
    customShiftSystem = {
        sequence: sequenceArray,
        referenceStartDate: startDateInput,
        referenceShiftType: parsedStartType,
        sequence_input: sequenceInput, // Speichere die Roh-Eingabe
        referenceStartDate_input: startDateInput, // Speichere die Roh-Eingabe
        referenceShiftType_input: startTypeInput // Speichere die Roh-Eingabe
    };

    localStorage.setItem('customShiftSystem', JSON.stringify(customShiftSystem));
    alert('Dein Schichtsystem wurde gespeichert und der Kalender wird aktualisiert.');
    generateCalendar(currentCalendarYear); // Kalender neu generieren
    document.getElementById('settingsDialogOverlay').classList.remove('active'); // Dialog schließen
}

// Angepasste Funktion zum Einstellen des vordefinierten Standard-Schichtsystems
function resetCustomShiftSystem() { // Name der Funktion bleibt gleich, aber die Funktionalität ändert sich
    // Definiere den gewünschten Standardrhythmus
    const predefinedStandardSequence = ['fruehschicht', 'fruehschicht', 'fruehschicht', 'fruehschicht', 'fruehschicht', 'freischicht', 'freischicht', 'nachtschicht', 'nachtschicht', 'nachtschicht', 'nachtschicht', 'nachtschicht', 'freischicht', 'freischicht', 'spaetschicht', 'spaetschicht', 'spaetschicht', 'spaetschicht', 'spaetschicht', 'freischicht', 'freischicht'];
    const predefinedStartDate = '2030-01-07'; // Ein Montag, passend für den Start der Nachtschicht
    const predefinedStartType = 'nachtschicht'; // Die Schicht, die am predefinedStartDate beginnt

    // Erstelle das neue 'customShiftSystem' Objekt mit den vordefinierten Werten
    const newCustomShiftSystem = {
        sequence: predefinedStandardSequence,
        referenceStartDate: predefinedStartDate,
        referenceShiftType: predefinedStartType,
        // Speichere auch die "Input"-Versionen für die Anzeige im Dialog
        sequence_input: 'F,F,F,F,F,Frei,Frei,N,N,N,N,N,Frei,Frei,S,S,S,S,S,Frei,Frei',
        referenceStartDate_input: predefinedStartDate,
        referenceShiftType_input: 'Nacht' // Die Anzeige-Version des Starttyps
    };

    // Speichere das vordefinierte System im localStorage
    localStorage.setItem('customShiftSystem', JSON.stringify(newCustomShiftSystem));
    
    // Aktualisiere die In-Memory-Variable 'customShiftSystem'
    customShiftSystem = newCustomShiftSystem; // Wichtig, damit generateCalendar die neue Einstellung verwendet

    // Setze die Eingabefelder im Dialog zurück, um die neuen Werte anzuzeigen
    document.getElementById('customShiftSequence').value = newCustomShiftSystem.sequence_input;
    document.getElementById('customShiftStartDate').value = newCustomShiftSystem.referenceStartDate_input;
    document.getElementById('customShiftStartType').value = newCustomShiftSystem.referenceShiftType_input;

    alert('Der vordefinierte Standard-Schichtrhythmus wurde eingestellt. Der Kalender wird aktualisiert.');
    generateCalendar(currentCalendarYear); // Kalender mit dem neuen System neu generieren
    document.getElementById('settingsDialogOverlay').classList.remove('active'); // Dialog schließen
}
// --- ENDE FUNKTIONEN FÜR BENUTZERDEFINIERTES SCHICHTSYSTEM ---


const todayButton = document.getElementById('todayButton');
if (todayButton) {
    todayButton.addEventListener('click', () => {
        const today = new Date();
        const currentYear = today.getFullYear();

        if (currentYear !== currentCalendarYear) {
            generateCalendar(currentYear);
        }

        const todayMonth = today.getMonth();
        const monthCards = document.querySelectorAll('.month-card');
        if (monthCards[todayMonth]) {
            monthCards[todayMonth].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

function setupDialog(openBtnId, dialogOverlayId, closeBtnId) {
    const openBtn = openBtnId ? document.getElementById(openBtnId) : null;
    const dialogOverlay = document.getElementById(dialogOverlayId);
    const closeBtn = document.getElementById(closeBtnId);

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            dialogOverlay.classList.add('active');
            // Wenn der Info-Dialog geöffnet wird, Dateien laden
            if (dialogOverlayId === 'shiftInfoDialogOverlay') {
                loadInfoFiles();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            dialogOverlay.classList.remove('active');
        });
    }

    if (dialogOverlay) {
        dialogOverlay.addEventListener('click', (event) => {
            if (event.target === dialogOverlay) {
                dialogOverlay.classList.remove('active');
            }
        });
    }
}

setupDialog('openPhoneDialog', 'phoneDialogOverlay', 'closePhoneDialog');
setupDialog(null, 'holidayDialogOverlay', 'closeHolidayDialog');
setupDialog('openShiftInfoDialog', 'shiftInfoDialogOverlay', 'closeShiftInfoDialog');
setupDialog('openSettingsDialog', 'settingsDialogOverlay', 'closeSettingsDialog');


const settingsDialogOverlay = document.getElementById('settingsDialogOverlay');
const toggleAnimationsCheckbox = document.getElementById('toggleAnimations');
const borderColorPicker = document.getElementById('borderColorPicker');
const calendarContainer = document.getElementById('calendarContainer');
const toggleDarkModeCheckbox = document.getElementById('toggleDarkMode');
const toggleAutoDarkModeCheckbox = document.getElementById('toggleAutoDarkMode');

const savedAnimationState = localStorage.getItem('animationsDisabled');
if (savedAnimationState === 'true') {
    toggleAnimationsCheckbox.checked = true;
    calendarContainer.classList.add('no-animation');
} else {
    toggleAnimationsCheckbox.checked = false;
    calendarContainer.classList.remove('no-animation');
}

const savedBorderColor = localStorage.getItem('calendarBorderColor');
if (savedBorderColor) {
    borderColorPicker.value = savedBorderColor;
    document.documentElement.style.setProperty('--calendar-border-color', savedBorderColor);
} else {
    borderColorPicker.value = '#0161FD';
    document.documentElement.style.setProperty('--calendar-border-color', '#0161FD');
}

function applyDarkMode(isDarkMode) {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function updateDarkModeState() {
    const autoModeEnabled = localStorage.getItem('autoDarkModeEnabled') === 'true';
    const manualDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

    toggleAutoDarkModeCheckbox.checked = autoModeEnabled;
    toggleDarkModeCheckbox.checked = manualDarkModeEnabled;
    toggleDarkModeCheckbox.disabled = autoModeEnabled;

    if (autoModeEnabled) {
        applyDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
        applyDarkMode(manualDarkModeEnabled);
    }
}

if (localStorage.getItem('autoDarkModeEnabled') === null) {
    localStorage.setItem('autoDarkModeEnabled', 'true');
}

updateDarkModeState();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (localStorage.getItem('autoDarkModeEnabled') === 'true') {
        updateDarkModeState();
    }
});

toggleAnimationsCheckbox.addEventListener('change', () => {
    if (toggleAnimationsCheckbox.checked) {
        calendarContainer.classList.add('no-animation');
        localStorage.setItem('animationsDisabled', 'true');
    } else {
        calendarContainer.classList.remove('no-animation');
        localStorage.setItem('animationsDisabled', 'false');
    }
});

borderColorPicker.addEventListener('input', () => {
    const newColor = borderColorPicker.value;
    document.documentElement.style.setProperty('--calendar-border-color', newColor);
    localStorage.setItem('calendarBorderColor', newColor);
});

toggleAutoDarkModeCheckbox.addEventListener('change', () => {
    localStorage.setItem('autoDarkModeEnabled', toggleAutoDarkModeCheckbox.checked);
    updateDarkModeState();
});

toggleDarkModeCheckbox.addEventListener('change', () => {
    localStorage.setItem('darkModeEnabled', toggleDarkModeCheckbox.checked);
    updateDarkModeState();
});

const currentYearDisplay = document.getElementById('currentYearDisplay');
const yearInputDialogOverlay = document.getElementById('yearInputDialogOverlay');
const closeYearInputDialogBtn = document.getElementById('closeYearInputDialog');
const yearInput = document.getElementById('yearInput');
const setYearButton = document.getElementById('setYearButton');
const decreaseYearButton = document.getElementById('decreaseYear');
let increaseYearButton = document.getElementById('increaseYear');

currentYearDisplay.addEventListener('click', () => {
    yearInput.value = currentCalendarYear;
    yearInputDialogOverlay.classList.add('active');
});

closeYearInputDialogBtn.addEventListener('click', () => {
    yearInputDialogOverlay.classList.remove('active');
});

yearInputDialogOverlay.addEventListener('click', (event) => {
    if (event.target === yearInputDialogOverlay) {
        yearInputDialogOverlay.classList.remove('active');
    }
});

decreaseYearButton.addEventListener('click', () => {
    yearInput.value = Math.max(2025, parseInt(yearInput.value, 10) - 1);
});

increaseYearButton.addEventListener('click', () => {
    yearInput.value = Math.min(2030, parseInt(yearInput.value, 10) + 1);
});

setYearButton.addEventListener('click', () => {
    const newYear = parseInt(yearInput.value, 10);
    if (!isNaN(newYear) && newYear >= 2025 && newYear <= 2030) {
        generateCalendar(newYear);
        yearInputDialogOverlay.classList.remove('active');
    } else {
        alert('Bitte geben Sie ein gültiges Jahr zwischen 2025 und 2030 ein.');
    }
});

const noteDialogOverlay = document.getElementById('noteDialogOverlay');
const closeNoteDialogBtn = document.getElementById('closeNoteDialog');
const noteDialogTitle = document.getElementById('noteDialogTitle');
const noteInput = document.getElementById('noteInput');
const saveNoteButton = document.getElementById('saveNoteButton');
const deleteNoteButton = document.getElementById('deleteNoteButton');

let currentDayCell = null;

function openNoteDialog(cell) {
    currentDayCell = cell;
    const fullDate = cell.dataset.fullDate;
    const dateParts = fullDate.split('-');
    const day = dateParts[2];
    const monthIndex = parseInt(dateParts[1], 10) - 1;
    const year = dateParts[0];
    const monthName = new Date(year, monthIndex, 1).toLocaleString('de-DE', { month: 'long' });

    noteDialogTitle.textContent = `Notiz für den ${day}. ${monthName} ${year}`;
    noteInput.value = notesData[fullDate] || '';

    noteDialogOverlay.classList.add('active');
}

closeNoteDialogBtn.addEventListener('click', () => {
    noteDialogOverlay.classList.remove('active');
});

noteDialogOverlay.addEventListener('click', (event) => {
    if (event.target === noteDialogOverlay) {
        noteDialogOverlay.classList.remove('active');
    }
});

saveNoteButton.addEventListener('click', () => {
    if (currentDayCell) {
        const fullDate = currentDayCell.dataset.fullDate;
        const note = noteInput.value.trim();

        if (note) {
            notesData[fullDate] = note;
            currentDayCell.querySelector('.note-indicator').textContent = note;
        } else {
            delete notesData[fullDate];
            currentDayCell.querySelector('.note-indicator').textContent = '';
        }
        localStorage.setItem('calendarNotes', JSON.stringify(notesData));
        noteDialogOverlay.classList.remove('active');
    }
});

deleteNoteButton.addEventListener('click', () => {
    if (currentDayCell) {
        const fullDate = currentDayCell.dataset.fullDate;
        delete notesData[fullDate];
        localStorage.setItem('calendarNotes', JSON.stringify(notesData));
        currentDayCell.querySelector('.note-indicator').textContent = '';
        noteInput.value = '';
        noteDialogOverlay.classList.remove('active');
    }
});

// NEUE FUNKTIONEN FÜR DIE ANZEIGE VON INFODATEIEN
async function fetchInfoFiles() {
    const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/contents/${INFO_FOLDER_PATH}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                console.warn(`Der Ordner "${INFO_FOLDER_PATH}" wurde nicht gefunden. Bitte stelle sicher, dass er existiert und Dateien enthält.`);
                return [];
            }
            throw new Error(`GitHub API Fehler: ${response.statusText}`);
        }
        const data = await response.json();
        // Filtert nur Dateien und ignoriert Unterordner
        return data.filter(item => item.type === 'file');
    } catch (error) {
        console.error('Fehler beim Abrufen der Info-Dateien:', error);
        return [];
    }
}

async function loadInfoFiles() {
    const infoFilesList = document.getElementById('infoFilesList');
    infoFilesList.innerHTML = '<p class="loading-message">Lade Informationen...</p>'; // Ladeanzeige

    const files = await fetchInfoFiles();

    infoFilesList.innerHTML = ''; // Lösche die Ladeanzeige

    if (files.length === 0) {
        infoFilesList.innerHTML = '<p>Keine weiteren Informationen verfügbar.</p>';
        return;
    }

    const ul = document.createElement('ul');
    ul.classList.add('info-files-ul');

    files.forEach(file => {
        const li = document.createElement('li');
        const fileLink = document.createElement('a');
        fileLink.href = file.download_url; // Direkter Link zur Datei
        fileLink.textContent = file.name;
        fileLink.target = '_blank'; // Öffnet Link in neuem Tab

        const fileIcon = document.createElement('i');
        const fileNameLower = file.name.toLowerCase();

        if (fileNameLower.endsWith('.pdf')) {
            fileIcon.classList.add('fas', 'fa-file-pdf');
            fileIcon.style.color = 'red';
        } else if (fileNameLower.endsWith('.jpg') || fileNameLower.endsWith('.jpeg') || fileNameLower.endsWith('.png') || fileNameLower.endsWith('.gif')) {
            fileIcon.classList.add('fas', 'fa-image');
            fileIcon.style.color = 'blue';
        } else {
            fileIcon.classList.add('fas', 'fa-file'); // Standard-Symbol für andere Dateitypen
        }
        fileIcon.classList.add('file-list-icon');
        
        li.appendChild(fileIcon);
        li.appendChild(fileLink);
        ul.appendChild(li);
    });
    infoFilesList.appendChild(ul);
}
