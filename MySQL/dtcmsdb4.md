```sql
SELECT * FROM dt_article WHERE category_id=13
SELECT id,title AS 头条,img_url 图片地址 FROM dt_article
SELECT title tit,seo_title seo标题,seo_keywords FROM dt_article 

SELECT * FROM dt_article WHERE add_time > '2020-01-01'

SELECT * FROM dt_article WHERE DATE(add_time) > '2020-01-01'

SELECT * FROM dt_article WHERE DATE(add_time) >= '2021-01-01'

SELECT * FROM dt_article WHERE add_time BETWEEN '2021-01-01' AND '2021-12-31'

SELECT * FROM dt_article WHERE seo_title LIKE '%田园%'

SELECT * FROM dt_article WHERE seo_title LIKE '田园%'-- 以田园开头。%代表有内容
SELECT * FROM dt_article WHERE seo_title LIKE '%田园'-- 以田园结尾

SELECT * FROM dt_article WHERE channel_id = 6 ORDER BY id LIMIT 0,10 -- 降序 desc 默认升序 asc

SELECT category_id FROM dt_article
SELECT category_id,count(*) FROM dt_article GROUP BY category_id

SELECT category_id,count(*) FROM dt_article GROUP BY category_id HAVING count(*)>= 3
SELECT category_id,count(*) num FROM dt_article GROUP BY category_id HAVING num>= 3

SELECT MIN(id) FROM dt_article
SELECT MAX(id) FROM dt_article

CREATE TABLE `dtcmsdb4`.`good`  (
  `id` int(0) NULL,
  `titlle` varchar(50) NULL,
  `good_price` varchar(200) NULL,
  `price` decimal(10, 2) NULL
);

SELECT * FROM dt_good

INSERT INTO dt_good (title,good_price,price) VALUES ("哈","321",2.0)

INSERT INTO a SELECT * FROM b -- a 表字段和b 表字段相同

-- 从一个表数据导入到另一个表

INSERT INTO dt_good (title,good_price,price) SELECT title1,good_price1,price1 FROM dt_good_copy -- 表格数据迁移

-- 跨数据库导入表格数据 前提用户两个表有权限
--  test数据库下有个表叫t_newgood 
-- dtcmsdb4数据库下有个表叫dt_good
-- 目的：将t_newgood重的数据导入到dt_good

INSERT INTO test.t_newgood (good_name,good_desc,price) SELECT title1,good_price1,price1 FROM dt_good_copy

UPDATE dt_good SET price = price+100 WHERE title = '手机'

UPDATE dt_good SET price = 9000 WHERE title = '平板电脑'

UPDATE dt_good SET price = price-500 WHERE good_desc LIKE '%华为%'

DELETE FROM dt_good WHERE id = 3 

DELETE FROM dt_good -- 自增长 数据库主键 删除完，会继续向上增加

TRUNCATE TABLE dt_good_copy --  效率更高 也是清空表 没有where条件  id主键会归零 不把单独的删除操作记录记入日志保存，删除行是不能恢复的

SELECT * FROM dt_good_copy

INSERT INTO t_department(name) VALUES ('人事处')

INSERT INTO t_employee(depart_id,name) VALUES (1,'叙稻尘')
INSERT INTO t_employee(depart_id,name) VALUES (2,'张三')


DELETE FROM t_department WHERE id = 1








```

