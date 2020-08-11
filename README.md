[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/kunxin-chor/mysql8-experiment)

# mysql8-experiment

This is an expeiriment to install MySQL 8 and get it work with `pymysql` and `mysqljs`. 

As MySQL8 uses a different default method of authentication from MySQl 5+, this cause 
the boilerplate code in most tutorials not to work.

This is done via by creating a user using the native password plugin:

```
CREATE USER 'admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

And being sure to grant all rights and privileges to that user.

```
GRANT PRIVILEGE ON database.table TO 'admin'@'localhost';
```