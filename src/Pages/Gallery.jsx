import React, { useState, useEffect } from "react";
import festivalsData from "../Data/festivals.json";
import GalleryCard from "../Components/GalleryCard"; // New component
import "../styles/Gallery.css";
import Layout from "../Components/Layout";

const Gallery = () => {
  const [filterType, setFilterType] = useState("all");
  const [filter, setFilter] = useState("All");
  const [filteredFestivals, setFilteredFestivals] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Process the festival data to include only the first image
  const festivals = festivalsData.map((festival) => ({
    id: festival.id,
    name: festival.name,
    country: festival.details.location,
    tradition: festival.details.celebrated_by,
    continent: "Worldwide",
    image: festival.gallery_images[0], // Use only the first image
    description: festival.short_description,
  }));

  useEffect(() => {
    // Media query to check for mobile screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let tempFestivals = festivals;

    if (filterType === "all" && filter === "All") {
      tempFestivals = festivals;
    } else if (filterType === "all" && filter !== "All") {
      tempFestivals = festivals.filter(
        (f) =>
          f.name.toLowerCase().includes(filter.toLowerCase()) ||
          f.country.toLowerCase().includes(filter.toLowerCase()) ||
          f.tradition.toLowerCase().includes(filter.toLowerCase()) ||
          f.continent.toLowerCase().includes(filter.toLowerCase())
      );
    } else if (filterType === "name" && filter !== "All") {
      tempFestivals = festivals.filter((f) =>
        f.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else if (filterType === "country" && filter !== "All") {
      tempFestivals = festivals.filter((f) =>
        f.country.toLowerCase().includes(filter.toLowerCase())
      );
    } else if (filterType === "tradition" && filter !== "All") {
      tempFestivals = festivals.filter((f) =>
        f.tradition.toLowerCase().includes(filter.toLowerCase())
      );
    } else if (filterType === "continent" && filter !== "All") {
      tempFestivals = festivals.filter((f) =>
        f.continent.toLowerCase().includes(filter.toLowerCase())
      );
    }

    // Limit the number of images if it's a mobile view
    if (isMobile && tempFestivals.length > 28) {
      setFilteredFestivals(tempFestivals.slice(0, 28));
    } else {
      setFilteredFestivals(tempFestivals);
    }
  }, [filterType, filter, isMobile]);

  const filterOptions =
    filterType === "country"
      ? [...new Set(festivals.map((f) => f.country))]
      : filterType === "tradition"
      ? [...new Set(festivals.map((f) => f.tradition))]
      : filterType === "continent"
      ? [...new Set(festivals.map((f) => f.continent))]
      : [];

  return (
    <Layout>
      <div className="gallery-container">
        <h1>Gallery</h1>
        <p>Explore breathtaking moments from festivals around the globe</p>

        {/* Search & Filter Controls */}
        <div className="controls">
          <input
            type="text"
            placeholder="Search all..."
            value={filterType === "all" ? filter : ""}
            onChange={(e) => {
              setFilterType("all");
              setFilter(e.target.value);
            }}
          />
          <select
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
              setFilter("All");
            }}
          >
            <option value="all">Filter By...</option>
            <option value="name">Name</option>
            <option value="country">Country</option>
            <option value="continent">Continent</option>
            <option value="tradition">Tradition</option>
          </select>
          {filterType !== "all" && (
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="secondary-select"
            >
              <option value="All">All</option>
              {filterOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid">
          {filteredFestivals.length > 0 ? (
            filteredFestivals.map((f, index) => (
              <GalleryCard
                key={index}
                image={f.image}
                name={f.name}
                country={f.country}
                tradition={f.tradition}
                continent={f.continent}
                onClick={() => setSelectedImage(f)}
              />
            ))
          ) : (
            <p className="no-festivals-message">
              No festivals found matching your criteria.
            </p>
          )}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={() => setSelectedImage(null)}>
                &times;
              </span>
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="fullscreen-image"
              />
              <div className="details">
                <h3>{selectedImage.name}</h3>
                <p>
                  {selectedImage.country} • {selectedImage.tradition}
                </p>
                <p className="description">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
