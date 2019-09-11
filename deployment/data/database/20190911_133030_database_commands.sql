ALTER TABLE "myfirstmodule$entity" ADD "dectoadd" DECIMAL(28, 8) NULL;
UPDATE "myfirstmodule$entity"
 SET "dectoadd" = 32.01;
ALTER TABLE "myfirstmodule$entity" ADD "inttoadd" INT NULL;
UPDATE "myfirstmodule$entity"
 SET "inttoadd" = 10;
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('604cbbe6-0a3f-465c-a4fd-f43b6c537202', 
'e252ee30-2a25-41d9-a7ac-ac70d4945d49', 
'DecToAdd', 
'dectoadd', 
5, 
0, 
'32.01', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('43afaf01-dbcc-4a27-8b1f-01ea7b7c325b', 
'e252ee30-2a25-41d9-a7ac-ac70d4945d49', 
'IntToAdd', 
'inttoadd', 
3, 
0, 
'10', 
false);
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20190911 13:30:28';
