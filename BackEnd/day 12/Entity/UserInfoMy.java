package com.example.boat.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Setter
@Getter
public class UserInfoMy {
    @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String uname;
    private String passwd;
  
}