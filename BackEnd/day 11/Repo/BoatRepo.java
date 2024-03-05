package com.example.boat.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.boat.Entity.Boat;

public interface BoatRepo extends JpaRepository<Boat,Integer> {

    
}
