package com.example.bestwebapp.controllers;

import com.example.bestwebapp.model.Flashcard;
import com.example.bestwebapp.services.FlashcardService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class FlashcardsController {
    private final String FLASHCARDS_PATH = "/api/flashcards";
    private final FlashcardService flashcardService;

    @GetMapping(FLASHCARDS_PATH)
    public List<Flashcard> getFlashcards() {
        return flashcardService.findAllFlashcards();
    }
    @PostMapping(FLASHCARDS_PATH)
    public ResponseEntity createFlashcard(@RequestBody Flashcard flashcard) {
        Flashcard savedFlashcard = flashcardService.saveNewFlashcard(flashcard);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", FLASHCARDS_PATH +"/"+ savedFlashcard.getUuid().toString());
        return new ResponseEntity(headers, HttpStatus.CREATED);
    }
    // find by id
    @GetMapping(FLASHCARDS_PATH + "/{id}")
    public Flashcard getFlashcardById(@PathVariable("id") UUID id) throws ChangeSetPersister.NotFoundException {
        return flashcardService.findFlashcardById(id).orElseThrow(ChangeSetPersister.NotFoundException::new);
        //dodac potem implementacje NotFoundException wlasna
    }


}
