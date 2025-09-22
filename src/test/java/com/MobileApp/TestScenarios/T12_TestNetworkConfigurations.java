package com.MobileApp.TestScenarios;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.MobileApp.Utility.AppUtil;
import com.MobileApp.Utility.DriverUtil;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class T12_TestNetworkConfigurations {
  @Test
  public void testWifi_MobileData_AirplaneMode() throws InterruptedException
  {
	  
	  //create driver session
	  AppiumDriver driver=DriverUtil.initAndroidDriverSession();
	  
	  /*
	   * Wifi: toggleWifi()
	   * mobiledata: toggleData()
	   * apirplaneMode: toggleAirplaneMode()
	   * 
	   */
	  System.out.println("Initial wifi setup is ON");
	  ((AndroidDriver)driver).toggleWifi();
	  System.out.println("After command wifi will OFF");

	  
	  WebElement area=driver.findElement(AppiumBy.id("com.android.systemui:id/qs_pager"));
	   //mobile data
	  //swipe left 
	  AppUtil.swipeLeft(driver,area);
	  System.out.println("Initial status for mobile data: ON");
	  
	  ((AndroidDriver)driver).toggleData();
	  
	  
	  System.out.println("After command it will OFF");
	  
	  //Off to on
	  
	  ((AndroidDriver)driver).toggleData();
	  
	  
	  //Thread.sleep(1500);
	  
	  //Airplane mode
	  System.out.println("By default Airplane mode is Off");
	  
	  ((AndroidDriver)driver).toggleAirplaneMode();
	  System.out.println("After command it will On");
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
