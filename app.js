const PASSWORD="explore34";
const lessons=[
  {
    "week": 1,
    "title": "Spanish Explorers Reach Alabama",
    "intro": "We begin our adventure by stepping back in time to 1519, when Spanish explorers sailed across the ocean and mapped the Gulf Coast. We’ll learn how one journey opened the door to a new chapter in Alabama’s story.",
    "book": {
      "title": "Follow the Dream: The Story of Christopher Columbus",
      "author": "Peter Sís",
      "url": "https://www.penguinrandomhouse.com/books/168056/follow-the-dream-by-peter-sis/?utm_source=chatgpt.com",
      "description": "Discover the voyage that opened the Age of Exploration. This beautifully illustrated picture book helps children understand how Christopher Columbus's journey paved the way for later Spanish explorers who eventually reached Alabama's Gulf Coast."
    },
    "video": {
      "title": "Delta Safari: The Forgotten Conquistador",
      "source": "Delta Safari",
      "url": "https://www.youtube.com/watch?v=Bp_AhU5aOZU",
      "description": "Alonso Álvarez de Pineda explores the Gulf Coast.",
      "thumbnail": "https://i.ytimg.com/vi/Bp_AhU5aOZU/hqdefault.jpg"
    },
    "visit": {
      "title": "Mobile Bay or Gulf Coast shoreline",
      "url": "https://www.guidetoalabama.com/stories/mobile-bay-the-gulf-coast",
      "description": "Visit Alabama's coast and imagine the first European ships sailing into these waters more than 500 years ago."
    },
    "hero": "assets/banners/week-01.webp"
  },
  {
    "week": 2,
    "title": "Alabama’s First Peoples",
    "intro": "Long before explorers arrived, Alabama was home to many Native nations. This week, we'll discover who they were and why they are an important part of Alabama's story.",
    "book": {
      "title": "A Kid's Guide to Native American History",
      "author": "Yvonne Wakim Dennis & Arlene Hirschfelder",
      "url": "https://www.chicagoreviewpress.com/a-kid-s-guide-to-native-american-history-products-9781556528026.php?utm_source=chatgpt.com",
      "description": "Long before European explorers arrived, Native peoples had lived in Alabama for thousands of years. This engaging book introduces children to Native American history and cultures while encouraging curiosity and respect."
    },
    "video": {
      "title": "Creek Indians Lesson for Kids",
      "source": "Study.com / PBS",
      "url": "https://www.pbs.org/video/tribal-archives-poarch-band-creek-indians-aavtqj/?utm_source=chatgpt.com",
      "description": "Learn about Creek history and culture.",
      "thumbnail": ""
    },
    "visit": {
      "title": "Moundville Archaeological Park",
      "url": "https://moundville.museums.ua.edu/",
      "description": "Explore one of the largest Native American sites in North America and learn about Alabama's earliest communities."
    },
    "hero": "assets/banners/week-02.webp"
  },
  {
    "week": 3,
    "title": "Hernando de Soto Enters Alabama",
    "intro": "In 1540, Spanish explorer Hernando de Soto led his expedition into Alabama. This week, we'll discover what happened when Spanish explorers and Alabama's Native nations first encountered one another.",
    "book": {
      "title": "Hernando de Soto",
      "author": "Kristin Petrie",
      "url": "https://abdobooks.com/shop/show/14622?utm_source=chatgpt.com",
      "description": "Travel alongside Hernando de Soto as he explores the Southeast and encounters the people and places that would become part of Alabama's early history."
    },
    "video": {
      "title": "Hernando de Soto Expedition",
      "source": "Free School",
      "url": "https://www.youtube.com/watch?v=qOmzpKTfaz4",
      "description": "De Soto explores the Southeast.",
      "thumbnail": "https://i.ytimg.com/vi/qOmzpKTfaz4/hqdefault.jpg"
    },
    "visit": {
      "title": "DeSoto State Park",
      "url": "https://www.alapark.com/parks/desoto-state-park",
      "description": "Take a hike and imagine traveling through Alabama's forests without roads, maps, or modern transportation."
    },
    "hero": "assets/banners/week-03.webp"
  },
  {
    "week": 4,
    "title": "Daily Life in Native Alabama",
    "intro": "Long before Alabama became a state, Native families built homes, raised crops, hunted, fished, traded, and cared for the land. This week, we'll discover what everyday life was like in Alabama's Native nations.",
    "book": {
      "title": "Me on the Map",
      "author": "Joan Sweeney",
      "url": "https://www.penguinrandomhouse.com/books/572583/me-on-the-map-by-joan-sweeney-illustrated-by-qin-leng/?utm_source=chatgpt.com",
      "description": "Maps help us understand where we live and how places connect. This classic picture book introduces children to maps and geography before exploring Alabama in greater detail."
    },
    "video": {
      "title": "Native American Life in the Southeast",
      "source": "PBS Learning",
      "url": "https://www.youtube.com/watch?v=mnovRkpY96M",
      "description": "Homes, food, and daily life.",
      "thumbnail": "https://i.ytimg.com/vi/mnovRkpY96M/hqdefault.jpg"
    },
    "visit": {
      "title": "Oakville Indian Mounds Education Center",
      "url": "https://www.oakvilleindianmounds.com/",
      "description": "Discover artifacts and learn how Native families lived, farmed, traded, and built communities."
    },
    "hero": "assets/banners/week-04.webp"
  },
  {
    "week": 5,
    "title": "The French Settle Mobile",
    "intro": "Nearly 200 years after Spanish explorers first reached Alabama, French settlers built the state's first permanent European community near Mobile Bay.",
    "book": {
      "title": "Jean-Paul’s Daring Adventure: Stories from Old Mobile",
      "author": "",
      "url": "https://www.southalabama.edu/org/archaeology/museum/jp.html",
      "description": "Travel with young Jean-Paul and his family as they journey to Alabama’s first French settlement. This illustrated adventure helps children imagine the people, challenges, and excitement of beginning a new life in early Mobile."
    },
    "video": {
      "title": "Historic Colonial Fort Condé",
      "source": "C-SPAN Cities Tour",
      "url": "https://www.youtube.com/watch?v=oI-0nozBxO8",
      "description": "Discover Alabama's oldest city.",
      "thumbnail": "https://i.ytimg.com/vi/oI-0nozBxO8/hqdefault.jpg"
    },
    "visit": {
      "title": "Colonial Fort Condé",
      "url": "https://www.historymuseumofmobile.com/colonial-fort-conde/",
      "description": "Walk through a reconstruction of Alabama's first permanent European settlement and imagine life in French Mobile."
    },
    "hero": "assets/banners/week-05.webp"
  },
  {
    "week": 6,
    "title": "Alabama Under Three Flags",
    "intro": "France, Great Britain, and Spain each ruled parts of Alabama before it became part of the United States. Discover how changing flags changed Alabama's history.",
    "book": {
      "title": "What Was the Age of Exploration?",
      "author": "Catherine Daly",
      "url": "https://www.penguinrandomhouse.com/books/609467/what-was-the-age-of-exploration-by-catherine-daly-illustrated-by-jake-murray/",
      "description": "Discover why European nations sailed across oceans, claimed new lands, and competed to build empires. This engaging introduction provides helpful background for understanding why three different countries once raised their flags over Alabama."
    },
    "video": {
      "title": "Mobile: Three Centuries Experience",
      "source": "Best of Mobile",
      "url": "https://www.youtube.com/watch?v=YzmkW-IAf_k",
      "description": "How Alabama changed rulers.",
      "thumbnail": "https://i.ytimg.com/vi/YzmkW-IAf_k/hqdefault.jpg"
    },
    "visit": {
      "title": "Conde' Charlotte Museum",
      "url": "https://condecharlotte.com/",
      "description": "Learn how three different nations shaped Alabama's early history."
    },
    "hero": "assets/banners/week-06.webp"
  },
  {
    "week": 7,
    "title": "Alabama Joins the United States",
    "intro": "This week we discover how Alabama became part of the United States. After years under French, British, and Spanish rule, the American flag was raised over Mobile in 1813. Alabama was beginning its journey toward becoming the 22nd state.",
    "book": {
      "title": "Thomas Jefferson Grows a Nation",
      "author": "Peggy Thomas",
      "url": "https://www.penguinrandomhouse.com/books/569595/thomas-jefferson-grows-a-nation-by-peggy-thomas-illustrated-by-stacy-innerst/",
      "description": "Watch the young United States begin to grow as Thomas Jefferson helps expand the nation westward. This beautifully illustrated book helps children understand the growing country Alabama joined when it became American territory."
    },
    "video": {
      "title": "Westward Expansion Explained For Kids",
      "source": "Homeschool Pop",
      "url": "https://www.youtube.com/watch?v=_9FLJEvDniU",
      "description": "Frontier homes and pioneer life.",
      "thumbnail": "https://i.ytimg.com/vi/_9FLJEvDniU/hqdefault.jpg"
    },
    "visit": {
      "title": "Historic Blakeley State Park",
      "url": "https://www.blakeleypark.com/",
      "description": "Explore one of Alabama's earliest settlements and imagine life as Alabama became part of the Mississippi Territory."
    },
    "hero": "assets/banners/week-07.webp"
  },
  {
    "week": 8,
    "title": "The Creek War",
    "intro": "This week we learn about the Creek War. As more settlers arrived in Alabama, disagreements over land with Native American nations changed the course of Alabama's history.",
    "book": {
      "title": "The Great Ball Game: A Muskogee Story",
      "author": "Joseph Bruchac",
      "url": "https://www.amazon.com/dp/0803715390?lv=shuf&channelId=500&plpRedirect=mhFallback",
      "description": "Experience a traditional Muskogee tale filled with lively characters, competition, and wisdom. Reading a story from the Creek people helps children connect with their culture before learning about the difficult events of the Creek War."
    },
    "video": {
      "title": "The Forgotten Creeks",
      "source": "Alabama Public Television / PBS",
      "url": "https://www.pbs.org/video/the-forgotten-creeks-s2bc3w/",
      "description": "Causes and effects of the Creek War.",
      "thumbnail": ""
    },
    "visit": {
      "title": "Fort Toulouse-Fort Jackson Park",
      "url": "https://fttoulousejackson.org/",
      "description": "Learn about frontier conflicts and the changing relationships between Native nations and American settlers."
    },
    "hero": "assets/banners/week-08.webp"
  },
  {
    "week": 9,
    "title": "The Battle of Horseshoe Bend",
    "intro": "The Battle of Horseshoe Bend changed Alabama's future forever. This week, we'll discover how one important battle opened the door for new settlements and brought lasting changes to the land.",
    "book": {
      "title": "The Battle of Horseshoe Bend: Collision of Cultures (National Park Service Teaching with Historic Places)",
      "author": "",
      "url": "https://www.nps.gov/teachers/classrooms/54horseshoe.htm",
      "description": "Explore one of the most important battles in Alabama's history through maps, illustrations, and stories from the National Park Service. This resource helps students understand how the Battle of Horseshoe Bend changed the future of Alabama."
    },
    "video": {
      "title": "Horseshoe Bend National Military Park",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=eKNe2LpLY7A",
      "description": "Learn about Alabama's important battle.",
      "thumbnail": "https://i.ytimg.com/vi/eKNe2LpLY7A/hqdefault.jpg"
    },
    "visit": {
      "title": "Horseshoe Bend National Military Park",
      "url": "https://www.nps.gov/hobe/index.htm",
      "description": "Walk the battlefield trails and learn how this important battle changed Alabama's future."
    },
    "hero": "assets/banners/week-09.webp"
  },
  {
    "week": 10,
    "title": "Alabama Becomes a Territory",
    "intro": "In 1817, Alabama officially became its own territory. Families continued arriving to build homes, farms, and communities across the growing frontier. We'll discover how this important step prepared Alabama to become the 22nd state just two years later.",
    "book": {
      "title": "The Cabin Faced West",
      "author": "Jean Fritz",
      "url": "https://www.amazon.com/Cabin-Faced-West-Jean-Fritz/dp/0698119363/ref=sr_1_1?dib=eyJ2IjoiMSJ9.kpAcfTPsLV8HxC5uycrF5vf0RMguVV_qcZyWn3LhqMgEdLMRPjA83DfwXiLNBElHBUsmpnSJEqU1jh9rcqtfOe1rnHUobmEmWIhia7Fkno1joIBFRcEt6pkVbbNkMcqe5aGXZBgC1LbTSG72Q1F4XvUS7oy76fQbovMdwRglMAU.HTpzabzE6DP90BERPBaZRCKDCX-qB1Qhj9j0xNam_ZA&dib_tag=se&hvadid=740562135009&hvdev=c&hvexpln=67&hvlocphy=9012698&hvnetw=g&hvocijid=7302904392765045252--&hvqmt=e&hvrand=7302904392765045252&hvtargid=kwd-331278067324&hydadcr=27077_14788711&keywords=the+cabin+faced+west&mcid=0fa7d9a40fc038eb9a7e34363c1e2f63&qid=1785007884&sr=8-1",
      "description": "What was it like to build a new life on the American frontier? Follow one family's journey as they settle in the wilderness and discover the courage, hard work, and hope that shaped America's growing territories."
    },
    "video": {
      "title": "From Territory to State",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=mxTHd4EFY1k",
      "description": "Settlers move into Alabama Territory.",
      "thumbnail": "https://i.ytimg.com/vi/mxTHd4EFY1k/hqdefault.jpg"
    },
    "visit": {
      "title": "Old Cahawba Archaeological Park",
      "url": "https://ahc.alabama.gov/properties/cahawba/cahawba.aspx",
      "description": "Explore Alabama's first state capital and imagine settlers arriving in a growing territory."
    },
    "hero": "assets/banners/week-10.webp"
  },
  {
    "week": 11,
    "title": "Alabama Becomes a State",
    "intro": "This week we celebrate Alabama's statehood. On December 14, 1819, Alabama became the 22nd state in the United States. Families continued building homes and communities as the new state began its journey.",
    "book": {
      "title": "Where Is Alabama? (Who HQ: The 50 States)",
      "author": "",
      "url": "https://www.amazon.com/dp/B0GF8KZ46L?lv=shuf&channelId=500&plpRedirect=mhFallback",
      "description": "How did Alabama become the 22nd state? Travel through Alabama's fascinating past as you explore its history, geography, famous landmarks, and the people who helped shape its story. This engaging nonfiction book is the perfect companion to your journey into Alabama's statehood and early years."
    },
    "video": {
      "title": "Alabama State Capitals | Yellowhammer History Hunt",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=Y9roarqYI1w",
      "description": "Alabama becomes the 22nd state.",
      "thumbnail": "https://i.ytimg.com/vi/Y9roarqYI1w/hqdefault.jpg"
    },
    "visit": {
      "title": "Alabama Constitution Hall Park",
      "url": "https://earlyworks.com/achp/",
      "description": "Visit the place where Alabama's first constitution was written before joining the Union."
    },
    "hero": "assets/banners/week-11.webp"
  },
  {
    "week": 12,
    "title": "Life in Early Alabama",
    "intro": "Discover what everyday life looked like after Alabama became a state. Families built cabins, raised crops, traveled by river, and worked together to build new communities.",
    "book": {
      "title": "Ox-Cart Man",
      "author": "Donald Hall",
      "url": "https://www.amazon.com/dp/0140504419?lv=shuf&channelId=500&plpRedirect=mhFallback",
      "description": "Step into the daily life of an early American family as they work together through the seasons. This timeless story helps children imagine what life may have been like for Alabama's earliest settlers."
    },
    "video": {
      "title": "A Day In The Life Of A Pioneer Child",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=YkZyejHU5Aw",
      "description": "Daily life on the frontier.",
      "thumbnail": "https://i.ytimg.com/vi/YkZyejHU5Aw/hqdefault.jpg"
    },
    "visit": {
      "title": "Riverfront Park (Montgomery or Decatur)",
      "url": "https://www.funinmontgomery.com/Home/Components/FacilityDirectory/FacilityDirectory/6/3097",
      "description": "Watch boats travel Alabama's rivers and imagine how river transportation connected frontier communities."
    },
    "hero": "assets/banners/week-12.webp"
  },
  {
    "week": 13,
    "title": "Cotton Changes Alabama",
    "intro": "This week we'll discover how cotton changed Alabama forever. Rich soil and growing farms helped Alabama become one of the nation's leading cotton-producing states, bringing both prosperity and challenges.",
    "book": {
      "title": "Up Before Daybreak: Cotton and People in America",
      "author": "Deborah Hopkinson",
      "url": "https://www.amazon.com/dp/0439639018?lv=shuf&channelId=480&plpRedirect=mhFallback",
      "description": "Discover how one simple plant changed the course of American history. Through real stories of the people who planted, picked, spun, and worked with cotton, you'll gain a deeper understanding of why cotton became so important to Alabama and how it shaped the lives of generations of families."
    },
    "video": {
      "title": "Eli Whitney and The Cotton Gin | For Kids",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=lhQImwqT_T0",
      "description": "Cotton changes the South.",
      "thumbnail": "https://i.ytimg.com/vi/lhQImwqT_T0/hqdefault.jpg"
    },
    "visit": {
      "title": "Old Alabama Town (Montgomery)",
      "url": "https://touroldalabamatown.com/",
      "description": "See historic homes and learn how families lived during Alabama's cotton years."
    },
    "hero": "assets/banners/week-13.webp"
  },
  {
    "week": 14,
    "title": "Alabama and the Civil War",
    "intro": "This week we learn about the Civil War and how it affected Alabama families. As the nation became divided, many Alabamians experienced hardship and uncertainty during one of the most difficult periods in American history.",
    "book": {
      "title": "Pink and Say",
      "author": "Patricia Polacco",
      "url": "https://www.amazon.com/dp/0399226710",
      "description": "Through the unforgettable friendship of two boys on opposite sides of history, this moving story reminds us that kindness and courage can shine even during the darkest times. It provides a thoughtful introduction to the Civil War and its impact on families."
    },
    "video": {
      "title": "Alabama in the Civil War",
      "source": "American Battlefield Trust",
      "url": "https://www.youtube.com/watch?v=f7zR6APaIoU",
      "description": "Why the Civil War happened.",
      "thumbnail": "https://i.ytimg.com/vi/f7zR6APaIoU/hqdefault.jpg"
    },
    "visit": {
      "title": "Confederate Memorial Park",
      "url": "https://ahc.alabama.gov/properties/confederate/confederate.aspx",
      "description": "Learn how the Civil War affected Alabama families and communities."
    },
    "hero": "assets/banners/week-14.webp"
  },
  {
    "week": 15,
    "title": "Rebuilding Alabama",
    "intro": "After the Civil War ended, Alabama faced the difficult task of rebuilding. This week, we'll discover how families worked together to restore homes, schools, farms, and communities while looking toward a hopeful new beginning.",
    "book": {
      "title": "The Gardener",
      "author": "Sarah Stewart",
      "url": "https://www.amazon.com/dp/0374425183",
      "description": "Sometimes rebuilding begins with small acts of hope. This beautifully illustrated story reminds us that even after difficult times, people can work together to restore homes, communities, and hearts."
    },
    "video": {
      "title": "Reconstruction | Simple Civics",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=Zw-OMBf9Pwc",
      "description": "Rebuilding after the war.",
      "thumbnail": "https://i.ytimg.com/vi/Zw-OMBf9Pwc/hqdefault.jpg"
    },
    "visit": {
      "title": "Old Cahawba Archaeological Park",
      "url": "",
      "description": "Explore how communities rebuilt after the Civil War and see the remains of Alabama's former capital."
    },
    "hero": "assets/banners/week-15.webp"
  },
  {
    "week": 16,
    "title": "Birmingham: The Magic City",
    "intro": "This week we'll discover how Birmingham became known as the Magic City. Rich deposits of iron ore, coal, and limestone helped the city grow quickly as factories, railroads, and new businesses transformed Alabama's future.",
    "book": {
      "title": "Sloss Furnaces Self-Guided Tour Guide",
      "author": "",
      "url": "https://www.slossfurnaces.org/history",
      "description": "Discover the story of Birmingham where it actually happened. Explore the fascinating history of Sloss Furnaces and learn how iron ore, coal, limestone, railroads, and hardworking people transformed Birmingham into the \"Magic City.\""
    },
    "video": {
      "title": "Sloss Furnaces | Yellowhammer History Hunt",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=V5Grzbsby38",
      "description": "Birmingham's rapid industrial growth.",
      "thumbnail": "https://i.ytimg.com/vi/V5Grzbsby38/hqdefault.jpg"
    },
    "visit": {
      "title": "Sloss Furnaces National Historic Landmark",
      "url": "https://www.slossfurnaces.org/",
      "description": "Discover how iron and steel helped Birmingham become the Magic City."
    },
    "hero": "assets/banners/week-16.webp"
  },
  {
    "week": 17,
    "title": "Helen Keller",
    "intro": "This week we'll discover the remarkable life of Helen Keller. Despite losing her sight and hearing as a young child, she became one of Alabama's most inspiring voices through her determination and courage.",
    "book": {
      "title": "Who Was Helen Keller?",
      "author": "Gare Thompson",
      "url": "https://www.amazon.com/dp/0448431440?lv=shuf&channelId=500&plpRedirect=mhFallback",
      "description": "Meet one of Alabama's most inspiring women as you discover how Helen Keller overcame incredible challenges with determination, courage, and the help of her devoted teacher, Anne Sullivan. Her remarkable story reminds us that obstacles do not have to define our future."
    },
    "video": {
      "title": "Helen Keller for Kids",
      "source": "Homeschool Pop",
      "url": "https://www.youtube.com/watch?v=KTQabF4CXsw",
      "description": "Discover Helen Keller's inspiring life.",
      "thumbnail": "https://i.ytimg.com/vi/KTQabF4CXsw/hqdefault.jpg"
    },
    "visit": {
      "title": "Ivy Green (Tuscumbia)",
      "url": "https://helenkellerbirthplace.org/",
      "description": "Visit Helen Keller's childhood home and discover how she learned to communicate and inspired people around the world."
    },
    "hero": "assets/banners/week-17.webp"
  },
  {
    "week": 18,
    "title": "George Washington Carver",
    "intro": "This week we'll learn about George Washington Carver and his important discoveries. Through his love of science and agriculture, Carver helped farmers improve their crops and showed how creativity can make a difference in the lives of others.",
    "book": {
      "title": "A Weed Is a Flower: The Life of George Washington Carver",
      "author": "Aliki",
      "url": "https://www.amazon.com/dp/0671664905?lv=shuf&channelId=500&plpRedirect=mhFallback",
      "description": "Discover how a boy who loved plants grew up to become one of America's greatest scientists. George Washington Carver's curiosity, faith, and kindness helped farmers care for the land and inspired generations to use their gifts to serve others."
    },
    "video": {
      "title": "Facts About George Washington Carver for Kids",
      "source": "Homeschool Pop",
      "url": "https://www.youtube.com/watch?v=i9XyhcjjkyI",
      "description": "Learn about Carver's discoveries.",
      "thumbnail": "https://i.ytimg.com/vi/i9XyhcjjkyI/hqdefault.jpg"
    },
    "visit": {
      "title": "Tuskegee University / George Washington Carver Museum",
      "url": "https://www.nps.gov/tuin/planyourvisit/george-washington-carver-museum.htm",
      "description": "Explore the place where George Washington Carver taught, researched, and encouraged new ways of farming."
    },
    "hero": "assets/banners/week-18.webp"
  },
  {
    "week": 19,
    "title": "Alabama in World War II",
    "intro": "This week we'll discover how Alabamians served during World War II. Men and women across the state worked in factories, trained for military service, and supported the war effort both at home and around the world.",
    "book": {
      "title": "The Wall",
      "author": "Eve Bunting",
      "url": "https://www.amazon.com/dp/0395629772",
      "description": "Honor the men and women who have served our country through this thoughtful story about remembrance, sacrifice, and gratitude. As you learn about World War II, this book encourages meaningful conversations about service, courage, and honoring those who gave so much."
    },
    "video": {
      "title": "Exploring the USS Alabama Battleship",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=gXKwpQIkDkg",
      "description": "Explore Alabama's World War II history.",
      "thumbnail": "https://i.ytimg.com/vi/gXKwpQIkDkg/hqdefault.jpg"
    },
    "visit": {
      "title": "USS Alabama Battleship Memorial Park",
      "url": "https://www.ussalabama.com/",
      "description": "Walk aboard the USS Alabama and learn how Alabamians served their country during World War II."
    },
    "hero": "assets/banners/week-19.webp"
  },
  {
    "week": 20,
    "title": "The Civil Rights Movement",
    "intro": "This week we'll learn how Alabama became an important part of the Civil Rights Movement. Courageous men, women, and children worked peacefully to bring about change and help secure equal rights for all Americans.",
    "book": {
      "title": "The Story of Ruby Bridges",
      "author": "Robert Coles",
      "url": "https://www.amazon.com/dp/0590572814",
      "description": "Follow the true story of Ruby Bridges, a young girl whose courage helped change America. Her inspiring journey reminds us that kindness, perseverance, and peaceful actions can make a lasting difference in the lives of others."
    },
    "video": {
      "title": "The Civil Rights Movement for Kids",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=cgjDPa15NLs",
      "description": "Learn about peaceful change and justice.",
      "thumbnail": "https://i.ytimg.com/vi/cgjDPa15NLs/hqdefault.jpg"
    },
    "visit": {
      "title": "Birmingham Civil Rights Institute",
      "url": "https://www.bcri.org/",
      "description": "Discover how Alabama became the center of important events that helped change America and advance civil rights."
    },
    "hero": "assets/banners/week-20.webp"
  },
  {
    "week": 21,
    "title": "Huntsville: Rocket City",
    "intro": "This week we'll discover how Huntsville became known as Rocket City. Scientists, engineers, and dreamers worked together to help America explore space and eventually send astronauts to the moon.",
    "book": {
      "title": "If You Decide to Go to the Moon",
      "author": "Faith McNulty",
      "url": "https://www.amazon.com/dp/0590483595",
      "description": "Blast off on an unforgettable journey to the moon! As you learn how Huntsville became \"Rocket City,\" this imaginative book helps you appreciate the incredible teamwork, courage, and curiosity that made space exploration possible."
    },
    "video": {
      "title": "Neil Armstrong for Kids | First Man on the Moon",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=flPFlY8hECk",
      "description": "Discover Rocket City's role in space.",
      "thumbnail": "https://i.ytimg.com/vi/flPFlY8hECk/hqdefault.jpg"
    },
    "visit": {
      "title": "U.S. Space & Rocket Center",
      "url": "https://www.rocketcenter.com/",
      "description": "Explore rockets, space exhibits, and the home of the Saturn V rocket that helped send astronauts to the moon."
    },
    "hero": "assets/banners/week-21.webp"
  },
  {
    "week": 22,
    "title": "Alabama Traditions",
    "intro": "This week we'll celebrate the traditions that make Alabama special. From food and music to festivals and family gatherings, these traditions help tell the story of the people and communities that call Alabama home.",
    "book": {
      "title": "Y Is for Yellowhammer: An Alabama Alphabet",
      "author": "Carol Crane",
      "url": "https://www.amazon.com/dp/1585361186?lv=shuf&channelId=500&plpRedirect=mhFallback",
      "description": "Celebrate Alabama's rich history as you explore the people, places, and traditions that make the Yellowhammer State unique. This beautifully illustrated alphabet book is a fun way to discover many of the stories that make Alabama special."
    },
    "video": {
      "title": "The Mobile Alabama Mardi Gras",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=7sQrH9swH1E",
      "description": "Celebrate Alabama's unique traditions.",
      "thumbnail": "https://i.ytimg.com/vi/7sQrH9swH1E/hqdefault.jpg"
    },
    "visit": {
      "title": "Attend a Local Festival or County Fair",
      "url": "https://alabama.travel/festivals-and-events",
      "description": "Experience Alabama's traditions through music, food, crafts, and celebrations that bring communities together."
    },
    "hero": "assets/banners/week-22.webp"
  },
  {
    "week": 23,
    "title": "Wild Alabama",
    "intro": "This week we'll explore Alabama's beautiful natural landscapes. From mountains and forests to rivers and sandy beaches, Alabama is home to many different habitats filled with plants, animals, and natural wonders.",
    "book": {
      "title": "The Salamander Room",
      "author": "Anne Mazer",
      "url": "https://www.amazon.com/dp/0440847702?lv=shuf&channelId=500&plpRedirect=mhFallback",
      "description": "What would happen if you brought a wild salamander home? This thoughtful story encourages young readers to appreciate the beauty of nature and reminds us why it's important to protect Alabama's amazing plants, animals, and habitats."
    },
    "video": {
      "title": "Alabama's Hidden Wonders: Cathedral Caverns & Little River Canyon",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=KWnHzbM3iXI",
      "description": "Explore mountains, forests, and coastlines.",
      "thumbnail": "https://i.ytimg.com/vi/KWnHzbM3iXI/hqdefault.jpg"
    },
    "visit": {
      "title": "Little River Canyon",
      "url": "https://www.nps.gov/liri/index.htm",
      "description": "Explore Alabama's beautiful natural landscapes and discover the diverse environments found across the state."
    },
    "hero": "assets/banners/week-23.webp"
  },
  {
    "week": 24,
    "title": "Our Alabama Story",
    "intro": "This week we look back on Alabama's journey and celebrate all that we have learned. From its earliest people to the present day, Alabama's story continues to grow as each new generation helps shape its future.",
    "book": {
      "title": "Miss Rumphius",
      "author": "Barbara Cooney",
      "url": "https://www.amazon.com/dp/0140505393",
      "description": "As you finish your journey across Alabama's history, this inspiring story reminds us that each of us has the opportunity to make the world a little more beautiful. Every generation helps write the next chapter of Alabama's story."
    },
    "video": {
      "title": "Alabama for Kids | US States Learning Video",
      "source": "Homeschool Pop",
      "url": "https://www.youtube.com/watch?v=sBtTter1Cmk",
      "description": "Reflect on Alabama's story.",
      "thumbnail": "https://i.ytimg.com/vi/sBtTter1Cmk/hqdefault.jpg"
    },
    "visit": {
      "title": "Your Favorite Alabama Place",
      "url": "",
      "description": "Visit a special place in Alabama and reflect on everything you've learned about our state's story and future."
    },
    "hero": "assets/banners/week-24.webp"
  },
  {
    "week": 25,
    "title": "How Alabama Got Its Name",
    "intro": "This week we'll discover how Alabama received its name. By exploring early maps, Native languages, and historical records, we'll learn about the many stories connected to the name of our state.",
    "book": {
      "title": "Alabama Department of Archives & History – The State's Name",
      "author": "",
      "url": "https://archives.alabama.gov/research/guidance/Fast-Facts.aspx",
      "description": "Where did the name \"Alabama\" come from? Explore early maps, Native American history, and the fascinating clues historians use to uncover the story behind our state's name. You'll discover that sometimes history has more than one possible answer!"
    },
    "video": {
      "title": "What's Behind Alabama's Forgotten Native Legacy?",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=37n1Oono4eU",
      "description": "Discover the origin of Alabama's name.",
      "thumbnail": "https://i.ytimg.com/vi/37n1Oono4eU/hqdefault.jpg"
    },
    "visit": {
      "title": "Alabama Department of Archives & History",
      "url": "https://archives.alabama.gov/",
      "description": "Explore exhibits and maps that help tell the story of Alabama's earliest people and how our state received its name."
    },
    "hero": "assets/banners/week-25.webp"
  },
  {
    "week": 26,
    "title": "Natural Bridges and Caves",
    "intro": "This week we'll explore some of Alabama's most amazing natural wonders. Over millions of years, water and weather helped shape incredible bridges, caves, and rock formations found throughout our state.",
    "book": {
      "title": "National Park Service – Cave & Karst Resources",
      "author": "",
      "url": "https://www.nps.gov/subjects/caves/index.htm",
      "description": "Discover the amazing underground world of caves, rock formations, and natural bridges! Learn how water, time, and nature work together to create some of Alabama's most incredible natural wonders."
    },
    "video": {
      "title": "Discovering Cathedral Caverns State Park",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=EsqlQSPKIZg",
      "description": "Explore Alabama's natural wonders.",
      "thumbnail": "https://i.ytimg.com/vi/EsqlQSPKIZg/hqdefault.jpg"
    },
    "visit": {
      "title": "Cathedral Caverns State Park",
      "url": "https://www.alapark.com/parks/cathedral-caverns-state-park",
      "description": "Explore Alabama's amazing rock formations and caves created over millions of years."
    },
    "hero": "assets/banners/week-26.webp"
  },
  {
    "week": 27,
    "title": "Alabama’s Amazing Animals",
    "intro": "This week we'll discover the many animals that call Alabama home. From black bears and bald eagles to sea turtles and white-tailed deer, Alabama's habitats are filled with fascinating wildlife.",
    "book": {
      "title": "National Geographic Kids Animal Encyclopedia",
      "author": "",
      "url": "",
      "description": "Meet fascinating animals from around the world—including many that live right here in Alabama! Discover how different habitats provide homes for black bears, bald eagles, sea turtles, deer, and many other amazing creatures."
    },
    "video": {
      "title": "Wildlife of Alabama",
      "source": "USFWS / USDA Forest Service",
      "url": "https://www.youtube.com/watch?v=o4GCLJpcJfQ",
      "description": "Meet animals that call Alabama home.",
      "thumbnail": "https://i.ytimg.com/vi/o4GCLJpcJfQ/hqdefault.jpg"
    },
    "visit": {
      "title": "Alabama Wildlife Center",
      "url": "https://alabamawildlifecenter.org/",
      "description": "Discover the many animals that call Alabama home and learn how we can protect their habitats."
    },
    "hero": "assets/banners/week-27.webp"
  },
  {
    "week": 28,
    "title": "The Tennessee Valley and TVA",
    "intro": "This week we'll explore the Tennessee Valley and discover why this important river region has played such a large role in Alabama's history, communities, transportation, and natural resources.",
    "book": {
      "title": "The Tennessee Valley Authority (TVA) – History & Education",
      "author": "",
      "url": "https://www.tva.com/about-tva/our-history",
      "description": "Discover how one mighty river helped shape Alabama's history. Learn how the Tennessee River provides transportation, electricity, recreation, and natural beauty while continuing to serve millions of people today."
    },
    "video": {
      "title": "New Deal Programs and Impact - The CCC and Beyond",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=QBZdRlWZWgw",
      "description": "Learn why rivers shaped Alabama.",
      "thumbnail": "https://i.ytimg.com/vi/QBZdRlWZWgw/hqdefault.jpg"
    },
    "visit": {
      "title": "TVA Visitor Center (Virtual Tour) or find a staffed Hyrdo Dam closest to you",
      "url": "https://www.tva.com/environment/recreation/visitor-centers",
      "description": "Learn how the Tennessee River shaped Alabama's economy, wildlife, and communities."
    },
    "hero": "assets/banners/week-28.webp"
  },
  {
    "week": 29,
    "title": "Forts, Lighthouses, and the Coast",
    "intro": "This week we'll travel to Alabama's coast and discover its historic forts and lighthouses. These special places protected travelers, guided ships, and played an important role in Alabama's history.",
    "book": {
      "title": "Good Night Lighthouse",
      "author": "Adam Gamble & Mark Jasper",
      "url": "https://www.penguinrandomhouse.com/books/763691/good-night-lighthouse-by-adam-gamble-mark-jasper/",
      "description": "Discover the fascinating world of lighthouses and the people who cared for them. As you explore Alabama's Gulf Coast, you'll learn how these towering beacons guided ships safely home for generations."
    },
    "video": {
      "title": "Inside The Historic Fort Morgan, Alabama",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=kpOKi205CO4",
      "description": "Explore Alabama's coastal history.",
      "thumbnail": "https://i.ytimg.com/vi/kpOKi205CO4/hqdefault.jpg"
    },
    "visit": {
      "title": "Fort Morgan or Sand Island Lighthouse Viewpoint",
      "url": "https://www.acpinfo.com/sand-island-lighthouse/",
      "description": "Explore Alabama's coastal history and discover how forts and lighthouses protected travelers and ships."
    },
    "hero": "assets/banners/week-29.webp"
  },
  {
    "week": 30,
    "title": "The Music of Alabama",
    "intro": "This week we'll discover how Alabama's musicians helped shape many different styles of American music. From gospel and country to blues and rock, music has long been an important part of Alabama's story.",
    "book": {
      "title": "Crescendo: The Story of a Musical Genius Who Forever Changed a Southern Town",
      "author": "Cheney, Allen, Cantrell, Julie",
      "url": "https://www.worldofbooks.com/products/crescendo-book-allen-cheney-9780785217404?sku=CIN0785217401G&utm_source=chatgpt.com&oppcref=e6532ca2-59b8-439e-8105-3359d1587a5e",
      "description": "Discover the inspiring story of W. C. Handy, whose love of music helped change America forever. As you explore Alabama's musical heritage, you'll see how one person's creativity inspired generations of musicians and helped shape the sounds that still influence music today."
    },
    "video": {
      "title": "History Minute: Muscle Shoals Sound",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=iHbgAlr3PUY",
      "description": "Discover Alabama's musical influence.",
      "thumbnail": "https://i.ytimg.com/vi/iHbgAlr3PUY/hqdefault.jpg"
    },
    "visit": {
      "title": "Alabama Music Hall of Fame",
      "url": "https://www.alamhof.org/",
      "description": "Discover how Alabama musicians helped shape many different styles of American music."
    },
    "hero": "assets/banners/week-30.webp"
  },
  {
    "week": 31,
    "title": "Alabama Inventors and Innovations",
    "intro": "This week we'll learn about Alabama inventors, scientists, and innovators. Their creativity and hard work led to new ideas and discoveries that helped improve everyday life.",
    "book": {
      "title": "The Kid Who Invented the Popsicle: And Other Surprising Stories About Inventions",
      "author": "Don Wulffson",
      "url": "https://www.amazon.com/dp/0141302046?lv=shuf&channelId=500&plpRedirect=mhFallback",
      "description": "Every invention begins with an idea! Discover the surprising stories behind everyday inventions and be inspired by the creativity, curiosity, and determination that help inventors solve problems and improve the world."
    },
    "video": {
      "title": "The Kid Who Invented the Popsicle",
      "source": "YouTube Search",
      "url": "https://www.youtube.com/results?search_query=The+Kid+Who+Invented+the+Popsicle+read+aloud",
      "description": "Creativity and invention in Alabama.",
      "thumbnail": ""
    },
    "visit": {
      "title": "McWane Science Center",
      "url": "https://mcwane.org/",
      "description": "Explore science, technology, and the many inventions and innovations connected to Alabama."
    },
    "hero": "assets/banners/week-31.webp"
  },
  {
    "week": 32,
    "title": "Famous Alabamians",
    "intro": "This week we'll meet some of the remarkable people who have called Alabama home. Through their talents, leadership, and determination, they helped shape our state, nation, and world.",
    "book": {
      "title": "What Do You Do With an Idea?",
      "author": "Kobi Yamada",
      "url": "https://www.amazon.com/dp/1938298071?lv=shuf&channelId=480&plpRedirect=mhFallback",
      "description": "Every great accomplishment begins with an idea. As you reflect on the remarkable Alabamians you've studied throughout this year, you'll be encouraged to dream big, work hard, and use your unique gifts to make a positive difference in your family, community, and the world."
    },
    "video": {
      "title": "Alabama for Kids | US States Learning Video",
      "source": "Homeschool Pop",
      "url": "https://www.youtube.com/watch?v=sBtTter1Cmk",
      "description": "Meet remarkable people from Alabama.",
      "thumbnail": "https://i.ytimg.com/vi/sBtTter1Cmk/hqdefault.jpg"
    },
    "visit": {
      "title": "Alabama Sports Hall of Fame",
      "url": "https://ashof.org/",
      "description": "Learn about famous Alabamians who have influenced our state, nation, and world."
    },
    "hero": "assets/banners/week-32.webp"
  },
  {
    "week": 33,
    "title": "Alabama State Parks",
    "intro": "This week we'll explore Alabama's beautiful state parks. These protected places help preserve forests, mountains, rivers, and wildlife so future generations can enjoy Alabama's natural treasures.",
    "book": {
      "title": "Alabama State Parks Official Guide",
      "author": "",
      "url": "https://www.alapark.com/",
      "description": "Explore Alabama's incredible state parks, where forests, waterfalls, mountains, rivers, beaches, and wildlife are protected for everyone to enjoy. Discover new places to hike, camp, learn, and experience the beauty of God's creation."
    },
    "video": {
      "title": "Alabama State Parks Virtual Naturalist Series",
      "source": "Outdoor Alabama",
      "url": "https://www.youtube.com/playlist?list=PLEz6lPQUeUn1wKerOoAklD5Mgy6tA8_CH",
      "description": "Explore Alabama's outdoor treasures.",
      "thumbnail": ""
    },
    "visit": {
      "title": "Visit Any Alabama State Park- Monte Sano State Park",
      "url": "https://www.alapark.com/parks/monte-sano-state-park",
      "description": "Explore one of Alabama's beautiful state parks and discover why these special places are worth protecting."
    },
    "hero": "assets/banners/week-33.webp"
  },
  {
    "week": 34,
    "title": "Alabama Then and Now",
    "intro": "This week we'll compare Alabama's past and present. By looking at how our state has changed over time, we'll discover that Alabama's story is still being written today.",
    "book": {
      "title": "If You Lived 100 Years Ago",
      "author": "Ann McGovern",
      "url": "https://www.amazon.com/dp/059045160X",
      "description": "Travel back in time to discover what everyday life was like a century ago. As you compare the past with the present, you'll see how Alabama has changed over time—and how today's children will help shape its future."
    },
    "video": {
      "title": "Let's Go To Alabama",
      "source": "YouTube",
      "url": "https://www.youtube.com/watch?v=Ig4WjhcSsTY",
      "description": "Compare Alabama past and present.",
      "thumbnail": "https://i.ytimg.com/vi/Ig4WjhcSsTY/hqdefault.jpg"
    },
    "visit": {
      "title": "Visit Your Town's Historical Society or Museum- Huntsville-Madison County Historical Society",
      "url": "https://hmchs.org/",
      "description": "Compare Alabama's past and present by learning how your local community has changed over time."
    },
    "hero": "assets/banners/week-34.webp"
  }
];

