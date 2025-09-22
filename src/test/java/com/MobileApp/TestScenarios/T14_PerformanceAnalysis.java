package com.MobileApp.TestScenarios;

import java.util.List;

import org.testng.annotations.Test;

import com.MobileApp.Utility.DriverUtil;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class T14_PerformanceAnalysis {
  @Test
  public void testPerformanceparameters() 
  {
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  List<String> dataTypes=((AndroidDriver)driver).getSupportedPerformanceDataTypes();
	  System.out.println(dataTypes);
	  //[cpuinfo, memoryinfo, batteryinfo, networkinfo]
	  
	  //package name for application
	  
	  System.out.println("Application package name:"+((AndroidDriver)driver).getCurrentPackage());
	  
	 List<List<Object>> batteryData=((AndroidDriver)driver).getPerformanceData("io.appium.android.apis","batteryinfo",5);
	  System.out.println("Battery Info: "+batteryData);
	  System.out.println("-------------------------");
	  List<List<Object>> memoryData=((AndroidDriver)driver).getPerformanceData("io.appium.android.apis","memoryinfo",5);
	  System.out.println("Memory Info: "+memoryData);
	  System.out.println("-------------------------");
	  List<List<Object>> networkData=((AndroidDriver)driver).getPerformanceData("io.appium.android.apis","networkinfo",5);
	  System.out.println("Network Info: "+networkData);
	  
	  
	  
	  
	  
	  
  }
}
