package com.example.bestwebapp.services;

import com.example.bestwebapp.model.Flashcard;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface FlashcardService {
    List<Flashcard> findAllFlashcards();

    Flashcard saveNewFlashcard(Flashcard flashcard);

    Optional<Flashcard> findFlashcardById(UUID id);
}
