from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import db
from bson.json_util import dumps
from django.http import JsonResponse
@api_view(['GET'])
def get_players(request):
    return JsonResponse(dumps(list(db.get_players().find())), safe=False)

