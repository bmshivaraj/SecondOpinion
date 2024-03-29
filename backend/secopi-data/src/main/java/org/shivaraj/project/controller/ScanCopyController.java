package org.shivaraj.project.controller;

import java.util.List;
import java.util.Optional;

import org.shivaraj.project.dao.ReportService;
import org.shivaraj.project.dao.ScanCopyService;
import org.shivaraj.project.model.Report;
import org.shivaraj.project.model.ScanCopy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ScanCopyController {

	@Autowired
	private ScanCopyService scanCopyService;
	
	@Autowired
	private ReportService reportService;
	
	
	@RequestMapping("/reports/{id}/ScanCopies")
	public  List<ScanCopy> getAllScanCopies(@PathVariable long id)
	{
		return scanCopyService.getAllScanCopies(id);
	}

	/*@RequestMapping(method=RequestMethod.POST, value="/reports/{reportNumber}/scancopy")
	public void addScanCopy(@PathVariable Integer reportNumber, @RequestBody ScanCopy scanCopy)
	{
		
		Optional<Report> report = reportService.findByReportNumber(reportNumber);
		scanCopy.setReport(report);
		scanCopyService.addScanCopy(scanCopy);
		
	}*/

	
}
