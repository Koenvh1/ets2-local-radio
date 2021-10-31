import json
import os

class Favourites:
    def __init__(self, filename):
        self.filename = filename
        self.stored = {}

        self.load_from_file()

    def load_from_file(self):
        try:
            fd = open(self.filename, "r")
        except FileNotFoundError:
            # File doesn't exist, this is OK
            return
        except IOError:
            raise Exception("Could not open specified favourites save file!")

        txt = fd.read().strip()
        fd.close()

        if not txt:
            return

        try:
            self.stored = json.loads(txt)
        except json.JSONDecodeError:
            raise Exception("Corrupt favourites save file!")

    def save_to_file(self):
        try:
            os.rename(self.filename, self.filename + ".bak")
        except FileNotFoundError:
            pass
        
        try:
            fd = open(self.filename, "w")
        except IOError:
            raise Exception("Could not open specified favourites save file!")
        
        fd.write(json.dumps(self.stored))
        fd.close()
        
    def get_favourite(self, country):
        if country not in self.stored:
            return ""
    
        return self.stored[country]

    def set_favourite(self, country, station):
        self.stored[country] = station
        self.save_to_file()

    def remove_favourite(self, country, station):
        if self.stored[country] != station:
            return

        self.stored[country] == ""
        self.save_to_file()
