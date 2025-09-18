package com.MobileApp.Utility;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;

public class DriverUtil
{
	public static AppiumDriver driver;

	public static AppiumDriver initAndroidDriverSession()
	{
		//set capabilities
		  UiAutomator2Options cap=new UiAutomator2Options();
		  String path=System.getProperty("user.dir")+"//src//test//resources//ApiDemos-debug.apk";
		  cap.setCapability("appium:app",path);
		  
		  //server address to create session
		  URL serverUrl;
		try {
			serverUrl = new URI("http://0.0.0.0:4723").toURL();
			//create appiumdriver session for Android platform
			  driver=new AndroidDriver(serverUrl,cap);
			  System.out.println("Session id is: "+driver.getSessionId());
		} catch (MalformedURLException | URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		  
		return driver;
		  
		  
		  
	}
		  
	
	
	
	
	
	
	
	
}
