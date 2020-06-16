package com.example.bankapp.bankservice.repositories;

import com.example.bankapp.bankservice.models.Deposit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepositRepository extends JpaRepository<Deposit, Long> {
}
