package com.MobileApp.CreateSession;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.Test;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

public class DriverSessionUsingDesiredCapabilitiesClass {
  @Test
  public void testAppiumDriverSession() throws MalformedURLException, URISyntaxException
  {
	  
	  //set the capabilities for android platform
	  DesiredCapabilities cap=new DesiredCapabilities();
	  cap.setCapability("platformName","Android");
	  cap.setCapability("appium:automationName","Uiautomator2");
	  cap.setCapability("appium:udid","emulator-5554");
	  cap.setCapability("appium:deviceName","pixel_9");
	  
	  String path=System.getProperty("user.dir")+"//src//test//resources//ApiDemos-debug.apk";
	  cap.setCapability("appium:app",path);
	  
	  
	  //appium server address
	  URL serverUrl=new URI("http://0.0.0.0:4723").toURL();
	  
	  
	  //create appium driver session AppiumDriver is class
	  AppiumDriver driver=new AndroidDriver(serverUrl,cap);
	  System.out.println("Session id is: "+driver.getSessionId());
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
