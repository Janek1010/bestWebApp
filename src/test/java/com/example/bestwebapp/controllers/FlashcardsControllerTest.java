package com.example.bestwebapp.controllers;

import com.example.bestwebapp.services.FlashcardService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(FlashcardsControllerTest.class)
class FlashcardsControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    FlashcardService flashcardService;

    @Test
    void getFlashCardByIdNotFound() throws Exception {

        given(flashcardService.findFlashcardById(any(UUID.class))).willReturn(Optional.empty());

        mockMvc.perform(get(FlashcardsController.FLASHCARDS_PATH_ID,UUID.randomUUID()))
                .andExpect(status().isNotFound());

    }

}