CREATE TABLE IF NOT EXISTS "Admin"(
        "Username"	TEXT,
        "Password"	TEXT
);

CREATE TABLE IF NOT EXISTS "Company"(
		"ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        "company_name"	TEXT,
        "company_api_key"	TEXT
);

CREATE TABLE IF NOT EXISTS "Location"(
		"location_id" INTEGER NOT NULL PRIMARY KEY,
		"company_id" INTEGER,
        "location_name"	TEXT,
        "location_country"	TEXT,
		"location_city"	TEXT,
		FOREIGN KEY("company_id") REFERENCES "Company"("ID")
);

CREATE TABLE IF NOT EXISTS "Sensor"(
		"location_id" INTEGER,
        "sensor_id"	INTEGER,
        "sensor_name"	TEXT,
		"sensor_category"	TEXT,
		"sensor_meta"	TEXT,
		"sensor_api_key" TEXT,
		PRIMARY KEY("sensor_id" AUTOINCREMENT),
		FOREIGN KEY("location_id") REFERENCES "Location"("location_id")
);

CREATE TABLE IF NOT EXISTS "Sensor_data"(
        "sensor_id"	INTEGER,
        time timestamp default (strftime('%s', 'now')),
		"variable1"	TEXT,
        "variable2"	TEXT,
		FOREIGN KEY("sensor_id") REFERENCES "Sensor"("sensor_id")
);