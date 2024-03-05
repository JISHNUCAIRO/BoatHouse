package com.example.boat.DTO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.boat.Entity.UserInfoMy;

public interface UserInfoDTOMy extends JpaRepository<UserInfoMy,Integer>{
    
}