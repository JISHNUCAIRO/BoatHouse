package com.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Entity.UserInfo;

public interface UserInfoRepo extends JpaRepository<UserInfo,Integer>{
    
}
