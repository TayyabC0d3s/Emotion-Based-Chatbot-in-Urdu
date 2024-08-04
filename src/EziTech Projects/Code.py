def findNumber(n):
    
    firstfour = [1,2,3,4]
    sum = 0
    i = 0
    if(n < len(firstfour)):
        sum = firstfour[n]
    else:
        while(i<=n):
            for val in range(i, i+4):
                sum += firstfour[val]
            
            i += 1
            firstfour.append(sum)
            sum = 0
    
    return firstfour[n]            
            
            
result = findNumber(6)
print(result)