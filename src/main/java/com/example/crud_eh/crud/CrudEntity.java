package com.example.crud_eh.crud;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
@Entity
@Data
@Table(name = "EH_CRUD")
public class CrudEntity {
        @Id
        @Column(name = "ID", nullable = false)
        private String id;

        @Column(name ="NAME", nullable = false)
        private String name;

        @Column(name="EMAIL")
        private String email;

        @CreationTimestamp
        @Column(name = "CREATE_DATE")
        private Date createDt;

        @UpdateTimestamp
        @Column(name ="UPDATE_DATE")
        private Date updateDt;
    }

