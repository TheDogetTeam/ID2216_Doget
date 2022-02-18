package com.native_project;


import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;

import java.io.File;
import java.util.Map;


public class Overview extends ReactContextBaseJavaModule {
    private DBHandler dbHandler;
    ReactApplicationContext reactContext;
 
    public Overview(ReactApplicationContext reactContext) {
        super(reactContext); //required by React Native
        Session_storage storage =  com.native_project.Session_storage.getInstance();
        dbHandler = new DBHandler(reactContext,storage.getUserData());
        this.reactContext = reactContext;
    }
 
    @Override
    //getName is required to define the name of the module represented in JavaScript
    public String getName() { 
        return "Overview";
    }
 
    @ReactMethod
    public void Sum(String name, String location, Callback callback) {
        int sum = 100;
        //System.out.println("[DEBUG] : Enter getSum");
        callBack.invoke(sum);
        // try {
        //     sum += dbHandler.getSum();
        //     dbHandler.loadAll();

        // } catch (IllegalViewOperationException e) {
        //     System.err.println(e.getMessage());
        // }
        //return sum;
    }
    
}
