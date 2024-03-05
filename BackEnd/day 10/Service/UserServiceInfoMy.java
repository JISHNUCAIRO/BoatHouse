package com.example.boat.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.boat.Entity.UserInfo;
import com.example.boat.Repo.UserInfoRepoMy;

@Service
public class UserServiceInfoMy {

    @Autowired
    private UserInfoRepoMy userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserInfo createUser(UserInfo user) {
        return userRepository.save(user);
    }


    public UserInfo getUser(int id) {
        System.out.println("Please");
        return userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with id: " + id));
    }

    public UserInfo updateUser(int id, UserInfo newUser) {
        UserInfo existingUser = userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with id: " + id));

        existingUser.setName(newUser.getName());
        existingUser.setEmail(newUser.getEmail());
        existingUser.setPassword(passwordEncoder.encode(existingUser.getPassword()));

        return userRepository.save(existingUser);
    }


    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
}
