package com.example.bankapp.bankservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="customer_name")
    private String customerName;

    @Column(name="account_type")
    private String accountType;

    @Column(name="account_no")
    private String accountNo;

    @Column(name="current_balance")
    private Double currentBalance;

    @JsonIgnoreProperties(value="accounts")
    @ManyToOne
    @JoinColumn(name= "customer_id", nullable = false)
    private Customer customer;


}
