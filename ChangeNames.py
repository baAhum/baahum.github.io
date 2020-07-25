import os

dir_name = r".\MarneOnly"

counter = 1

for i in os.listdir(dir_name):
    if ("Marne_87" in i):
        counter+=1
        continue
    elif (counter==87):
        counter += 1
    
    os.rename(dir_name+"\\"+i, dir_name+"\\"+"Marne%s.png"%counter)
    counter+=1

counter = 1
for i in os.listdir(dir_name):
    if ("Marne_87" in i):
        counter+=1
        continue
    elif (counter==87):
        counter += 1
    
    os.rename(dir_name+"\\"+i, dir_name+"\\"+"Marne_%s.png"%counter)
    counter+=1
# aa = """
# <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_70.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_24.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_31.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_88.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_25.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_80.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_44.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_62.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_49.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_27.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_35.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_55.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_29.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_18.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_7.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_12.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_84.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_21.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_30.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_72.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_48.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_1.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_59.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>
#       <div class="MarneMemories" style="background-image: url(&quot;./MarneOnly/Marne_77.png&quot;);"><img class="letterPhoto" src="./MarneOnly/Marne_87.png" alt="Italian Trulli"></div>"""

# b = aa.split('background-image: url(&quot;./MarneOnly/Marne_')[1:]

# c = [int(i.split('.')[0]) for i in b]

# print(c)