/* ============================================================
   MONTE VERDE — Menu Data
   Source: verdemenuoud.xlsx (full menu)
   ============================================================ */

const MENU = [
  {
    id: 'frisdrank', nl: 'Frisdrank', en: 'Soft Drinks', icon: '🥤',
    items: [
      { id: 'frisdrank1', nl: 'Coca Cola / Coca Cola Zero / Fanta / 7up / Casis / Ice thee / Bitterlemon / Tonic', en: 'Coca Cola / Coca Cola Zero / Fanta / 7up / Casis / Ice thee / Bitterlemon / Tonic', desc_nl: 'Klein/Small €3.50 · Groot €7', desc_en: 'Klein/Small €3.50 · Groot €7', price: 3.50 },
      { id: 'frisdrank2', nl: 'Appelsap', en: 'Apple Juice', desc_nl: 'Klein/Small €3.50 · Groot €7', desc_en: 'Klein/Small €3.50 · Groot €7', price: 3.50 },
      { id: 'frisdrank3', nl: 'Jus d\'Orange', en: 'Orange Juice', desc_nl: 'Klein/Small €3.50 · Groot €7', desc_en: 'Klein/Small €3.50 · Groot €7', price: 3.50 },
      { id: 'frisdrank4', nl: 'Spa Blauw', en: 'Still Water', desc_nl: 'Klein/Small', desc_en: 'Klein/Small', price: 3.50 },
      { id: 'frisdrank5', nl: 'Spa Rood', en: 'Sparkling Water', desc_nl: 'Klein/Small', desc_en: 'Klein/Small', price: 3.50 },
      { id: 'frisdrank6', nl: 'Aqua Panna Still Water', en: 'Aqua Panna Still Water', desc_nl: '0.75 L', desc_en: '0.75 L', price: 7.50 },
      { id: 'frisdrank7', nl: 'San Pellegrino Sparkling Water', en: 'San Pellegrino Sparkling Water', desc_nl: '0.75 L', desc_en: '0.75 L', price: 7.50 },
    ]
  },

  {
    id: 'warm', nl: 'Warme Dranken', en: 'Hot Drinks', icon: '☕',
    items: [
      { id: 'warm8', nl: 'Thee', en: 'Tea', desc_nl: '', desc_en: '', price: 3.50 },
      { id: 'warm9', nl: 'Verse Munt Thee', en: 'Fresh Mint Tea', desc_nl: '', desc_en: '', price: 4.00 },
      { id: 'warm10', nl: 'Koffie', en: 'Coffee', desc_nl: '', desc_en: '', price: 3.50 },
      { id: 'warm11', nl: 'Espresso', en: 'Espresso', desc_nl: '', desc_en: '', price: 3.00 },
      { id: 'warm12', nl: 'Dubbel Espresso', en: 'Double Espresso', desc_nl: '', desc_en: '', price: 4.00 },
      { id: 'warm13', nl: 'Cappuccino', en: 'Cappuccino', desc_nl: '', desc_en: '', price: 4.00 },
      { id: 'warm14', nl: 'Koffie Verkeerd', en: 'Coffee Latte', desc_nl: '', desc_en: '', price: 4.00 },
      { id: 'warm15', nl: 'Chocolademelk', en: 'Hot Chocolate', desc_nl: '', desc_en: '', price: 5.50 },
      { id: 'warm16', nl: 'Irish Coffee', en: 'Irish Coffee', desc_nl: '', desc_en: '', price: 7.00 },
    ]
  },

  {
    id: 'bier', nl: 'Bier', en: 'Beer', icon: '🍺',
    items: [
      { id: 'bier17', nl: 'Heineken', en: 'Heineken', desc_nl: 'Klein/Small €4 · Groot €8', desc_en: 'Klein/Small €4 · Groot €8', price: 4.00 },
      { id: 'bier18', nl: 'Wit Bier Fles', en: 'White Beer Bottle', desc_nl: '', desc_en: '', price: 6.00 },
      { id: 'bier19', nl: 'Peroni Beer', en: 'Peroni Beer', desc_nl: '', desc_en: '', price: 6.00 },
      { id: 'bier20', nl: 'Duvel Beer', en: 'Duvel Beer', desc_nl: '', desc_en: '', price: 6.50 },
      { id: 'bier21', nl: 'La Chouffe Beer', en: 'La Chouffe Beer', desc_nl: '', desc_en: '', price: 6.50 },
      { id: 'bier22', nl: 'IJ Wit Beer', en: 'IJ Wit Beer', desc_nl: '', desc_en: '', price: 6.50 },
    ]
  },

  {
    id: 'huiswijn', nl: 'Huiswijnen', en: 'House Wines', icon: '🍷',
    items: [
      { id: 'huiswijn23', nl: 'Merlot', en: 'Merlot', desc_nl: 'Rode wijn / Red wine · Glas €4.50 · ½ liter €16 · 1 liter €32', desc_en: 'Glas €4.50 · ½ liter €16 · 1 liter €32', price: 4.50 },
      { id: 'huiswijn24', nl: 'Montepulciano', en: 'Montepulciano', desc_nl: 'Rode wijn / Red wine · Glas €5.50 · ½ liter €17 · 1 liter €34', desc_en: 'Glas €5.50 · ½ liter €17 · 1 liter €34', price: 5.50 },
      { id: 'huiswijn25', nl: 'Vino Bianco', en: 'Vino Bianco', desc_nl: 'Wit droog / Dry white · Glas €4.50 · ½ liter €16 · 1 liter €32', desc_en: 'Glas €4.50 · ½ liter €16 · 1 liter €32', price: 4.50 },
      { id: 'huiswijn26', nl: 'Rosato', en: 'Rosato', desc_nl: 'Rosé · Glas €4.50 · ½ liter €16 · 1 liter €32', desc_en: 'Glas €4.50 · ½ liter €16 · 1 liter €32', price: 4.50 },
      { id: 'huiswijn27', nl: 'Lambrusco Bianco', en: 'Lambrusco Bianco', desc_nl: 'Wit zoet / White sweet · Glas €5 · Fles/Bottle 0.75L €27', desc_en: 'Glas €5 · Fles/Bottle 0.75L €27', price: 5.00 },
      { id: 'huiswijn28', nl: 'Lambrusco Rosso', en: 'Lambrusco Rosso', desc_nl: 'Zoet rood / Sweet red · Glas €5 · Fles/Bottle 0.75L €27', desc_en: 'Glas €5 · Fles/Bottle 0.75L €27', price: 5.00 },
      { id: 'huiswijn29', nl: 'Prosecco', en: 'Prosecco', desc_nl: 'Glas €6.50 · Fles/Bottle 0.75L €35', desc_en: 'Glas €6.50 · Fles/Bottle 0.75L €35', price: 6.50 },
      { id: 'huiswijn30', nl: 'Chardonnay', en: 'Chardonnay', desc_nl: 'Droog / Dry · Glas €6.50 · Fles/Bottle 0.75L €35', desc_en: 'Glas €6.50 · Fles/Bottle 0.75L €35', price: 6.50 },
      { id: 'huiswijn31', nl: 'Pinot Grigio', en: 'Pinot Grigio', desc_nl: 'Glas €6.50 · Fles/Bottle 0.75L €35', desc_en: 'Glas €6.50 · Fles/Bottle 0.75L €35', price: 6.50 },
    ]
  },

  {
    id: 'rode', nl: 'Rode Wijnen (fles)', en: 'Red Wines (bottle)', icon: '🍷',
    items: [
      { id: 'rode32', nl: 'Montepulciano', en: 'Montepulciano', desc_nl: 'Fles', desc_en: 'Fles', price: 35.00 },
      { id: 'rode33', nl: 'Chianti Mandfles', en: 'Chianti Mandfles', desc_nl: '0.5 liter', desc_en: '0.5 liter', price: 19.00 },
      { id: 'rode34', nl: 'Lambrusco Rosso', en: 'Lambrusco Rosso', desc_nl: 'Zoet / Sweet · Fles', desc_en: 'Fles', price: 27.00 },
      { id: 'rode35', nl: 'Chianti Classico', en: 'Chianti Classico', desc_nl: 'Fles', desc_en: 'Fles', price: 38.00 },
      { id: 'rode36', nl: 'Valpolicella', en: 'Valpolicella', desc_nl: 'Fles', desc_en: 'Fles', price: 38.00 },
      { id: 'rode37', nl: 'Bardolino', en: 'Bardolino', desc_nl: 'Fles', desc_en: 'Fles', price: 35.00 },
      { id: 'rode38', nl: 'Rosé', en: 'Rosé', desc_nl: 'Fles', desc_en: 'Fles', price: 35.00 },
    ]
  },

  {
    id: 'witte', nl: 'Witte Wijnen (fles)', en: 'White Wines (bottle)', icon: '🥂',
    items: [
      { id: 'witte39', nl: 'Pinot Grigio', en: 'Pinot Grigio', desc_nl: 'Droog / Dry · Fles', desc_en: 'Fles', price: 35.00 },
      { id: 'witte40', nl: 'Chardonnay', en: 'Chardonnay', desc_nl: 'Droog / Dry · Fles', desc_en: 'Fles', price: 35.00 },
      { id: 'witte41', nl: 'Prosecco', en: 'Prosecco', desc_nl: 'Fles', desc_en: 'Fles', price: 35.00 },
      { id: 'witte42', nl: 'Lambrusco Bianco', en: 'Lambrusco Bianco', desc_nl: 'Zoet / Sweet · Fles', desc_en: 'Fles', price: 27.00 },
    ]
  },

  {
    id: 'likeur', nl: 'Likeur & Aperitief', en: 'Liquors & Aperitif', icon: '🍸',
    items: [
      { id: 'likeur43', nl: 'Aperol Spritz', en: 'Aperol Spritz', desc_nl: '', desc_en: '', price: 8.00 },
      { id: 'likeur44', nl: 'Grappa / Amaretto / Tia Maria / Tequila / Cointreau / Limoncello / Baileys / Grand Marnier / Campari / Sambuca', en: 'Grappa / Amaretto / Tia Maria / Tequila / Cointreau / Limoncello / Baileys / Grand Marnier / Campari / Sambuca', desc_nl: 'v.a.', desc_en: 'v.a.', price: 6.00 },
      { id: 'likeur45', nl: 'Vecchia Romagna', en: 'Vecchia Romagna', desc_nl: 'v.a.', desc_en: 'v.a.', price: 6.00 },
      { id: 'likeur46', nl: 'Jack Daniel\'s', en: 'Remy Martin', desc_nl: '', desc_en: '', price: 6.50 },
      { id: 'likeur47', nl: 'Chivas Regal', en: 'Dimbel', desc_nl: '', desc_en: '', price: 7.00 },
      { id: 'likeur48', nl: 'Gin', en: 'Gin', desc_nl: '', desc_en: '', price: 8.00 },
    ]
  },

  {
    id: 'soepen', nl: 'Soepen', en: 'Soups', icon: '🍲',
    items: [
      { id: 'soepen49', nl: 'Zuppa Pomodori', en: 'Zuppa Pomodori', desc_nl: 'Tomatensoep met verse room', desc_en: 'Tomato soup with fresh cream', price: 6.50 },
      { id: 'soepen50', nl: 'Zuppa Minestrone', en: 'Zuppa Minestrone', desc_nl: 'Italiaanse groentensoep', desc_en: 'Italian vegetable soup', price: 6.50 },
      { id: 'soepen51', nl: 'Zuppa di Pollo', en: 'Zuppa di Pollo', desc_nl: 'Kippensoep', desc_en: 'Chicken soup', price: 6.50 },
    ]
  },

  {
    id: 'salades', nl: 'Salades', en: 'Salads', icon: '🥗',
    items: [
      { id: 'salades52', nl: 'Salade Misto', en: 'Salade Misto', desc_nl: 'Gemengde salade', desc_en: 'Mix salad', price: 6.50 },
      { id: 'salades53', nl: 'Salade Rucola Parmigiano', en: 'Salade Rucola Parmigiano', desc_nl: 'Tomaat, rucola en parmezaanse kaas', desc_en: 'Tomato, rocket and parmesan cheese', price: 7.00 },
      { id: 'salades54', nl: 'Salade Nicosia', en: 'Salade Nicosia', desc_nl: 'Sla, tomaten, komkommer, paprika, ei en tonijn', desc_en: 'Salad, tomato, cucumber, paprika, egg and tuna', price: 8.00 },
      { id: 'salades55', nl: 'Salade Caprese', en: 'Salade Caprese', desc_nl: 'Verse mozzarella, basilicum en tomaten', desc_en: 'Fresh mozzarella cheese, basil and tomatoes', price: 8.00 },
    ]
  },

  {
    id: 'antipasti', nl: 'Voorgerechten', en: 'Starters', icon: '🍽️',
    items: [
      { id: 'antipasti56', nl: 'Carpaccio', en: 'Carpaccio', desc_nl: 'Dun gesneden ossenhaas met kappertjes en Parmezaanse kaas', desc_en: 'Thinly sliced beef tenderloin with capers and Parmesan cheese', price: 10.00 },
      { id: 'antipasti57', nl: 'Antipasto Misto', en: 'Antipasto Misto', desc_nl: 'Diverse soorten salami met kaas', desc_en: 'Different kind of salami with cheese', price: 15.50 },
      { id: 'antipasti58', nl: 'Melanzane Mozzarella', en: 'Melanzane Mozzarella', desc_nl: 'Aubergine, verse tomaat, pesto en mozzarella kaas uit de oven', desc_en: 'Eggplant, fresh tomato, pesto and mozzarella cheese from the oven', price: 9.00 },
      { id: 'antipasti59', nl: 'Funghi Ripieni', en: 'Funghi Ripieni', desc_nl: 'Gevulde champignons met gorgonzola kaas en witte wijn uit de oven', desc_en: 'Stuffed mushrooms with gorgonzola cheese and white wine from the oven', price: 10.00 },
      { id: 'antipasti60', nl: 'Gamberetti Fritti', en: 'Gamberetti Fritti', desc_nl: 'Gebakken garnalen met verse champignons, knoflook, uien en peterselie', desc_en: 'Fried shrimp, fresh mushrooms, garlic, onions and parsley', price: 14.00 },
      { id: 'antipasti61', nl: 'Sardine', en: 'Sardine', desc_nl: 'Gemarineerd en gefrituurd', desc_en: 'Marinated and Fried', price: 9.50 },
      { id: 'antipasti62', nl: 'Cozze con Pomodori', en: 'Cozze con Pomodori', desc_nl: 'Gebakken mosselen, tomatensaus, knoflook en pikant', desc_en: 'Baked mussels with tomato, garlic and spicy', price: 9.50 },
    ]
  },

  {
    id: 'pane', nl: 'Brood', en: 'Bread', icon: '🥖',
    items: [
      { id: 'pane63', nl: 'Pane Burro', en: 'Pane Burro', desc_nl: 'Huisgemaakte ronde broodjes met kruidenboter en olijven', desc_en: 'Bread with garlic butter and olives', price: 6.00 },
      { id: 'pane64', nl: 'Focaccia', en: 'Focaccia', desc_nl: 'Vers gebakken brood geserveerd met kruidenboter en olijven', desc_en: 'Freshly baked bread served with garlic butter and olives', price: 6.00 },
      { id: 'pane65', nl: 'Bruschetta', en: 'Bruschetta', desc_nl: '', desc_en: '', price: 6.00 },
    ]
  },

  {
    id: 'pizza', nl: 'Pizza', en: 'Pizza', icon: '🍕',
    items: [
      { id: 'pizza66', nl: 'Margherita', en: 'Margherita', desc_nl: 'Tomaat en kaas', desc_en: 'Tomato and cheese', price: 9.00 },
      { id: 'pizza67', nl: 'Napoli', en: 'Napoli', desc_nl: 'Tomaat, kaas en anjovis', desc_en: 'Tomato, cheese and anchovy', price: 9.00 },
      { id: 'pizza68', nl: 'Borromea', en: 'Borromea', desc_nl: 'Tomaat, kaas en ham', desc_en: 'Tomato, cheese and ham', price: 9.00 },
      { id: 'pizza69', nl: 'Salami', en: 'Salami', desc_nl: 'Tomaat, kaas en salami', desc_en: 'Tomato, cheese and salami', price: 9.00 },
      { id: 'pizza70', nl: 'Funghi (vegetarian)', en: 'Funghi (vegetarian)', desc_nl: 'Tomaat, kaas en verse champignons', desc_en: 'Tomato, cheese and fresh mushrooms', price: 9.00 },
      { id: 'pizza71', nl: 'Salsiccia', en: 'Salsiccia', desc_nl: 'Tomaat, kaas en pikante worst', desc_en: 'Tomato, cheese and spicy sausage', price: 9.00 },
      { id: 'pizza72', nl: 'Mozzarella', en: 'Mozzarella', desc_nl: 'Tomaat en mozzarella kaas', desc_en: 'Tomato and mozzarella cheese', price: 9.00 },
      { id: 'pizza73', nl: 'Tonno', en: 'Tonno', desc_nl: 'Tomaat, kaas, tonijn, uien, olijven en kappertjes', desc_en: 'Tomato, cheese, tuna, onions, olives and capers', price: 9.00 },
      { id: 'pizza74', nl: 'Quattro Stagione', en: 'Quattro Stagione', desc_nl: 'Tomaat, kaas, ham, champignons, artisjokken en olijven', desc_en: 'Tomato, cheese, ham, mushrooms, artichokes and olives', price: 9.00 },
      { id: 'pizza75', nl: 'Quattro Formaggi', en: 'Quattro Formaggi', desc_nl: 'Tomaat en 4 soorten kaas', desc_en: 'Tomato and 4 different cheese', price: 9.00 },
      { id: 'pizza76', nl: 'Capricciosa', en: 'Capricciosa', desc_nl: 'Tomaat, kaas, ham, salami en champignons', desc_en: 'Tomato, cheese, ham, salami and mushrooms', price: 9.00 },
      { id: 'pizza77', nl: 'Pizza King', en: 'Pizza King', desc_nl: 'Tomaat, feta kaas, pikante worst, paprika en ei', desc_en: 'Tomato, feta cheese, spicy sausage, capsicum and egg', price: 9.00 },
      { id: 'pizza78', nl: 'Monte Verde', en: 'Monte Verde', desc_nl: 'Tomaat, kaas, paprika, champignons, uien, olijven, kappertjes, artisjokken, ham, salami', desc_en: 'Tomato, cheese, capsicum, mushrooms, onions, olives, capers, artichokes, ham and salami', price: 9.00 },
      { id: 'pizza79', nl: 'Picasso (vegetarian)', en: 'Picasso (vegetarian)', desc_nl: 'Tomaat, kaas, paprika, champignons, uien, olijven, kappertjes en artisjokken', desc_en: 'Tomato, cheese, paprika, mushrooms, onions, olives, capers and artichokes', price: 9.00 },
      { id: 'pizza80', nl: 'Popeye (vegetarian)', en: 'Popeye (vegetarian)', desc_nl: 'Tomaat, feta kaas, ei en spinazie', desc_en: 'Tomato, feta cheese, spinach and egg', price: 9.00 },
      { id: 'pizza81', nl: 'Calzone', en: 'Calzone', desc_nl: 'Kaas, ham, salami, champignons, uien, artisjokken en aparte gehakt saus', desc_en: 'Cheese, ham, salami, mushrooms, onions, artichokes and separate minced meat sauce', price: 9.00 },
      { id: 'pizza82', nl: 'Pizza Prosciutto', en: 'Pizza Prosciutto', desc_nl: 'Tomatensaus, kaas, parmaham', desc_en: 'Tomato sauce, cheese, parma ham', price: 9.00 },
      { id: 'pizza83', nl: 'Pizza Melanzane (vegetarian)', en: 'Pizza Melanzane (vegetarian)', desc_nl: 'Tomatensaus, mozzarella kaas, uien, aubergine en rucola', desc_en: 'Tomato sauce, mozzarella cheese, onions, eggplant and rocket', price: 9.00 },
      { id: 'pizza84', nl: 'Frutti di Mare', en: 'Frutti di Mare', desc_nl: 'Tomaat, kaas en diverse zeevruchten', desc_en: 'Tomato, cheese and seafood', price: 9.00 },
      { id: 'pizza85', nl: 'Hawaii', en: 'Hawaii', desc_nl: 'Tomaat, kaas, ham en ananas', desc_en: 'Tomato, cheese, ham and pineapple', price: 9.00 },
      { id: 'pizza86', nl: 'Ancona', en: 'Ancona', desc_nl: 'Tomaat, 4 soorten kaas en pikante worst', desc_en: 'Tomato, spicy sausage and 4 kind of cheese', price: 9.00 },
    ]
  },

  {
    id: 'pasta', nl: 'Pasta', en: 'Pasta', icon: '🍝',
    items: [
      { id: 'pasta87', nl: 'Bolognese', en: 'Bolognese', desc_nl: 'Tomatensaus met gehaktvlees', desc_en: 'Tomato sauce with meat', price: 9.00 },
      { id: 'pasta88', nl: 'Carbonara', en: 'Carbonara', desc_nl: 'Spek, ei en roomsaus', desc_en: 'Bacon, egg and cream sauce', price: 9.00 },
      { id: 'pasta89', nl: 'Ferro e Fuoco', en: 'Ferro e Fuoco', desc_nl: 'Spek, champignons, doperwtjes, spaanse peper, basilicum, room en gehaktsaus', desc_en: 'Bacon, mushrooms, green peas, chilli, basil, cream sauce and meat sauce', price: 9.00 },
      { id: 'pasta90', nl: 'Puttanesca', en: 'Puttanesca', desc_nl: 'Vegetarische tomatensaus met paprika, champignons, olijven, kappertjes en spaanse peper', desc_en: 'Vegetarian tomato sauce with capsicum, mushrooms, olives, capers and chilli', price: 9.00 },
      { id: 'pasta91', nl: 'Frutti di Mare', en: 'Frutti di Mare', desc_nl: 'Tomatensaus en diverse zeevruchten', desc_en: 'Tomato sauce and seafood', price: 9.00 },
      { id: 'pasta92', nl: 'Aglio Olio', en: 'Aglio Olio', desc_nl: 'Knoflook, peterselie, olijvenolie en spaanse peper', desc_en: 'Garlic, parsley, olive oil and chilli', price: 9.00 },
      { id: 'pasta93', nl: 'Peperoncino', en: 'Peperoncino', desc_nl: 'Knoflook, peterselie, olijvenolie en spaanse peper', desc_en: 'Garlic, parsley, olive oil and chilli', price: 9.00 },
      { id: 'pasta94', nl: 'Mediterranea', en: 'Mediterranea', desc_nl: 'Tomatensaus, olijven, knoflook en tonijn', desc_en: 'Tomato sauce, capsicum, olives, garlic and tuna', price: 9.00 },
    ]
  },

  {
    id: 'pasta_spec', nl: 'Pasta Specialiteiten', en: 'Pasta Specialties', icon: '🍝',
    items: [
      { id: 'pasta_spec95', nl: 'Tagliatelle Gorgonzola Salmone', en: 'Tagliatelle Gorgonzola Salmone', desc_nl: 'Gorgonzola kaas, zalm en roomsaus', desc_en: 'Gorgonzola cheese, salmon and cream sauce', price: 9.00 },
      { id: 'pasta_spec96', nl: 'Maccheroni Gorgonzola Pollo', en: 'Maccheroni Gorgonzola Pollo', desc_nl: 'Gorgonzola kaas, kipfilet en roomsaus', desc_en: 'Gorgonzola cheese, chicken breast and cream sauce', price: 9.00 },
      { id: 'pasta_spec97', nl: 'Spaghetti Gamba', en: 'Spaghetti Gamba', desc_nl: 'Garnalen, spinazie, knoflook en tomatensaus', desc_en: 'Shrimp, spinach, garlic and tomato sauce', price: 9.00 },
      { id: 'pasta_spec98', nl: 'Tortellini Verde', en: 'Tortellini Verde', desc_nl: 'Ham, spinazie, kerrie en roomsaus', desc_en: 'Ham, spinach, curry and cream sauce', price: 9.00 },
      { id: 'pasta_spec99', nl: 'Maccheroni Pesto', en: 'Maccheroni Pesto', desc_nl: 'Roomsaus met champignons en pesto', desc_en: 'Cream sauce with mushrooms and pesto', price: 9.00 },
    ]
  },

  {
    id: 'risotto', nl: 'Risotto', en: 'Risotto', icon: '🍚',
    items: [
      { id: 'risotto100', nl: 'Risotto con Frutti di Mare', en: 'Risotto con Frutti di Mare', desc_nl: 'Rijst met zeevruchten en parmezaanse kaas', desc_en: 'Rice with seafood and parmesan cheese', price: 9.00 },
      { id: 'risotto101', nl: 'Risotto con Pollo', en: 'Risotto con Pollo', desc_nl: 'Rijst met kip, champignons, paprika en uien', desc_en: 'Rice with chicken, mushrooms, capsicum and onions', price: 9.00 },
    ]
  },

  {
    id: 'forno', nl: 'Pasta uit de Oven', en: 'Pasta from the Oven', icon: '🍝',
    items: [
      { id: 'forno102', nl: 'Lasagne', en: 'Lasagne', desc_nl: 'Platte meelspijs met gehaktsaus en kaas eroverheen', desc_en: 'Flat pasta with meat sauce and cheese over them', price: 9.00 },
      { id: 'forno103', nl: 'Lasagne Speciale (vegetarian)', en: 'Lasagne Speciale (vegetarian)', desc_nl: 'Platte meelspijs met aubergine, courgette, tomatensaus en mozzarella kaas eroverheen', desc_en: 'Flat pasta with eggplant, zucchini, tomato sauce and mozzarella cheese over it', price: 9.00 },
      { id: 'forno104', nl: 'Panzerotti (vegetarian)', en: 'Panzerotti (vegetarian)', desc_nl: 'Gerolde dunne deeg gevuld met verse ricotta, spinazie, tomatensaus en kaas eroverheen', desc_en: 'Rolled thin dough filled with fresh ricotta, spinach, tomato sauce and cheese over them', price: 9.00 },
      { id: 'forno105', nl: 'Cannelloni', en: 'Cannelloni', desc_nl: 'Gerolde dunne deeg gevuld met gehakt, bolognesesaus en kaas eroverheen', desc_en: 'Rolled thin dough filled with minced meat, bolognese sauce and cheese over them', price: 9.00 },
    ]
  },

  {
    id: 'pollo', nl: 'Kipgerechten', en: 'Chicken', icon: '🍗',
    items: [
      { id: 'pollo106', nl: 'Pollo Formaggio', en: 'Pollo Formaggio', desc_nl: 'Kipfilet gevuld met kaas, verse champignons en roomsaus', desc_en: 'Chicken breast stuffed with cheese, mushrooms and cream sauce', price: 20.00 },
      { id: 'pollo107', nl: 'Pollo ai Funghi', en: 'Pollo ai Funghi', desc_nl: 'Gegrilde kipfilet met gebakken champignons', desc_en: 'Grilled chicken breast with baked mushrooms', price: 20.00 },
      { id: 'pollo108', nl: 'Pollo Melanzane', en: 'Pollo Melanzane', desc_nl: 'Kipfilet met aubergine, tomatensaus en kaas uit de oven', desc_en: 'Chicken with aubergine, tomato sauce and cheese from the oven', price: 21.00 },
    ]
  },

  {
    id: 'carne', nl: 'Vleesgerechten', en: 'Meat Dishes', icon: '🥩',
    items: [
      { id: 'carne109', nl: 'Scaloppina alla Parmigiana', en: 'Scaloppina alla Parmigiana', desc_nl: 'Kalfsvlees met aubergine, tomatensaus en kaas eroverheen uit de oven', desc_en: 'Veal with eggplant, tomato sauce and cheese over them from the oven', price: 22.00 },
      { id: 'carne110', nl: 'Scaloppina alla Sicilliana', en: 'Scaloppina alla Sicilliana', desc_nl: 'Kalfsvlees met tomatensaus, paprika, champignons, olijven en kappertjes', desc_en: 'Veal with tomato sauce, capsicum, mushrooms, olives and capers', price: 22.00 },
      { id: 'carne111', nl: 'Saltimbocca alla Romana', en: 'Saltimbocca alla Romana', desc_nl: 'Kalfsvlees met ham, kaas en witte wijnsaus', desc_en: 'Veal with ham, cheese and white wine sauce', price: 22.00 },
      { id: 'carne112', nl: 'Bistecca alla Griglia', en: 'Bistecca alla Griglia', desc_nl: 'Gegrilde entrecote', desc_en: 'Grilled Sirloin steak', price: 20.00 },
      { id: 'carne113', nl: 'Bistecca alla Sicilliana', en: 'Bistecca alla Sicilliana', desc_nl: 'Entrecote met tomatensaus, paprika, champignons, olijven en kappertjes', desc_en: 'Entrecote with tomato sauce, capsicum, mushrooms, olives and capers', price: 21.50 },
      { id: 'carne114', nl: 'Bistecca al Pepe Verde', en: 'Bistecca al Pepe Verde', desc_nl: 'Entrecote met roomsaus, groene peper en champignons', desc_en: 'Entrecote with cream sauce, green pepper and mushrooms', price: 21.50 },
      { id: 'carne115', nl: 'Grigliata Mista', en: 'Grigliata Mista', desc_nl: 'Entrecote, kalfsvlees, kipfilet en lamskotele op de grill', desc_en: 'Entrecote, Veal, chicken breast, and lamb chops on the grill', price: 25.00 },
      { id: 'carne116', nl: 'Filetto al Pepe Verde', en: 'Filetto al Pepe Verde', desc_nl: 'Ossenhaas met roomsaus, groene peper en champignons', desc_en: 'Sirloin steak with cream sauce, green pepper and mushrooms', price: 28.50 },
      { id: 'carne117', nl: 'Filetto alla Sicilliana', en: 'Filetto alla Sicilliana', desc_nl: 'Ossenhaas met tomatensaus, paprika, champignons, olijven en kappertjes', desc_en: 'Sirloin steak with tomato sauce, capsicum, mushrooms, olives and capers', price: 28.50 },
    ]
  },

  {
    id: 'pesce', nl: 'Visgerechten', en: 'Fish Dishes', icon: '🐟',
    items: [
      { id: 'pesce118', nl: 'Calamari', en: 'Calamari', desc_nl: 'Gefrituurde inktvis', desc_en: 'Fried squid', price: 15.00 },
      { id: 'pesce119', nl: 'Slibtong', en: 'Slibtong', desc_nl: '3 stuks gebakken slibtong', desc_en: '3 pieces of baked Dover sole', price: 27.50 },
      { id: 'pesce120', nl: 'Pesce Misto alla Griglia', en: 'Pesce Misto alla Griglia', desc_nl: 'Stukjes zalm, slibtong, garnalen en sardines', desc_en: 'Pieces of salmon, Dover sole, shrimp and sardines', price: 27.50 },
      { id: 'pesce121', nl: 'Salmone al Forno', en: 'Salmone al Forno', desc_nl: 'Zalmfilet met pesto en mozzeralla uit oven', desc_en: 'Salmon fillet with pesto and mozzarella cheese from the oven', price: 21.50 },
      { id: 'pesce122', nl: 'Salmone alla Griglia', en: 'Salmone alla Griglia', desc_nl: 'Zalmfilet op de grill', desc_en: 'Salmon fillet on the grill', price: 20.50 },
    ]
  },

  {
    id: 'dolci', nl: 'Dessert', en: 'Dessert', icon: '🍰',
    items: [
      { id: 'dolci123', nl: 'Tiramisu', en: 'Tiramisu', desc_nl: 'Italiaanse toetje', desc_en: 'Italian dessert', price: 6.50 },
      { id: 'dolci124', nl: 'Dame Blanche', en: 'Dame Blanche', desc_nl: 'Roomijs met chocoladesaus en slagroom', desc_en: 'Ice cream with chocolate sauce and whipped cream', price: 6.50 },
      { id: 'dolci125', nl: 'Banana Split', en: 'Banana Split', desc_nl: 'Roomijs met banaan, advocaat en slagroom', desc_en: 'Ice cream with banana, advocaat (eggnog) and cream', price: 6.50 },
      { id: 'dolci126', nl: 'Profitroles', en: 'Profitroles', desc_nl: 'Slagroomsoesjes met ijs', desc_en: 'Cream puffs with ice cream', price: 6.50 },
      { id: 'dolci127', nl: 'Gelato Misto', en: 'Gelato Misto', desc_nl: 'Vanille, aardbei en chokolade ijs met slagroom', desc_en: 'Vanilla, strawberry and chocolate ice cream with whipped cream', price: 6.50 },
      { id: 'dolci128', nl: 'Pannenkoek met Banaan en Nutella', en: 'Pannenkoek met Banaan en Nutella', desc_nl: 'Pannenkoek met banaan en Nutella chocolade', desc_en: 'Pancake with Banana and Nutella chocolate', price: 9.00 },
      { id: 'dolci129', nl: 'Pannenkoek', en: 'Pannenkoek', desc_nl: 'Pannenkoek met vanille ijs, grandmarnier en Jus d\'Orange', desc_en: 'Pancake with vanilla ice cream, Grand Marnier and Orange juice', price: 8.00 },
      { id: 'dolci130', nl: 'Scroppino', en: 'Scroppino', desc_nl: 'Citroensorbet ijs met prosecco en vodka', desc_en: 'Lemon sorbet ice with prosecco and vodka', price: 7.00 },
      { id: 'dolci131', nl: 'Affogato', en: 'Affogato', desc_nl: 'Espresso met bolletje ijs en slagroom', desc_en: 'Espresso with ice cream and whipped cream', price: 5.00 },
    ]
  },

];
