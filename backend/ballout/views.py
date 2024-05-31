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
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
connection = 'mongodb+srv://spattabik:Z1QT1S7SOxDFoitO@ballout.njyrifj.mongodb.net/?retryWrites=true&w=majority&appName=BallOut'

client = MongoClient(connection, tlsCAFile=certifi.where())
db = client.Ballout

players = db['Players']
users   = db['Users']

defaultID = ''



def get_free_players(request):
    if request.method == "GET":
        return JsonResponse(dumps(list(players.find({'user_id': defaultID}))), safe=False)
    return None

def draft_player(request, player_id):
    if request.method == "PUT":
        players.update_one({'player_id': player_id}, {'user_id': request.session['user_id']})
        return True
    return False

@csrf_exempt
def create_user(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get('user')
        password = data.get('pass')
        if users.find_one({'user_id': username}):
            return HttpResponse('Username already exists')
    users.insert_one({'user_id': username, 'password': password})
    return HttpResponse('Account successfully created')

@csrf_exempt
def login(request):
    data = json.loads(request.body)
    username = data.get('user')
    password = data.get('pass')
    user = users.find_one({'user_id': username, 'password': password})
    if user:
        request.session['user_id'] = user['user_id']
        print(request.session['user_id'])
        return HttpResponse('Login Successful')
    return HttpResponse('Login Failed')

def get_current_user(request):
    user_id = request.session['user_id']
    if request.method == "GET" and user_id:
        return user_id
    return None
        

