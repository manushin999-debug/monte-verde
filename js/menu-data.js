/* ============================================================
   MONTE VERDE — Menu Data
   Source: verdemenuoud.xlsx
   ============================================================ */

const MENU = [
  /* ── Soepen ─────────────────────────────────────────────── */
  {
    id: 'soepen', nl: 'Soepen', en: 'Soups', icon: '🍲',
    items: [
      { id: 's1', nl: 'Zuppa Pomodori',   en: 'Zuppa Pomodori',   desc_nl: 'Tomatensoep met verse room',   desc_en: 'Tomato soup with fresh cream',   price: 6.50 },
      { id: 's2', nl: 'Zuppa Minestrone', en: 'Zuppa Minestrone', desc_nl: 'Italiaanse groentensoep',       desc_en: 'Italian vegetable soup',         price: 6.50 },
      { id: 's3', nl: 'Zuppa di Pollo',   en: 'Zuppa di Pollo',   desc_nl: 'Kippensoep',                   desc_en: 'Chicken soup',                   price: 6.50 },
    ]
  },

  /* ── Salades ─────────────────────────────────────────────── */
  {
    id: 'salades', nl: 'Salades', en: 'Salads', icon: '🥗',
    items: [
      { id: 'sa1', nl: 'Salade Misto',             en: 'Salade Misto',             desc_nl: 'Gemengde salade',                                          desc_en: 'Mix salad',                                                price: 6.50 },
      { id: 'sa2', nl: 'Salade Rucola Parmigiano', en: 'Salade Rucola Parmigiano', desc_nl: 'Tomaat, rucola en parmezaanse kaas',                       desc_en: 'Tomato, rocket and parmesan cheese',                       price: 7.00 },
      { id: 'sa3', nl: 'Salade Nicosia',           en: 'Salade Nicosia',           desc_nl: 'Sla, tomaten, komkommer, paprika, ei en tonijn',           desc_en: 'Salad, tomato, cucumber, paprika, egg and tuna',          price: 8.00 },
      { id: 'sa4', nl: 'Salade Caprese',           en: 'Salade Caprese',           desc_nl: 'Verse mozzarella, basilicum en tomaten',                   desc_en: 'Fresh mozzarella, basil and tomatoes',                    price: 8.00 },
    ]
  },

  /* ── Antipasti ───────────────────────────────────────────── */
  {
    id: 'antipasti', nl: 'Voorgerechten', en: 'Starters', icon: '🍽️',
    items: [
      { id: 'a1', nl: 'Carpaccio',           en: 'Carpaccio',           desc_nl: 'Dun gesneden ossenhaas met kappertjes en parmezaanse kaas',                           desc_en: 'Thinly sliced beef tenderloin with capers and Parmesan cheese',                price: 10.00 },
      { id: 'a2', nl: 'Antipasto Misto',     en: 'Antipasto Misto',     desc_nl: 'Diverse soorten salami met kaas',                                                     desc_en: 'Different kinds of salami with cheese',                                        price: 15.50 },
      { id: 'a3', nl: 'Melanzane Mozzarella',en: 'Melanzane Mozzarella',desc_nl: 'Aubergine, verse tomaat, pesto en mozzarella kaas uit de oven',                       desc_en: 'Eggplant, fresh tomato, pesto and mozzarella cheese from the oven',           price: 9.00  },
      { id: 'a4', nl: 'Funghi Ripieni',      en: 'Funghi Ripieni',      desc_nl: 'Gevulde champignons met gorgonzola kaas en witte wijn uit de oven',                   desc_en: 'Stuffed mushrooms with gorgonzola cheese and white wine from the oven',       price: 10.00 },
      { id: 'a5', nl: 'Gamberetti Fritti',   en: 'Gamberetti Fritti',   desc_nl: 'Gebakken garnalen met verse champignons, knoflook, uien en peterselie',               desc_en: 'Fried shrimp, fresh mushrooms, garlic, onions and parsley',                   price: 14.00 },
      { id: 'a6', nl: 'Sardine',             en: 'Sardine',             desc_nl: 'Gemarineerd en gefrituurd',                                                           desc_en: 'Marinated and fried',                                                         price: 9.50  },
      { id: 'a7', nl: 'Cozze con Pomodori',  en: 'Cozze con Pomodori',  desc_nl: 'Gebakken mosselen, tomatensaus, knoflook en pikant',                                  desc_en: 'Baked mussels with tomato, garlic and spicy',                                 price: 9.50  },
    ]
  },

  /* ── Pane ────────────────────────────────────────────────── */
  {
    id: 'pane', nl: 'Brood', en: 'Bread', icon: '🥖',
    items: [
      { id: 'br1', nl: 'Pane Burro',  en: 'Pane Burro',  desc_nl: 'Huisgemaakte ronde broodjes met kruidenboter en olijven', desc_en: 'Bread with garlic butter and olives',               price: 6.00 },
      { id: 'br2', nl: 'Focaccia',    en: 'Focaccia',    desc_nl: 'Vers gebakken brood met kruidenboter en olijven',         desc_en: 'Freshly baked bread with garlic butter and olives', price: 6.00 },
      { id: 'br3', nl: 'Bruschetta',  en: 'Bruschetta',  desc_nl: '',                                                        desc_en: '',                                                  price: 6.00 },
    ]
  },

  /* ── Pizza ───────────────────────────────────────────────── */
  {
    id: 'pizza', nl: 'Pizza', en: 'Pizza', icon: '🍕',
    items: [
      { id: 'p18', nl: 'Margherita',       en: 'Margherita',       desc_nl: 'Tomaat en kaas',                                                                         desc_en: 'Tomato and cheese',                                                              price: 9.00 },
      { id: 'p19', nl: 'Napoli',           en: 'Napoli',           desc_nl: 'Tomaat, kaas en anjovis',                                                               desc_en: 'Tomato, cheese and anchovy',                                                     price: 9.00 },
      { id: 'p23', nl: 'Borromea',         en: 'Borromea',         desc_nl: 'Tomaat, kaas en ham',                                                                   desc_en: 'Tomato, cheese and ham',                                                         price: 9.00 },
      { id: 'p27', nl: 'Salami',           en: 'Salami',           desc_nl: 'Tomaat, kaas en salami',                                                                desc_en: 'Tomato, cheese and salami',                                                      price: 9.00 },
      { id: 'p28', nl: 'Funghi',           en: 'Funghi',           desc_nl: 'Tomaat, kaas en verse champignons (vegetarisch)',                                       desc_en: 'Tomato, cheese and fresh mushrooms (vegetarian)',                                price: 9.00 },
      { id: 'p29', nl: 'Salsiccia',        en: 'Salsiccia',        desc_nl: 'Tomaat, kaas en pikante worst',                                                         desc_en: 'Tomato, cheese and spicy sausage',                                               price: 9.00 },
      { id: 'p31', nl: 'Mozzarella',       en: 'Mozzarella',       desc_nl: 'Tomaat en mozzarella kaas',                                                             desc_en: 'Tomato and mozzarella cheese',                                                   price: 9.00 },
      { id: 'p32', nl: 'Tonno',            en: 'Tonno',            desc_nl: 'Tomaat, kaas, tonijn, uien, olijven en kappertjes',                                     desc_en: 'Tomato, cheese, tuna, onions, olives and capers',                               price: 9.00 },
      { id: 'p33', nl: 'Quattro Stagione', en: 'Quattro Stagione', desc_nl: 'Tomaat, kaas, ham, champignons, artisjokken en olijven',                               desc_en: 'Tomato, cheese, ham, mushrooms, artichokes and olives',                         price: 9.00 },
      { id: 'p34', nl: 'Quattro Formaggi', en: 'Quattro Formaggi', desc_nl: 'Tomaat en 4 soorten kaas',                                                             desc_en: 'Tomato and 4 different cheeses',                                                 price: 9.00 },
      { id: 'p35', nl: 'Capricciosa',      en: 'Capricciosa',      desc_nl: 'Tomaat, kaas, ham, salami en champignons',                                             desc_en: 'Tomato, cheese, ham, salami and mushrooms',                                     price: 9.00 },
      { id: 'p36', nl: 'Pizza King',       en: 'Pizza King',       desc_nl: 'Tomaat, feta kaas, pikante worst, paprika en ei',                                      desc_en: 'Tomato, feta cheese, spicy sausage, capsicum and egg',                          price: 9.00 },
      { id: 'p37', nl: 'Monte Verde',      en: 'Monte Verde',      desc_nl: 'Tomaat, kaas, paprika, champignons, uien, olijven, kappertjes, artisjokken, ham, salami', desc_en: 'Tomato, cheese, capsicum, mushrooms, onions, olives, capers, artichokes, ham and salami', price: 9.00 },
      { id: 'p39', nl: 'Picasso',          en: 'Picasso',          desc_nl: 'Tomaat, kaas, paprika, champignons, uien, olijven, kappertjes en artisjokken (vegetarisch)', desc_en: 'Tomato, cheese, paprika, mushrooms, onions, olives, capers and artichokes (vegetarian)', price: 9.00 },
      { id: 'p40', nl: 'Popeye',           en: 'Popeye',           desc_nl: 'Tomaat, feta kaas, ei en spinazie (vegetarisch)',                                       desc_en: 'Tomato, feta cheese, spinach and egg (vegetarian)',                             price: 9.00 },
      { id: 'p41', nl: 'Calzone',          en: 'Calzone',          desc_nl: 'Kaas, ham, salami, champignons, uien, artisjokken en aparte gehaktsaus',               desc_en: 'Cheese, ham, salami, mushrooms, onions, artichokes and separate minced meat sauce', price: 9.00 },
      { id: 'p42', nl: 'Pizza Prosciutto', en: 'Pizza Prosciutto', desc_nl: 'Tomatensaus, kaas, parmaham',                                                           desc_en: 'Tomato sauce, cheese, Parma ham',                                               price: 9.00 },
      { id: 'p43', nl: 'Pizza Melanzane',  en: 'Pizza Melanzane',  desc_nl: 'Tomatensaus, mozzarella kaas, uien, aubergine en rucola (vegetarisch)',                 desc_en: 'Tomato sauce, mozzarella cheese, onions, eggplant and rocket (vegetarian)',    price: 9.00 },
      { id: 'p45', nl: 'Frutti di Mare',   en: 'Frutti di Mare',   desc_nl: 'Tomaat, kaas en diverse zeevruchten',                                                  desc_en: 'Tomato, cheese and seafood',                                                    price: 9.00 },
      { id: 'p46', nl: 'Hawaii',           en: 'Hawaii',           desc_nl: 'Tomaat, kaas, ham en ananas',                                                           desc_en: 'Tomato, cheese, ham and pineapple',                                             price: 9.00 },
      { id: 'p47', nl: 'Ancona',           en: 'Ancona',           desc_nl: 'Tomaat, 4 soorten kaas en pikante worst',                                               desc_en: 'Tomato, spicy sausage and 4 kinds of cheese',                                   price: 9.00 },
    ]
  },

  /* ── Pasta ───────────────────────────────────────────────── */
  {
    id: 'pasta', nl: 'Pasta', en: 'Pasta', icon: '🍝',
    items: [
      { id: 'pa49', nl: 'Bolognese',    en: 'Bolognese',    desc_nl: 'Tomatensaus met gehaktvlees',                                                                    desc_en: 'Tomato sauce with meat',                                                        price: 9.00 },
      { id: 'pa51', nl: 'Carbonara',    en: 'Carbonara',    desc_nl: 'Spek, ei en roomsaus',                                                                           desc_en: 'Bacon, egg and cream sauce',                                                    price: 9.00 },
      { id: 'pa52', nl: 'Ferro e Fuoco',en: 'Ferro e Fuoco',desc_nl: 'Spek, champignons, doperwtjes, spaanse peper, basilicum, roomsaus en gehaktsaus',                desc_en: 'Bacon, mushrooms, green peas, chilli, basil, cream sauce and meat sauce',        price: 9.00 },
      { id: 'pa53', nl: 'Puttanesca',   en: 'Puttanesca',   desc_nl: 'Vegetarische tomatensaus met paprika, champignons, olijven, kappertjes en spaanse peper',       desc_en: 'Vegetarian tomato sauce with capsicum, mushrooms, olives, capers and chilli',   price: 9.00 },
      { id: 'pa54', nl: 'Frutti di Mare',en:'Frutti di Mare',desc_nl: 'Tomatensaus en diverse zeevruchten',                                                            desc_en: 'Tomato sauce and seafood',                                                      price: 9.00 },
      { id: 'pa56', nl: 'Aglio Olio',   en: 'Aglio Olio',   desc_nl: 'Knoflook, peterselie, olijvenolie en spaanse peper',                                            desc_en: 'Garlic, parsley, olive oil and chilli',                                         price: 9.00 },
      { id: 'pa57', nl: 'Peperoncino',  en: 'Peperoncino',  desc_nl: 'Knoflook, peterselie, olijvenolie en spaanse peper',                                            desc_en: 'Garlic, parsley, olive oil and chilli',                                         price: 9.00 },
      { id: 'pa58', nl: 'Mediterranea', en: 'Mediterranea', desc_nl: 'Tomatensaus, olijven, knoflook en tonijn',                                                       desc_en: 'Tomato sauce, capsicum, olives, garlic and tuna',                               price: 9.00 },
    ]
  },

  /* ── Pasta Specialiteiten ────────────────────────────────── */
  {
    id: 'specialiteiten', nl: 'Pasta Specialiteiten', en: 'Pasta Specialties', icon: '⭐',
    items: [
      { id: 'sp58', nl: 'Tagliatelle Gorgonzola Salmone', en: 'Tagliatelle Gorgonzola Salmone', desc_nl: 'Gorgonzola kaas, zalm en roomsaus',                    desc_en: 'Gorgonzola cheese, salmon and cream sauce',            price: 9.00 },
      { id: 'sp59', nl: 'Maccheroni Gorgonzola Pollo',    en: 'Maccheroni Gorgonzola Pollo',    desc_nl: 'Gorgonzola kaas, kipfilet en roomsaus',                 desc_en: 'Gorgonzola cheese, chicken breast and cream sauce',    price: 9.00 },
      { id: 'sp60', nl: 'Spaghetti Gamba',                en: 'Spaghetti Gamba',                desc_nl: 'Garnalen, spinazie, knoflook en tomatensaus',           desc_en: 'Shrimp, spinach, garlic and tomato sauce',             price: 9.00 },
      { id: 'sp62', nl: 'Tortellini Verde',               en: 'Tortellini Verde',               desc_nl: 'Ham, spinazie, kerrie en roomsaus',                      desc_en: 'Ham, spinach, curry and cream sauce',                  price: 9.00 },
      { id: 'sp64', nl: 'Maccheroni Pesto',               en: 'Maccheroni Pesto',               desc_nl: 'Roomsaus met champignons en pesto',                      desc_en: 'Cream sauce with mushrooms and pesto',                 price: 9.00 },
    ]
  },

  /* ── Risotto ─────────────────────────────────────────────── */
  {
    id: 'risotto', nl: 'Risotto', en: 'Risotto', icon: '🍚',
    items: [
      { id: 'r131', nl: 'Risotto con Frutti di Mare', en: 'Risotto con Frutti di Mare', desc_nl: 'Rijst met zeevruchten en parmezaanse kaas',         desc_en: 'Rice with seafood and parmesan cheese',         price: 9.00 },
      { id: 'r132', nl: 'Risotto con Pollo',          en: 'Risotto con Pollo',          desc_nl: 'Rijst met kip, champignons, paprika en uien',       desc_en: 'Rice with chicken, mushrooms, capsicum and onions', price: 9.00 },
    ]
  },

  /* ── Pasta al Forno ──────────────────────────────────────── */
  {
    id: 'pasta-al-forno', nl: 'Pasta al Forno', en: 'Baked Pasta', icon: '🫕',
    items: [
      { id: 'pf65', nl: 'Lasagne',          en: 'Lasagne',          desc_nl: 'Platte pasta met gehaktsaus en kaas',                                                    desc_en: 'Flat pasta with meat sauce and cheese',                                          price: 9.00 },
      { id: 'pf66', nl: 'Lasagne Speciale', en: 'Lasagne Speciale', desc_nl: 'Platte pasta met aubergine, courgette, tomatensaus en mozzarella (vegetarisch)',         desc_en: 'Flat pasta with eggplant, zucchini, tomato sauce and mozzarella (vegetarian)',  price: 9.00 },
      { id: 'pf68', nl: 'Panzerotti',       en: 'Panzerotti',       desc_nl: 'Gerold deeg gevuld met ricotta, spinazie, tomatensaus en kaas (vegetarisch)',            desc_en: 'Rolled dough filled with ricotta, spinach, tomato sauce and cheese (vegetarian)', price: 9.00 },
      { id: 'pf69', nl: 'Cannelloni',       en: 'Cannelloni',       desc_nl: 'Gerold deeg gevuld met gehakt, bolognesesaus en kaas',                                   desc_en: 'Rolled dough filled with minced meat, bolognese sauce and cheese',              price: 9.00 },
    ]
  },

  /* ── Kip ─────────────────────────────────────────────────── */
  {
    id: 'kip', nl: 'Kipgerechten', en: 'Chicken', icon: '🍗',
    items: [
      { id: 'k72', nl: 'Pollo Formaggio',  en: 'Pollo Formaggio',  desc_nl: 'Kipfilet gevuld met kaas, verse champignons en roomsaus',       desc_en: 'Chicken breast stuffed with cheese, mushrooms and cream sauce', price: 20.00 },
      { id: 'k74', nl: 'Pollo ai Funghi',  en: 'Pollo ai Funghi',  desc_nl: 'Gegrilde kipfilet met gebakken champignons',                    desc_en: 'Grilled chicken breast with baked mushrooms',                   price: 20.00 },
      { id: 'k76', nl: 'Pollo Melanzane',  en: 'Pollo Melanzane',  desc_nl: 'Kipfilet met aubergine, tomatensaus en kaas uit de oven',       desc_en: 'Chicken with aubergine, tomato sauce and cheese from the oven', price: 21.00 },
    ]
  },

  /* ── Vlees ───────────────────────────────────────────────── */
  {
    id: 'vlees', nl: 'Vleesgerechten', en: 'Meat Dishes', icon: '🥩',
    items: [
      { id: 'vl89',  nl: 'Scaloppina alla Parmigiana', en: 'Scaloppina alla Parmigiana', desc_nl: 'Kalfsvlees met aubergine, tomatensaus en kaas uit de oven',                       desc_en: 'Veal with eggplant, tomato sauce and cheese from the oven',                   price: 22.00 },
      { id: 'vl91',  nl: 'Scaloppina alla Siciliana',  en: 'Scaloppina alla Siciliana',  desc_nl: 'Kalfsvlees met tomatensaus, paprika, champignons, olijven en kappertjes',         desc_en: 'Veal with tomato sauce, capsicum, mushrooms, olives and capers',              price: 22.00 },
      { id: 'vl93',  nl: 'Saltimbocca alla Romana',    en: 'Saltimbocca alla Romana',    desc_nl: 'Kalfsvlees met ham, kaas en witte wijnsaus',                                     desc_en: 'Veal with ham, cheese and white wine sauce',                                  price: 22.00 },
      { id: 'vl94',  nl: 'Bistecca alla Griglia',      en: 'Bistecca alla Griglia',      desc_nl: 'Gegrilde entrecote',                                                             desc_en: 'Grilled sirloin steak',                                                       price: 20.00 },
      { id: 'vl95',  nl: 'Bistecca alla Siciliana',    en: 'Bistecca alla Siciliana',    desc_nl: 'Entrecote met tomatensaus, paprika, champignons, olijven en kappertjes',          desc_en: 'Entrecote with tomato sauce, capsicum, mushrooms, olives and capers',         price: 21.50 },
      { id: 'vl96',  nl: 'Bistecca al Pepe Verde',     en: 'Bistecca al Pepe Verde',     desc_nl: 'Entrecote met roomsaus, groene peper en champignons',                            desc_en: 'Entrecote with cream sauce, green pepper and mushrooms',                      price: 21.50 },
      { id: 'vl99',  nl: 'Grigliata Mista',            en: 'Grigliata Mista',            desc_nl: 'Entrecote, kalfsvlees, kipfilet en lamskoteletten op de grill',                  desc_en: 'Entrecote, veal, chicken breast and lamb chops on the grill',                price: 25.00 },
      { id: 'vl100', nl: 'Filetto al Pepe Verde',      en: 'Filetto al Pepe Verde',      desc_nl: 'Ossenhaas met roomsaus, groene peper en champignons',                            desc_en: 'Sirloin steak with cream sauce, green pepper and mushrooms',                  price: 28.50 },
      { id: 'vl101', nl: 'Filetto alla Siciliana',     en: 'Filetto alla Siciliana',     desc_nl: 'Ossenhaas met tomatensaus, paprika, champignons, olijven en kappertjes',         desc_en: 'Sirloin steak with tomato sauce, capsicum, mushrooms, olives and capers',    price: 28.50 },
    ]
  },

  /* ── Vis ─────────────────────────────────────────────────── */
  {
    id: 'vis', nl: 'Visgerechten', en: 'Fish Dishes', icon: '🐟',
    items: [
      { id: 'fi102', nl: 'Calamari',                en: 'Calamari',                desc_nl: 'Gefrituurde inktvis',                                  desc_en: 'Fried squid',                                         price: 15.00 },
      { id: 'fi105', nl: 'Slibtong',                en: 'Slibtong',                desc_nl: '3 stuks gebakken slibtong',                            desc_en: '3 pieces of baked Dover sole',                        price: 27.50 },
      { id: 'fi107', nl: 'Pesce Misto alla Griglia', en: 'Pesce Misto alla Griglia', desc_nl: 'Stukjes zalm, slibtong, garnalen en sardines',       desc_en: 'Pieces of salmon, Dover sole, shrimp and sardines',   price: 27.50 },
      { id: 'fi108', nl: 'Salmone al Forno',        en: 'Salmone al Forno',        desc_nl: 'Zalmfilet met pesto en mozzarella uit de oven',        desc_en: 'Salmon fillet with pesto and mozzarella from the oven', price: 21.50 },
      { id: 'fi109', nl: 'Salmone alla Griglia',    en: 'Salmone alla Griglia',    desc_nl: 'Zalmfilet op de grill',                                desc_en: 'Salmon fillet on the grill',                          price: 20.50 },
    ]
  },

  /* ── Desserts ────────────────────────────────────────────── */
  {
    id: 'desserts', nl: 'Desserts', en: 'Desserts', icon: '🍮',
    items: [
      { id: 'd110', nl: 'Tiramisu',                       en: 'Tiramisu',                       desc_nl: 'Italiaans nagerecht',                                         desc_en: 'Italian dessert',                                          price: 6.50 },
      { id: 'd111', nl: 'Dame Blanche',                   en: 'Dame Blanche',                   desc_nl: 'Roomijs met chocoladesaus en slagroom',                       desc_en: 'Ice cream with chocolate sauce and whipped cream',         price: 6.50 },
      { id: 'd112', nl: 'Banana Split',                   en: 'Banana Split',                   desc_nl: 'Roomijs met banaan, advocaat en slagroom',                    desc_en: 'Ice cream with banana, advocaat and cream',               price: 6.50 },
      { id: 'd115', nl: 'Profitroles',                    en: 'Profiteroles',                   desc_nl: 'Slagroomsoesjes met ijs',                                     desc_en: 'Cream puffs with ice cream',                              price: 6.50 },
      { id: 'd117', nl: 'Gelato Misto',                   en: 'Gelato Misto',                   desc_nl: 'Vanille, aardbei en chocolade ijs met slagroom',              desc_en: 'Vanilla, strawberry and chocolate ice cream with cream',   price: 6.50 },
      { id: 'd118', nl: 'Pannenkoek met Banaan en Nutella', en: 'Pancake with Banana and Nutella', desc_nl: 'Pannenkoek met banaan en Nutella chocolade',              desc_en: 'Pancake with banana and Nutella chocolate',               price: 9.00 },
      { id: 'd120', nl: 'Pannenkoek Grand Marnier',       en: 'Pancake Grand Marnier',          desc_nl: 'Pannenkoek met vanille ijs, Grand Marnier en jus d\'orange', desc_en: 'Pancake with vanilla ice cream, Grand Marnier and orange juice', price: 8.00 },
      { id: 'd121', nl: 'Scroppino',                      en: 'Scroppino',                      desc_nl: 'Citroensorbet met prosecco en vodka',                         desc_en: 'Lemon sorbet with prosecco and vodka',                     price: 7.00 },
      { id: 'd122', nl: 'Affogato',                       en: 'Affogato',                       desc_nl: 'Espresso met bolletje ijs en slagroom',                       desc_en: 'Espresso with ice cream and whipped cream',               price: 5.00 },
    ]
  },

  /* ── Dranken ─────────────────────────────────────────────── */
  {
    id: 'dranken', nl: 'Dranken', en: 'Beverages', icon: '🥤',
    items: [
      /* Frisdrank */
      { id: 'dr1',  nl: 'Cola / Zero / Fanta / 7up (klein)',    en: 'Cola / Zero / Fanta / 7up (small)',    desc_nl: 'Casis, Ice thee, Bitterlemon, Tonic ook beschikbaar', desc_en: 'Cassis, Ice tea, Bitterlemon, Tonic also available', price: 3.50 },
      { id: 'dr2',  nl: 'Cola / Zero / Fanta / 7up (groot)',    en: 'Cola / Zero / Fanta / 7up (large)',    desc_nl: 'Casis, Ice thee, Bitterlemon, Tonic ook beschikbaar', desc_en: 'Cassis, Ice tea, Bitterlemon, Tonic also available', price: 7.00 },
      { id: 'dr3',  nl: 'Appelsap (klein)',                     en: 'Apple Juice (small)',                  desc_nl: '',                                                   desc_en: '',                                                  price: 3.50 },
      { id: 'dr4',  nl: 'Jus d\'Orange (klein)',                en: 'Orange Juice (small)',                 desc_nl: '',                                                   desc_en: '',                                                  price: 3.50 },
      { id: 'dr5',  nl: 'Spa Blauw / Spa Rood',                en: 'Still / Sparkling Water',              desc_nl: 'Klein flesje',                                       desc_en: 'Small bottle',                                      price: 3.50 },
      { id: 'dr6',  nl: 'Aqua Panna Still',                    en: 'Aqua Panna Still',                     desc_nl: '0,75 liter',                                         desc_en: '0.75 litre',                                        price: 7.50 },
      { id: 'dr7',  nl: 'San Pellegrino Sparkling',            en: 'San Pellegrino Sparkling',             desc_nl: '0,75 liter',                                         desc_en: '0.75 litre',                                        price: 7.50 },
      /* Warme dranken */
      { id: 'dr8',  nl: 'Koffie',                              en: 'Coffee',                               desc_nl: '',                                                   desc_en: '',                                                  price: 3.50 },
      { id: 'dr9',  nl: 'Espresso',                            en: 'Espresso',                             desc_nl: '',                                                   desc_en: '',                                                  price: 3.00 },
      { id: 'dr10', nl: 'Dubbel Espresso',                     en: 'Double Espresso',                      desc_nl: '',                                                   desc_en: '',                                                  price: 4.00 },
      { id: 'dr11', nl: 'Cappuccino',                          en: 'Cappuccino',                           desc_nl: '',                                                   desc_en: '',                                                  price: 4.00 },
      { id: 'dr12', nl: 'Koffie Verkeerd',                     en: 'Coffee Latte',                         desc_nl: '',                                                   desc_en: '',                                                  price: 4.00 },
      { id: 'dr13', nl: 'Thee',                                en: 'Tea',                                  desc_nl: '',                                                   desc_en: '',                                                  price: 3.50 },
      { id: 'dr14', nl: 'Verse Munt Thee',                     en: 'Fresh Mint Tea',                       desc_nl: '',                                                   desc_en: '',                                                  price: 4.00 },
      { id: 'dr15', nl: 'Chocolademelk',                       en: 'Hot Chocolate',                        desc_nl: '',                                                   desc_en: '',                                                  price: 5.50 },
      { id: 'dr16', nl: 'Irish Coffee',                        en: 'Irish Coffee',                         desc_nl: '',                                                   desc_en: '',                                                  price: 7.00 },
      /* Bier */
      { id: 'dr17', nl: 'Heineken (klein)',                    en: 'Heineken (small)',                     desc_nl: '',                                                   desc_en: '',                                                  price: 4.00 },
      { id: 'dr18', nl: 'Heineken (groot)',                    en: 'Heineken (large)',                     desc_nl: '',                                                   desc_en: '',                                                  price: 8.00 },
      { id: 'dr19', nl: 'Wit Bier',                            en: 'White Beer',                           desc_nl: 'Fles',                                               desc_en: 'Bottle',                                            price: 6.00 },
      { id: 'dr20', nl: 'Peroni',                              en: 'Peroni',                               desc_nl: '',                                                   desc_en: '',                                                  price: 6.00 },
      { id: 'dr21', nl: 'Duvel',                               en: 'Duvel',                               desc_nl: '',                                                   desc_en: '',                                                  price: 6.50 },
      { id: 'dr22', nl: 'La Chouffe',                          en: 'La Chouffe',                           desc_nl: '',                                                   desc_en: '',                                                  price: 6.50 },
      { id: 'dr23', nl: 'IJ Wit',                              en: 'IJ Wit',                               desc_nl: '',                                                   desc_en: '',                                                  price: 6.50 },
      /* Wijn per glas */
      { id: 'dr24', nl: 'Merlot (glas)',                       en: 'Merlot (glass)',                       desc_nl: 'Rode wijn',                                          desc_en: 'Red wine',                                          price: 4.50 },
      { id: 'dr25', nl: 'Montepulciano (glas)',                en: 'Montepulciano (glass)',                 desc_nl: 'Rode wijn',                                          desc_en: 'Red wine',                                          price: 5.50 },
      { id: 'dr26', nl: 'Vino Bianco (glas)',                  en: 'Vino Bianco (glass)',                   desc_nl: 'Droge witte wijn',                                   desc_en: 'Dry white wine',                                    price: 4.50 },
      { id: 'dr27', nl: 'Rosato (glas)',                       en: 'Rosato (glass)',                        desc_nl: 'Rosé',                                               desc_en: 'Rosé',                                              price: 4.50 },
      { id: 'dr28', nl: 'Prosecco (glas)',                     en: 'Prosecco (glass)',                      desc_nl: '',                                                   desc_en: '',                                                  price: 6.50 },
      { id: 'dr29', nl: 'Chardonnay (glas)',                   en: 'Chardonnay (glass)',                    desc_nl: 'Droog',                                              desc_en: 'Dry',                                               price: 6.50 },
      { id: 'dr30', nl: 'Pinot Grigio (glas)',                 en: 'Pinot Grigio (glass)',                  desc_nl: '',                                                   desc_en: '',                                                  price: 6.50 },
      { id: 'dr31', nl: 'Lambrusco Bianco (glas)',             en: 'Lambrusco Bianco (glass)',              desc_nl: 'Wit zoet',                                           desc_en: 'Sweet white',                                       price: 5.00 },
      { id: 'dr32', nl: 'Lambrusco Rosso (glas)',              en: 'Lambrusco Rosso (glass)',               desc_nl: 'Zoet rood',                                          desc_en: 'Sweet red',                                         price: 5.00 },
      /* Aperitief */
      { id: 'dr33', nl: 'Aperol Spritz',                       en: 'Aperol Spritz',                        desc_nl: '',                                                   desc_en: '',                                                  price: 8.00 },
      { id: 'dr34', nl: 'Grappa / Amaretto / Limoncello / Sambuca', en: 'Grappa / Amaretto / Limoncello / Sambuca', desc_nl: 'Tia Maria, Tequila, Cointreau, Baileys, Campari ook beschikbaar', desc_en: 'Tia Maria, Tequila, Cointreau, Baileys, Campari also available', price: 6.00 },
      { id: 'dr35', nl: 'Gin',                                 en: 'Gin',                                  desc_nl: '',                                                   desc_en: '',                                                  price: 8.00 },
    ]
  },
];
