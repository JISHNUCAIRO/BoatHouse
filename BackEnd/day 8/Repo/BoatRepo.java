package com.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Entity.Boat;

public interface BoatRepo extends JpaRepository<Boat,Integer>{
    
}
