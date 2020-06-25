package com.example.bankapp.bankservice.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

    @Column(name="acc_number")
    private String accNumber;

    @Column(name="deposit_amount")
    private Double depositAmount;


    @JsonBackReference
    @JsonIgnoreProperties(value="deposits")
    @ManyToOne
    @JoinColumn(name= "customer_id", nullable = false)
    private Customer customer;

    @JsonIgnoreProperties(value="deposits")
    @ManyToOne
    @JoinColumn(name= "account_id", nullable = false)
    private Account account;

    @JsonIgnoreProperties(value="deposits")
    @ManyToOne
    @JoinColumn(name= "saving_id", nullable = false)
    private Saving saving;

    public Deposit(String accHolderName, String accNumber, Double depositAmount, Customer customer, Account account, Saving saving){
        this.accHolderName = accHolderName;
        this.accNumber = accNumber;
        this.depositAmount = depositAmount;
        this.customer = customer;
        this.account = account;
        this.saving = saving;
    }

    public Deposit() {
    }

    public Saving getSaving() {
        return saving;
    }

    public void setSaving(Saving saving) {
        this.saving = saving;
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

    public String getAccNumber() {
        return accNumber;
    }

    public void setAccNumber(String accNumber) {
        this.accNumber = accNumber;
    }

    public Double getDepositAmount() {
        return depositAmount;
    }

    public void setDepositAmount(Double depositAmount) {
        this.depositAmount = depositAmount;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
