package com.marvel.joblisting.repository;

import com.marvel.joblisting.model.Post;

import java.util.List;

public interface SearchRepository {

    List<Post> findByText(String text);

}
