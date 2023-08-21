import React, { useState, useEffect } from "react";
//import { flashcardsMocks } from "../mocks/flashcardsMocks";
import { Box, Button, Card, Typography, CardContent } from "@mui/joy";

function AllFlashcardsView() {
  //comment the block if backend does not function
  const [flashcards, setFlashcards] = useState([]);
  useEffect(() => {
    async function fetchFlashcards() {
      try {
        const response = await fetch("http://localhost:8080/api/flashcards");
        if (response.ok) {
          const data = await response.json();
          setFlashcards(data);
        } else {
          console.error("Failed to fetch flashcards:", response.statusText);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchFlashcards();
  }, []);

  // This part is for testing on mocks when backend does not function
  // const flashcards = flashcardsMocks;

  const [showData, setShowData] = useState(false);

  const handleShowData = () => {
    setShowData(true);
  };

  const handleHideData = () => {
    setShowData(false);
  };

  return (
    <Box>
      {!showData ? (
        <Button id="show-data-btn" variant="contained" onClick={handleShowData}>
          Show
        </Button>
      ) : (
        <Box>
          <Button
            id="hide-data-btn"
            variant="contained"
            onClick={handleHideData}
          >
            Hide
          </Button>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {flashcards.map((flashcard, index) => (
              <Card
                color="neutral"
                variant="outlined"
                key={index}
                className="flashcard-element"
              >
                <CardContent orientation="vertical">
                  <Typography variant="h6">Name: {flashcard.name}</Typography>
                  <Typography variant="body1">
                    Description: {flashcard.description}
                  </Typography>
                  <Typography variant="body2">
                    Category: {flashcard.category}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default AllFlashcardsView;
