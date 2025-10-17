package com.testlisteners;




import java.text.SimpleDateFormat;
import java.util.Date;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

public class ExtentManager 
{
public static ExtentReports extent;
	
	
	public static ExtentReports getInstance()
	{
		
		if(extent==null)
		{
			extent=createInstance();
			return extent;
		}
		else 
		{
			return extent;
		}
		
	}
	
   static String rname;
	public static ExtentReports createInstance()
	{
		 String timestamp=new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());
		   rname="RESTAPITestReport"+timestamp+".html";
		
		ExtentSparkReporter sparkReporter=new ExtentSparkReporter(System.getProperty("user.dir")+"/TestReports/"+rname);
		sparkReporter.config().setTheme(Theme.DARK);
		sparkReporter.config().setReportName("APITesteport");
		sparkReporter.config().setDocumentTitle("RESTAPI_Report");
	
		ExtentReports extent=new ExtentReports();
		extent.attachReporter(sparkReporter);
		
		return extent;
	}


}
