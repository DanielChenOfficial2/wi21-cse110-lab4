1. Prints prices.length - 1, since var ignores block scope

2. Prints prices[prices.length-1] * (1 - discount), since var ignores block scope

3. Prints (prices[length -1] * (1 - discount)) rounded to the nearest integer, since the declaration and assignment are both in scope of the function. 

4.
var discountedPrice = prices[0] * (1 - 0.5) -> 100 * 0.5 = 50
finalPrice = Math.round(50 * 100) / 100 -> 50 * 100 / 100 = 50
var discountedPrice = prices[1] * (1 - 0.5) -> 200 * 0.5 = 100
finalPrice = Math.round(100 * 100) / 100 -> 100 * 100 / 100 = 100
var discountedPrice = prices[2] * (1 - 0.5) -> 300 * 0.5 = 150
finalPrice = Math.round(150 * 100) / 100 -> 150 * 100 / 100 = 150
discounted = [50, 100, 150]

5. Error, i is out of scope (only lives in for loop)

6. Error, discountedPirce is out of scope (only lives in for loop)

7. Still prints (prices[length -1] * (1 - discount)) rounded to the nearest integer, since the declaration and assignment are both in scope of the function. 

8. [50, 150, 150]
Same deal as 4. The calculations inside the for loop are still in scope for discounted and finalPrice variables, so there is no error and the function works as intended. 

9. error, i is out of scope (only lives in for loop)

10. error, discountedPrice is out of scope (only lives in for loop)

11. assuming the program doesn't crash on trying to rassign finalPrice inside the for loop, prints prices[length - 1] * (1 - discount))

12. again, assuming program doesn't crash on reassigning finalPrice in the for loop, prints out [50, 100, 150]. 

13A. student.name
B. student['Grad Year']
C. student.greeting()
D. student['Favorite Teacher'].name
E. (student.courseload)[0]

14A. '32', 2 is assumed to be a string concatenated to '3' (+ assumed to be concatenation instead of integer addition)
B. 1, 3 is assumed to be integer. 
C. 3, null assumed to be integer 0. 
D. '3null', null assumed to be string (+ assumed to be concatenation)
E. 4, true assumed to be integer 1
F. 0, false and null both assumed to be integer 0. 
G. '3undefined', undefined assumed to be string
H. NaN, undefined assumed to be integer (so not a number, cannot subtract from converted integer 3)

15A. true, '2' assumed to be integer 2. So 2 > 1 is true. 
B. false, 1 comes before 2 lexographically, so 2 < 1 is false. 
C. true, '2' assumed to be integer 2, so 2 = 2 is true. 
D. false, 2 and '2' are different types. 
E. false, boolean is converted to 1 and 1 == 2 is false. 
F. true, Boolean(2) is converted to true, and true === true is true. 

16. === compares without type conversion wherease == compares with type conversion. 

17. true assumed to be integer 1, so 2 == 1 returns false. 2 converted to boolean is true (since not 0), so 'How are you?' is printed. 

18. 

19. [6, 8, 10]
On num[0], or 1: callback on doSomething returns 3, then 3 * 2 is pushed to the array, so 6.
On num[1], or 2: callback on doSomething returns 4, then 4 * 2 is pushed to the array, so 8.
On num[2], or 3: callback on doSomething returns 5, then 5 * 2 is pushed to the array, so 10. 

20.

21. 
1
4
3
2
