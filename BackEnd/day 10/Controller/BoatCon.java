package com.example.boat.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.boat.Entity.Boat;
import com.example.boat.Service.BoatService;

import java.util.List;

@RestController
@RequestMapping("/api/boats")
public class BoatCon {

    @Autowired
    private BoatService boatService;

    @PostMapping("/put")
    public ResponseEntity<Boat> createBoat(@RequestBody Boat boat) {
        Boat createdBoat = boatService.createBoat(boat);
        return new ResponseEntity<>(createdBoat, HttpStatus.CREATED);
    }
    @GetMapping("/getal")
    public ResponseEntity<List<Boat>> getAllBoats() {
        List<Boat> boats = boatService.getAllBoats();
        return new ResponseEntity<>(boats, HttpStatus.OK);
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<Boat> getBoatById(@PathVariable int id) {
        Boat boat = boatService.getBoatById(id);
        if (boat != null) {
            return new ResponseEntity<>(boat, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Boat> updateBoat(@PathVariable int id, @RequestBody Boat boat) {
        Boat updatedBoat = boatService.updateBoat(id, boat);
        if (updatedBoat != null) {
            return new ResponseEntity<>(updatedBoat, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/delboat/{id}")
    public ResponseEntity<Void> deleteBoat(@PathVariable int id) {
        boolean deleted = boatService.deleteBoat(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}