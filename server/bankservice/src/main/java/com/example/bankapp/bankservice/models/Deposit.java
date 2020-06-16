package com.example.bankapp.bankservice.models;

import javax.persistence.*;

@Entity
@Table(name="deposits")
public class Deposit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


}
