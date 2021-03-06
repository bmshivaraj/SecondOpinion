package org.shivaraj.project.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "userComment")
public class UserComment {


	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "user_comment_id", updatable = false, nullable = false)
	private long userCommentId;
	
	String userComment;

	public String getUserComment() {
		return userComment;
	}

	public void setUserComment(String userComment) {
		this.userComment = userComment;
	}
	
	@JsonIgnore
	@ManyToOne()
	@JoinColumn(name="report_id")
	private Report report;

	public long getId() {
		return userCommentId;
	}

	public void setId(long id) {
		this.userCommentId = id;
	}

	public Report getReport() {
		return report;
	}

	public void setReport(Report report) {
		this.report = report;
	}
	
}
