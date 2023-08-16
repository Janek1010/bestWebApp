import React, { useState } from 'react';
import { flashcardsMocks } from '../mocks/flashcardsMocks';
import { Box, Button, Card, Typography, CardContent, Stack } from '@mui/joy';

function FlashcardView() {

    const data = flashcardsMocks; //change to API when it's ready
    
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
                    <Button
                        id="show-data-btn"
                        variant="contained"
                        onClick={handleShowData}
                    >
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
                        <Stack id="show-flashcards"
                         direction="row"
                         spacing={2}
                         justifyContent="center"
                        >
                            {data.map((flashcard, index) => (
                                <Card color="neutral" variant="outlined" key={index} className="flashcard-element">
                                       <CardContent orientation="vertical">
                                    <Typography variant="h6">
                                        Name: {flashcard.name}
                                    </Typography>
                                    <Typography variant="body1">
                                        Description: {flashcard.description}
                                    </Typography>
                                    <Typography variant="body2">
                                        Category: {flashcard.category}
                                    </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    </Box>
                )}
        </Box>
    );
}

export default FlashcardView;