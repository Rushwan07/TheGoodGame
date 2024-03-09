import React, { useEffect, useState } from "react";

const Cards = ({ searchData }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("https://api.punkapi.com/v2/beers", {});
      const json = await response.json();

      if (response.ok) {
        setCards(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <>
      {searchData.length ? (
        <div className="container d-flex flex-wrap mt-5" style={{ gap: 5 }}>
          {searchData &&
            searchData.map((card) => (
              <div
                className="card mb-3"
                style={{ maxWidth: 540 }}
                key={card.id}
              >
                <div className="row g-0">
                  <div
                    className="col-md-4 text-center mt-2"
                    style={{ maxHeight: "100px", objectFit: "cover" }}
                  >
                    <img
                      src={card.image_url}
                      style={{ height: "30vh", overflow: "hidden" }}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title" style={{ cursor: "pointer" }}>
                        {card.name}
                      </h5>
                      <h6 className="card-title">{card.tagline}</h6>
                      <p className="card-text">{card.description}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          {card.first_brewed}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="container d-flex flex-wrap mt-5" style={{ gap: 5 }}>
          {cards &&
            cards.map((card) => (
              <div
                className="card mb-3"
                style={{ maxWidth: 540 }}
                key={card.id}
              >
                <div className="row g-0">
                  <div
                    className="col-md-4 text-center mt-2"
                    style={{ maxHeight: "100px", objectFit: "cover" }}
                  >
                    <img
                      src={card.image_url}
                      style={{ height: "30vh", overflow: "hidden" }}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title" style={{ cursor: "pointer" }}>
                        {card.name}
                      </h5>
                      <h6 className="card-title">{card.tagline}</h6>
                      <p className="card-text">{card.description}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          {card.first_brewed}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Cards;
