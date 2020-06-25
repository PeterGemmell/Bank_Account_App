package com.example.bankapp.bankservice.repositories;

import com.example.bankapp.bankservice.models.Saving;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavingRepository extends JpaRepository<Saving, Long> {
}
