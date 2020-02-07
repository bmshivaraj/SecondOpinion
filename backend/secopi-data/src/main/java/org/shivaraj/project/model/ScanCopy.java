package org.shivaraj.project.model;

import java.util.Optional;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class ScanCopy {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id", updatable = false, nullable = false)
	private long id;
	
	private String scanImage;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="report_id")
	private Report report;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getScanImage() {
		return scanImage;
	}

	public void setScanImage(String scanImage) {
		this.scanImage = scanImage;
	}

	@JsonIgnore
	public Report getReport() {
		return report;
	}

	public void setReport(Report report2) {
		this.report = report2;
	}


	
	
	
}
