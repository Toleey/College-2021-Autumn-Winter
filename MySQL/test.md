```sql
/创建部门表/ 
CREATE TABLE dept( 
deptno INT PRIMARY KEY, 
dname VARCHAR(50), 
loc VARCHAR(50) 
);

/创建雇员表/ 
CREATE TABLE emp( 
empno INT PRIMARY KEY, 
ename VARCHAR(50), 
job VARCHAR(50), 
mgr INT, 
hiredate DATE, 
sal DECIMAL(7,2), 
COMM DECIMAL(7,2), 
deptno INT, 
CONSTRAINT fk_emp FOREIGN KEY(mgr) REFERENCES emp(empno) 
);

/创建工资等级表/ 
CREATE TABLE salgrade( 
grade INT PRIMARY KEY, 
losal INT, 
hisal INT 
);

/插入dept表数据/ 
INSERT INTO dept VALUES (10, '教研部', '北京'); 
INSERT INTO dept VALUES (20, '学工部', '上海'); 
INSERT INTO dept VALUES (30, '销售部', '广州'); 
INSERT INTO dept VALUES (40, '财务部', '武汉');

/插入emp表数据/ 
INSERT INTO emp VALUES (1009, '曾阿牛', '董事长', NULL, '2001-11-17', 50000, NULL, 10); 
INSERT INTO emp VALUES (1004, '刘备', '经理', 1009, '2001-04-02', 29750, NULL, 20); 
INSERT INTO emp VALUES (1006, '关羽', '经理', 1009, '2001-05-01', 28500, NULL, 30); 
INSERT INTO emp VALUES (1007, '张飞', '经理', 1009, '2001-09-01', 24500, NULL, 10); 
INSERT INTO emp VALUES (1008, '诸葛亮', '分析师', 1004, '2007-04-19', 30000, NULL, 20); 
INSERT INTO emp VALUES (1013, '庞统', '分析师', 1004, '2001-12-03', 30000, NULL, 20); 
INSERT INTO emp VALUES (1002, '黛绮丝', '销售员', 1006, '2001-02-20', 16000, 3000, 30); 
INSERT INTO emp VALUES (1003, '殷天正', '销售员', 1006, '2001-02-22', 12500, 5000, 30); 
INSERT INTO emp VALUES (1005, '谢逊', '销售员', 1006, '2001-09-28', 12500, 14000, 30); 
INSERT INTO emp VALUES (1010, '韦一笑', '销售员', 1006, '2001-09-08', 15000, 0, 30); 
INSERT INTO emp VALUES (1012, '程普', '文员', 1006, '2001-12-03', 9500, NULL, 30); 
INSERT INTO emp VALUES (1014, '黄盖', '文员', 1007, '2002-01-23', 13000, NULL, 10); 
INSERT INTO emp VALUES (1011, '周泰', '文员', 1008, '2007-05-23', 11000, NULL, 20); 
INSERT INTO emp VALUES (1001, '甘宁', '文员', 1013, '2000-12-17', 8000, NULL, 20);

/插入salgrade表数据/ 
INSERT INTO salgrade VALUES (1, 7000, 12000); 
INSERT INTO salgrade VALUES (2, 12010, 14000); 
INSERT INTO salgrade VALUES (3, 14010, 20000); 
INSERT INTO salgrade VALUES (4, 20010, 30000); 
INSERT INTO salgrade VALUES (5, 30010, 99990);


```



