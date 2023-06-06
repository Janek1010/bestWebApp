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

        flashcardRepository.save(Flashcard.builder().name("Wielki Odpoczynek").category(Type.POLISH).description("Okres relaksu po ciężkiej pracy.").build());
        flashcardRepository.save(Flashcard.builder().name("Smakowita Kolacja").category(Type.POLISH).description("Wykwintne danie podane wieczorem.").build());
        flashcardRepository.save(Flashcard.builder().name("Wzorowy Uczeń").category(Type.POLISH).description("Osoba, która osiąga wysokie wyniki w nauce.").build());
        flashcardRepository.save(Flashcard.builder().name("Złota Jesień").category(Type.POLISH).description("Piękna pora roku, charakteryzująca się złocistymi liśćmi na drzewach.").build());
        flashcardRepository.save(Flashcard.builder().name("Magiczna Chwila").category(Type.POLISH).description("Niepowtarzalny moment pełen czarującej atmosfery.").build());
        flashcardRepository.save(Flashcard.builder().name("Wspaniała Przygoda").category(Type.POLISH).description("Niezwykłe doświadczenie pełne ekscytacji i emocji.").build());
        flashcardRepository.save(Flashcard.builder().name("Mistrzowski Ruch").category(Type.POLISH).description("Doskonałe wykonanie pewnego ruchu lub manewru.").build());
        flashcardRepository.save(Flashcard.builder().name("Słoneczne Wakacje").category(Type.POLISH).description("Okres urlopu spędzany w ciepłym i słonecznym miejscu.").build());
        flashcardRepository.save(Flashcard.builder().name("Złoty Środek").category(Type.POLISH).description("Optymalne rozwiązanie lub kompromis między dwoma skrajnościami.").build());
        flashcardRepository.save(Flashcard.builder().name("Doskonały Koncert").category(Type.POLISH).description("Wyjątkowe wykonanie muzyczne, które zachwyca słuchaczy.").build());

    }
}
