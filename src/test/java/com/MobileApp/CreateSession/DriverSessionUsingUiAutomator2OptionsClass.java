package com.MobileApp.CreateSession;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

import org.testng.annotations.Test;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;

public class DriverSessionUsingUiAutomator2OptionsClass {
  @Test
  public void createDriverSession() throws MalformedURLException, URISyntaxException
    {
	  //set capabilities
	  UiAutomator2Options cap=new UiAutomator2Options();
	  String path=System.getProperty("user.dir")+"//src//test//resources//ApiDemos-debug.apk";
	  cap.setCapability("appium:app",path);
	  
	  //server address to create session
	  URL serverUrl=new URI("http://0.0.0.0:4723").toURL();
	  
	  //create appiumdriver session for Android platform
	  AppiumDriver driver=new AndroidDriver(serverUrl,cap);
	  System.out.println("Session id is: "+driver.getSessionId());
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
