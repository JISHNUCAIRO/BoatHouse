package com.Service;

import com.example.Entity.Boat;
import com.Repo.BoatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BoatService {

    @Autowired
    private BoatRepo boatRepository;

    public Boat createBoat(Boat boat) {
        return boatRepository.save(boat);
    }

    public List<Boat> getAllBoats() {
        return boatRepository.findAll();
    }

    public Boat getBoatById(int id) {
        Optional<Boat> optionalBoat = boatRepository.findById(id);
        return optionalBoat.orElse(null);
    }

    public Boat updateBoat(int id, Boat boat) {
        Optional<Boat> optionalBoat = boatRepository.findById(id);
        if (optionalBoat.isPresent()) {
            boat.setId(id);
            return boatRepository.save(boat);
        } else {
            return null;
        }
    }

    public boolean deleteBoat(int id) {
        Optional<Boat> optionalBoat = boatRepository.findById(id);
        if (optionalBoat.isPresent()) {
            boatRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
