/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const fabrics = [
  {
    id: 1,
    name: "Chitenge",
    origin: "Zambia",
    region: "Southern Africa",
    type: "Wax Print Cotton",
    difficulty: "Beginner",
    uses: ["wraparound skirt", "headscarf", "baby carrier", "dress", "shirt", "tote bag"],
    occasion: ["everyday", "ceremonial", "wedding", "funeral", "festival"],
    care: "Hand wash cold, line dry in shade",
    imageURL: "assets/chitenge.png",
    description: "The icon of Zambian fashion. This fabric is vibrant, versatile, and deeply cultural. Chitenge patterns are not just beautiful, but also carry deep social meaning, from weddings to national pride.",
    culturalNote: "In Zambia, wearing chitenge is expected in almost all social spaces, especially for women. They are worn as a sign of respect and modesty across all social classes. Their importance extends further to larger events like funerals and religious gatherings. Patterns can sometimes be random but can also carry significant meaning. For example, chitenges in Zambian flag colors are worn during Independence Day as a symbol of national pride.",
    beginnerTip: "Start with a simple wraparound skirt, which is the most common way to wear chitenge. No zipper needed, just hemming the edges. Perfect first project!"
  },
  {
    id: 2,
    name: "Ankara",
    origin: "Pan-African",
    region: "West Africa",
    type: "Wax Print Cotton",
    difficulty: "Beginner",
    uses: ["dress", "shirt", "trousers", "head wrap", "accessories", "tote bag"],
    occasion: ["everyday", "festival", "wedding"],
    imageURL: "assets/ankara.png",
    care: "Machine wash cold, inside out. Tumble dry low.",
    description: "The most globally recognized African print fabric. It often carries bold geometric patterns and vivid colors. This fabric is very forgiving for beginners. It is loved by artisans because it holds its shape well and is easy to cut.",
    culturalNote: "Though Dutch in industrial origin, Ankara was fully claimed by African designers and communities. Today it represents creativity, identity, and Pan-African pride.",
    beginnerTip: "Great for tote bags and pillowcases. The bold print hides small sewing imperfections and the geometric patterns are make planning and cutting easy. Ideal for learning!"
  },
  {
    id: 3,
    name: "Kanga",
    origin: "East Africa (Kenya, Tanzania)",
    region: "East Africa",
    type: "Printed Cotton",
    difficulty: "Beginner",
    uses: ["wraparound skirt", "headscarf", "tablecloth", "baby carrier", "gift wrap"],
    occasion: ["everyday", "ceremonial"],
    imageURL: "assets/kanga.png",
    care: "Hand wash cold, line dry",
    description: "Similar to zambian chitenge but often features Swahili proverbs or messages printed along the border. This fabric is lightweight and breathable. This makes it favorable for warm climates.",
    culturalNote: "Kangas are often given as gifts to mark life events like births, marriages, and deaths. The message on the border often carries a specific meaning for the recipient.",
    beginnerTip: "The pre-printed border acts as a natural guide for hemming. Try making a simple headwrap or sarong first."
  },
  {
    id: 4,
    name: "Shweshwe",
    origin: "South Africa (Sotho, Xhosa, Zulu)",
    region: "Southern Africa",
    type: "Printed Indigo Cotton",
    difficulty: "Beginner",
    uses: ["dress", "skirt", "apron", "quilt", "shirt"],
    occasion: ["everyday", "ceremonial", "wedding"],
    imageURL: "assets/shweshwe.png",
    care: "Machine wash cold separately. Fabric bleeds color when new",
    description: "A crisp, tightly woven cotton with small geometric or floral prints, usually in indigo, red, or brown. Holds its shape beautifully and is great for structured garments.",
    culturalNote: "Shweshwe is worn ceremonially by Sotho, Xhosa, and Zulu communities. At South African weddings it is as iconic as a white dress is in Western culture.",
    beginnerTip: "Wash before cutting as the fabric shrinks slightly. Then it behaves perfectly. Great for a structured A-line skirt."
  },
  {
    id: 5,
    name: "Dashiki Fabric",
    origin: "West Africa",
    region: "West Africa",
    type: "Embroidered/Printed Cotton",
    difficulty: "Beginner",
    uses: ["shirt", "dress", "tunic", "accessories"],
    occasion: ["everyday", "festival"],
    imageURL: "assets/dashiki.png",
    care: "Hand wash cold, line dry",
    description: "Loose, flowing fabric typically used for wide-sleeved tunics. The V-neck embroidery panel (called a tariki) is its signature feature. Comfortable and culturally expressive.",
    culturalNote: "The dashiki became globally known during the Black Power and African Pride movements of the 1960s–70s as a symbol of African identity and resistance.",
    beginnerTip: "Start with a no-sew dashiki. Just two rectangles of fabric with a neck hole cut out. Then add sleeves when you're ready."
  },
  {
    id: 6,
    name: "Kanzu Fabric",
    origin: "East & Central Africa (Tanzania, Kenya, Uganda)",
    region: "East Africa",
    type: "Plain Woven Cotton",
    difficulty: "Beginner",
    uses: ["tunic", "robe", "ceremonial shirt"],
    occasion: ["ceremonial", "everyday", "wedding"],
    imageURL: "assets/kanzu.png",
    care: "Machine wash cold, iron while slightly damp",
    description: "A plain white or off-white cotton is used to make the kanzu. It is a long, flowing tunic worn by men at formal and ceremonial occasions. Minimal, dignified, and elegant.",
    culturalNote: "The kanzu is common across East and Central Africa and carries an air of formality and respect. It is often worn to mosque, church, and community ceremonies.",
    beginnerTip: "Plain cotton is the most forgiving fabric for learning straight stitches. Practice your seams on kanzu fabric before tackling printed fabrics."
  },
  {
    id: 7,
    name: "Mudcloth (Bogolan)",
    origin: "Mali",
    region: "West Africa",
    type: "Hand-dyed Cotton",
    difficulty: "Intermediate",
    uses: ["jacket", "bag", "wall hanging", "accessories", "skirt"],
    occasion: ["everyday", "festival", "ceremonial"],
    imageURL: "assets/bogolan.png",
    care: "Hand wash cold only, lay flat to dry",
    description: "A thick, hand-made cotton fabric painted with fermented mud to create geometric white-on-dark patterns. Every piece is one-of-a-kind. The texture is dense and structured.",
    culturalNote: "Traditionally made by Malian women, bogolan patterns tell stories of community history, status, and spiritual protection. Historically worn by hunters, warriors, and new mothers.",
    beginnerTip: "Use mudcloth for accessories and bags rather than fitted garments. The stiffness makes it great for structured pieces that don't need drape."
  },
  {
    id: 8,
    name: "Adire",
    origin: "Nigeria (Yoruba)",
    region: "West Africa",
    type: "Indigo-dyed Cotton",
    difficulty: "Intermediate",
    uses: ["dress", "top", "wraparound skirt", "headscarf"],
    occasion: ["everyday", "festival"],
    imageURL: "assets/adire.png",
    care: "Hand wash cold in mild detergent, dry away from direct sunlight",
    description: "A resist-dyed fabric using indigo, produced by Yoruba women in Nigeria. Patterns are created by tying, stitching, or applying cassava starch before dyeing. Each piece is an art work.",
    culturalNote: "Adire means 'tie and dye' in Yoruba. The patterns range from simple spots to complex geometric designs. It is undergoing a major revival among young African designers globally.",
    beginnerTip: "Adire can be slightly stiff and irregular in texture. Pre-wash and press it before sewing. Use a sharp needle to avoid snagging."
  },
  {
    id: 9,
    name: "Habesha (Netela)",
    origin: "Ethiopia & Eritrea",
    region: "East Africa / Horn of Africa",
    type: "Hand-woven White Cotton",
    difficulty: "Intermediate",
    uses: ["shawl", "dress", "headscarf", "ceremonial robe"],
    occasion: ["ceremonial", "wedding", "festival", "everyday"],
    imageURL: "assets/habesha.png",
    care: "Hand wash gently, dry flat, steam iron",
    description: "A fine white cotton fabric with a colorful woven border (tilet) in shades of gold, green, red, and blue. The woven pattern is intricate and varies by region and occasion.",
    culturalNote: "Habesha kemis (dress) is worn by Ethiopian and Eritrean women for Orthodox Christian holidays like Timkat and Meskel. The border patterns carry regional and spiritual meaning.",
    beginnerTip: "The pre-woven border does the decorative work for you. Focus on clean seams along the sides and hemming the bottom."
  },
  {
    id: 10,
    name: "Kente",
    origin: "Ghana (Ashanti & Ewe)",
    region: "West Africa",
    type: "Hand-woven Silk & Cotton",
    difficulty: "Advanced",
    uses: ["ceremonial robe", "stole", "sash", "formal wear"],
    occasion: ["ceremonial", "wedding", "festival"],
    imageURL: "assets/kente.png",
    care: "Dry clean only for authentic hand-woven kente",
    description: "One of Africa's most iconic woven fabrics, made from interlocking strips of hand-woven cloth in vivid colors and geometric patterns. Authentic kente is woven on a narrow-band loom.",
    culturalNote: "Each kente pattern has a name and meaning. Traditionally worn only by Asante royalty, it is now worn across the African diaspora at graduations, ceremonies, and celebrations of achievement.",
    beginnerTip: "Don't cut authentic kente: it is precious. Use it as a sash, stole, or accent panel. Machine-printed kente is more affordable for practice projects."
  },
  {
    id: 11,
    name: "Aso-Oke",
    origin: "Nigeria (Yoruba)",
    region: "West Africa",
    type: "Hand-woven Cotton & Silk",
    difficulty: "Advanced",
    uses: ["head wrap (gele)", "sash", "ceremonial garment", "shoulder drape"],
    occasion: ["wedding", "ceremonial", "festival"],
    imageURL: "assets/asoake.png",
    care: "Dry clean or hand wash very gently, store rolled not folded",
    description: "A hand-loomed fabric from the Yoruba people, woven in strips and sewn together. Available in three main styles: etu (dark indigo), sanyan (brown/beige), and alari (red/magenta). Very textured and stiff.",
    culturalNote: "Aso-oke is the heart of Yoruba ceremonial fashion. At a Nigerian wedding, the family coordinates their aso-ebi (family fabric) — often aso-oke — so everyone is dressed in unity.",
    beginnerTip: "Aso-oke is difficult to sew through. Use a heavy-duty needle (size 16+) and sew slowly. Best used for non-sewn pieces like gele head wraps first."
  },
  {
    id: 12,
    name: "Kuba Cloth",
    origin: "Democratic Republic of Congo (Kuba Kingdom)",
    region: "Central Africa",
    type: "Woven & Embroidered Raffia",
    difficulty: "Advanced",
    uses: ["wall hanging", "bag", "accessories", "ceremonial skirt"],
    occasion: ["ceremonial", "festival"],
    imageURL: "assets/kuba.png",
    care: "Dry clean only. Store away from humidity.",
    description: "Made from woven raffia palm leaves, then embroidered with complex geometric patterns. The surface is velvety in places where threads are cut. Incredibly labor-intensive and unique.",
    culturalNote: "Kuba cloth was so valued it was used as currency. The geometric designs are among the most mathematically complex in any textile tradition in the world.",
    beginnerTip: "Do not attempt to sew Kuba cloth as a beginner: it is fragile and rare. Use it as an accent piece mounted on a bag front or framed as textile art."
  }
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// Adding cards to the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  const filteredFabrics = getFilteredFabrics();

  for (let i = 0; i < filteredFabrics.length; i++) {
    let fabric = filteredFabrics[i];
    let title = fabric.name;
    let imageURL = fabric.imageURL;

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  const cardDescription = card.querySelector(".description");

  const fabric = fabrics.find((f) => f.name === newTitle);
  cardDescription.textContent = fabric.description;

  const cardCulturalNote = card.querySelector(".cultural-note");
  cardCulturalNote.textContent = "Cultural Note: " + fabric.culturalNote;

  const cardCare = card.querySelector(".care");
  cardCare.textContent = "Care Instructions: " + fabric.care; 

  const cardUses = card.querySelector(".uses");
  cardUses.textContent = "Common Uses: " + fabric.uses.join(", ");

  const cardOccasion = card.querySelector(".occasion");
  cardOccasion.textContent = "Occasions: " + fabric.occasion.join(", ");  

  const cardDifficulty = card.querySelector(".difficulty");
  cardDifficulty.textContent = "Difficulty Level: " + fabric.difficulty; 
  cardDifficulty.classList.add(fabric.difficulty.toLowerCase().replace(" ", "-")); // Add class for styling 

  const cardOrigin = card.querySelector(".origin");
  cardOrigin.textContent = "Origin: " + fabric.origin;

  const cardRegion = card.querySelector(".region");
  cardRegion.textContent = "Region: " + fabric.region;

  const cardType = card.querySelector(".type");
  cardType.textContent = "Fabric Type: " + fabric.type;

  const cardBeginnerTip = card.querySelector(".beginner-tip");
  cardBeginnerTip.textContent = "Beginner Tip: " + fabric.beginnerTip;

  const favBtn = card.querySelector(".favorite-btn");
  favBtn.addEventListener("click", function() {
    const fabric = fabrics.find(f => f.name === newTitle);
    const index = favorites.indexOf(fabric.id);
    if (index > -1) {
      favorites.splice(index, 1);
      this.classList.remove("saved");
    } else {
      favorites.push(fabric.id);
      this.classList.add("saved");
    }
    // Re-render if showing only favorites to update the list
    if (showOnlyFavorites) {
      showCards();
    }
  });

  // Set initial favorite state
  if (favorites.includes(fabric.id)) {
    favBtn.classList.add("saved");
  } else {
    favBtn.classList.remove("saved");
  }
}


let activeDifficulty = "all";
let activeOccasion = "all";
let favorites = [];
let showOnlyFavorites = false;
let searchTerm = "";

// Feature 1: Filter fabrics
// This function filters the fabrics by difficulty or occasion and re-renders the cards.

function getFilteredFabrics() {
  return fabrics.filter(function(fabric) {

    const passesDifficulty =
      activeDifficulty === "all" ||
      fabric.difficulty.toLowerCase() === activeDifficulty;

    const passesOccasion =
      activeOccasion === "all" ||
      fabric.occasion.some(o => o.toLowerCase() === activeOccasion);

    const passesFavorites = !showOnlyFavorites || favorites.includes(fabric.id);

    const passesSearch = !searchTerm ||
      fabric.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fabric.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fabric.origin.toLowerCase().includes(searchTerm.toLowerCase());

    return passesDifficulty && passesOccasion && passesFavorites && passesSearch;
  });
}

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab


// This calls the showCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function() {
  showCards();

  // Adding event listeners for filters
  document.getElementById("difficulty-filter").addEventListener("change", function() {
    activeDifficulty = this.value;
    showCards();
  });

  document.getElementById("occasion-filter").addEventListener("change", function() {
    activeOccasion = this.value;
    showCards();
  });

  document.getElementById("search-input").addEventListener("input", function() {
    searchTerm = this.value.trim();
    showCards();
  });

  document.getElementById("favorites-toggle").addEventListener("click", function() {
    showOnlyFavorites = !showOnlyFavorites;
    this.classList.toggle("active");
    showCards();
  });
});

