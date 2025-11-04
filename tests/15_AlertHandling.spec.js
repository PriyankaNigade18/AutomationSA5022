
import {test,expect} from '@playwright/test'

test("Test Alerts in playwright:simpleAlert",async({page})=>{

    //open application
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //handling event
    page.on("dialog",async(dialog)=>{

        console.log("Alert Message is: "+dialog.message());
        //ok button:accept()
        await dialog.accept();
        console.log('Type of alert is: '+dialog.type());

             
    })


    //alert
    await page.getByText("Click for JS Alert").click();
    let result=await page.locator("#result").textContent();
    console.log(result);
    

    await page.waitForTimeout(2000);
})

test("Test Alerts in playwright:Confirmation Alert",async({page})=>{

    //open application
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //handling event
    page.on("dialog",async(dialog)=>{

        console.log("Alert Message is: "+dialog.message());
        //ok button:accept()
        //await dialog.accept();

        //cancel button: dismiss()
        await dialog.dismiss();

        console.log('Type of alert is: '+dialog.type());

             
    })


    //alert
    await page.getByText("Click for JS Confirm").click();
    let result=await page.locator("#result").textContent();
    console.log(result);
    

    await page.waitForTimeout(2000);
})


test.only("Test Alerts in playwright:prompt Alert",async({page})=>{

    //open application
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    //handling event
    page.on("dialog",async(dialog)=>{

        console.log("Alert Message is: "+dialog.message());
        console.log('Type of alert is: '+dialog.type());
        //prompt
        await dialog.accept("Hello All");
        
        //ok button:accept()
        //await dialog.accept();

        //cancel button: dismiss()
        //await dialog.dismiss();

        

             
    })


    //alert
    await page.getByText("Click for JS Prompt").click();
    let result=await page.locator("#result").textContent();
    console.log(result);
    

    await page.waitForTimeout(2000);
})