let current=0;
const $=id=>document.getElementById(id);
const screens={password:$("password"),welcome:$("welcome"),lesson:$("lesson")};

function show(name){
  Object.values(screens).forEach(s=>s.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
function opts(){return lessons.map((l,i)=>`<option value="${i}">Week ${l.week} • ${l.title}</option>`).join("");}
function fill(){["welcomeSelect","topSelect","bottomSelect"].forEach(id=>$(id).innerHTML=opts());}
function setOptionalLink(id,url){
  const el=$(id);
  if(url){el.href=url;el.hidden=false;}
  else{el.removeAttribute("href");el.hidden=true;}
}
function render(i){
  current=Math.max(0,Math.min(i,lessons.length-1));
  const l=lessons[current];
  localStorage.setItem("eaLastLesson",current);
  $("hero").src=l.hero;
  $("hero").alt=`Watercolor hero artwork for Week ${l.week}: ${l.title}`;
  $("weekNo").textContent=`Week ${l.week}`;
  $("title").textContent=l.title;
  $("intro").textContent=l.intro;
  $("bookArt").textContent=l.book.title;
  $("bookTitle").textContent=l.book.title;
  $("bookAuthor").textContent=l.book.author?`by ${l.book.author}`:"";
  $("bookDesc").textContent=l.book.description;
  setOptionalLink("bookLink",l.book.url);
  $("videoTitle").textContent=l.video.title;
  $("videoSource").textContent=l.video.source?`From ${l.video.source}`:"";
  $("videoDesc").textContent=l.video.description;
  setOptionalLink("videoLink",l.video.url);
  $("videoVisual").href=l.video.url||"#";
  const t=$("thumb"),f=$("videoFallback");
  if(l.video.thumbnail){
    t.src=l.video.thumbnail;t.alt=`Thumbnail for ${l.video.title}`;t.hidden=false;f.hidden=true;
    t.onerror=()=>{t.hidden=true;f.hidden=false;};
  }else{t.hidden=true;f.hidden=false;}
  $("visitTitle").textContent=l.visit.title;
  $("visitDesc").textContent=l.visit.description;
  setOptionalLink("visitLink",l.visit.url);
  ["topSelect","bottomSelect","welcomeSelect"].forEach(id=>$(id).value=current);
  const p=$("prev"),n=$("next");
  if(current===0){p.textContent="Beginning of the Adventure";p.disabled=true;}
  else{p.textContent=`← Week ${lessons[current-1].week} • ${lessons[current-1].title}`;p.disabled=false;}
  if(current===lessons.length-1){n.textContent="End of the Adventure";n.disabled=true;}
  else{n.textContent=`Week ${lessons[current+1].week} • ${lessons[current+1].title} →`;n.disabled=false;}
  show("lesson");
}

fill();
$("passwordForm").addEventListener("submit",e=>{
  e.preventDefault();
  if($("pw").value===PASSWORD){sessionStorage.setItem("eaUnlocked","yes");$("error").textContent="";show("welcome");}
  else $("error").textContent="That password does not match the one in the curriculum.";
});
$("explore").onclick=()=>{$("chooser").hidden=false;$("chooser").scrollIntoView({behavior:"smooth",block:"center"});};
$("openLesson").onclick=()=>render(Number($("welcomeSelect").value));
$("topSelect").onchange=e=>render(Number(e.target.value));
$("bottomSelect").onchange=e=>render(Number(e.target.value));
$("prev").onclick=()=>render(current-1);
$("next").onclick=()=>render(current+1);
$("home").onclick=()=>show("welcome");
if(sessionStorage.getItem("eaUnlocked")==="yes") show("welcome");
