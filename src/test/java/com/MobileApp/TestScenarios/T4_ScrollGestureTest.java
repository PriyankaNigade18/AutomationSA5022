package com.MobileApp.TestScenarios;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import com.MobileApp.Utility.AppUtil;
import com.MobileApp.Utility.DriverUtil;
import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;

public class T4_ScrollGestureTest {
  @Test
  public void testScroll() throws InterruptedException 
  {
	  
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  //click on Views
	  driver.findElement(AppiumBy.accessibilityId("Views")).click();
	  
	  //get the page area
	  WebElement pageArea=driver.findElement(AppiumBy.id("android:id/list"));
	  
	  //down
	  AppUtil.scrollDown(driver,pageArea);
	  
	  Thread.sleep(2000);
	  
	  //up
	  AppUtil.scrollUp(driver,pageArea);
	  
	 // AppUtil.scrollDownUptoCount(driver,pageArea,3);
	  
	  /*
	  //scroll
	  
	  driver.executeScript("mobile:scrollGesture",ImmutableMap.of(
			  "elementId",((RemoteWebElement)pageArea).getId(),
			  "direction","down",
			  "percent",0.1
			    ));
	  
	  
	  */
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
