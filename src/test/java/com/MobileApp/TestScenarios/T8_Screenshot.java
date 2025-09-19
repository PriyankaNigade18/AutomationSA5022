package com.MobileApp.TestScenarios;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.io.FileHandler;
import org.testng.annotations.Test;

import com.MobileApp.Utility.DriverUtil;

import io.appium.java_client.AppiumDriver;

public class T8_Screenshot {
  @Test
  public void testScreenshot() throws IOException
  {
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  
	  TakesScreenshot ts=(TakesScreenshot)driver;
	 File temp= ts.getScreenshotAs(OutputType.FILE);
	  File dest=new File(System.getProperty("user.dir")+"//Screenshots//ApiDemos"+System.currentTimeMillis()+".png");
	  FileHandler.copy(temp,dest);
	  
	  
	  
	  
	  
	  
	  
  }
}
