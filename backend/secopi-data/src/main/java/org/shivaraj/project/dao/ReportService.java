package org.shivaraj.project.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.shivaraj.project.model.DoctorComment;
import org.shivaraj.project.model.Report;
import org.shivaraj.project.model.ReportDataRepository;
import org.shivaraj.project.model.ScanCopy;
import org.shivaraj.project.model.ScanCopyDataRepository;
import org.shivaraj.project.model.UserCommentDataRepository;
import org.shivaraj.project.model.DoctorCommentDataRepository;
import org.shivaraj.project.model.UserComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportService {
	
	@Autowired
	private ReportDataRepository reportDataRepository;
	
	@Autowired
	private UserCommentDataRepository userCommentRepository;
	
	@Autowired
	private DoctorCommentDataRepository doctorCommentRepository;
	
	@Autowired
	private ScanCopyDataRepository scanCopyDataRepository;

	
//	 	ArrayList<Report> reports = new ArrayList<Report>();
//		
//		Report r1 = new Report(1, "x-ray", "shivaraj1", "image1");
//		Report r2 = new Report(2, "x-ray", "shivaraj2", "image2");
//		Report r3 = new Report(3, "x-ray", "shivaraj3", "image3");
//		
	
		public List<Report> getAllReports()
		{
			
			//return reports;
			List<Report> reports = new ArrayList<>();
			reportDataRepository.findAll().forEach(reports::add);
			return reports;
		}
		
		
		public void addReport(Report report) {
			//System.out.println("report.id : "+report.getId());
			
			
			reportDataRepository.save(report);
			
			List<UserComment> userComments = report.getUserComments();
			for(UserComment userComment : userComments) {
				userComment.setReport(report);
				userCommentRepository.save(userComment);
			}
			
			List<DoctorComment> doctorComments = report.getDoctorComments();
			for(DoctorComment doctorComment : doctorComments) {
				doctorComment.setReport(report);
				doctorCommentRepository.save(doctorComment);
			}
			
			List<ScanCopy> scanCopies = report.getScanCopies();
			for(ScanCopy scanCopy : scanCopies) {
				scanCopy.setReport(report);
				scanCopyDataRepository.save(scanCopy);
			}
		}
		
		public void updateReport(Report report) {
			//System.out.println("report.id : "+report.getId());
			
			
			reportDataRepository.save(report);
			
			List<UserComment> userComments = report.getUserComments();
			for(UserComment userComment : userComments) {
				userComment.setReport(report);
				userCommentRepository.save(userComment);
			}
			
			List<DoctorComment> doctorComments = report.getDoctorComments();
			for(DoctorComment doctorComment : doctorComments) {
				doctorComment.setReport(report);
				doctorCommentRepository.save(doctorComment);
			}
			
			List<ScanCopy> scanCopies = report.getScanCopies();
			for(ScanCopy scanCopy : scanCopies) {
				scanCopy.setReport(report);
				scanCopyDataRepository.save(scanCopy);
			}
				
		}


		public Report findByReportNumber(String reportNumber) {
			return reportDataRepository.findByReportNumber(reportNumber);
			
		}


		
		
}