```sql
SELECT * FROM emp WHERE deptno = 30

1.查询出部门编号为30的所有员工 
SELECT * FROM emp WHERE deptno = 30

2.所有销售员的姓名、编号和部门编号。
SELECT ename,empno,deptno FROM emp WHERE job = '销售员'

3.找出奖金高于工资的员工。 
SELECT * FROM emp WHERE comm > sal

4.找出奖金高于工资60%的员工。 
SELECT * FROM emp WHERE comm > (sal*0.6)

5.找出部门编号为10中所有经理，和部门编号为20中所有销售员的详细资料。 
SELECT * FROM emp WHERE (deptno = 10 AND job = '经理') OR (deptno = 20 AND job = '销售员')

6.找出部门编号为10中所有经理，部门编号为20中所有销售员， 
还有即不是经理又不是销售员但其工资大或等于20000的所有员工详细资料。
SELECT * FROM emp WHERE (deptno = 10 AND job = '经理') OR (deptno = 20 AND job = '销售员') OR (job != '经理' AND job != '销售员' AND sal >= 20000 )
7.有奖金的工种。 
SELECT DISTINCT job FROM emp WHERE comm > 0. -- DISTINCT 去重
8.无奖金或奖金低于1000的员工。 
SELECT * FROM emp WHERE comm < 1000 OR comm  IS NULL 
SELECT * FROM emp WHERE IFNULL(comm,0)<1000 -- 属性如果是null就转换成0
9.查询名字由三个字组成的员工。
SELECT * FROM emp WHERE ename LIKE '___' -- 三个下划线
10.查询2000年入职的员工。 
SELECT * FROM emp WHERE YEAR(hiredate) = 2000
11.查询所有员工详细信息，用编号升序排序 
SELECT * FROM emp ORDER BY empno ASC
12.查询所有员工详细信息，用工资降序排序，如果工资相同使用入职日期升序排序 
SELECT * FROM emp ORDER BY sal DESC,hiredate ASC
13.查询每个部门的平均工资 
SELECT deptno,AVG(sal) FROM emp GROUP BY deptno
14.求出每个部门的雇员数量。 
SELECT deptno,COUNT(*) FROM emp GROUP BY deptno
15.查询每种工作的最高工资、最低工资、人数 
SELECT job,MAX(sal),MIN(sal),COUNT(*) FROM emp GROUP BY job
16.显示非销售人员工作名称以及从事同一工作雇员的月工资的总和，并且要满足从事同一工作的雇员的月工资合计大于50000，输出结果按月工资的合计升序排列 
SELECT job,SUM(sal) FROM emp WHERE job!='销售员' GROUP BY job HAVING SUM(sal) >50000 ORDER BY SUM(sal) ASC
17.查出至少有一个员工的部门。显示部门编号、部门名称、部门位置、部门人数。
SELECT 
		d.deptno 部门编号,d.dname 部门名称,d.loc 部门位置,COUNT(e.deptno) 部门人数 
FROM 
		emp e INNER JOIN dept d on e.deptno = d.deptno 
GROUP BY 
		e.deptno

SELECT e.deptno,dname,loc,COUNT(*) FROM dept d,emp e WHERE d.deptno = e.deptno GROUP BY deptno,dname,loc

SELECT e.deptno,dname,loc,COUNT(*) FROM dept d INNER JOIN emp e ON d.deptno = e.deptno GROUP BY deptno,dname,loc. -- 底层 where也是转为inner join用

18.列出受雇日期早于直接上级的所有员工的编号、姓名、部门名称。
SELECT a.empno,a.ename,a.deptno	FROM emp a,emp b WHERE a.hiredate<b.hiredate AND b.empno = a.mgr

SELECT a.empno,a.ename,a.deptno,c.dname	FROM emp a,emp b,dept c WHERE a.hiredate<b.hiredate AND b.empno = a.mgr AND a.deptno=c.deptno

SELECT a.empno,a.ename,a.deptno	FROM emp a INNER JOIN emp b ON b.empno = a.mgr WHERE a.hiredate<b.hiredate

SELECT a.empno,a.ename,a.deptno,d.dname	FROM emp a INNER JOIN emp b ON b.empno = a.mgr INNER JOIN dept d ON a.deptno = d.deptno
WHERE a.hiredate<b.hiredate
-- 谁的信息要全列出来，谁就是主表

19.列出部门名称和这些部门的员工信息，同时列出那些没有员工的部门。
SELECT * FROM dept a LEFT JOIN emp b ON a.deptno = b.deptno
SELECT * FROM dept a RIGHT JOIN emp b ON a.deptno = b.deptno

-- INNER JOIN 是取两个表的交集部分

20.列出所有文员的姓名及其部门名称，部门的人数。
SELECT e.ename,d.dname,COUNT(d.deptno) FROM emp e LEFT JOIN dept d ON e.deptno = d.deptno GROUP BY d.dname

SELECT ename,deptno FROM emp
SELECT deptno,COUNT(*) FROM emp GROUP BY deptno

SELECT a.ename,c.dname,b.num FROM (SELECT ename,deptno FROM emp) a, (SELECT deptno,COUNT(*) as num FROM emp GROUP BY deptno) b, dept c WHERE a.deptno = b.deptno AND a.deptno=c.deptno

21.列出最低薪金大于15000的各种工作及从事此工作的员工人数。
SELECT job,COUNT(*) FROM emp GROUP BY job HAVING MIN(sal)>15000
22.列出在销售部工作的员工的姓名，假定不知道销售部的部门编号。
SELECT ename FROM emp WHERE deptno = (SELECT deptno FROM dept WHERE dname = '销售部')
SELECT ename FROM emp e,dept d WHERE e.deptno=d.deptno AND d.dname='销售部'
SELECT ename FROM emp e INNER JOIN dept d ON e.deptno=d.deptno WHERE d.dname='销售部'
23.列出薪金高于公司平均薪金的所有员工信息，所在部门名称，上级领导，工资等级。
SELECT AVG(sal) FROM emp
SELECT * FROM emp WHERE sal >(SELECT AVG(sal) FROM emp)

SELECT e.*,d.dname,e2.ename FROM emp e,dept d,emp e2 
WHERE e.sal >(SELECT AVG(sal) FROM emp) AND e.deptno = d.deptno AND e.mgr = e2.empno

SELECT * FROM salgrade

SELECT e.empno,s.grade FROM emp e,salgrade s WHERE s.losal<=e.sal AND s.hisal>=e.sal

SELECT e.*,d.dname,e2.ename FROM emp e 
INNER JOIN dept d ON e.deptno = d.deptno
LEFT JOIN emp e2 ON e.mgr = e2.empno
WHERE e.sal >(SELECT AVG(sal) FROM emp)

SELECT a.*,b.grade FROM 
(SELECT e.*,d.dname,e2.ename lname FROM emp e INNER JOIN dept d ON e.deptno = d.deptno LEFT JOIN emp e2 ON e.mgr = e2.empno
WHERE e.sal >(SELECT AVG(sal) FROM emp)) a,
(SELECT e.empno,s.grade FROM emp e,salgrade s WHERE s.losal<=e.sal AND s.hisal>=e.sal) b
WHERE a.empno = b.empno

select a.*,b.dname,c.ename lname from 
emp a inner join dept b on a.deptno=b.deptno 
left join emp c on a.mgr=c.empno
inner join salgrade e
where a.sal>(select avg(sal) from emp) and e.losal<=a.sal and e.hisal>=a.sal
 

24.列出与庞统从事相同工作的所有员工及部门名称。

SELECT a.*,b.dname FROM emp a,dept b WHERE job = (SELECT job FROM emp WHERE ename = '庞统') AND a.deptno = b.deptno AND ename !='庞统'

25.列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金、部门名称。
SELECT ename,sal,b.dname FROM emp a,dept b WHERE a.deptno = b.deptno AND a.sal>(SELECT MAX(sal)FROM emp WHERE deptno = 30)

26.列出每个部门的员工数量、平均工资。
SELECT deptno,COUNT(*),AVG(sal) FROM emp GROUP BY deptno

子查询练习
1.查出至少有一个员工的部门。显示部门编号、部门名称、部门位置、部门人数。 

SELECT * FROM dept WHERE deptno IN (SELECT deptno FROM emp) 

SELECT deptno,COUNT(*) FROM emp GROUP BY deptno

select  a.deptno,a.dname,a.loc,count(*) from dept a, emp b where a.deptno=b.deptno  
group by a.deptno,a.dname,a.loc

2.列出薪金比关羽高的所有员工。
SELECT * FROM emp WHERE sal > (SELECT sal FROM emp WHERE ename = '关羽')

3.列出所有员工的姓名及其直接上级的姓名。 因为是查询所有员工,所以要用左连接,不能用内连接 
SELECT a.ename,b.ename FROM emp a,(SELECT * FROM emp) b WHERE a.mgr = b.empno
SELECT a.ename,b.ename FROM emp a LEFT JOIN (SELECT * FROM emp) b ON a.mgr = b.empno

4.列出受雇日期早于直接上级的所有员工的编号、姓名、部门名称。 
SELECT a.empno,a.ename,c.dname FROM emp a,(SELECT * FROM emp) b,dept c WHERE a.mgr = b.empno AND a.hiredate > b.hiredate AND a.deptno = c.deptno

多表查询
返回拥有员工的部门名、部门号 

工资水平多于关羽的员工信息 

返回员工和所属上司的姓名 

返回雇员的雇佣日期早于其上司雇佣日期的员工及其上司姓名 





```



