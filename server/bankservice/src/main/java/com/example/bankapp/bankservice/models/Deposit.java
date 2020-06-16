package com.example.bankapp.bankservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="deposits")
public class Deposit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="acc_holder_name")
    private String accHolderName;

    @Column(name="date")
    private LocalDate date;

    @Column(name="acc_number")
    private String accNumber;

    @Column(name="deposit_amount")
    private Integer depositAmount;

    @JsonIgnoreProperties(value="deposits")
    @ManyToOne
    @JoinColumn(name= "customer_id", nullable = false)
    private Customer customer;

    @ManyToMany
    @JoinTable(
            name = "deposits_accounts",
            joinColumns = {@JoinColumn(name="deposit_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="account_id", nullable = false, updatable = false)}
    )

    private List<Account> accounts;


    public Deposit(String accHolderName, String accNumber, Integer depositAmount, Customer customer){
        this.accHolderName = accHolderName;
        this.accNumber = accNumber;
        this.date = LocalDate.now();
        this.depositAmount = depositAmount;
        this.customer = customer;
        this.accounts = new ArrayList<>();

    }

    public Deposit() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAccHolderName() {
        return accHolderName;
    }

    public void setAccHolderName(String accHolderName) {
        this.accHolderName = accHolderName;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getAccNumber() {
        return accNumber;
    }

    public void setAccNumber(String accNumber) {
        this.accNumber = accNumber;
    }

    public Integer getDepositAmount() {
        return depositAmount;
    }

    public void setDepositAmount(Integer depositAmount) {
        this.depositAmount = depositAmount;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Account> getAccounts() {
        return accounts;
    }

    public void setAccounts(List<Account> accounts) {
        this.accounts = accounts;
    }
}
