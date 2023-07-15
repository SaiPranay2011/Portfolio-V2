def convert( s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        string = ""
        step1= (numRows - 1)*2
        step2 = 0
        for i in range(numRows):
            if i < len(s):
                string += s[i]
            j = i
            while (j < len(s)):
                j += step1
                if(step1 and j < len(s)):
                    string += s[j]
                j += step2
                if(step2 and j < len(s)):
                    string += s[j]
            step1 -= 2
            step2 += 2
        return string
print(convert("PAYPALISHIRING",4))