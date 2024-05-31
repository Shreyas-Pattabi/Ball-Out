from django.shortcuts import render
import pymongo
import sys
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import requests
from django.http import JsonResponse
import certifi
from bson import ObjectId
# Create your views here.
connection = 'mongodb+srv://spattabik:Z1QT1S7SOxDFoitO@ballout.njyrifj.mongodb.net/?retryWrites=true&w=majority&appName=BallOut'

client = MongoClient(connection, tlsCAFile=certifi.where())
db = client.Ballout

players = db['Players']

def get_players():
   return players

def updateData():
   try:
       players.drop()
   except pymongo.errors.OperationFailure:
       print("Failed")
       sys.exit(1)

   header = {
       "Host": "stats.nba.com",   
       "Connection": "keep-alive",
       "Pragma": "no-cache",
       "Cache-Control": "no-cache",
       "Accept": "application/json, text/plain, */*",
       "x-nba-stats-token": "true",
       "X-NewRelic-ID": "VQECWF5UChAHUlNTBwgBVw==",
       "DNT": "1",
       "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
       "x-nba-stats-origin": "stats",
       "Sec-Fetch-Site": "same-origin",
       "Sec-Fetch-Mode": "cors",
       "Referer": "https://stats.nba.com/teams/traditional/?sort=TEAM_NAME&dir=-1",
       "Accept-Encoding": "gzip, deflate, br",
       "Accept-Language": "en-US;q=0.9,en;q=0.7",
   }
   rosterUrl = "https://stats.nba.com/stats/playerindex?College=&Country=&DraftPick=&DraftRound=&DraftYear=&Height=&Historical=1&LeagueID=00&Season=2023-24&SeasonType=Playoffs&TeamID=0&Weight="
   response = requests.get(rosterUrl, headers=header).json()['resultSets'][0]['rowSet']

   playerData = {}

   for player in response:
       playerData[player[0]] = {'first_name': player[2], 'last_name': player[1], 'city': player[7], 'team': player[8], 'position': player[11], 'height': player[12], 'weight-lbs': player[13]}

   statsUrl = "https://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&ISTRound=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2023-24&SeasonSegment=&SeasonType=Regular%20Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=&Weight="
   response = requests.get(statsUrl, headers=header).json()['resultSets'][0]['rowSet']

   fantasyList = []

   for player in response:
       player_id = player[0]
       fantasyList.append({'player_id': player_id,
                           'image_url': 'https://cdn.nba.com/headshots/nba/latest/260x190/' + str(player_id) + '.png',
                           'first_name': playerData[player_id]['first_name'],
                           'last_name': playerData[player_id]['last_name'],
                           'city': playerData[player_id]['city'],
                           'team': playerData[player_id]['team'],
                           'position': playerData[player_id]['position'],
                           'height': playerData[player_id]['height'],
                           'weight': playerData[player_id]['weight-lbs'],
                           'rebounds': player[22],
                           'assists': player[23],
                           'turnovers': player[24],
                           'steals': player[25],
                           'blocks': player[26],
                           'points': player[30],
                           'fantasy_pts': player[32],
                           'user_id': ''
                           })

   fantasyList.sort(key=lambda score: score['fantasy_pts'], reverse=True)

   for i in range(len(fantasyList)):
       fantasyList[i]['rank'] = i + 1
       if i + 1 <= 20:
           fantasyList[i]['cost'] = 0.2
       elif i + 1 <= 40:
           fantasyList[i]['cost'] = 0.15
       elif i + 1 <= 70:
           fantasyList[i]['cost'] = 0.1
       elif i + 1 <= 100:
           fantasyList[i]['cost'] = 0.05
       else:
           fantasyList[i]['cost'] = 0.02

   try:
       result = players.insert_many(fantasyList)
   except pymongo.errors.OperationFailure:
       print("Write Failed")

# print(type(players.find_one({'first_name': 'Luka'})['_id']))

updateData()

