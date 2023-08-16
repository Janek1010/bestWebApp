import React, { useState } from 'react';
import { flashcardsMocks } from '../mocks/flashcardsMocks';

function FlashcardView({ data }) {

    data = flashcardsMocks; //change to API when it's ready
    const [showData, setShowData] = useState(false);

    const handleShowData = () => {
        setShowData(true);
    };

    const handleHideData = () => {
        setShowData(false);
    };

    return (
        <div>
            {!showData && (
                <button id="show-data-btn" onClick={handleShowData}>
                    Show
                </button>
            )}

            {showData && (
                <div>
                    <button id="hide-data-btn" onClick={handleHideData}>
                        Hide
                    </button>
                    <div id="show-flashcards">
                        {data.map((flashcard, index) => (
                            <div key={index} className="flashcard-element">
                                <p>name: {flashcard.name}</p>
                                <p>description: {flashcard.description}</p>
                                <p>category: {flashcard.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FlashcardView;