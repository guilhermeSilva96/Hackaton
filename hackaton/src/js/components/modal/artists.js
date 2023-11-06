const artists = [
  {
    Name: "Percy Sledge",
    Age: "November 25, 1940 - April 14, 2015",
    GreatestHit: "When a Man Loves a Woman",
    NetWorth: 10,
    Fact: "Inducted into the Rock and Roll Hall of Fame in 2005 for his profound influence on soul music.",
    State: "Alabama",
    Image: "/soulArtists/AlabamaPercySledge.webp",
    Music: "/resources/songs/When a Man Loves a Woman.mp3",
  },

  {
    Name: "Al Green",
    Age: "April 13, 1946",
    GreatestHit: "Let's Stay Together",
    NetWorth: 20,
    Fact: "Al Green is not only a talented singer but also an ordained pastor. In the mid-1970s, he underwent a spiritual transformation and decided to focus on gospel music, temporarily stepping away from his successful secular music career.",
    State: "Arkansas",
    Image: "/soulArtists/ArkansasAlGreen.png",
    Music: "/resources/songs/Let's Stay Together.mp3",
  },
  {
    Name: "Etta James",
    Age: "January 25, 1938 - January 20, 2012",
    GreatestHit: "At Last",
    NetWorth: 16,
    Fact: "Etta James had a diverse musical career that spanned genres including R&B, soul, blues, gospel, and jazz. Her powerful voice and emotional delivery left an indelible mark on the music industry.",
    State: "California",
    Image: "/soulArtists/CaliforniaEttaJames.jpg",
    Music: "/resources/songs/At Lastmp3.mp3",
  },
  {
    Name: "Philip Bailey (Earth, Wind & Fire)",
    AGE: "May 8, 1951",
    GreatestHit: "Various hits with Earth, Wind & Fire",
    NetWorth: 4,
    Fact: "Philip Bailey is renowned for his distinctive falsetto voice and his role as a lead vocalist in the legendary band Earth, Wind & Fire. In addition to his music career, he's known for his advocacy of environmental and humanitarian causes.",
    State: "Colorado",
    Image: "/soulArtists/ColoradoPhilipBailey.webp",
    Music: "/resources/songs/Easy Lover.mp3",
  },
  {
    Name: "John Mayer",
    AGE: "October 16, 1977",
    GreatestHit: "Your Body Is a Wonderland",
    NetWorth: 70,
    Fact: "John Mayer is not limited to one genre; he's a versatile artist known for his skills as a singer-songwriter, guitarist, and producer. He has explored various musical styles, including pop, rock, blues, and folk, which has contributed to his widespread popularity and recognition.",
    State: "Connecticut",
    Image: "/soulArtists/ConnecticutJohnMayer.jpg",
    Music: "/resources/songs/Your Body Is A Wonderland.mp3",
    
  },

  {
    Name: "Sam Moore (of Sam & Dave)",
    Age: "October 12, 1935",
    GreatestHit: "Various hits with Sam & Dave",
    NetWorth: 2,
    Fact: "Sam Moore is a celebrated soul singer best known for his dynamic partnership with Dave Prater in the duo Sam & Dave. Their energetic performances and soulful hits left a significant impact on the soul music landscape during the 1960s.",
    State: "Florida",
    Image: "/soulArtists/FloridaSamMoore.jpg",
    Music: "/resources/songs/Sam Soul Man.mp3",
  },
  {
    Name: "Ray Charles",
    Age: "September 23, 1930 - June 10, 2004",
    GreatestHit:
      "Various hits including 'What'd I Say' and 'Georgia On My Mind'",
    NetWorth: 100,
    Fact: "Ray Charles was a musical pioneer who blended genres like rhythm and blues, gospel, and country to create his distinctive sound. He was a virtuoso pianist and a remarkable vocalist. His impact on the music industry was enormous, and he was also a civil rights advocate, using his platform to advance social change.",
    State: "Georgia",
    Image: "/soulArtists/GeorgiaRayCharles.jpg",
    Music: "/resources/songs/ray charles.mp3",
  },
  {
    Name: "Bruno Mars (Peter Gene Hernandez)",
    Age: "October 8, 1985",
    GreatestHit:
      "Various hits including 'Just the Way You Are' and 'Uptown Funk'",
    NetWorth: 175,
    Fact: "Bruno Mars is a multi-talented artist known for his versatile musical style that incorporates elements of pop, R&B, funk, soul, and more. He's not only a singer but also a songwriter, producer, and instrumentalist. His performances often pay homage to various musical eras, and his energetic stage presence has made him a beloved figure in modern popular music.",
    State: "Hawaii",
    Image: "/soulArtists/HawaiiBrunoMars.jpg",
    Music: "/resources/songs/Bruno Mars.mp3",
  },

  {
    Name: "Curtis Mayfield",
    Age: "June 3, 1942 - December 26, 1999",
    GreatestHit: "Move On Up",
    NetWorth: "0",
    Fact: "Curtis Mayfield was a singer-songwriter, guitarist, and producer who played a significant role in shaping soul and funk music. He was a member of The Impressions and later pursued a successful solo career. Mayfield's socially conscious lyrics, smooth falsetto, and innovative sound contributed to his enduring influence on the music industry. He is also known for his soundtrack work on the film 'Superfly.'",
    State: "Illinois",
    Image: "/soulArtists/IllinoisCurtisMayfield.png",
    Music: "/resources/songs/MoveOnUp.mp3",
  },
  {
    Name: "The Jackson 5 (Originally The Jackson Brothers)",
    Members:
      "Michael Jackson, Tito Jackson, Jackie Jackson, Jermaine Jackson, Marlon Jackson (later Randy Jackson)",
    GreatestHit: "Various hits including 'I Want You Back' and 'ABC'",
    Fact:
      "Known for launching the career of Michael Jackson, one of the most influential artists in music history.",
    State: "Indiana",
    Image: "/soulArtists/IndianaTheJackson5.jpg",
    Music: "/resources/songs/I_Want_You_Back.mp3",
  },
  {
    Name: "Janelle Monáe",
    Age: "December 1, 1985",
    GreatestHit: "Tightrope",
    NetWorth: 10,
    Fact: "Janelle Monáe is not only a Grammy-nominated musician but also an accomplished actress. Her music often features futuristic and science fiction themes, creating a unique blend of R&B, funk, and soul. Monáe's advocacy for LGBTQ+ rights, racial equality, and social justice has been an integral part of her artistic identity.",
    State: "Kansas",
    Image: "/soulArtists/KansasJanelleMonae.jpg",
    Music: "/resources/songs/Tightrope.mp3",
  },
  {
    Name: "Bryson Tiller",
    Age: "January 2, 1993",
    GreatestHit: "Don't",
    NetWorth: 2,
    Fact: "Bryson Tiller gained significant attention with his debut album 'Trapsoul' in 2015, blending R&B and hip-hop elements. His rise to prominence was largely fueled by the internet and social media, showcasing the changing landscape of music promotion and discovery.",
    State: "Kentucky",
    Image: "/soulArtists/KentuckyBrysonTiller.webp",
    Music: "/resources/songs/Don't.mp3",
  },
  {
    Name: "Aaron Neville",
    Age: "January 24, 1941",
    GreatestHit: "Tell It Like It Is",
    NetWorth: 8,
    Fact: "Aaron Neville is known for his distinctive vibrato-filled voice that spans genres like R&B, soul, gospel, and more. He's a member of The Neville Brothers, a prominent family band from New Orleans. Neville's musical career has been marked by collaborations with various artists, including his chart-topping duet with Linda Ronstadt. He's also recognized for his philanthropic efforts in his hometown of New Orleans.",
    State: "Louisiana",
    Image: "/soulArtists/LouisianaAaronNeville.webp",
    Music: "/resources/songs/Tell It Like It Is.mp3",
  },

  {
    Name: "Toni Braxton",
    Age: "October 7, 1967",
    GreatestHit: "Un-Break My Heart",
    NetWorth: 10,
    Fact: "Toni Braxton is known for her distinctive sultry voice and her success as an R&B and soul artist. She has won multiple Grammy Awards and has achieved significant recognition for her ballads and emotive performances. Apart from her music career, she has also pursued acting and reality television projects.",
    State: "Maryland",
    Image: "/soulArtists/MarylandToniBraxton.jpg",
    Music: "/resources/songs/Un-Break My Heart.mp3",
  },
  {
    Name: "Donna Summer",
    Age: "December 31, 1948 - May 17, 2012",
    GreatestHit: "I Feel Love",
    NetWorth: 75,
    Fact: "Donna Summer, often referred to as the 'Queen of Disco,' was a multifaceted artist known for her powerful vocals and dance hits. While she's synonymous with the disco era, her music also encompassed soul, R&B, and pop genres. 'I Feel Love' is often considered a groundbreaking track due to its innovative electronic production. Summer's legacy extends beyond music; she was also a painter and visual artist.",
    State: "Massachusetts",
    Image: "/soulArtists/MassachusettsDonnaSummer.jpg",
    Music: "/resources/songs/I feel love.mp3",
  },
  {
    Name: "Stevie Wonder (Real name: Stevland Hardaway Morris)",
    Age: "May 13, 1950",
    GreatestHit: "Superstition",
    NetWorth: 110,
    Fact: "Stevie Wonder is a music icon known for his incredible talent as a singer, songwriter, and multi-instrumentalist. He was a child prodigy who signed with Motown Records at the age of 11. Despite being blind since shortly after birth, Wonder's music transcended barriers and genres, making him one of the most celebrated and influential artists in history. He's won numerous Grammy Awards, and his songs often carry socially conscious messages, making him a voice for change.",
    State: "Michigan",
    Image: "/soulArtists/MichiganStevieWonder.jpg",
    Music: "/resources/songs/Superstition.mp3",
  },
  {
    Name: "Prince (Real name: Prince Rogers Nelson)",
    Age: "June 7, 1958 - April 21, 2016",
    GreatestHit: "Purple Rain",
    NetWorth: 300,
    Fact: "Prince was an iconic musician known for his innovation, virtuosic musical talent, and flamboyant stage presence. His music defied genre boundaries, blending elements of funk, rock, pop, R&B, and more. Purple Rain is one of his most iconic songs, and the accompanying album and film elevated him to superstar status. Prince was also known for his advocacy of artist rights and creative control, and he changed his name to a symbol as a protest against his record label.",
    State: "Minnesota",
    Image: "/soulArtists/MinnesotaPrince.jpg",
    Music: "/resources/songs/Purple Rain.mp3",
  },
  {
    Name: "Sam Cooke",
    Age: "January 22, 1931 - December 11, 1964",
    GreatestHit: "A Change Is Gonna Come",
    NetWorth: "0",
    Fact: "Sam Cooke was a trailblazing artist who bridged the gap between gospel and soul music. His smooth vocals and hits like You Send Me and Cupid earned him widespread recognition. A Change Is Gonna Come is considered one of the most powerful and significant songs of the civil rights movement. Tragically, Cooke's life was cut short at the age of 33, but his influence on soul music continues to be felt to this day.",
    State: "Mississippi",
    Image: "/soulArtists/MississippiSamCooke.jpg",
    Music: "/resources/songs/A Change Is Gonna Come.mp3",
  },
  {
    Name: "Tina Turner (Real name: Anna Mae Bullock)",
    Age: "November 26, 1939 - May 24, 2023",
    GreatestHit: "What's Love Got to Do with It",
    NetWorth: 250,
    Fact: "Tina Turner is a legendary singer known for her electrifying performances and versatile voice. She started her career alongside Ike Turner, but her solo career propelled her to superstardom. What's Love Got to Do with It marked her triumphant comeback and won several Grammy Awards. Turner's resilience, transformation, and iconic stage presence have solidified her status as the 'Queen of Rock 'n' Roll.'",
    State: "Missouri",
    Image: "/soulArtists/MissouriTinaTurner.jpg",
    Music: "/resources/songs/What's Love Got to Do with It.mp3",
  },
  {
    Name: "Huey Lewis",
    Age: "July 5, 1950",
    State: "Montana",
    GreatestHit: "The Power of Love",
    NetWorth: 20,
    Fact: "Appeared as a judge in the film 'Back to the Future'",
    Image: "/soulArtists/Huey_Lewis.jpeg",
    Music: "/resources/songs/The Power Of Love.mp3",
  },
  {
    Name: "Homer Banks",
    Age: "August 2, 1941 - April 3, 2003",
    State: "Nebraska",
    GreatestHit: "Ain't That a Lot of Love",
    NetWorth: "0",
    Fact: "At the age of 16 formed the Soul Consolidators gospel group which toured around the southern states",
    Image: "/soulArtists/Homer_Banks.jpg",
    Music: "/resources/songs/Aint That A Lot Of Love.mp3",
  },
  {
    Name: "Wayne Newton",
    Age: "April 3, 1942",
    State: "Nevada",
    GreatestHit: "Danke Schoen",
    NetWorth: 50,
    Fact: "Considered an iconic figure in Las Vegas entertainment. His performances and shows in the city have earned him the nickname 'Mr. Las Vegas'",
    Image: "/soulArtists/Wayne_Newton.webp",
    Music: "/resources/songs/danke Schoen.mp3",
  },
  {
    Name: "Aerosmith",
    Age: "Founded in 1970",
    State: "New Hampshire",
    GreatestHit: "I Don't Want to Miss a Thing",
    NetWorth: 530,
    Fact: "They are a rock band with influence in Blues and Soul",
    Image: "/soulArtists/Aerosmith.jpeg",
    Music: "/resources/songs/I Don't Want to Miss a Thing.mp3",
  },
  {
    Name: "Whitney Houston",
    Age: "August 9, 1963 - February 11, 2012",
    State: "New Jersey",
    GreatestHit: "I Will Always Love You",
    NetWorth: -20,
    Fact: "Was found unresponsive in her hotel room bathtub at the Beverly Hilton Hotel. The reports mentioned that the effects of atherosclerotic heart disease and cocaine use contributed to her passing.",
    Image: "/soulArtists/Whitney_Houston.jpeg",
    Music: "/resources/songs/I Will Always Love You.mp3",
  },
  {
    Name: "Al Hurricane",
    Age: "July 10, 1936 - October 22, 2017",
    State: "New Mexico",
    GreatestHit: "Sentimiento",
    NetWorth: 7,
    Fact: "His nickname 'Al Hurricane' was actually given to him by his manager. His real name is Alberto Nelson Sanchez",
    Image: "/soulArtists/Al_Hurricane.jpeg",
    Music: "/resources/songs/Sentimiento.mp3",
  },
  {
    Name: "Aretha Franklin",
    Age: "March 25, 1942 - August 16, 2018",
    State: "New York",
    GreatestHit: "Respect",
    NetWorth: 80,
    Fact: "Widely regarded as the 'Queen of Soul' due to her exceptional vocal talent and contributions to the genre",
    Image: "/soulArtists/Aretha_Franklin.jpeg",
    Music: "/resources/songs/Respect.mp3",
  },
  {
    Name: "Roberta Flack",
    Age: "February 10, 1937",
    State: "North Carolina",
    GreatestHit: "Killing Me Softly with His Song",
    NetWorth: 20,
    Fact: "Explored various genres, including Soul R&B, Jazz, and Pop",
    Image: "/soulArtists/Roberta_Flack.webp",
    Music: "/resources/songs/Killing Me Softly With His Song.mp3",
  },
  {
    Name: "Bobby Vee",
    Age: "April 30, 1943 - October 24, 2016",
    State: "North Dakota",
    GreatestHit: "Take Good Care of My Baby",
    NetWorth: 10,
    Fact: "His name was Robert Thomas Velline but he adopted the name 'Bobby Vee' when he signed a recording contract in the late 1950s.",
    Image: "/soulArtists/Bobby_Vee.webp",
    Music: "/resources/songs/Take Good Care Of My Baby.mp3",
  },
  {
    Name: "The Isley Brothers",
    Age: "Founded in 1954",
    State: "Ohio",
    GreatestHit: "Shout",
    NetWorth: 4,
    Fact: "Their version of 'Twist and Shout' was covered by The Beatles and became one of The Beatles' signature songs",
    Image: "/soulArtists/Isley_Brothers.jpeg",
    Music: "/resources/songs/Shout.mp3",
  },
  {
    Name: "Charlie Wilson",
    Age: "January 29, 1953",
    State: "Oklahoma",
    GreatestHit: "There Goes My Baby",
    NetWorth: 15,
    Fact: "Was a member of the popular R&B group The Gap Band, and many of The Gap Band's songs have been sampled by hip-hop artists, contributing to his enduring influence on modern music",
    Image: "/soulArtists/Charlie_Wilson.jpeg",
    Music: "/resources/songs/There Goes My Baby.mp3",
  },
  {
    Name: "Ural Thomas",
    Age: "21 December, 1939",
    State: "Oregon",
    GreatestHit: "Pain is the Name of Your Game",
    NetWorth: "0",
    Fact: "Considered a local legend in Portland; has contributed to the preservation and continuation of soul and R&B traditions in the Pacific Northwest",
    Image: "/soulArtists/Ural_Thomas.webp",
    Music: "/resources/songs/Pain Is The Name Of Your Game.mp3",
  },
  {
    Name: "Patti LaBelle",
    Age: "May 24, 1944",
    State: "Pennsylvania",
    GreatestHit: "Lady Marmalade",
    NetWorth: 50,
    Fact: "Is known for her cooking skills and authored several cookbooks, sharing her recipes and culinary expertise. She's an entrepreneur with ventures like food products and a line of bedding and home goods",
    Image: "/soulArtists/Patti_LaBelle.jpeg",
    Music: "/resources/songs/Lady Marmalade.mp3",
  },
  {
    Name: "James Brown",
    Age: "May 3, 1933 - December 25, 2006",
    State: "South Carolina",
    GreatestHit: "I Got You (I Feel Good)",
    NetWorth: 100,
    Fact: "He is often referred to as the 'Godfather of Soul' for his significant contributions to soul and funk music.",
    Image: "/soulArtists/james_brown.webp",
    Music: "/resources/songs/I Got You (I Feel Good).mp3",
  },
  {
    Name: "Bobby 'Blue' Bland",
    Age: "January 27, 1930 - June 23, 2013",
    State: "Texas",
    GreatestHit: "Further On Up the Road",
    NetWorth: 1,
    Fact: "'The Sinatra of the Blues': Bland earned this nickname due to his ability to convey emotion and storytelling in his songs, much like Frank Sinatra did in the world of pop music.",
    Image: "/soulArtists/Bobby_Bland.webp",
    Music: "/resources/songs/FurtherOnUptheRoad.mp3",
  },
  {
    Name: "D’Angelo",
    Age: "February 11, 1974",
    State: "Virginia",
    GreatestHit: "Untitled (How Does It Feel)",
    NetWorth: 1,
    Fact: "He is proficient in playing several instruments, including keyboards, guitar, and drums",
    Image: "/soulArtists/DAngelo.webp",
    Music: "/resources/songs/Untitled (How Does It Feel).mp3",
  },
  {
    Name: "Allen Stone",
    Age: "March 13, 1987",
    State: "Washington",
    GreatestHit: "Unaware",
    NetWorth: 0.5,
    Fact: "He gained attention by uploading his music to YouTube, which helped him build an online fanbase and showcase his unique voice",
    Image: "/soulArtists/Allen_Stone.jpeg",
    Music: "/resources/songs/Unaware.mp3",
  },
  {
    Name: "Bill Withers",
    Age: "July 4, 1938 - March 30, 2020",
    State: "West Virginia",
    GreatestHit: "Lean on Me",
    NetWorth: 40,
    Fact: "Withers served in the United States Navy for nine years before pursuing a career in music",
    Image: "/soulArtists/Bill_Withers.webp",
    Music: "/resources/songs/Lean on Me.mp3",
  },
  {
    Name: "Isaac Hayes",
    Age: "August 20, 1942 - August 10, 2008",
    State: "Tennessee",
    GreatestHit: "Shaft",
    NetWorth: 2,
    Fact: "His music experienced a revival in popularity in the 1990s due to its frequent use in hip-hop samples",
    Image: "/soulArtists/Isaac_Hayes.webp",
    Music: "/resources/songs/Shaft.mp3",
  },
  {
    Name: "Harvey Scales",
    Age: "September 27, 1941 - February 11, 2019",
    State: "Wisconsin",
    GreatestHit: "Disco Lady",
    NetWorth: "0",
    Fact: "While his solo career did not reach the same heights as some of his contemporaries, his songwriting talents left an impact on other artists who recorded his compositions",
    Image: "/soulArtists/Harvey_Scales.png",
    Music: "/resources/songs/DiscoLady.mp3",
  },

  {
    Name: "Shawn Colvin",
    Age: "January 10, 1956",
    State: "South Dakota",
    GreatestHit: "Sunny Came Home",
    NetWorth: 2,
    Fact: "Colvin has been an advocate for mental health awareness and has spoken openly about her own struggles with depression",
    Image: "/soulArtists/Shawn_Colvin.jpeg",
    Music: "/resources/songs/Sunny Came Home.mp3",
  },
  {
    Name: "The Osmonds",
    Age: "Founded in 1958",
    State: "Utah",
    GreatestHit: "One Bad Apple",
    NetWorth: 20,
    Fact: "Originally started as a barbershop quartet by the Osmond siblings and their parents",
    Image: "/soulArtists/The_Osmonds.jpeg",
    Music: "/resources/songs/One Bad Apple.mp3",
  },
  {
    Name: "Grace Potter",
    Age: "June 20, 1983",
    State: "Vermont",
    GreatestHit: "Paris (Ooh La La)",
    NetWorth: 4,
    Fact: "Potter's music has been used in various films and TV shows, including the hit series Grey's Anatomy.",
    Image: "/soulArtists/Grace_Potter.webp",
    Music: "/resources/songs/Paris (Ooh La La).mp3",
  },
  {
    Name: "Jackson Browne",
    Age: "October 9, 1948",
    State: "Wyoming",
    GreatestHit: "Running on Empty",
    NetWorth: 50,
    Fact: "He has a passion for painting and has occasionally exhibited his artwork",
    Image: "/soulArtists/Jackson_Browne.jpeg",
    Music: "/resources/songs/Running on Empty.mp3",
  },
  {
    Name: "Mary Stallings",
    Age: "August 16, 1939",
    State: "Alaska",
    GreatestHit: "Fine and Mellow",
    NetWorth: 1,
    Fact: "Started singing in her church choir at a young age, which laid the foundation for her musical journey",
    Image: "/soulArtists/Mary_Stallings.jpeg",
    Music: "/resources/songs/Mary Stallings.mp3",
  },
  {
    Name: "Brooks & Dunn",
    Age: "Founded in 1990",
    State: "Arizona",
    GreatestHit: "Brand New Man",
    NetWorth: 100,
    Fact: "Brooks & Dunn's music videos often showcased their humor, storytelling, and charismatic stage presence",
    Image: "/soulArtists/Brooks_Dunn.jpeg",
    Music: "/resources/songs/Brand New Man.mp3",
  },
  {
    Name: "Paul Reverse & The Raiders",
    Age: "Founded in 1958",
    State: "Idaho",
    GreatestHit: "Kicks",
    NetWorth: 5,
    Fact: "The band's lineup went through various changes over the years, but Paul Revere remained a constant member and leader",
    Image: "/soulArtists/Paul_Reverse.jpeg",
    Music: "/resources/songs/Kicks.mp3",
  },
  {
    Name: "George Thorogood",
    Age: "February 24, 1950",
    State: "Delaware",
    GreatestHit: "Bad to the Bone",
    NetWorth: 10,
    Fact: "Gained early recognition by performing in small clubs and bars, building a loyal fan base that appreciated his energetic and engaging shows",
    Image: "/soulArtists/George_Thorogood.jpeg",
    Music: "/resources/songs/Bad To The Bone.mp3",
  },
  {
    Name: "Andy Williams",
    Age: "December 3, 1927",
    State: "Iowa",
    GreatestHit: "It's the Most Wonderful Time of the Year",
    NetWorth: 45,
    Fact: "Andy Williams began his singing career as a child alongside his brothers in a quartet called The Williams Brothers",
    Image: "/soulArtists/Andy_Williams.jpg",
    Music: "/resources/songs/Andy Williams.mp3",
  },
  {
    Name: "Howie Day",
    Age: "January 1, 1961",
    State: "Maine",
    GreatestHit: "Collide",
    NetWorth: 2,
    Fact: "He is known for his looping technique, where he creates layered live performances using a loop pedal, adding depth to his solo performances",
    Image: "/soulArtists/Howie_Day.jpeg",
    Music: "/resources/songs/Collide.mp3",
  },
];

export default artists;