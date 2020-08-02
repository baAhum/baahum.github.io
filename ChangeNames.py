import os
from PIL import Image


def resizeImage(imageLoc, size):
    im = Image.open(imageLoc)
    width, height = im.size

    # if (height<=size):
    #     print("Already sized")
    #     return
    im_resized = im.resize((int((width/height)*size),size), Image.ANTIALIAS)
    # print(width, height)
    im_resized.save(imageLoc, dpi=(600,600)) #height, width

def resizeImages():
    Marne_name = r".\MarneOnly"     #Max height 400px
    Marne_height = 400
    letters_name = r".\letters"     #Max height 500px
    letters_height = 500
    ind_photos = r".\photos"        #Max height 400px
    ind_height = 400

    for i in os.listdir(Marne_name):
        resizeImage(Marne_name + "\\" + i, Marne_height)

    for i in os.listdir(ind_photos):
        resizeImage(ind_photos + "\\" + i, ind_height)

    for i in os.listdir(letters_name):
        resizeImage(letters_name + "\\" + i, letters_height)


def RenamePhotos():
    dir_name = r".\MarneOnly"

    # counter = 1

    # for i in os.listdir(dir_name):
    #     if ("Marne_87" in i):
    #         counter+=1
    #         continue
    #     elif (counter==87):
    #         counter += 1
        
    #     os.rename(dir_name+"\\"+i, dir_name+"\\"+"Marne%s.png"%counter)
    #     counter+=1

    counter = 103
    for i in os.listdir(dir_name):
        if ("Marne_" in i):
            continue

        if ("Marne_87" in i):
            counter+=1
            continue
        elif (counter==87):
            counter += 1
        
        os.rename(dir_name+"\\"+i, dir_name+"\\"+"Marne_%s.png"%counter)
        counter+=1

    resizeImages()

# resizeImages()
RenamePhotos()