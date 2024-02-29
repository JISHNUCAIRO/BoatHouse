package com.example.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class UserInfo {
    @Id
    private int id;
    private String uname;
    private String passwd;
    
    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public String getUname() {
        return this.uname;
    }
    
    public void setUname(String uname) {
        this.uname = uname;
    }
    
    public String getPasswd() {
        return this.passwd;
    }
    
    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }

    public UserInfo(int id, String uname, String passwd) {
        this.id = id;
        this.uname = uname;
        this.passwd = passwd;
    }
    
    
}