package com.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Entity.Admin;

public interface AdminRepo extends JpaRepository<Admin,Integer> {
    
}
