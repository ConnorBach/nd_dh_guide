import os
from selenium import webdriver
from bs4 import BeautifulSoup
url = 'https://dining.nd.edu/locations-menus/south-dining-hall/'
web = webdriver.Chrome("/Applications/chromedriver")
web.get(url)
html = web.page_source
web.quit()

soup = BeautifulSoup(html, "html5lib")
raw_food = soup.find_all("span", class_="menu-item-name")

food = []
for span in raw_food:
        food.append(span.getText())
target = open('food.txt', 'a+')

newFood = input('Do you want to add any foods? (y/n) ')
if(newFood == "y"):
    eachFood = ""
    while(eachFood != "n"):
        eachFood = input('Enter food: (n to stop) ')
        if eachFood != "n":
            target.write(eachFood+"\n")
target.close()

target = open('food.txt', 'r')
with target as f:
        myFoods = f.readlines()
myFoods = [x.strip() for x in myFoods]
target.close()

finalFoods = []
for eachFood in myFoods:
    for menuItem in food:
        if(eachFood == menuItem):
            finalFoods.append(eachFood)
finalFoods = list(set(finalFoods))
print('The dining hall has these foods today: ')
for eachFood in finalFoods:
    print(eachFood + "\n")
