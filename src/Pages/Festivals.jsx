import React, { useState } from "react";
import festivalsData from "../Data/festivals.json";
import FestivalCard from "../Components/FestivalCard";
import FestivalPopup from "../Components/FestivalPopup";
import UpcomingFestivals from "../Components/UpcomingFestival";
import FestivalFeedbackForm from "../Components/FeedbackForm";
import FestivalFilter from "../Components/FestivalFilter";
import "../Styles/Festivals.css";
import FestivalStats from "../Components/FestivalStats";

function Festivals() {
  const [allFestivals] = useState(festivalsData);
  const [filteredFestivals, setFilteredFestivals] = useState(allFestivals);
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [filters, setFilters] = useState({
    location: "All",
    religion: "All",
    month: "All",
  });

  const openPopup = (festival) => {
    setSelectedFestival(festival);
  };

  const closePopup = () => {
    setSelectedFestival(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    let tempFestivals = [...allFestivals];

    // Apply Location Filter
    if (newFilters.location !== "All") {
      tempFestivals = tempFestivals.filter((festival) =>
        festival.details.location.includes(newFilters.location)
      );
    }

    // Apply Religion/Culture Filter
    if (newFilters.religion !== "All") {
      const religionFilter = newFilters.religion.toLowerCase();
      tempFestivals = tempFestivals.filter((festival) => {
        const celebratedBy = festival.details.celebrated_by.toLowerCase();

        if (religionFilter === "islam") {
          return (
            celebratedBy.includes("muslim") || celebratedBy.includes("islamic")
          );
        }
        if (religionFilter === "christianity") {
          return celebratedBy.includes("christian");
        }
        if (religionFilter === "hinduism") {
          return celebratedBy.includes("hindu");
        }
        if (religionFilter === "buddhism") {
          return celebratedBy.includes("buddhist");
        }
        if (religionFilter === "jewish") {
          return celebratedBy.includes("jewish");
        }
        if (religionFilter === "pagan") {
          return (
            celebratedBy.includes("pagan") || celebratedBy.includes("gaelic")
          );
        }
        if (religionFilter === "sikh") {
          return celebratedBy.includes("sikh");
        }
        if (religionFilter === "bahá'í") {
          return celebratedBy.includes("bahá'í");
        }
        if (religionFilter === "zoroastrianism") {
          return celebratedBy.includes("zoroastrian");
        }

        return false;
      });
    }

    // Apply Month Filter
    if (newFilters.month !== "All") {
      tempFestivals = tempFestivals.filter((festival) =>
        festival.details.date
          .toLowerCase()
          .includes(newFilters.month.toLowerCase())
      );
    }

    setFilteredFestivals(tempFestivals);
  };

  const upcomingFestivals = allFestivals.filter((festival) => {
    const today = new Date();
    // Simplified logic for an upcoming festival
    return (
      festival.id === "eid-al-adha" ||
      festival.id === "ashura" ||
      festival.id === "christmas" ||
      festival.id === "mabon"
    );
  });

  return (
    <div className="festivals-container">
      <FestivalStats />
      <FestivalFilter onFilterChange={handleFilterChange} />
      {/* <header className="header">
        <h1>Discover World Festivals</h1>
        <p>Strengthening cultural understanding through celebration</p>
      </header> */}
      <main className="festivals-grid">
        {filteredFestivals.length > 0 ? (
          filteredFestivals.map((festival) => (
            <FestivalCard
              key={festival.id}
              festival={festival}
              onClick={() => openPopup(festival)}
            />
          ))
        ) : (
          <p className="no-festivals-message">
            No festivals found for the selected filters.
          </p>
        )}
      </main>
      {selectedFestival && (
        <FestivalPopup festival={selectedFestival} onClose={closePopup} />
      )}
      <div className="side-by-side-cards">
        <UpcomingFestivals festivals={upcomingFestivals} />
        <FestivalFeedbackForm />
      </div>
    </div>
  );
}

export default Festivals;
