import os

for net in os.listdir("../nets"):
    exec(open("../nets/" + net).read())
