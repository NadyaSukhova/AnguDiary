import mysql.connector
import eel
eel.init('web')

@eel.expose
def AccountsDB():
  mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="admin",
    database="diary"
  )


  mycursor = mydb.cursor()

  mycursor.execute("SELECT * FROM account")

  myresult = mycursor.fetchall()
  return myresult