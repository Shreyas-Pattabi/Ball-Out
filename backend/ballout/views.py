from bson.json_util import dumps
from django.http import JsonResponse
from django.shortcuts import render
import pymongo
import sys
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import requests
from django.http import JsonResponse
import certifi

connection = 'mongodb+srv://spattabik:Z1QT1S7SOxDFoitO@ballout.njyrifj.mongodb.net/?retryWrites=true&w=majority&appName=BallOut'

client = MongoClient(connection, tlsCAFile=certifi.where())
db = client.Ballout

players = db['Players']

def get_players(request):
    return JsonResponse(dumps(list(players.find())), safe=False)

 