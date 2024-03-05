package com.example.boat.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.boat.Entity.UserInfo;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
    Optional<UserInfo> findByName(String username);

}
 