package com.example.bestwebapp.services;

import com.example.bestwebapp.model.Flashcard;
import com.example.bestwebapp.repositories.FlashcardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Primary
@RequiredArgsConstructor
public class FlashcardServiceImpl implements FlashcardService {
    private final FlashcardRepository flashcardRepository;
    @Override
    public List<Flashcard> findAllFlashcards() {
        return flashcardRepository.findAll();
    }

    @Override
    public Flashcard saveNewFlashcard(Flashcard flashcard) {
        return flashcardRepository.save(flashcard);
    }

    @Override
    public Optional<Flashcard> findFlashcardById(UUID id) {
        return Optional.ofNullable(flashcardRepository.findById(id).orElse(null));
    }

    @Override
    public void deleteById(UUID id) {
        flashcardRepository.deleteById(id);
    }
}
