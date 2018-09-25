package com.galvanize.worldsbestvideos.controllers;

import com.galvanize.worldsbestvideos.models.Video;
import com.galvanize.worldsbestvideos.repositories.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
class VideoController {

    @Autowired
    VideoRepository repository;

    @GetMapping("/api/videos")
    public List<Video> getVideoList() {
        return repository.findAll();
    }
}
