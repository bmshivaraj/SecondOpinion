package org.shivaraj.project.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "report_db")
public class Report {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "report_id", updatable = false, nullable = false)
	private long reportId;
	
	private String reportNumber;
	private String reportTitle;
	private String referenceDoctor;
	private String visitDate;
	//private String patientComment;
	//private String secOpiComment;
	
	@OneToMany(mappedBy="report")
	private List<UserComment> userComments = new ArrayList<UserComment>();
	
	@OneToMany(mappedBy="report")
	private List<DoctorComment> doctorComments = new ArrayList<DoctorComment>();
	
	@OneToMany(mappedBy="report")
	private List<ScanCopy> scanCopies = new ArrayList<ScanCopy>();
	
	
	
	public long getId() {
		return reportId;
	}
	public List<UserComment> getUserComments() {
		return userComments;
	}
	public void setUserComments(List<UserComment> userComments) {
		this.userComments = userComments;
	}
	public List<DoctorComment> getDoctorComments() {
		return doctorComments;
	}
	public void setDoctorComments(List<DoctorComment> doctorComments) {
		this.doctorComments = doctorComments;
	}
	public void setId(long id) {
		this.reportId = id;
	}
	public String getReportNumber() {
		return reportNumber;
	}
	public void setReportNumber(String reportNumber) {
		this.reportNumber = reportNumber;
	}
	public String getReportTitle() {
		return reportTitle;
	}
	public void setReportTitle(String reportTitle) {
		this.reportTitle = reportTitle;
	}
	public String getReferenceDoctor() {
		return referenceDoctor;
	}
	public void setReferenceDoctor(String referenceDoctor) {
		this.referenceDoctor = referenceDoctor;
	}

	public String getVisitDate() {
		return visitDate;
	}
	public void setVisitDate(String visitDate) {
		this.visitDate = visitDate;
	}

	public List<ScanCopy> getScanCopies() {
		return scanCopies;
	}
	public void setScanCopies(List<ScanCopy> scanCopies) {
		this.scanCopies = scanCopies;
	}
	 
	
	
	
}
