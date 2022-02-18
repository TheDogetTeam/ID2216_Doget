package com.native_project;

//https://www.geeksforgeeks.org/how-to-create-and-add-data-to-sqlite-database-in-android/

import static android.content.Context.MODE_PRIVATE;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import java.util.HashMap;
import java.util.Map;

public class DBHandler extends SQLiteOpenHelper {

    // creating a constant variables for our database.
    // below variable is for our database name.
    private static final String DB_NAME = "userdb.db";

    // below int is our database version
    private static final int DB_VERSION = 1;

    // below variable is for our table name.
    private String TABLE_NAME;

    // below variable is for our id column.
    private static final String ID_COL = "id";

    // below variable is for our course name column
    private static final String ARTICLE_COL = "Article";

    // below variable id for our course duration column.
    private static final String PRICE_COL = "Price";

    // below variable for our course description column.
    private static final String SHOP_COL = "Shop";

    // below variable is for our course tracks column.
    private static final String DATE_COL = "Date";

    private static final String CITY_COL = "City";

    // creating a constructor for our database handler.
    public DBHandler(Context context,String table_name) {
        super(context, DB_NAME, null, DB_VERSION);
        TABLE_NAME = table_name;

    }

    // below method is for creating a database by running a sqlite query
    @Override
    public void onCreate(SQLiteDatabase db) {
        // on below line we are creating
        // an sqlite query and we are
        // setting our column names
        // along with their data types.
        String query = "CREATE TABLE " + TABLE_NAME + " ("
                + ID_COL + " INTEGER PRIMARY KEY AUTOINCREMENT, "
                + ARTICLE_COL + " TEXT,"
                + PRICE_COL + " TEXT,"
                + SHOP_COL + " TEXT,"
                + DATE_COL + " TEXT,"
                + CITY_COL + " TEXT)";

        // at last we are calling a exec sql
        // method to execute above sql query
        db.execSQL(query);
    }

    // this method is use to add new course to our sqlite database.
    public void addNewEntryToDB(String article, String price, String shop, String date, String city) {

        // on below line we are creating a variable for
        // our sqlite database and calling writable method
        // as we are writing data in our database.
        SQLiteDatabase db = this.getWritableDatabase();

        // on below line we are creating a
        // variable for content values.
        ContentValues values = new ContentValues();

        // on below line we are passing all values
        // along with its key and value pair.
        values.put(ARTICLE_COL, article);
        values.put(PRICE_COL, price);
        values.put(SHOP_COL, shop);
        values.put(DATE_COL, date);
        values.put(CITY_COL, city);

        // after adding all values we are passing
        // content values to our table.
        db.insert(TABLE_NAME, null, values);

        // at last we are closing our
        // database after adding database.
        db.close();
    }
public void loadAll(){
        SQLiteDatabase db = this.getReadableDatabase();
        Cursor resultSet = db.rawQuery("Select * from " + TABLE_NAME, null);
        resultSet.moveToFirst();

        while (resultSet.isAfterLast() == false) {
            if ((resultSet != null) && (resultSet.getCount() > 0)) {
                Map<String, String> dictionary = new HashMap<String, String>();
                dictionary.put("article", resultSet.getString(resultSet.getColumnIndex(ARTICLE_COL)));
                dictionary.put("price", resultSet.getString(resultSet.getColumnIndex(PRICE_COL)));
                dictionary.put("shop", resultSet.getString(resultSet.getColumnIndex(SHOP_COL)));
                dictionary.put("date", resultSet.getString(resultSet.getColumnIndex(DATE_COL)));
                dictionary.put("city", resultSet.getString(resultSet.getColumnIndex(CITY_COL)));
                System.out.println("[DEBUG] LOAD ALL: "+ dictionary.toString() + "||");

            }
            resultSet.moveToNext();
        }

    }


    public Map<String, String> loadEntryFromDB(int id) {
        SQLiteDatabase db = this.getReadableDatabase();
        Cursor resultSet = db.rawQuery("Select * from " + TABLE_NAME +" where id= "+id+"", null);
        resultSet.moveToFirst();

        Map<String, String> dictionary = new HashMap<String, String>();
        dictionary.put("article", resultSet.getString(resultSet.getColumnIndex(ARTICLE_COL)));
        dictionary.put("price", resultSet.getString(resultSet.getColumnIndex(PRICE_COL)));
        dictionary.put("shop", resultSet.getString(resultSet.getColumnIndex(SHOP_COL)));
        dictionary.put("date", resultSet.getString(resultSet.getColumnIndex(DATE_COL)));
        dictionary.put("city", resultSet.getString(resultSet.getColumnIndex(CITY_COL)));

        if (!resultSet.isClosed())  {
            resultSet.close();
        }

        return dictionary;
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        // this method is called to check if the table exists already.
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME);
        onCreate(db);
    }
}
