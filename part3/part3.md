The bug was that the inputted integers were treated as strings, so string concatentation instead of integer addition was occuring. I'd typecast num1 and num2 by passing 
them to Number. 
So: change let result = num1 + num2 to let result = Number(num1) + Number(num2). (screenshot in folder as fix.png)

1. citylots.json
2. part2.js
3. 11.7 MB
4. 1.14 seconds
5. Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Mobile Safari/537.36
6. 1.1 vegur
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData()
