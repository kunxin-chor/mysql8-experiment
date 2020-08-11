from flask import Flask, render_template, request, redirect, url_for
import os
import pymysql

app = Flask(__name__)


conn = pymysql.connect(
    host='localhost',  # host is the IP or the URL to the server
    user='admin',
    password='password',
    database='classicmodels'
)


@app.route('/')
def home():
    cursor = conn.cursor(pymysql.cursors.DictCursor)
    cursor.execute("SELECT * FROM employees")
    return {
        'employees': list(cursor)
    }


# "magic code" -- boilerplate
if __name__ == '__main__':
    app.run(host='localhost',
            port=8080,
            debug=True)
