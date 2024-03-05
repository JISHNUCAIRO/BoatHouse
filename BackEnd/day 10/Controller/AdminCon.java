package com.example.boat.Controller;

import com.example.boat.Entity.Admin;
import com.example.boat.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminCon {

    @Autowired
    private AdminService adminService;

    // @PostMapping
    // public ResponseEntity<Admin> createAdmin(@RequestBody Admin admin) {
    //     Admin createdAdmin = adminService.createAdmin(admin);
    //     return new ResponseEntity<>(createdAdmin, HttpStatus.CREATED);
    // }


    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable int id) {
        Admin admin = adminService.getAdminById(id);
        if (admin != null) {
            return new ResponseEntity<>(admin, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable int id, @RequestBody Admin admin) {
        Admin updatedAdmin = adminService.updateAdmin(id, admin);
        if (updatedAdmin != null) {
            return new ResponseEntity<>(updatedAdmin, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

   
}
