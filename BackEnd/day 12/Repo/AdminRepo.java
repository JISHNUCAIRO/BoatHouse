package com.example.boat.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.boat.Entity.Admin;


public interface AdminRepo extends JpaRepository<Admin,Integer>{
     Optional<Admin> findByName(String username);
}