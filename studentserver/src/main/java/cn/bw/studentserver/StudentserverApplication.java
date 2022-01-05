package cn.bw.studentserver;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("cn.bw.studentserver.dao")
public class StudentserverApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudentserverApplication.class, args);
    }

}
