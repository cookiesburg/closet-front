pull sizes from user and shirt so you have two arrays with 8 elements each (arr1, arr2)

map one agianst the other arr1.map
  compare each set arr1[0], arr2[0]...
  take absolute value of the difference between them and add it to running total
  Math.abs(arr1[0] - arr2[0])

find value of user sizes combined and divide by runnig total
