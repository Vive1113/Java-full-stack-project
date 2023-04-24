package com.example.FullstackProject.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.FullstackProject.Student.Student;

/* This Interface extends JpaRepository interface, so that
 *  @Repository is not needed to be annotated manually */
public interface Repository extends JpaRepository<Student, Integer>{
	List<Student> findByStudentNameContaining(String studentName);
	List<Student> findByStandard(Integer standard);

}
