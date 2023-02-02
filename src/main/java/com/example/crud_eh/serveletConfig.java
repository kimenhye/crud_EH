package com.example.crud_eh;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import java.io.IOException;

@Configuration
public class serveletConfig {
    @Bean
    public ServletRegistrationBean getServletRegistrationBean() throws IOException {
        ServletRegistrationBean websquareDispatcher = new ServletRegistrationBean(new websquare.http.DefaultRequestDispatcher());

        System.setProperty("WEBSQUARE_HOME", getWebSquareHomePath());
        websquareDispatcher.addUrlMappings("*.wq");
        return websquareDispatcher;
    }
    @Bean
    public JdbcTemplate jdbcTemplate(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }

    @Bean
    public String getWebSquareHomePath() throws IOException {
        ClassPathResource classPathResource = new ClassPathResource("websquare_home");
        String websquareHomePath = classPathResource.getURL().getPath();

        return websquareHomePath;
    }

    @SpringBootApplication
    public static class CrudEhApplication {
        public static void main(String[] args) {
            SpringApplication.run(CrudEhApplication.class, args);

        }
    }
}

