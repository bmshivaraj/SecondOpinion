package org.shivaraj.project.model;

import org.springframework.data.repository.CrudRepository;

//class required to handle CRUD operations and any specific methods related to fetching data from DB
//public class ReportDataRepository {
public interface ReportDataRepository extends CrudRepository<Report, Integer>{

	//getAllReports();
	//getTopic(int id);
	//updateTopic(Report r);
	//delete Report(int id);
	
	//spring data jpa will provide implementations for these above type of generic data retrival methods... 
	//so make this class as interface as the implementation will come from spring data jpa
	
	public Report findByReportNumber(String reportNumber);
	
}
