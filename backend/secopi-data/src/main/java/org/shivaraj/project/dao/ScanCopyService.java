package org.shivaraj.project.dao;

import java.util.ArrayList;
import java.util.List;


import org.shivaraj.project.model.ScanCopy;
import org.shivaraj.project.model.ScanCopyDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScanCopyService {

	
	@Autowired
	private ScanCopyDataRepository scanCopyDataRepository;
	
	public List<ScanCopy> getAllScanCopies(long id)
	{
		
		//return reports;
		List<ScanCopy> scanCopies = new ArrayList<>();
		scanCopyDataRepository.findAll().forEach(scanCopies::add);
		return scanCopies;
	}
	
	
	public void addScanCopy(ScanCopy scanCopy) {
		//System.out.println("report.id : "+report.getId());
		
		scanCopyDataRepository.save(scanCopy);
	}
	
}
