/* ============================================================
   MONTE VERDE — Menu Data
   Source: monteverde.sitedish.shop
   ============================================================ */

const MENU = [
  {
    id: 'soepen',
    nl: 'Soepen',
    en: 'Soups',
    icon: '🍲',
    items: [
      { id: 's1', nl: 'Zuppa pomodori',   en: 'Zuppa pomodori',   desc_nl: 'Tomatensoep met verse room',               desc_en: 'Tomato soup with fresh cream',              price: 6.00 },
      { id: 's2', nl: 'Zuppa ministrone', en: 'Zuppa ministrone', desc_nl: 'Italiaanse groentesoep',                   desc_en: 'Italian vegetable soup',                    price: 6.00 },
      { id: 's3', nl: 'Zuppa di pollo',   en: 'Zuppa di pollo',   desc_nl: 'Kippensoep',                               desc_en: 'Chicken soup',                              price: 6.00 },
    ]
  },
  {
    id: 'salades',
    nl: 'Salades',
    en: 'Salads',
    icon: '🥗',
    items: [
      { id: 'sa1', nl: 'Salade misto',              en: 'Salade misto',              desc_nl: 'Gemengde groenten',                                           desc_en: 'Mixed greens',                                           price: 7.00 },
      { id: 'sa2', nl: 'Salade rucola Parmigiano',  en: 'Salade rucola Parmigiano',  desc_nl: 'Tomaat, rucola, Parmezaan',                                   desc_en: 'Tomato, arugula, Parmesan',                              price: 8.00 },
      { id: 'sa3', nl: 'Salad Nicosia',             en: 'Salad Nicosia',             desc_nl: 'Sla, tomaat, komkommer, paprika, ei, tonijn',                  desc_en: 'Lettuce, tomato, cucumber, pepper, egg, tuna',           price: 8.00 },
      { id: 'sa4', nl: 'Salade caprese',            en: 'Salade caprese',            desc_nl: 'Verse mozzarella, basilicum, tomaat',                          desc_en: 'Fresh mozzarella, basil, tomato',                        price: 9.00 },
    ]
  },
  {
    id: 'voorgerechten',
    nl: 'Voorgerechten',
    en: 'Appetizers',
    icon: '🍽️',
    items: [
      { id: 'v1', nl: 'Carpaccio',          en: 'Carpaccio',          desc_nl: 'Gesneden rundvlees met kappertjes, Parmezaan',          desc_en: 'Sliced beef with capers, Parmesan',                     price: 10.00 },
      { id: 'v2', nl: 'Antipasto misto',    en: 'Antipasto misto',    desc_nl: 'Gemengd vleeswaren met kaas',                          desc_en: 'Assorted cured meats with cheese',                      price: 16.00 },
      { id: 'v3', nl: 'Melanzane mozzarella', en: 'Melanzane mozzarella', desc_nl: 'Aubergine, tomaat, pesto, mozzarella',             desc_en: 'Eggplant, tomato, pesto, mozzarella',                  price: 9.00  },
      { id: 'v4', nl: 'Gamberetti fritti',  en: 'Gamberetti fritti',  desc_nl: 'Gebakken garnalen met champignons, knoflook, ui, peterselie', desc_en: 'Fried shrimp with mushrooms, garlic, onion, parsley', price: 14.00 },
      { id: 'v5', nl: 'Foccacia',           en: 'Focaccia',           desc_nl: 'Versgebakken brood met kruidenboter, olijven',         desc_en: 'Fresh baked bread with herb butter, olives',            price: 6.00  },
    ]
  },
  {
    id: 'pizza',
    nl: 'Pizza',
    en: 'Pizza',
    icon: '🍕',
    items: [
      { id: 'p1',  nl: 'Pizza Margherita',       en: 'Pizza Margherita',       desc_nl: 'Tomaat, kaas',                                                           desc_en: 'Tomato, cheese',                                                          price: 11.00 },
      { id: 'p2',  nl: 'Pizza Napoli',            en: 'Pizza Napoli',            desc_nl: 'Tomaat, kaas, ansjovis',                                                desc_en: 'Tomato, cheese, anchovies',                                               price: 13.00 },
      { id: 'p3',  nl: 'Pizza Borromea',          en: 'Pizza Borromea',          desc_nl: 'Tomaat, kaas, ham',                                                     desc_en: 'Tomato, cheese, ham',                                                     price: 14.00 },
      { id: 'p4',  nl: 'Pizza salami',            en: 'Pizza salami',            desc_nl: 'Tomaat, kaas, salami',                                                  desc_en: 'Tomato, cheese, salami',                                                  price: 14.00 },
      { id: 'p5',  nl: 'Pizza funghi',            en: 'Pizza funghi',            desc_nl: 'Tomaat, kaas, verse champignons',                                       desc_en: 'Tomato, cheese, fresh mushrooms',                                         price: 14.00 },
      { id: 'p6',  nl: 'Pizza salsiccia',         en: 'Pizza salsiccia',         desc_nl: 'Tomaat, kaas, pikante worst',                                          desc_en: 'Tomato, cheese, spicy sausage',                                           price: 14.00 },
      { id: 'p7',  nl: 'Pizza mozzarella',        en: 'Pizza mozzarella',        desc_nl: 'Tomaat, mozzarella',                                                    desc_en: 'Tomato, mozzarella',                                                      price: 13.00 },
      { id: 'p8',  nl: 'Pizza tonno',             en: 'Pizza tonno',             desc_nl: 'Tomaat, kaas, tonijn, ui, olijven, kappertjes',                         desc_en: 'Tomato, cheese, tuna, onion, olives, capers',                             price: 15.00 },
      { id: 'p9',  nl: 'Pizza quattro stagioni',  en: 'Pizza quattro stagioni',  desc_nl: 'Tomaat, kaas, ham, champignons, artisjok, olijven',                     desc_en: 'Tomato, cheese, ham, mushrooms, artichokes, olives',                      price: 14.50 },
      { id: 'p10', nl: 'Pizza quattro formaggi',  en: 'Pizza quattro formaggi',  desc_nl: 'Tomaat, 4 kaassoorten',                                                 desc_en: 'Tomato, 4 cheese varieties',                                              price: 15.00 },
      { id: 'p11', nl: 'Pizza capricciosa',       en: 'Pizza capricciosa',       desc_nl: 'Tomaat, kaas, ham, salami, champignons',                                desc_en: 'Tomato, cheese, ham, salami, mushrooms',                                  price: 15.50 },
      { id: 'p12', nl: 'Pizza king',              en: 'Pizza king',              desc_nl: 'Tomaat, feta, pikante worst, paprika, ei',                              desc_en: 'Tomato, feta, spicy sausage, pepper, egg',                                price: 15.00 },
      { id: 'p13', nl: 'Pizza Monte Verde',       en: 'Pizza Monte Verde',       desc_nl: 'Tomaat, kaas, paprika, champignons, ui, olijven, artisjok, ham, salami', desc_en: 'Tomato, cheese, pepper, mushrooms, onion, olives, artichokes, ham, salami', price: 16.50 },
      { id: 'p14', nl: 'Pizza Picasso',           en: 'Pizza Picasso',           desc_nl: 'Tomaat, kaas, paprika, champignons, ui, olijven, kappertjes, artisjok', desc_en: 'Tomato, cheese, pepper, mushrooms, onion, olives, capers, artichokes',     price: 15.50 },
      { id: 'p15', nl: 'Pizza Popeye',            en: 'Pizza Popeye',            desc_nl: 'Tomaat, feta, ei, spinazie',                                            desc_en: 'Tomato, feta, egg, spinach',                                              price: 15.00 },
      { id: 'p16', nl: 'Pizza calzone',           en: 'Pizza calzone',           desc_nl: 'Kaas, ham, salami, champignons, ui, artisjok',                          desc_en: 'Cheese, ham, salami, mushrooms, onion, artichokes',                       price: 14.50 },
      { id: 'p17', nl: 'Pizza frutti di mare',    en: 'Pizza frutti di mare',    desc_nl: 'Tomaat, kaas, gemengde zeevruchten',                                    desc_en: 'Tomato, cheese, mixed seafood',                                           price: 15.50 },
      { id: 'p18', nl: 'Pizza Hawaï',             en: 'Pizza Hawaï',             desc_nl: 'Tomaat, kaas, ham, ananas',                                             desc_en: 'Tomato, cheese, ham, pineapple',                                          price: 15.00 },
      { id: 'p19', nl: 'Pizza Ancona',            en: 'Pizza Ancona',            desc_nl: 'Tomaat, 4 kaassoorten, pikante worst',                                  desc_en: 'Tomato, 4 cheeses, spicy sausage',                                        price: 15.50 },
      { id: 'p20', nl: 'Pizza prosciutto',        en: 'Pizza prosciutto',        desc_nl: 'Tomatensaus, kaas, Parmaham',                                           desc_en: 'Tomato sauce, cheese, Parma ham',                                         price: 16.00 },
      { id: 'p21', nl: 'Pizza melanzane',         en: 'Pizza melanzane',         desc_nl: 'Tomatensaus, mozzarella, ui, aubergine, rucola',                        desc_en: 'Tomato sauce, mozzarella, onion, eggplant, arugula',                      price: 15.50 },
    ]
  },
  {
    id: 'pasta',
    nl: 'Pasta',
    en: 'Pasta',
    icon: '🍝',
    items: [
      { id: 'pa1', nl: 'Pasta bolognese',            en: 'Pasta bolognese',            desc_nl: 'Tomatensaus met gehakt',                                                    desc_en: 'Tomato sauce with ground meat',                                  price: 12.00 },
      { id: 'pa2', nl: 'Pasta carbonara',            en: 'Pasta carbonara',            desc_nl: 'Spek, ei, roomsaus',                                                        desc_en: 'Bacon, egg, cream sauce',                                        price: 14.00 },
      { id: 'pa3', nl: 'Pasta ferro e fuoco',        en: 'Pasta ferro e fuoco',        desc_nl: 'Spek, champignons, doperwten, Spaanse peper, basilicum, room, vleessaus',   desc_en: 'Bacon, mushrooms, peas, Spanish pepper, basil, cream, meat sauce', price: 15.50 },
      { id: 'pa4', nl: 'Pasta puttanesca',           en: 'Pasta puttanesca',           desc_nl: 'Vegetarische tomatensaus met paprika, champignons, olijven, kappertjes',    desc_en: 'Vegetarian tomato sauce with pepper, mushrooms, olives, capers',  price: 14.00 },
      { id: 'pa5', nl: 'Pasta frutti di mare',       en: 'Pasta frutti di mare',       desc_nl: 'Tomatensaus, gemengde zeevruchten',                                         desc_en: 'Tomato sauce, mixed seafood',                                    price: 14.50 },
      { id: 'pa6', nl: 'Pasta aglio olio peperoncino', en: 'Pasta aglio olio peperoncino', desc_nl: 'Knoflook, peterselie, olijfolie, Spaanse peper',                     desc_en: 'Garlic, parsley, olive oil, Spanish pepper',                     price: 12.00 },
      { id: 'pa7', nl: 'Pasta Mediterranea',         en: 'Pasta Mediterranea',         desc_nl: 'Tomatensaus, paprika, olijven, knoflook, tonijn',                           desc_en: 'Tomato sauce, pepper, olives, garlic, tuna',                     price: 14.50 },
    ]
  },
  {
    id: 'specialiteiten',
    nl: 'Specialiteiten van het huis',
    en: 'House Specialties',
    icon: '⭐',
    items: [
      { id: 'sp1', nl: 'Tagliatelle gorgonzola salmone', en: 'Tagliatelle gorgonzola salmone', desc_nl: 'Gorgonzola, zalm, roomsaus',                          desc_en: 'Gorgonzola, salmon, cream sauce',                  price: 14.00 },
      { id: 'sp2', nl: 'Macaroni gorgonzola pollo',      en: 'Macaroni gorgonzola pollo',      desc_nl: 'Gorgonzola, kipfilet, roomsaus',                      desc_en: 'Gorgonzola, chicken fillet, cream sauce',          price: 13.50 },
      { id: 'sp3', nl: 'Tortellini verde',               en: 'Tortellini verde',               desc_nl: 'Ham, spinazie, curry, roomsaus',                      desc_en: 'Ham, spinach, curry, cream sauce',                 price: 14.00 },
      { id: 'sp4', nl: 'Tortellini panna e prosciutto',  en: 'Tortellini panna e prosciutto',  desc_nl: 'Ham, roomsaus',                                       desc_en: 'Ham, cream sauce',                                 price: 13.50 },
      { id: 'sp5', nl: 'Spaghetti gamba',                en: 'Spaghetti gamba',                desc_nl: 'Garnalen, spinazie, knoflook, tomatensaus',           desc_en: 'Shrimp, spinach, garlic, tomato sauce',            price: 14.50 },
      { id: 'sp6', nl: 'Macaroni pesto',                 en: 'Macaroni pesto',                 desc_nl: 'Roomsaus met champignons, pesto',                     desc_en: 'Cream sauce with mushrooms, pesto',                price: 13.50 },
    ]
  },
  {
    id: 'pasta-al-forno',
    nl: 'Pasta al forno',
    en: 'Baked Pasta',
    icon: '🫕',
    items: [
      { id: 'pf1', nl: 'Lasagna',         en: 'Lasagna',         desc_nl: 'Lasagneplaten met vleessaus en kaas',                          desc_en: 'Flat pasta with meat sauce and cheese',                   price: 13.50 },
      { id: 'pf2', nl: 'Lasagna speciale', en: 'Lasagna speciale', desc_nl: 'Vegetarisch met aubergine, courgette, tomatensaus, mozzarella', desc_en: 'Vegetarian with eggplant, zucchini, tomato sauce, mozzarella', price: 13.50 },
      { id: 'pf3', nl: 'Panzerotti',      en: 'Panzerotti',      desc_nl: 'Vegetarisch gerold pasta met ricotta, spinazie, tomatensaus, kaas', desc_en: 'Vegetarian rolled pasta with ricotta, spinach, tomato sauce, cheese', price: 12.00 },
      { id: 'pf4', nl: 'Cannelloni',      en: 'Cannelloni',      desc_nl: 'Gerold pasta met gehakt, bolognesesaus, kaas',                  desc_en: 'Rolled pasta with ground meat, Bolognese sauce, cheese',  price: 12.00 },
    ]
  },
  {
    id: 'risotto',
    nl: 'Risotto',
    en: 'Risotto',
    icon: '🍚',
    items: [
      { id: 'r1', nl: 'Risotto con frutti di mare', en: 'Risotto con frutti di mare', desc_nl: 'Rijst met zeevruchten, Parmezaan', desc_en: 'Rice with seafood, Parmesan',                         price: 14.50 },
      { id: 'r2', nl: 'Risotto con pollo',          en: 'Risotto con pollo',          desc_nl: 'Rijst met kip, champignons, paprika, ui', desc_en: 'Rice with chicken, mushrooms, pepper, onion',    price: 14.50 },
      { id: 'r3', nl: 'Risotto con funghi',         en: 'Risotto con funghi',         desc_nl: 'Rijst met champignons',           desc_en: 'Rice with mushrooms',                                price: 14.00 },
    ]
  },
  {
    id: 'kip',
    nl: 'Kipgerechten',
    en: 'Chicken Dishes',
    icon: '🍗',
    items: [
      { id: 'k1', nl: 'Pollo formaggio',  en: 'Pollo formaggio',  desc_nl: 'Kipfilet gevuld met kaas, champignons, roomsaus',     desc_en: 'Chicken fillet filled with cheese, mushrooms, cream sauce', price: 19.00 },
      { id: 'k2', nl: 'Pollo al funghi',  en: 'Pollo al funghi',  desc_nl: 'Gegrilde kip met gesauteerde champignons',             desc_en: 'Grilled chicken with sautéed mushrooms',                    price: 19.00 },
      { id: 'k3', nl: 'Pollo melanzane',  en: 'Pollo melanzane',  desc_nl: 'Kip met aubergine, tomatensaus, kaas uit de oven',     desc_en: 'Chicken with eggplant, tomato sauce, cheese from oven',     price: 19.00 },
    ]
  },
  {
    id: 'vlees',
    nl: 'Vleesgerechten',
    en: 'Meat Dishes',
    icon: '🥩',
    items: [
      { id: 'vl1',  nl: 'Scaloppina alla Parmigiana', en: 'Scaloppina alla Parmigiana', desc_nl: 'Kalfsvlees met aubergine, tomaat, kaas',                       desc_en: 'Veal with eggplant, tomato, cheese',                        price: 19.00 },
      { id: 'vl2',  nl: 'Saltimbocca alla Romana',    en: 'Saltimbocca alla Romana',    desc_nl: 'Kalfsvlees met ham, kaas, witte wijnsaus',                     desc_en: 'Veal with ham, cheese, white wine sauce',                   price: 19.00 },
      { id: 'vl3',  nl: 'Bistecca alla griglia',      en: 'Bistecca alla griglia',      desc_nl: 'Gegrilde rib-eye',                                             desc_en: 'Grilled rib eye',                                          price: 18.50 },
      { id: 'vl4',  nl: 'Bistecca al pepe',           en: 'Bistecca al pepe',           desc_nl: 'Rib-eye met roomsaus, groene peper, champignons',              desc_en: 'Rib eye with cream sauce, green pepper, mushrooms',         price: 19.50 },
      { id: 'vl5',  nl: 'Bistecca alla Siciliana',    en: 'Bistecca alla Siciliana',    desc_nl: 'Rib-eye met tomatensaus, paprika, champignons',                desc_en: 'Rib eye with tomato sauce, pepper, mushrooms',              price: 19.50 },
      { id: 'vl6',  nl: 'Filetto al pepe verde',      en: 'Filetto al pepe verde',      desc_nl: 'Ossenhaas met roomsaus, groene peper, champignons',            desc_en: 'Beef tenderloin with cream sauce, green pepper, mushrooms',  price: 26.50 },
      { id: 'vl7',  nl: 'Scaloppina alla Siciliana',  en: 'Scaloppina alla Siciliana',  desc_nl: 'Kalfsvlees met tomatensaus, paprika, champignons, olijven, kappertjes', desc_en: 'Veal with tomato sauce, pepper, mushrooms, olives, capers', price: 19.50 },
      { id: 'vl8',  nl: 'Bistecca al pepe verde',     en: 'Bistecca al pepe verde',     desc_nl: 'Rib-eye met roomsaus, groene peper, champignons',              desc_en: 'Rib eye with cream sauce, green pepper, mushrooms',         price: 19.50 },
      { id: 'vl9',  nl: 'Grigliata mista',            en: 'Grigliata mista',            desc_nl: 'Rib-eye, kalfsvlees, kip, lamskoteletten van de grill',        desc_en: 'Rib eye, veal, chicken, lamb chops grilled',               price: 20.00 },
      { id: 'vl10', nl: 'Filetto alla Siciliana',     en: 'Filetto alla Siciliana',     desc_nl: 'Ossenhaas met tomatensaus, paprika, champignons, olijven, kappertjes', desc_en: 'Beef tenderloin with tomato sauce, pepper, mushrooms, olives, capers', price: 26.50 },
    ]
  },
  {
    id: 'vis',
    nl: 'Visgerechten',
    en: 'Fish Dishes',
    icon: '🐟',
    items: [
      { id: 'fi1', nl: 'Slibtong',                   en: 'Slibtong',                   desc_nl: '3 stuks gebakken tong',                                        desc_en: '3 pieces fried sole',                                      price: 23.50 },
      { id: 'fi2', nl: 'Pesce misto alla griglia',   en: 'Pesce misto alla griglia',   desc_nl: 'Zalm, tong, garnalen, sardines van de grill',                  desc_en: 'Salmon, sole, shrimp, sardines grilled',                   price: 25.50 },
      { id: 'fi3', nl: 'Salmone al forno',           en: 'Salmone al forno',           desc_nl: 'Zalmfilet met pesto, mozzarella uit de oven',                  desc_en: 'Salmon fillet with pesto, mozzarella from oven',           price: 20.50 },
      { id: 'fi4', nl: 'Salmone alla griglia',       en: 'Salmone alla griglia',       desc_nl: 'Gegrilde zalmfilet',                                           desc_en: 'Grilled salmon fillet',                                    price: 20.50 },
    ]
  },
  {
    id: 'desserts',
    nl: 'Desserts',
    en: 'Desserts',
    icon: '🍮',
    items: [
      { id: 'd1', nl: 'Tiramisu',      en: 'Tiramisu',      desc_nl: 'Italiaans nagerecht',                                    desc_en: 'Italian dessert',                                     price: 7.00 },
      { id: 'd2', nl: 'Dame blanche',  en: 'Dame blanche',  desc_nl: 'IJs met chocoladesaus, slagroom',                       desc_en: 'Ice cream with chocolate sauce, whipped cream',       price: 7.00 },
      { id: 'd3', nl: 'Banana split',  en: 'Banana split',  desc_nl: 'IJs met banaan, advocaat, slagroom',                    desc_en: 'Ice cream with banana, advocaat, whipped cream',      price: 7.00 },
      { id: 'd4', nl: 'Profitroles',   en: 'Profiteroles',  desc_nl: 'Soesjes met ijs',                                       desc_en: 'Cream puffs with ice cream',                          price: 7.00 },
      { id: 'd5', nl: 'Gelato misto',  en: 'Gelato misto',  desc_nl: 'Vanille, aardbei, chocolade ijs met slagroom',          desc_en: 'Vanilla, strawberry, chocolate ice cream with whipped cream', price: 7.50 },
    ]
  },
  {
    id: 'dranken',
    nl: 'Dranken',
    en: 'Beverages',
    icon: '🥤',
    items: [
      { id: 'dr1', nl: 'Cola',       en: 'Cola',       desc_nl: '',              desc_en: '',            price: 3.00 },
      { id: 'dr2', nl: 'Fanta',      en: 'Fanta',      desc_nl: '',              desc_en: '',            price: 3.00 },
      { id: 'dr3', nl: '7up',        en: '7up',        desc_nl: '',              desc_en: '',            price: 3.00 },
      { id: 'dr4', nl: 'Vino Rosso', en: 'Vino Rosso', desc_nl: 'Rode wijn, 750ml', desc_en: 'Red wine, 750ml', price: 17.50 },
    ]
  },
];