```sql
DELETE FROM stu_score where 自动编号 NOT IN (select min(自动编号) from stu_score group by 学号, 姓名, 课程编号, 课程名称, 分数)

INSERT INTO 
select min(自动编号) from stu_score group by 学号, 姓名, 课程编号, 课程名称, 分数

SELECT * FROM ttt
DELETE FROM stu_score WHERE 自动编号  NOT IN (SELECT 自动编号 FROM ttt)

select a.name, b.name
from team a, team b 
where a.name < b.name  -- VARCHAR 类型也可以比较

SELECT a.AccID,COUNT(*) FROM 
(SELECT AccID,Occmonth,DebitOccur FROM testdb WHERE AccID != 101) a,(SELECT AccID,Occmonth,DebitOccur FROM testdb WHERE AccID != 101) b
WHERE a.Occmonth=b.Occmonth and a.DebitOccur>b.DebitOccur GROUP BY AccID HAVING COUNT(*) = 12

SELECT 
year,
(SELECT amount FROM sta WHERE month = 1 AND year = a.year) m1,
(SELECT amount FROM sta WHERE month = 2 AND year = a.year) m2,
(SELECT amount FROM sta WHERE month = 3 AND year = a.year) m3,
(SELECT amount FROM sta WHERE month = 4 AND year = a.year) m4 
FROM sta a GROUP BY year

SELECT 
name,
(SELECT Fraction FROM t_score WHERE subject = '语文' AND name = a.name ) Chinese,
(SELECT Fraction FROM t_score WHERE subject = '数学' AND name = a.name ) Math,
(SELECT Fraction FROM t_score WHERE subject = '英语' AND name = a.name ) English,
SUM(Fraction) Score 
FROM t_score a GROUP BY name
UNION ALL
SELECT  'Total',SUM(Chinese),SUM(Math),SUM(English),SUM(Score) FROM 
(SELECT 
name,
(SELECT Fraction FROM t_score WHERE subject = '语文' AND name = a.name ) Chinese,
(SELECT Fraction FROM t_score WHERE subject = '数学' AND name = a.name ) Math,
(SELECT Fraction FROM t_score WHERE subject = '英语' AND name = a.name ) English,
SUM(Fraction) Score
 FROM t_score a GROUP BY name) aaa

select name as 名字 ,
sum(if(Subject='语文',Fraction,0)) as 语文,
sum(if(Subject='数学',Fraction,0))as 数学, 
sum(if(Subject='英语',Fraction,0))as 英语,
SUM(Fraction) as 总分
from t_score group by name   



```

