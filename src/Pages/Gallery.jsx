import React, { useState } from "react";
import "../styles/Gallery.css";

// import festivals from "../data/festivals.json";


const festivals = [
  // 🌍 Africa
  

 

//  
//  
 {
    "id": 1,
    "name": "Durbar Festival",
    "country": "Nigeria",
    "tradition": "Islamic / Cultural",
    "continent": "Africa",
    "image": "/Images/eid4.jpeg",
    "description": "A centuries-old Hausa equestrian festival marking Eid celebrations, featuring colorful mounted parades and displays of allegiance to the Emir."
  },


  {
  "id": 2,
  "name": "Osun-Osogbo Festival",
  "country": "Nigeria",
  "tradition": "Osun Cultural festival",
  "continent": "Africa",
  "image": "/Images/eid3.jpeg",
  "description": "A two-week Yoruba festival honoring the river goddess Osun."
},


{ id: 3, name: "Cape Town Minstrel Carnival", country: "South Africa", tradition: "Cultural", continent: "Africa", image: "/Images/christmas4.jpeg" }, 
{ id: 4, name: "Lake of Stars Festival", country: "Malawi", tradition: "Music", continent: "Africa", image: "/Images/christmas2.jpeg" },
 { id: 5, name: "Fes Festival of World Sacred Music", country: "Morocco", tradition: "Spiritual", continent: "Africa", image: "/Images/adha4.jpeg"  }, 
 { id: 6, name: "Timkat Festival", country: "Ethiopia", tradition: "Christian", continent: "Africa", image:  "/Images/christmas3.jpeg" }, 


     // 🌏 Asia
  { id: 13, name: "Holi", country: "India", tradition: "Hindu", continent: "Asia", image: "/Images/holi1.png" },
  { id: 14, name: "Songkran", country: "Thailand", tradition: "Buddhist", continent: "Asia", image: "/Images/vesak4.jpeg" },
  { id: 15, name: "Eid al-Fitr", country: "Saudi Arabia", tradition: "Islamic", continent: "Asia", image: "/Images/adha2.jpeg" },
  { id: 16, name: "Hanami (Cherry Blossom)", country: "Japan", tradition: "Cultural", continent: "Asia", image: "/Images/vesak2.jpeg" },
  { id: 17, name: "Vesak", country: "Sri Lanka", tradition: "Buddhist", continent: "Asia", image: "/Images/vesak1.jpeg" },
  { id: 18, name: "Nowruz", country: "Iran", tradition: "Cultural", continent: "Asia", image:   "/Images/vesak3.jpeg" },
  
  // 🌍 Europe
  { id: 21, name: "Oktoberfest", country: "Germany", tradition: "Cultural", continent: "Europe", image: "/Images/lunar3.jpeg" },
  { id: 22, name: "La Tomatina", country: "Spain", tradition: "Cultural", continent: "Europe", image: "/Images/songkran4.jpeg" },
  { id: 23, name: "Venice Carnival", country: "Italy", tradition: "Cultural", continent: "Europe", image: "/Images/songkran1.jpeg" },
  { id: 24, name: "St. Patrick’s Day", country: "Ireland", tradition: "Christian", continent: "Europe", image: "/Images/passover3.jpeg" },
  { id: 25, name: "Running of the Bulls", country: "Spain", tradition: "Cultural", continent: "Europe", image: "/Images/lunar1.jpeg" },
  { id: 26, name: "Edinburgh Fringe", country: "Scotland", tradition: "Art", continent: "Europe", image:  "/Images/passover1.jpeg" },
  { id: 27, name: "Bastille Day", country: "France", tradition: "National", continent: "Europe", image:  "/Images/passover4.jpeg" },
  { id: 28, name: "Christmas Markets", country: "Germany", tradition: "Christian", continent: "Europe", image: "/Images/christmas3.jpeg"  },


  // 🌎 North America
  { id: 31, name: "Mardi Gras", country: "USA", tradition: "Cultural", continent: "North America", image: "/Images/kippur4.jpeg"  },
  { id: 32, name: "Thanksgiving", country: "USA", tradition: "Christian", continent: "North America", image: "/Images/passover3.jpeg" },
  { id: 33, name: "Canada Day", country: "Canada", tradition: "National", continent: "North America", image:   "/Images/easter4.jpeg" },
  { id: 34, name: "Dia de los Muertos", country: "Mexico", tradition: "Traditional", continent: "North America", image:  "/Images/easter3.jpeg"  },
  { id: 35, name: "Fourth of July", country: "USA", tradition: "National", continent: "North America", image: "/Images/easter1.jpeg" },
  { id: 36, name: "Coachella", country: "USA", tradition: "Music", continent: "North America", image:  "/Images/losar4.jpeg" },
  { id: 37, name: "Burning Man", country: "USA", tradition: "Art", continent: "North America", image: "/Images/nowruz2.jpeg" },
  { id: 38, name: "Carnaval de Veracruz", country: "Mexico", tradition: "Cultural", continent: "North America", image: "/Images/pentecost3.jpeg"},
  { id: 39, name: "Jazz Fest", country: "USA", tradition: "Music", continent: "North America", image: "/Images/yule1.jpeg" },
  { id: 40, name: "Puerto Rican Day Parade", country: "USA", tradition: "Cultural", continent: "North America", image: "/Images/losar2.jpeg"  },

  // 🌎 South America
  { id: 41, name: "Carnival", country: "Brazil", tradition: "Cultural", continent: "South America", image: "/Images/losar3.jpeg" },
  { id: 42, name: "Inti Raymi", country: "Peru", tradition: "Incan", continent: "South America", image: "/Images/losar1.jpeg" },
  { id: 43, name: "Dia de San Juan", country: "Venezuela", tradition: "Christian", continent: "South America", image: "/Images/losar4.jpeg" },
  { id: 44, name: "Fiesta de la Tirana", country: "Chile", tradition: "Catholic", continent: "South America", image: "/Images/yule2.jpeg" },
  { id: 45, name: "Carnaval de Oruro", country: "Bolivia", tradition: "Cultural", continent: "South America", image: "/Images/yule3.jpeg" },
  { id: 46, name: "Vendimia Wine Festival", country: "Argentina", tradition: "Cultural", continent: "South America", image: "/Images/yule4.jpeg" },
  { id: 47, name: "Festival del Mar", country: "Colombia", tradition: "Cultural", continent: "South America", image: "/Images/samhain1.jpeg" },
  { id: 48, name: "Tapati Rapa Nui", country: "Chile", tradition: "Cultural", continent: "South America", image: "/Images/samhain2.jpeg" },
  { id: 49, name: "Festival de Parintins", country: "Brazil", tradition: "Cultural", continent: "South America", image: "/Images/samhain3.jpeg" },
  { id: 50, name: "Yawar Fiesta", country: "Peru", tradition: "Cultural", continent: "South America", image: "/Images/samhain4.jpeg" },
];


const Gallery = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [filterType, setFilterType] = useState("tradition");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredFestivals = festivals.filter((f) => {
    const matchesSearch =
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.country.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || f[filterType] === filter;
    return matchesSearch && matchesFilter;
  });

  const filterOptions = [...new Set(festivals.map((f) => f[filterType]))];

  return (
    <div className="gallery-container">
      <h1>Festival Gallery</h1>

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search festivals or countries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="tradition">Tradition</option>
          <option value="country">Country</option>
          <option value="continent">Continent</option>
        </select>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          {filterOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Gallery Grid */}
      <div className="grid">
        {filteredFestivals.map((f) => (
          <div
            key={f.id}
            className="card"
            onClick={() => setSelectedImage(f)}
          >
            <div className="image-container">
              <img src={f.image} alt={f.name} />
              <div className="overlay">
                <h3>{f.name}</h3>
                <p>
                  {f.country} • {f.tradition}
                </p>
                <span>{f.continent}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setSelectedImage(null)}>
              &times;
            </span>
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="fullscreen-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;