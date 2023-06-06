package com.example.bestwebapp.bootstrap;

import com.example.bestwebapp.model.Flashcard;
import com.example.bestwebapp.model.Type;
import com.example.bestwebapp.repositories.FlashcardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class BootstrapData implements CommandLineRunner {
    private final FlashcardRepository flashcardRepository;
    @Override
    public void run(String... args) throws Exception {
        flashcardRepository.save(Flashcard.builder().name("name1").category(Type.POLISH).description("ciułałą").build());
        flashcardRepository.save(Flashcard.builder().name("name2").category(Type.POLISH).description("bejbebejbe").build());
    }
}
