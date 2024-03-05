package com.example.boat.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.boat.Entity.UserInfo;
import com.example.boat.Service.UserServiceInfoMy;

@RestController
@RequestMapping("/api/users")
public class UserConMy {

    @Autowired
    private UserServiceInfoMy userService;

    // @PostMapping
    // public UserInfo createUser(@RequestBody UserInfo user) {
    //     return userService.createUser(user);
    // }

    
    @GetMapping("/get/{id}")
    public UserInfo getUser(@PathVariable("id") int id) {
        System.out.println("PLease Print");
        return userService.getUser(id);
    }

   
    @PutMapping("/up/{id}")
    public UserInfo updateUser(@PathVariable("id") int id, @RequestBody UserInfo user) {
        return userService.updateUser(id, user);
    }

    
    @DeleteMapping("/del/{id}")
    public void deleteUser(@PathVariable("id") int id) {
        userService.deleteUser(id);
    }
}
