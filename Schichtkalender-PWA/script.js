<script>
        const holidaysData = {
            2023: [
                { date: '2023-01-01', names: { de: 'Neujahr', ru: 'Новый год', tr: 'Yılbaşı', sq: 'Viti i Ri', ar: 'رأس السنة', hr: 'Nova godina', sk: 'Nový rok', en: 'New Year\'s Day' } },
                { date: '2023-01-06', names: { de: 'Heilige Drei Könige', ru: 'Богоявление', tr: 'Epifani', sq: 'Uji i Bekuar', ar: 'عيد الغطاس', hr: 'Sveta Tri kralla', sk: 'Zjavenie Pána', en: 'Epiphany' } },
                { date: '2023-04-07', names: { de: 'Karfreitag', ru: 'Страстная пятница', tr: 'Kutsal Cuma', sq: 'E Premtja e Madhe', ar: 'الجمعة العظيمة', hr: 'Veliki petak', sk: 'Veľký piatok', en: 'Good Friday' } },
                { date: '2023-04-09', names: { de: 'Ostersonntag', ru: 'Пасха', tr: 'Paskalya Pazarı', sq: 'E Diela e Pashkëve', ar: 'أحد الفصح', hr: 'Uskrsna nedeľa', sk: 'Veľkonočná nedeľa', en: 'Easter Sunday' } },
                { date: '2023-04-10', names: { de: 'Ostermontag', ru: 'Пасхальный понедельник', tr: 'Paskalya Pazartesi', sq: 'E Hëna e Pashkëve', ar: 'اثنين الفصح', hr: 'Uskrsni ponedjeljak', sk: 'Veľkonočný pondeljak', en: 'Easter Monday' } },
                { date: '2023-05-01', names: { de: 'Tag der Arbeit', ru: 'День труда', tr: 'İşçi Bayramı', sq: 'Dita e Punës', ar: 'عيد العمال', hr: 'Praznik rada', sk: 'Sviatok práce', en: 'Labour Day' } },
                { date: '2023-05-18', names: { de: 'Christi Himmelfahrt', ru: 'Вознесение Господне', tr: 'İsa\'nın Göğe Yükselişi', sq: 'Dita e Ngritjes së Krishtit', ar: 'عيد الصعود', hr: 'Uzašašće', sk: 'Nanebovstúpenie Pána', en: 'Ascension Day' } },
                { date: '2023-05-28', names: { de: 'Pfingstsonntag', ru: 'Пятидесятница', tr: 'Pentekost Pazarı', sq: 'E Diela e Rrëshajëve', ar: 'أحد العنصرة', hr: 'Duhovi', sk: 'Turíce', en: 'Pentecost Sunday' } },
                { date: '2023-05-29', names: { de: 'Pfingstmontag', ru: 'Понедельник Пятидесятницы', tr: 'Pentekost Pazartesi', sq: 'E Hëna e Rrëshajëve', ar: 'اثنين العنصرة', hr: 'Duhovski ponedjeljak', sk: 'Turíčny pondelok', en: 'Pentecost Monday' } },
                { date: '2023-06-08', names: { de: 'Fronleichnam', ru: 'Празdник Тела и Крови Христовых', tr: 'Katolik Yortusu', sq: 'Corpus Christi', ar: 'عيد القربان', hr: 'Tijelovo', sk: 'Božie Telo', en: 'Corpus Christi' } },
                { date: '2023-08-15', names: { de: 'Mariä Himmelfahrt', ru: 'Успение Пресвятой Богородицы', tr: 'Meryem\'in Göğe Kabulü', sq: 'Fjetja e Shën Mërisë', ar: 'عيد انتقال العذراء', hr: 'Velika Gospa', sk: 'Nanebovzatie Panny Márie', en: 'Assumption Day' } },
                { date: '2023-10-03', names: { de: 'Tag der Deutschen Einheit', ru: 'День германского единства', tr: 'Alman Birliği Günü', sq: 'Dita e Bashkimit Gjerman', ar: 'يوم الوحدة الألمانية', hr: 'Dan njemačkog jedinstva', sk: 'Deň nemeckej jednoty', en: 'German Unity Day' } },
                { date: '2023-11-01', names: { de: 'Allerheiligen', ru: 'День всех святых', tr: 'Azizler Günü', sq: 'Dita e të Gjithë Shenjtorëve', ar: 'عيد جميع القديسين', hr: 'Svi Sveti', sk: 'Sviatok Všetkých svätých', en: 'All Saints\' Day' } },
                { date: '2023-12-24', names: { de: 'Heiligabend', ru: 'Сочельник', tr: 'Noel Arifesi', sq: 'Nata e Krishtlindjes', ar: 'ليلة عيد الميلاد', hr: 'Badnjak', sk: 'Štedrý deň', en: 'Christmas Eve' } },
                { date: '2023-12-25', names: { de: '1. Weihnachtstag', ru: 'Рождество', tr: 'Noel', sq: 'Dita e Parë e Krishtlindjes', ar: 'عيد الميلاد الأول', hr: 'Božić', sk: 'Prvý sviatok vianočný', en: 'Christmas Day' } },
                { date: '2023-12-26', names: { de: '2. Weihnachtstag', ru: 'Второй день Рождества', tr: 'Noel\'in İkiиci Günü', sq: 'Dita e Dytë e Krishtlindjes', ar: 'عيد الميلاد الثاني', hr: 'Sveti Stjepan', sk: 'Druhý sviatok vianočný', en: 'St. Stephen\'s Day' } },
                { date: '2023-12-31', names: { de: 'Silvester', ru: 'Новый год', tr: 'Yılbaşı Gecesi', sq: 'Nata e Vitit të Ri', ar: 'ليلة رأس السنة', hr: 'Stara godina', sk: 'Silvester', en: 'New Year\'s Eve' } }
            ],
            2024: [
                { date: '2024-01-01', names: { de: 'Neujahr', ru: 'Новый год', tr: 'Yılbaşı', sq: 'Viti i Ri', ar: 'رأس السنة', hr: 'Nova godina', sk: 'Nový rok', en: 'New Year\'s Day' } },
                { date: '2024-01-06', names: { de: 'Heilige Drei Könige', ru: 'Богоявление', tr: 'Epifani', sq: 'Uji i Bekuar', ar: 'عيد الغطاس', hr: 'Sveta Tri kralja', sk: 'Zjavenie Pána', en: 'Epiphany' } },
                { date: '2024-03-29', names: { de: 'Karfreitag', ru: 'Страстная пятница', tr: 'Kutsal Cuma', sq: 'E Premtja e Madhe', ar: 'الجمعة العظيمة', hr: 'Veliki petak', sk: 'Veľký piatok', en: 'Good Friday' } },
                { date: '2024-03-31', names: { de: 'Ostersonntag', ru: 'Пасха', tr: 'Paskalya Pazarı', sq: 'E Diela e Pashkëve', ar: 'أحد الفصح', hr: 'Uskrsna nedeľa', sk: 'Veľkonočná nedeľa', en: 'Easter Sunday' } },
                { date: '2024-04-01', names: { de: 'Ostermontag', ru: 'Пасхальный понедельник', tr: 'Paskalya Pazartesi', sq: 'E Hëna e Pashkëve', ar: 'اثنين الفصح', hr: 'Uskrsni ponedjeljak', sk: 'Veľkonočný pondelok', en: 'Easter Monday' } },
                { date: '2024-05-01', names: { de: 'Tag der Arbeit', ru: 'День труда', tr: 'İşçi Bayramı', sq: 'Dita e Punës', ar: 'عيد العمال', hr: 'Praznik rada', sk: 'Sviatok práce', en: 'Labour Day' } },
                { date: '2024-05-09', names: { de: 'Christi Himmelfahrt', ru: 'Вознесение Господне', tr: 'İsa\'nın Göğe Yükselişi', sq: 'Dita e Ngritjes së Krishtit', ar: 'عيد الصعود', hr: 'Uzašašće', sk: 'Nanebovstúpenie Pána', en: 'Ascension Day' } },
                { date: '2024-05-19', names: { de: 'Pfingstsonntag', ru: 'Пятидесятница', tr: 'Pentekost Pazarı', sq: 'E Diela e Rrëshajëve', ar: 'أحد العنصرة', hr: 'Duhovi', sk: 'Turíce', en: 'Pentecost Sunday' } },
                { date: '2024-05-20', names: { de: 'Pfingstmontag', ru: 'Понедельник Пятидесятницы', tr: 'Pentekost Pazartesi', sq: 'E Hëna e Pashkëve', ar: 'اثنين العنصرة', hr: 'Duhovski ponedjeljak', sk: 'Turíčny pondelok', en: 'Pentecost Monday' } },
                { date: '2024-05-30', names: { de: 'Fronleichnam', ru: 'Празdник Тела и Крови Христовых', tr: 'Katolik Yortusu', sq: 'Corpus Christi', ar: 'عيد القربان', hr: 'Tijelovo', sk: 'Božie Telo', en: 'Corpus Christi' } },
                { date: '2024-08-15', names: { de: 'Mariä Himmelfahrt', ru: 'Успение Пресвятой Богородицы', tr: 'Meryem\'in Göğe Kabulü', sq: 'Fjetja e Shën Mërisë', ar: 'عيد انتقال العذراء', hr: 'Velika Gospa', sk: 'Nanebovzatie Panny Márie', en: 'Assumption Day' } },
                { date: '2024-10-03', names: { de: 'Tag der Deutschen Einheit', ru: 'День германского единства', tr: 'Alman Birliği Günü', sq: 'Dita e Bashkimit Gjerman', ar: 'يوم الوحدة الألمانية', hr: 'Dan njemačkog jedinstva', sk: 'Deň nemeckej jednoty', en: 'German Unity Day' } },
                { date: '2024-11-01', names: { de: 'Allerheiligen', ru: 'День всех святых', tr: 'Azizler Günü', sq: 'Dita e të Gjithë Shenjtorëve', ar: 'عيد جميع القديسين', hr: 'Svi Sveti', sk: 'Sviatok Všetkých svätých', en: 'All Saints\' Day' } },
                { date: '2024-12-24', names: { de: 'Heiligabend', ru: 'Сочельник', tr: 'Noel Arifesi', sq: 'Nata e Krishtlindjes', ar: 'ليلة عيد الميلاد', hr: 'Badnjak', sk: 'Štedrý deň', en: 'Christmas Eve' } },
                { date: '2024-12-25', names: { de: '1. Weihnachtstag', ru: 'Рождество', tr: 'Noel', sq: 'Dita e Parë e Krishtlindjes', ar: 'عيد الميلاد الأول', hr: 'Božić', sk: 'Prvý sviatok vianočný', en: 'Christmas Day' } },
                { date: '2024-12-26', names: { de: '2. Weihnachtstag', ru: 'Второй день Рождества', tr: 'Noel\'in İkiиci Günü', sq: 'Dita e Dytë e Krishtlindjes', ar: 'عيد الميلاد الثاني', hr: 'Sveti Stjepan', sk: 'Druhý sviatok vianočný', en: 'St. Stephen\'s Day' } },
                { date: '2024-12-31', names: { de: 'Silvester', ru: 'Новый год', tr: 'Yılbaşı Gecesi', sq: 'Nata e Vitit të Ri', ar: 'ليلة رأس السنة', hr: 'Stara godina', sk: 'Silvester', en: 'New Year\'s Eve' } }
            ],
            2025: [
                { date: '2025-01-01', names: { de: 'Neujahr', ru: 'Новый год', tr: 'Yılbaşı', sq: 'Viti i Ri', ar: 'رأس السنة', hr: 'Nova godina', sk: 'Nový rok', en: 'New Year\'s Day' } },
                { date: '2025-01-06', names: { de: 'Heilige Drei Könige', ru: 'Богоявление', tr: 'Epifani', sq: 'Uji i Bekuar', ar: 'عيد الغطاس', hr: 'Sveta Tri kralja', sk: 'Zjavenie Pána', en: 'Epiphany' } },
                { date: '2025-04-18', names: { de: 'Karfreitag', ru: 'Страстная пятница', tr: 'Kutsal Cuma', sq: 'E Premtja e Madhe', ar: 'الجمعة العظيمة', hr: 'Veliki petak', sk: 'Veľký piatok', en: 'Good Friday' } },
                { date: '2025-04-20', names: { de: 'Ostersonntag', ru: 'Пасха', tr: 'Paskalya Pazarı', sq: 'E Diela e Pashkëve', ar: 'أحد الفصح', hr: 'Uskrsna nedeľa', sk: 'Veľkonočná nedeľa', en: 'Easter Sunday' } },
                { date: '2025-04-21', names: { de: 'Ostermontag', ru: 'Пасхальный понедельник', tr: 'Paskalya Pazartesi', sq: 'E Hëna e Pashkëve', ar: 'اثنين الفصح', hr: 'Uskrsni ponedjeljak', sk: 'Veľkonočný pondelok', en: 'Easter Monday' } },
                { date: '2025-05-01', names: { de: 'Tag der Arbeit', ru: 'День труда', tr: 'İşçi Bayramı', sq: 'Dita e Punës', ar: 'عيد العمال', hr: 'Praznik rada', sk: 'Sviatok práce', en: 'Labour Day' } },
                { date: '2025-05-29', names: { de: 'Christi Himmelfahrt', ru: 'Вознесение Господне', tr: 'İsa\'nın Göğe Yükselişi', sq: 'Dita e Ngritjes së Krishtit', ar: 'عيد الصعود', hr: 'Uzašašće', sk: 'Nanebovstúpenie Pána', en: 'Ascension Day' } },
                { date: '2025-06-08', names: { de: 'Pfingstsonntag', ru: 'Пятидесятница', tr: 'Pentekost Pazarı', sq: 'E Diela e Rrëshajëve', ar: 'أحد العنصرة', hr: 'Duhovi', sk: 'Turíce', en: 'Pentecost Sunday' } },
                { date: '2025-06-09', names: { de: 'Pfingstmontag', ru: 'Понедельник Пятидесятницы', tr: 'Pentekost Pazartesi', sq: 'E Hëna e Pashkëve', ar: 'اثنين العنصرة', hr: 'Duhovski ponedjeljak', sk: 'Turíčny pondelok', en: 'Pentecost Monday' } },
                { date: '2025-06-19', names: { de: 'Fronleichnam', ru: 'Празdник Тела и Крови Христовых', tr: 'Katolik Yortusu', sq: 'Corpus Christi', ar: 'عيد القربان', hr: 'Tijelovo', sk: 'Božie Telo', en: 'Corpus Christi' } },
                { date: '2025-08-15', names: { de: 'Mariä Himmelfahrt', ru: 'Успение Пресвятой Богородицы', tr: 'Meryem\'in Göğe Kabulü', sq: 'Fjetja e Shën Mërisë', ar: 'عيد انتقال العذراء', hr: 'Velika Gospa', sk: 'Nanebovzatie Panny Márie', en: 'Assumption Day' } },
                { date: '2025-10-03', names: { de: 'Tag der Deutschen Einheit', ru: 'День германского единства', tr: 'Alman Birliği Günü', sq: 'Dita e Bashkimit Gjerman', ar: 'يوم الوحدة الألمانية', hr: 'Dan njemačkog jedinstwa', sk: 'Deň nemeckej jednoty', en: 'German Unity Day' } },
                { date: '2025-11-01', names: { de: 'Allerheiligen', ru: 'День всех святых', tr: 'Azizler Günü', sq: 'Dita e të Gjithë Shenjtorëve', ar: 'عيد جميع القديسين', hr: 'Svi Sveti', sk: 'Sviatok Všetkých svätých', en: 'All Saints\' Day' } },
                { date: '2025-12-24', names: { de: 'Heiligabend', ru: 'Сочельник', tr: 'Noel Arifesi', sq: 'Nata e Krishtlindjes', ar: 'ليلة عيد الميلاد', hr: 'Badnjak', sk: 'Štedrý deň', en: 'Christmas Eve' } },
                { date: '2025-12-25', names: { de: '1. Weihnachtstag', ru: 'Рождество', tr: 'Noel', sq: 'Dita e Parë e Krishtlindjes', ar: 'عيد الميلاد الأول', hr: 'Božić', sk: 'Prvý sviatok vianočný', en: 'Christmas Day' } },
                { date: '2025-12-26', names: { de: '2. Weihnachtstag', ru: 'Второй день Рождества', tr: 'Noel\'in İkiиci Günü', sq: 'Dita e Dytë e Krishtlindjes', ar: 'عيد الميلاد الثاني', hr: 'Sveti Stjepan', sk: 'Druhý sviatok vianočný', en: 'St. Stephen\'s Day' } },
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
                { date: '2026-10-03', names: { de: 'Tag der Deutschen Einheit', en: 'German Unity Day', ru: 'День германского единства', tr: 'Alman Birliği Günü', sq: 'Dita e Bashkimit Gjerman', ar: 'يوم الوحدة الألمانية', hr: 'Dan njemačkog jedinstwa', sk: 'Deň nemeckej jednoty' } },
                { date: '2026-11-01', names: { de: 'Allerheiligen', en: 'All Saints\' Day', ru: 'День всех святых', tr: 'Azizler Günü', sq: 'Dita e të Gjithë Shenjtorëve', ar: 'عيد جميع القديسين', hr: 'Svi Sveti', sk: 'Sviatok Všetkých svätých' } },
                { date: '2026-12-24', names: { de: 'Heiligabend', en: 'Christmas Eve', ru: 'Сочельник', tr: 'Noel Arifesi', sq: 'Nata e Krishtlindjes', ar: 'ليلة عيد الميلاد', hr: 'Badnjak', sk: 'Štedrý deň' } },
                { date: '2026-12-25', names: { de: '1. Weihnachtstag', en: 'Christmas Day', ru: 'Рождество', tr: 'Noel', sq: 'Dita e Parë e Krishtlindjes', ar: 'عيد الميلاد الأول', hr: 'Božić', sk: 'Prvý sviatok vianočný' } },
                { date: '2026-12-26', names: { de: '2. Weihnachtstag', en: 'St. Stephen\'s Day', ru: 'Второй день Рождества', tr: 'Noel\'in İkiиci Günü', sq: 'Dita e Dytë e Krishtlindjes', ar: 'عيد الميلاد الثاني', hr: 'Sveti Stjepan', sk: 'Druhý sviatok vianočný' } },
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
                { date: '2027-10-03', names: { de: 'Tag der Deutschen Einheit', en: 'German Unity Day', ru: 'День германского единства', tr: 'Alman Birliği Günü', sq: 'Dita e Bashkimit Gjerman', ar: 'يوم الوحدة الألمانية', hr: 'Dan njemačkog jedinstwa', sk: 'Deň nemeckej jednoty' } },
                { date: '2027-11-01', names: { de: 'Allerheiligen', en: 'All Saints\' Day', ru: 'День всех святых', tr: 'Azizler Günü', sq: 'Dita e të Gjithë Shenjtorëve', ar: 'عيد جميع القديسين', hr: 'Svi Sveti', sk: 'Sviatok Všetkých svätých' } },
                { date: '2027-12-24', names: { de: 'Heiligabend', en: 'Christmas Eve', ru: 'Сочельник', tr: 'Noel Arifesi', sq: 'Nata e Krishtlindjes', ar: 'ليلة عيد الميلاد', hr: 'Badnjak', sk: 'Štedrý deň' } },
                { date: '2027-12-25', names: { de: '1. Weihnachtstag', en: 'Christmas Day', ru: 'Рождество', tr: 'Noel', sq: 'Dita e Parë e Krishtlindjes', ar: 'عيد الميلاد الأول', hr: 'Božić', sk: 'Prvý sviatok vianočný' } },
                { date: '2027-12-26', names: { de: '2. Weihnachtstag', en: 'St. Stephen\'s Day', ru: 'Второй день Рождества', tr: 'Noel\'in İkiиci Günü', sq: 'Dita e Dytë e Krishtlindjes', ar: 'عيد الميلاد الثاني', hr: 'Sveti Stjepan', sk: 'Druhý sviatok vianočný' } },
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
                { date: '2029-11-01', names: { de: 'Allerheiligen', en: 'All Saints\' Day' } },
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

        // Retrieve currentCalendarYear from localStorage or default to 2025
        let currentCalendarYear = parseInt(localStorage.getItem('currentCalendarYear')) || 2025;

        function getWeekNumber(d) {
            const date = new Date(d.getTime());
            const dayOfWeek = (date.getDay() === 0) ? 7 : date.getDay();
            date.setDate(date.getDate() + 4 - dayOfWeek);
            const yearStart = new Date(date.getFullYear(), 0, 1);
            return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
        }

        function generateCalendar(year) {
            currentCalendarYear = year;
            localStorage.setItem('currentCalendarYear', year); // Save the year to localStorage
            const monthGrid = document.querySelector('.month-grid');
            monthGrid.innerHTML = ''; // Clear existing calendar
            document.getElementById('currentYearDisplay').textContent = year; // Update displayed year

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

            const yearHolidays = holidaysData[year] || []; // Get holidays for the selected year

            for (let month = 0; month < 12; month++) {
                const monthCard = document.createElement('div');
                monthCard.classList.add('month-card');

                monthCard.innerHTML = `<div class="month-title">${new Date(year, month, 1).toLocaleString('de-DE', { month: 'long' }).toUpperCase()}</div>`;

                const weekNumbersSet = new Set();
                const daysInMonth = new Date(year, month + 1, 0).getDate();

                const weeksData = [];
                const firstDayOfMonth = new Date(year, month, 1);
                const firstDayRelativePosition = (firstDayOfMonth.getDay() === 0) ? 6 : firstDayOfMonth.getDay() - 1;

                let currentWeek = [];

                for (let i = 0; i < firstDayRelativePosition; i++) {
                    currentWeek.push({ day: '', classes: 'empty-cell', weekNumber: null });
                }

                for (let day = 1; day <= daysInMonth; day++) {
                    const currentDate = new Date(year, month, day);
                    const dayOfWeek = currentDate.getDay();
                    const weekNumber = getWeekNumber(currentDate);
                    weekNumbersSet.add(weekNumber);

                    const currentFormattedDate = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                    const holiday = yearHolidays.find(h => h.date === currentFormattedDate);

                    let classes = [];
                    let holidayNames = {};
                    if (holiday) {
                        classes.push('feiertag');
                        holidayNames = holiday.names;
                    } else if (dayOfWeek === 6) {
                        classes.push('samstag');
                    } else if (dayOfWeek === 0) {
                        classes.push('sonntag');
                    } else {
                        // Shift logic based on week number
                        if (weekNumber % 3 === 0) {
                            classes.push('spaetschicht');
                        } else if ((weekNumber + 1) % 3 === 0) {
                            classes.push('nachtschicht');
                        } else {
                            classes.push('fruehschicht');
                        }
                    }
                    currentWeek.push({ day: day, classes: classes.join(' '), originalDayOfWeek: dayOfWeek, weekNumber: weekNumber, holidayNames: holidayNames });
                }

                if (currentWeek.length % 7 !== 0) {
                    while (currentWeek.length % 7 !== 0) {
                        currentWeek.push({ day: '', classes: 'empty-cell', weekNumber: null, holidayNames: {} });
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

                const actualKWsInMonth = [];
                weeksData.forEach(week => {
                    const firstActualDayInWeek = week.find(day => day.weekNumber !== null);
                    if (firstActualDayInWeek) {
                        if (!actualKWsInMonth.includes(firstActualDayInWeek.weekNumber)) {
                            actualKWsInMonth.push(firstActualDayInWeek.weekNumber);
                        }
                    }
                });

                // Special handling for KW 1 crossing into the next year (e.g., in December)
                // This logic might need refinement depending on precise KW rules for ISO 8601
                if (month === 11) {
                    const kw1Index = actualKWsInMonth.indexOf(1);
                    if (kw1Index > -1) {
                        const kw1 = actualKWsInMonth.splice(kw1Index, 1)[0];
                        actualKWsInMonth.sort((a, b) => a - b);
                        actualKWsInMonth.push(kw1);
                    } else {
                        actualKWsInMonth.sort((a, b) => a - b);
                    }
                } else {
                    actualKWsInMonth.sort((a, b) => a - b);
                }

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
                        if (cellData) {
                            dateCell.classList.add('date-cell', cellData.classes);
                            dateCell.textContent = cellData.day;
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

            document.querySelectorAll('.feiertag').forEach(cell => {
                cell.addEventListener('click', function() {
                    const holidayNamesJson = this.dataset.holidayNames;
                    if (holidayNamesJson) {
                        const holidayNames = JSON.parse(holidayNamesJson);
                        const holidayTranslationsDiv = document.getElementById('holidayTranslations');
                        holidayTranslationsDiv.innerHTML = '';

                        for (const langCode in holidayNames) {
                            const p = document.createElement('p');
                            p.textContent = `${langCode.toUpperCase()}: ${holidayNames[langCode]}`;
                            holidayTranslationsDiv.appendChild(p);
                        }
                        holidayDialogOverlay.classList.add('active');
                    }
                });
            });
        }

        // Initial calendar generation
        // Load the saved year, or use 2025 as default
        generateCalendar(currentCalendarYear);

        function setupDialog(openBtnId, dialogOverlayId, closeBtnId) {
            const openBtn = openBtnId ? document.getElementById(openBtnId) : null;
            const dialogOverlay = document.getElementById(dialogOverlayId);
            const closeBtn = document.getElementById(closeBtnId);

            if (openBtn) {
                openBtn.addEventListener('click', () => {
                    dialogOverlay.classList.add('active');
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

        const openSettingsDialogBtn = document.getElementById('openSettingsDialog');
        const settingsDialogOverlay = document.getElementById('settingsDialogOverlay');
        const closeSettingsDialogBtn = document.getElementById('closeSettingsDialog');
        const toggleAnimationsCheckbox = document.getElementById('toggleAnimations');
        const borderColorPicker = document.getElementById('borderColorPicker');
        const calendarContainer = document.getElementById('calendarContainer');

        setupDialog('openSettingsDialog', 'settingsDialogOverlay', 'closeSettingsDialog');

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
            borderColorPicker.value = '#0161FD'; // Set default here as well
            document.documentElement.style.setProperty('--calendar-border-color', '#0161FD');
        }

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

        // Year input dialog functionality
        const currentYearDisplay = document.getElementById('currentYearDisplay');
        const yearInputDialogOverlay = document.getElementById('yearInputDialogOverlay');
        const closeYearInputDialogBtn = document.getElementById('closeYearInputDialog');
        const yearInput = document.getElementById('yearInput');
        const setYearButton = document.getElementById('setYearButton');
        const decreaseYearButton = document.getElementById('decreaseYear');
        const increaseYearButton = document.getElementById('increaseYear');

        currentYearDisplay.addEventListener('click', () => {
            yearInput.value = currentCalendarYear; // Pre-fill with current year
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
            yearInput.value = Math.max(2023, parseInt(yearInput.value, 10) - 1);
        });

        increaseYearButton.addEventListener('click', () => {
            yearInput.value = Math.min(2030, parseInt(yearInput.value, 10) + 1);
        });

        setYearButton.addEventListener('click', () => {
            const newYear = parseInt(yearInput.value, 10);
            if (!isNaN(newYear) && newYear >= 2023 && newYear <= 2030) {
                generateCalendar(newYear); // This will now save the year to localStorage
                yearInputDialogOverlay.classList.remove('active');
            } else {
                alert('Bitte geben Sie ein gültiges Jahr zwischen 2023 und 2030 ein.');
            }
        });
    </script>