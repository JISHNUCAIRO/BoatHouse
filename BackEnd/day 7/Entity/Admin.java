package com.example.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Admin {
    @Id
    private int id;
    private String aname;
    private String pass;

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAname() {
        return this.aname;
    }

    public void setAname(String aname) {
        this.aname = aname;
    }

    public String getPass() {
        return this.pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public Admin(int id, String aname, String pass) {
        this.id = id;
        this.aname = aname;
        this.pass = pass;
    }
}

   
