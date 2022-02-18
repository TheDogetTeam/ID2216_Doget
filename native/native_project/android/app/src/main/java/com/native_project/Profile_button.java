package com.native_project;


        import static android.content.Context.MODE_PRIVATE;

        import android.database.sqlite.SQLiteDatabase;

        import com.facebook.react.bridge.ReactApplicationContext;
        import com.facebook.react.bridge.ReactContextBaseJavaModule;
        import com.facebook.react.bridge.Callback;
        import com.facebook.react.bridge.ReactMethod;
        import com.facebook.react.uimanager.IllegalViewOperationException;

public class Profile_button extends ReactContextBaseJavaModule {
    ReactApplicationContext reactContext;


    public Profile_button(ReactApplicationContext reactContext) {
        super(reactContext); //required by React Native
        this.reactContext = reactContext;


    }

    @Override
    //getName is required to define the name of the module represented in JavaScript
    public String getName() {
        return "profile_button";
    }

    @ReactMethod
    public void addDBTable(String name) {
        try {
            Session_storage storage =  com.native_project.Session_storage.getInstance();
            storage.setUserData(name);

            DBHandler dbHandler = new DBHandler(reactContext,storage.getUserData());
            dbHandler.addNewEntryToDB("start","start","start","start","start");
        } catch (IllegalViewOperationException e) {
            System.err.println(e.getMessage());
        }
    }

}
