# prepare the database

Do the following as the root

```sql
create database shopdb;

create user shopper indentified by '@mypass';
use shopdb;
grant all privileges on shopdb to shopper;
grant all privileges on shopdb.* to shopper;
```