package com.galvanize.worldsbestvideos.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.galvanize.worldsbestvideos.models.Video;
import com.galvanize.worldsbestvideos.repositories.VideoRepository;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class WorldBestVideosControllerTest {
    @Autowired
    MockMvc mvc;

    @Autowired
    VideoRepository videoRepository;

    private ObjectMapper mapper = new ObjectMapper();

    @Before
    public void before() {
        videoRepository.deleteAll();
    }

    @After
    public void after() {
        videoRepository.deleteAll();
    }

    @Test
    public void shouldGetVideos() throws Exception {
        // Setup
        Video video = new Video("The Matrix");
        videoRepository.save(video);
        String expected = mapper.writeValueAsString(Arrays.asList(video));

        // Exercise
        String actual = mvc.perform(get("/api/videos"))
                .andExpect(status().isOk())
                .andReturn()
                .getResponse()
                .getContentAsString();

        // Assert
        Assert.assertEquals("should return videos", expected, actual);
    }
}
