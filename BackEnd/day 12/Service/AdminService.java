package com.example.boat.Service;

import com.example.boat.Entity.Admin;
import com.example.boat.Repo.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepo adminRepository;

    public Admin createAdmin(Admin admin) {
        return adminRepository.save(admin);
    }


    public Admin getAdminById(int id) {
        Optional<Admin> optionalAdmin = adminRepository.findById(id);
        return optionalAdmin.orElse(null);
    }

    public Admin updateAdmin(int id, Admin updatedAdmin) {
        Optional<Admin> optionalAdmin = adminRepository.findById(id);
        if (optionalAdmin.isPresent()) {
            updatedAdmin.setId(id);
            return adminRepository.save(updatedAdmin);
        } else {
            return null;
        }
    }

    
}
